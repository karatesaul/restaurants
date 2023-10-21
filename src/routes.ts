import { Routes } from "@angular/router";
import { restaurantResolver } from "./app/restaurant/restaurant.resolver";

export const routes: Routes = [{
  path: 'restaurants',
  loadComponent: () => import('./app/restaurants/restaurants.component').then(mod => mod.RestaurantsComponent),
  loadChildren: () => import('./app/restaurants/restaurants.routes').then(mod => mod.routes)
}, {
  path: 'restaurants/:id',
  loadComponent: () => import('./app/restaurant/restaurant.component').then(mod => mod.RestaurantComponent),
  resolve: {
    restaurant: restaurantResolver
  }
}, {
  path: 'tags',
  loadComponent: () => import('./app/tags/tags.component').then(mod => mod.TagsComponent),
  loadChildren: () => import('./app/tags/tags.routes').then(mod => mod.routes)
}];
