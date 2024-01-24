import { Tag } from './tag.type';

export enum ResultStateType {
  Delete,
  EditTags
}

export type DeleteResultState = {
  type: ResultStateType.Delete;
  delete: boolean;
};

export type EditTagsState = {
  type: ResultStateType.EditTags;
  tags?: Tag[]
};

export type ResultState =
  DeleteResultState |
  EditTagsState;
