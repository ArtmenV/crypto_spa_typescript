import React, { useEffect } from "react";
import { cryptoAddAction } from "../store/getApiData/action";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/index";
import { CryptoDatasItem } from "./CryptoDataItem";

export const CryptoDatas = () => {
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
          return (
            <CryptoDatasItem
              key={crypto.id}
              symbol={crypto.symbol}
              name={crypto.name}
              price={crypto.priceUsd}
              marketCap={crypto.marketCapUsd}
            />
          );
        })}
      </ul>
    </div>
  );
};
