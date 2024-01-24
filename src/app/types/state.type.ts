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
};

export type ResultState =
  DeleteResultState |
  EditTagsState;
