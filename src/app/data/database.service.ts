import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import LoggerService from '../logger.service';
import { Restaurant } from '../types/restaurant.type';
import { Tag } from '../types/tag.type';

export class Db extends Dexie {
  public restaurants!: Table<Restaurant, number>;
  public tags!: Table<Tag, number>;

  constructor(version: number) {
    super('restaurants');
    this.version(version).stores({
      restaurants: '++id',
      tags: '++id'
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export default class DatabaseService {
  public version: number = 2;
  public db: Db;

  constructor(private readonly logger: LoggerService) {
    this.db = new Db(this.version);
  }
}
