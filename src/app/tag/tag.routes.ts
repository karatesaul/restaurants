import { Routes } from '@angular/router';
import deleteTagResolver from './delete-tag.resolver';

const routes: Routes = [{
  path: 'delete',
  loadComponent: () => import('../delete/delete.component'),
  resolve: {
    data: deleteTagResolver
  }
}];
export default routes;
