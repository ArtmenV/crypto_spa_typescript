import {
  CryptoDataActionTypes,
  DataActionTypes,
  DataSuccessActionTypes,
  DataErrorActionTypes,
  Error,
  Data
} from "./types";

export const formAdd = (): DataActionTypes => ({
  type: CryptoDataActionTypes.ADD_DATA_START
});

export const deleteAction = (id: Note): ActionTypesFormDelete => ({
  type: CryptoDataActionTypes.ADD_DATA_SUCCESS,
  payload: id
});

export const importantAction = (id: Note): ActionTypesFormImportant => ({
  type: CryptoDataActionTypes.ADD_DATA_ERROR,
  payload: id
});
