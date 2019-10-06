import React, { useEffect } from "react";
import { cryptoAddAction } from "../store/getApiData/action";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/index";

export const CryptoData = () => {
  const cryptoData = useSelector(
    (state: AppState) => state.CryptoReducer.cryptoData
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cryptoAddAction());
  }, []);

  console.log(cryptoData);
  return (
    <div>
      {" "}
      Привет мир
      <ul>
        {cryptoData.map(crypto => {
          return <li>{crypto.name}</li>;
        })}
      </ul>
    </div>
  );
};
