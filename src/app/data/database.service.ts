import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, Subscriber, take } from 'rxjs';
import { LoggerService } from '../logger.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private readonly version: number = 1;
  private db: Subject<IDBDatabase> = new ReplaySubject(1);

  constructor(private readonly logger: LoggerService) {
    if (!indexedDB) {
      this.db.complete();
    } else {
      this.logger.debug(`DatabaseService: Requesting Open of DB 'Restaurants' with version ${this.version}`);

      const openRequest: IDBRequest = indexedDB.open('restaurants', this.version);
      openRequest.onerror = error => {
        this.logger.error('DatabaseService: Open error', error);

        this.db.error(error);
        this.db.complete();
      }

      openRequest.addEventListener('upgradeneeded', (event: any) => {
        this.logger.debug('DatabaseService: Upgrade Needed');
        const db: IDBDatabase = event.target?.result;

        if (!db.objectStoreNames.contains('restaurants')) {
          db.createObjectStore('restaurants', { keyPath: 'id', autoIncrement: true });
        }
      });

      openRequest.onsuccess = (event: any) => {
        this.logger.debug('DatabaseService: Open Success');

        const db: IDBDatabase = event.target.result;
        this.db.next(db);
      }
    }
  }

  create<T>(storeName: string, value: T): Observable<number> {
    this.logger.debug(`DatabaseService: Create ${storeName}`, value);
    return new Observable((subscriber: Subscriber<number>) => {
      this.db.pipe(take(1)).subscribe((db: IDBDatabase) => {
        const transaction: IDBTransaction = db.transaction(storeName, 'readwrite');
        transaction.oncomplete = this.transactionOnComplete.bind(this);
        transaction.onerror = this.transactionOnError.bind(this);

        const objectStore: IDBObjectStore = transaction.objectStore(storeName);
        const request = objectStore.add(value);
        request.onsuccess = (event: any) => {
          this.logger.debug('DatabaseService: Create Success', event);
          subscriber.next(event.target.result);
          subscriber.complete();
        }
      });
    });
  }

  read<T>(storeName: string, key: number): Observable<T> {
    this.logger.debug(`DatabaseService: Read ${storeName} ${key}`);
    return new Observable((subscriber: Subscriber<T>) => {
      this.db.pipe(take(1)).subscribe((db: IDBDatabase) => {
        const transaction: IDBTransaction = db.transaction(storeName);
        transaction.oncomplete = this.transactionOnComplete.bind(this);
        transaction.onerror = this.transactionOnError.bind(this);

        const objectStore: IDBObjectStore = transaction.objectStore(storeName);
        const request = objectStore.get(key);
        request.onsuccess = (event: any) => {
          this.logger.debug('DatabaseService: Read Success', event);
          subscriber.next(event.target.result);
          subscriber.complete();
        }
      })
    });
  }

  list<T>(storeName: string): Observable<T[]> {
    this.logger.debug(`DatabaseService: List ${storeName}`);
    return new Observable((subscriber: Subscriber<T[]>) => {
      this.db.pipe(take(1)).subscribe((db: IDBDatabase) => {
        const transaction: IDBTransaction = db.transaction(storeName);
        transaction.oncomplete = this.transactionOnComplete.bind(this);
        transaction.onerror = this.transactionOnError.bind(this);

        const objectStore: IDBObjectStore = transaction.objectStore(storeName);
        const request = objectStore.getAll();
        request.onsuccess = (event: any) => {
          this.logger.debug('DatabaseService: List Success', event);
          subscriber.next(event.target.result);
          subscriber.complete();
        }
      })
    });
  }

  private transactionOnComplete(event: Event) {
    this.logger.debug('DatabaseService: Transaction Complete', event);
  }

  private transactionOnError(error: Event) {
    this.logger.error('DatabaseService: Transaction Error', error);
  }
}
