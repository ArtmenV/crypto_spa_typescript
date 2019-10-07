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

  return (
    <div className="container-fluid col-lg-10 ">
      <div className="row my-4 ">
        <div className="col-lg-1">
          <span className="text-size ml-3">
            <strong>#</strong>
          </span>
        </div>
        <div className="col-lg-2">
          <span className="text-size ml-2">
            <strong>Name</strong>
          </span>
        </div>
        <div className="col-lg-2">
          <span className="text-size">
            <strong>Market Cap</strong>
          </span>
        </div>
        <div className="col-lg-1">
          <span className="text-size">
            <strong>Price</strong>
          </span>
        </div>
        <div className="col-lg-2">
          <span className="text-size">
            <strong>Volume(24)</strong>
          </span>
        </div>
        <div className="col-lg-2">
          <span className="text-size">
            <strong>Coin Supply</strong>
          </span>
        </div>
        <div className="col-lg-2">
          <span className="text-size">
            <strong>Change Price</strong>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-group my-10 list-group-flush">
            {cryptoData.map(crypto => {
              return (
                <CryptoDatasItem
                  supply={crypto.supply}
                  changePrice={crypto.changePercent24Hr}
                  volume={crypto.volumeUsd24Hr}
                  rank={crypto.rank}
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
      </div>
    </div>
  );
};
