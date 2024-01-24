import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { DeleteDialogData } from '../delete-dialog/delete-dialog.component';
import deleteRestaurantResolver from './delete-restaurant.resolver';

describe('deleteRestaurantResolver', () => {
  const executeResolver: ResolveFn<DeleteDialogData> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => deleteRestaurantResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
