import { Routes } from "@angular/router";

const routes: Routes = [{
  path: 'delete',
  loadComponent: () => import('../delete/delete.component')
}];
export default routes;
