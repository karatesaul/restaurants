import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, mergeMap, of } from 'rxjs';
import RestaurantService from '../data/restaurant.service';
import { DeleteDialogData } from '../delete-dialog/delete-dialog.component';
import { Restaurant } from '../types/restaurant.type';

const deleteRestaurantResolver: ResolveFn<DeleteDialogData> = (route, _state) => {
  const restaurantService: RestaurantService = inject(RestaurantService);
  const router: Router = inject(Router);

  return restaurantService.read(parseInt(route.parent?.params['id'])).pipe(
    mergeMap((restaurant?: Restaurant) => {
      if (restaurant) {
        return of({
          name: restaurant.name,
          type: 'restaurant'
        });
      }

      router.navigate(['search']);
      return EMPTY;
    })
  );
};
export default deleteRestaurantResolver;
