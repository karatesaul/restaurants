import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { LoggerService } from '../logger.service';
import { CreateTagPayload, Tag } from '../types/tag.type';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

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

    return from(this.database.db.tags.where("id").anyOf(ids).toArray())
  }
}
