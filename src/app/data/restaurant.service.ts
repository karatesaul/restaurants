import { Injectable } from '@angular/core';
import { PromiseExtended } from 'dexie';
import { Observable, from, map, mergeMap, throwError } from 'rxjs';
import { isEachItemDefined } from '../is-defined';
import LoggerService from '../logger.service';
import { Restaurant } from '../types/restaurant.type';
import { Tag } from '../types/tag.type';
import DatabaseService from './database.service';

@Injectable({
  providedIn: 'root'
})
export default class RestaurantService {

  constructor(
    private readonly database: DatabaseService,
    private readonly logger: LoggerService
  ) { }

  public create(payload: Restaurant): Observable<NonNullable<Restaurant['id']>> {
    this.logger.debug('RestaurantService: Create', payload);

    return from(this.database.db.restaurants.add(payload));
  }

  public read(id: Restaurant['id']): Observable<Restaurant | undefined> {
    this.logger.debug('RestaurantService: Read', id);

    if (!id) {
      return throwError(() => new Error('ID required to get Restaurant'));
    }

    return from(this.database.db.restaurants.get(id));
  }

  public list(): Observable<Restaurant[]> {
    this.logger.debug('RestaurantService: List');

    return from(this.database.db.restaurants.toArray());
  }

  public search(tagId: NonNullable<Tag['id']>): Observable<Restaurant[]> {
    this.logger.log('RestaurantService: Search', tagId);

    return from(this.database.db.restaurants.where('tags').equals(tagId).toArray());
  }

  public randomSearch(tags?: Tag['id'][]): Observable<Restaurant | undefined> {
    this.logger.debug('RestaurantService: RandomSearch', tags);

    let restaurants: PromiseExtended<Restaurant[]>;
    if (!tags) {
      restaurants = this.database.db.restaurants.toArray();
    } else if (!isEachItemDefined(tags)) {
      return throwError(() => new Error('Tag ID required to random search Restaurants using Tags.'));
    } else  {
      restaurants = this.database.db.restaurants.where('tags').anyOf(tags).toArray();
    }

    return from(restaurants).pipe(
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

  public update(id: Restaurant['id'], payload: Partial<Restaurant>): Observable<Restaurant | undefined> {
    this.logger.log('RestaurantService: Update', id, payload);

    if (!id) {
      return throwError(() => new Error('ID required to update Restaurant'));
    }

    return from(this.database.db.restaurants.update(id, payload)).pipe(
      mergeMap((updatedRecords: number) => {
        if (!updatedRecords) {
          throw new Error(`No records updated for id ${id} and payload ${payload}`);
        }

        return from(this.database.db.restaurants.get(id));
      })
    );
  }

  public delete(id: Restaurant['id']): Observable<void> {
    this.logger.debug('RestaurantService: Delete', id);

    if (!id) {
      return throwError(() => new Error('ID required to delete Restaurant'));
    }

    return from(this.database.db.restaurants.delete(id));
  }
}
