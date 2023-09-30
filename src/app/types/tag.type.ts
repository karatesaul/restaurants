export interface Tag {
  id?: number; // Primary key, optional to allow Dexie to autoincrement.
  value: string;
}

export interface CreateTagPayload extends Omit<Tag, 'id'> {}
