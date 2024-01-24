import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Restaurant } from '../types/restaurant.type';
import editTagsResolver from './edit-tags.resolver';

describe('editTagsResolver', () => {
  const executeResolver: ResolveFn<Restaurant> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => editTagsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
