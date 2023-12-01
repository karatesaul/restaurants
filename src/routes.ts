import { Routes } from "@angular/router";
import restaurantResolver from "./app/restaurant/restaurant.resolver";

const routes: Routes = [{
  path: 'restaurants',
  loadComponent: () => import('./app/restaurants/restaurants.component'),
  loadChildren: () => import('./app/restaurants/restaurants.routes')
}, {
  path: 'restaurants/:id',
  loadComponent: () => import('./app/restaurant/restaurant.component'),
  resolve: {
    restaurant: restaurantResolver
  }
}, {
  path: 'tags',
  loadComponent: () => import('./app/tags/tags.component'),
  loadChildren: () => import('./app/tags/tags.routes')
}];
export default routes;
