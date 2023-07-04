import { Injectable } from '@angular/core';
import { CreateRestaurantPayload, Restaurant } from '../types/restaurant.type';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { DatabaseService } from './database.service';
import { LoggerService } from '../logger.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(
    private readonly database: DatabaseService,
    private readonly logger: LoggerService
  ) { }

  public create(payload: CreateRestaurantPayload): Observable<number> {
    this.logger.debug('RestaurantService: Create', payload);
    return this.database.create<CreateRestaurantPayload>('restaurants', payload);
  }

  public read(id: number): Observable<Restaurant> {
    this.logger.log('RestaurantService: Read', id);
    return this.database.read('restaurants', id);
  }

  public list(): Observable<Restaurant[]> {
    this.logger.debug('RestaurantService: List');
    return this.database.list('restaurants');
  }

  public search(): Observable<Restaurant[]> {
    this.logger.log('Search: Empty Stub for now.')
    return EMPTY;
  }

  public randomSearch(): Observable<Restaurant> {
    this.logger.log('RandomSearch: Empty Stub for now.')
    return EMPTY;
  }

  public update(r: Restaurant): Observable<void> {
    this.logger.log('Update: Empty Stub for now.')
    return EMPTY;
  }

  public delete(id: string): Observable<void> {
    this.logger.log('Delete: Empty Stub for now.')
    return EMPTY;
  }
}
