import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { isEachItemDefined } from '../is-defined';
import LoggerService from '../logger.service';
import { CreateTagPayload, Tag } from '../types/tag.type';
import DatabaseService from './database.service';

@Injectable({
  providedIn: 'root'
})
export default class TagsService {

  constructor(
    private readonly database: DatabaseService,
    private readonly logger: LoggerService
  ) { }

  public create(payload: CreateTagPayload): Observable<number> {
    this.logger.debug('TagsService: Create', payload);

    return from(this.database.db.tags.add(payload));
  }

  public read(id: Tag['id']): Observable<Tag | undefined> {
    this.logger.debug('TagsService: Read', id);

    if (!id) {
      return throwError(() => new Error('ID required to get tag.'));
    }

    return from(this.database.db.tags.get(id));
  }

  public delete(id: Tag['id']): Observable<void> {
    this.logger.debug('TagsService: Delete', id);

    if (!id) {
      return throwError(() => new Error('ID required to delete tag.'));
    }

    return from(this.database.db.tags.delete(id));
  }

  public list(): Observable<Tag[]> {
    this.logger.debug('TagsService: List');

    return from(this.database.db.tags.toArray());
  }

  public searchIds(ids: Tag['id'][]): Observable<Tag[]> {
    this.logger.debug('TagsService: Search');

    if (!isEachItemDefined(ids)) {
      return throwError(() => new Error('ID required to search tags.'));
    }

    return from(this.database.db.tags.where('id').anyOf(ids).toArray());
  }
}
