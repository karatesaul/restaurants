export interface Restaurant {
  id?: number; // Primary key, optional to allow Dexie to autoincrement.
  name: string;
}
