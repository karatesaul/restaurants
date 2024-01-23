import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, mergeMap, of } from 'rxjs';
import RestaurantService from '../data/restaurant.service';
import { Restaurant } from '../types/restaurant.type';

const restaurantResolver: ResolveFn<Restaurant> = (route, _state) => {
  const restaurantService: RestaurantService = inject(RestaurantService);
  const router: Router = inject(Router);

  return restaurantService.read(parseInt(route.params['id'])).pipe(
    mergeMap((restaurant?: Restaurant) => {
      if (restaurant) {
        return of(restaurant);
      }

      router.navigate(['search']);
      return EMPTY;
    })
  );
};
export default restaurantResolver;
