import { Injectable } from '@angular/core';
import Dexie, { Table } from "dexie";
import { LoggerService } from '../logger.service';
import { Restaurant } from '../types/restaurant.type';

export class Db extends Dexie {
  restaurants!: Table<Restaurant, number>;

  constructor(version: number) {
    super('restaurants');
    this.version(version).stores({
      restaurants: '++id'
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  public version: number = 1;
  public db: Db

  constructor(private readonly logger: LoggerService) {
    this.db = new Db(this.version);
  }
}
