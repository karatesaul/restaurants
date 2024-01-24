import { Routes } from '@angular/router';
import deleteRestaurantResolver from './delete-restaurant.resolver';

const routes: Routes = [{
  path: 'delete',
  loadComponent: () => import('../delete/delete.component'),
  resolve: {
    data: deleteRestaurantResolver
  }
}];
export default routes;
