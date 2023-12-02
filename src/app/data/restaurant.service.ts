import { Injectable } from '@angular/core';
import { EMPTY, Observable, from, map } from 'rxjs';
import LoggerService from '../logger.service';
import { Restaurant } from '../types/restaurant.type';
import DatabaseService from './database.service';

@Injectable({
  providedIn: 'root'
})
export default class RestaurantService {

  constructor(
    private readonly database: DatabaseService,
    private readonly logger: LoggerService
  ) { }

  public create(payload: Restaurant): Observable<number> {
    this.logger.debug('RestaurantService: Create', payload);

    return from(this.database.db.restaurants.add(payload));
  }

  public read(id: number): Observable<Restaurant | undefined> {
    this.logger.debug('RestaurantService: Read', id);

    return from(this.database.db.restaurants.get(id));
  }

  public list(): Observable<Restaurant[]> {
    this.logger.debug('RestaurantService: List');

    return from(this.database.db.restaurants.toArray());
  }

  public search(): Observable<Restaurant[]> {
    this.logger.log('Search: Empty Stub for now.');
    return EMPTY;
  }

  public randomSearch(): Observable<Restaurant | undefined> {
    this.logger.debug('RestaurantService: RandomSearch');
    return from(this.database.db.restaurants.toArray()).pipe(
      map((randomlySorted: Restaurant[]) => {
        if (randomlySorted.length === 0) {
          this.logger.debug('RestaurantService: RandomSearch: No Restaurants Found.');

          return undefined;
        }

        const index: number = Math.floor(Math.random() * randomlySorted.length);
        this.logger.debug('RestaurantService: RandomSearch: Index:', index);

        return randomlySorted[index];
      })
    );
  }

  public update(_r: Restaurant): Observable<void> {
    this.logger.log('Update: Empty Stub for now.');
    return EMPTY;
  }

  public delete(id: number): Observable<void> {
    this.logger.debug('RestaurantService: Delete', id);

    return from(this.database.db.restaurants.delete(id));
  }
}
