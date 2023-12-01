import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
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

  public read(id: number): Observable<Tag | undefined> {
    this.logger.debug('TagsService: Read', id);

    return from(this.database.db.tags.get(id));
  }

  public list(): Observable<Tag[]> {
    this.logger.debug('TagsService: List');

    return from(this.database.db.tags.toArray());
  }

  public searchIds(ids: number[]): Observable<Tag[]> {
    this.logger.debug('TagsService: Search');

    return from(this.database.db.tags.where("id").anyOf(ids).toArray());
  }
}
