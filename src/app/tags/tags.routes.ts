import { Routes } from "@angular/router";

export const routes: Routes = [{
  path: 'add',
  loadComponent: () => import('../create-tag/create-tag.component').then(mod => mod.CreateTagComponent)
}];
