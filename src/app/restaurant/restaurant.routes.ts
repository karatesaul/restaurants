import { Routes } from '@angular/router';
import deleteRestaurantResolver from './delete-restaurant.resolver';
import editTagsResolver from './edit-tags.resolver';

const routes: Routes = [{
  path: 'delete',
  loadComponent: () => import('../delete/delete.component'),
  resolve: {
    data: deleteRestaurantResolver
  }
}, {
  path: 'edit-tags',
  loadComponent: () => import('../edit-tags/edit-tags.component'),
  resolve: {
    restaurant: editTagsResolver
  }
}];
export default routes;
