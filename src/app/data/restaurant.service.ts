import { Injectable } from '@angular/core';
import { Restaurant } from '../types/restaurant.type';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }

  public create(r: Restaurant): Observable<void> {
    console.log('Create: Empty Stub for now.')
    return EMPTY;
  }

  public read(id: string): Observable<Restaurant> {
    console.log('Read: Empty Stub for now.')
    return EMPTY;
  }

  public list(): Observable<Restaurant[]> {
    console.log('List: Empty Stub for now.')
    return EMPTY;
  }

  public search(): Observable<Restaurant[]> {
    console.log('Search: Empty Stub for now.')
    return EMPTY;
  }

  public randomSearch(): Observable<Restaurant> {
    console.log('RandomSearch: Empty Stub for now.')
    return EMPTY;
  }

  public update(r: Restaurant): Observable<void> {
    console.log('Update: Empty Stub for now.')
    return EMPTY;
  }

  public delete(id: string): Observable<void> {
    console.log('Delete: Empty Stub for now.')
    return EMPTY;
  }
}
