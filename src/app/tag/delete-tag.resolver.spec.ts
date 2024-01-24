import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { DeleteDialogData } from '../delete-dialog/delete-dialog.component';
import deleteTagResolver from './delete-tag.resolver';

describe('deleteTagResolver', () => {
  const executeResolver: ResolveFn<DeleteDialogData> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => deleteTagResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
