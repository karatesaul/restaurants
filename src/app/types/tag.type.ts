export type Tag = {
  id?: number; // Primary key, optional to allow Dexie to autoincrement.
  value: string;
};

export type CreateTagPayload = Omit<Tag, 'id'>;
