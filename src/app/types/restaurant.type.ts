import { Tag } from "./tag.type";

export interface Restaurant {
  id: number;
  name: string;
  tags: Tag[];
}

export interface CreateRestaurantPayload extends Omit<Restaurant, 'id'> {}
