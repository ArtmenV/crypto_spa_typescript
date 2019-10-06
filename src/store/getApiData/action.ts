import {
  CryptoDataActionTypes,
  DataActionTypes,
  DataSuccessActionTypes,
  DataErrorActionTypes,
  //   Error,
  IData
} from "./types";

// import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction, Dispatch } from "redux";
import { instAPI } from "../../api/index";

// export const formAdd = (): DataActionTypes => ({
//   type: CryptoDataActionTypes.ADD_DATA_START
// });

export const cryptoAddAction = () => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({
    type: CryptoDataActionTypes.ADD_DATA_START
  });

  const cryptoData = await instAPI({
    url: `/assets`,
    method: "get"
  });

  dispatch({
    type: CryptoDataActionTypes.ADD_DATA_SUCCESS,
    payload: cryptoData.data.data
  });
};

// export const cryptoAddAction = () => async (dispatch: Dispatch): Promise<void> ({
//   type: CryptoDataActionTypes.ADD_DATA_SUCCESS,
//   payload: data
// });

// export const importantAction = (id: Error): ActionTypesFormImportant => ({
//   type: CryptoDataActionTypes.ADD_DATA_ERROR,
//   payload: id
// });
