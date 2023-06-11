import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'restaurants',
    loadComponent: () => import('./app/restaurants/restaurants.component').then(mod => mod.RestaurantsComponent),
    children: [
      {
        path: 'add',
        loadComponent: () => import('./app/restaurants/create-restaurant/create-restaurant.component').then(mod => mod.CreateRestaurantComponent)
      }
    ]
  },
];
