import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { filter } from 'rxjs';
import TagsService from '../data/tags.service';
import isDefined from '../is-defined';
import { Tag } from '../types/tag.type';

const tagResolver: ResolveFn<Tag> = (route, _state) => {
  return inject(TagsService).read(parseInt(route.params['id'])).pipe(
    filter<Tag | undefined, Tag>(isDefined<Tag>)
  );
};
export default tagResolver;
