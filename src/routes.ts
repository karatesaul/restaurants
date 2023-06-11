import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: 'restaurants', loadComponent: () => import('./app/restaurants/restaurants.component').then(mod => mod.RestaurantsComponent) },
];
