import { Routes } from "@angular/router";

const routes: Routes = [{
  path: 'add',
  loadComponent: () => import('../create-tag/create-tag.component')
}];
export default routes;
