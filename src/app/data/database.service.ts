import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Restaurant } from '../types/restaurant.type';
import { Tag } from '../types/tag.type';

export class Db extends Dexie {
  public restaurants!: Table<Restaurant, number>;
  public tags!: Table<Tag, number>;

  constructor(version: number) {
    super('restaurants');
    this.version(version).stores({
      restaurants: '++id, *tags',
      tags: '++id'
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export default class DatabaseService {
  public version: number = 3;
  public db: Db;

  constructor() {
    this.db = new Db(this.version);
  }
}
