import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { LoggerService } from '../logger.service';
import { CreateTagPayload, Tag } from '../types/tag.type';
import { Observable } from 'rxjs';

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
    return this.database.create('tags', payload);
  }

  public read(id: number): Observable<Tag> {
    this.logger.debug('TagsService: Read', id);
    return this.database.read('tags', id);
  }
}
