import { Tag } from "./tag.type";

export interface Restaurant {
  id?: number; // Primary key, optional to allow Dexie to autoincrement.
  name: string;
  tags: NonNullable<Tag['id']>[];
}

export interface CreateRestaurantPayload extends Omit<Restaurant, 'id'> {}
