import { Action } from "redux";

export interface IData {
  changePercent24Hr: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

// export interface Error {
//   text: string;
// }

export interface CryptoDatas {
  cryptoData: Array<IData>;
  loading: boolean;
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
  payload: IData;
}

export interface DataErrorActionTypes extends Action {
  type: CryptoDataActionTypes.ADD_DATA_ERROR;
  payload: Error;
}

export type ActionsType =
  | DataActionTypes
  | DataSuccessActionTypes
  | DataErrorActionTypes;
