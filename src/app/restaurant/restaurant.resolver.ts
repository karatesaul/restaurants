import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { filter } from 'rxjs';
import RestaurantService from '../data/restaurant.service';
import isDefined from '../is-defined';
import { Restaurant } from '../types/restaurant.type';

const restaurantResolver: ResolveFn<Restaurant> = (route, _state) => {
  return inject(RestaurantService).read(parseInt(route.params['id'])).pipe(
    filter<Restaurant | undefined, Restaurant>(isDefined<Restaurant>)
  );
};
export default restaurantResolver;
