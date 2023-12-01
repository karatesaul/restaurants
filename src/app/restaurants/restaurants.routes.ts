import { Routes } from '@angular/router';

const routes: Routes = [{
  path: 'add',
  loadComponent: () => import('../create-restaurant/create-restaurant.component')
}];
export default routes;
