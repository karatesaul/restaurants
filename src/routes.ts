import { Routes } from "@angular/router";

export const routes: Routes = [{
  path: 'restaurants',
  loadComponent: () => import('./app/restaurants/restaurants.component').then(mod => mod.RestaurantsComponent),
  loadChildren: () => import('./app/restaurants/restaurants.routes').then(mod => mod.routes)
}, {
  path: 'tags',
  loadComponent: () => import('./app/tags/tags.component').then(mod => mod.TagsComponent),
  loadChildren: () => import('./app/tags/tags.routes').then(mod => mod.routes)
}];
