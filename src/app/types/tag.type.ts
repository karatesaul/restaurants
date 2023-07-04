export interface Tag {
  id: number;
  value: string;
}

export interface CreateTagPayload extends Omit<Tag, 'id'> {}
