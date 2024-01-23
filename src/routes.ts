import { Routes } from '@angular/router';
import restaurantResolver from './app/restaurant/restaurant.resolver';
import tagResolver from './app/tag/tag.resolver';

const routes: Routes = [{
  path: 'restaurants',
  loadComponent: () => import('./app/restaurants/restaurants.component'),
  loadChildren: () => import('./app/restaurants/restaurants.routes')
}, {
  path: 'restaurants/:id',
  loadComponent: () => import('./app/restaurant/restaurant.component'),
  loadChildren: () => import('./app/restaurant/restaurant.routes'),
  resolve: {
    restaurant: restaurantResolver
  }
}, {
  path: 'search',
  loadComponent: () => import('./app/search/search.component')
}, {
  path: 'tags',
  loadComponent: () => import('./app/tags/tags.component'),
  loadChildren: () => import('./app/tags/tags.routes')
}, {
  path: 'tags/:id',
  loadComponent: () => import('./app/tag/tag.component'),
  loadChildren: () => import('./app/tag/tag.routes'),
  resolve: {
    tag: tagResolver
  }
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'search'
}];
export default routes;
