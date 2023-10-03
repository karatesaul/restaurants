import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'add',
  loadComponent: () => import('../create-restaurant/create-restaurant.component').then(mod => mod.CreateRestaurantComponent)
}];
