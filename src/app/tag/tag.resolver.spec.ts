import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { Tag } from '../types/tag.type';
import tagResolver from './tag.resolver';

describe('tagResolver', () => {
  const executeResolver: ResolveFn<Tag> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => tagResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
