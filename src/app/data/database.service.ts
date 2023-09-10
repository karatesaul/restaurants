import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject, Subscriber, take, throwError } from 'rxjs';
import { LoggerService } from '../logger.service';
import Dexie, { Table } from "dexie";
import { Restaurant } from '../types/restaurant.type';

export class Db extends Dexie {
  restaurants!: Table<Restaurant, number>;

  constructor(version: number) {
    super('restaurants');
    this.version(version).stores({
      restaurants: '++id'
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public version: number = 1;
  public db: Db

  constructor(private readonly logger: LoggerService) {
    this.db = new Db(this.version);
  }
}
