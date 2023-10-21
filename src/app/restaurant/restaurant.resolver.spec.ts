import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { restaurantResolver } from './restaurant.resolver';
import { Restaurant } from '../types/restaurant.type';

describe('restaurantResolver', () => {
  const executeResolver: ResolveFn<Restaurant> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => restaurantResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
