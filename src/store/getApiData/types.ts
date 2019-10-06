import { Action } from "redux";

export interface Data {
  text: string;
  id: number;
  important: boolean;
}

export interface Error {
  text: string;
}

export interface CryptoData {
  notes: Data[];
}

export enum CryptoDataActionTypes {
  ADD_DATA_START = "@@crypto/ADD_DATA + START",
  ADD_DATA_SUCCESS = "@@crypto/ADD_DATA + SUCCESS",
  ADD_DATA_ERROR = "@@crypto/ADD_DATA + ERROR"
}

export interface DataActionTypes extends Action {
  type: CryptoDataActionTypes.ADD_DATA_START;
}

export interface DataSuccessActionTypes extends Action {
  type: CryptoDataActionTypes.ADD_DATA_SUCCESS;
  payload: Data;
}

export interface DataErrorActionTypes extends Action {
  type: CryptoDataActionTypes.ADD_DATA_ERROR;
  payload: Error;
}

export type ActionsType =
  | DataActionTypes
  | DataSuccessActionTypes
  | DataErrorActionTypes;
