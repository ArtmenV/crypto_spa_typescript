import {
  CryptoDatas,
  CryptoDataActionTypes,
  ActionsType,
  IData
} from "./types";

export const initialState: CryptoDatas = {
  cryptoData: [],
  loading: false
};

export const CryptoReducer = (
  state: CryptoDatas = initialState,
  action: ActionsType | any
): CryptoDatas => {
  switch (action.type) {
    case CryptoDataActionTypes.ADD_DATA_START:
      return { ...state, loading: true };
    case CryptoDataActionTypes.ADD_DATA_SUCCESS:
      return {
        ...state.cryptoData,
        loading: false,
        cryptoData: action.payload
      };

    default:
      return state;
  }
};
