import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { EMPTY, mergeMap, of } from 'rxjs';
import TagsService from '../data/tags.service';
import { DeleteDialogData } from '../delete-dialog/delete-dialog.component';
import { Tag } from '../types/tag.type';

const deleteTagResolver: ResolveFn<DeleteDialogData> = (route, _state) => {
  const tagsService: TagsService = inject(TagsService);
  const router: Router = inject(Router);

  console.log('Params', route.parent?.params);

  return tagsService.read(parseInt(route.parent?.params['id'])).pipe(
    mergeMap((tag?: Tag) => {
      console.log(tag);
      if (tag) {
        return of({
          name: tag.value,
          type: 'tag'
        });
      }

      router.navigate(['search']);
      return EMPTY;
    })
  );
};
export default deleteTagResolver;
