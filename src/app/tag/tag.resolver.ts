import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, mergeMap, of } from 'rxjs';
import TagsService from '../data/tags.service';
import { Tag } from '../types/tag.type';

const tagResolver: ResolveFn<Tag> = (route, _state) => {
  const tagsService: TagsService = inject(TagsService);
  const router: Router = inject(Router);

  return tagsService.read(parseInt(route.params['id'])).pipe(
    mergeMap((tag?: Tag) => {
      if (tag) {
        return of(tag);
      }

      router.navigate(['search']);
      return EMPTY;
    })
  );
};
export default tagResolver;
