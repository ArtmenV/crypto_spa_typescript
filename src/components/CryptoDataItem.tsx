import React from "react";
import "./CryptoDataItem.css";

export const CryptoDatasItem = ({
  marketCap,
  price,
  name,
  symbol,
  rank,
  volume,
  changePrice,
  supply
}: any) => {
  const marketFullCap = Math.round(marketCap).toLocaleString();
  const coinPrice = ((price * 10) / 10).toLocaleString();
  const coinvolume = Math.round(volume).toLocaleString();
  const coinSupply = Math.round(supply).toLocaleString();
  const changePriceCoin = ((changePrice * 100) / 100).toFixed(4);

  return (
    <div className="container-fluid">
      <li className="row my-4 list-group-container">
        <div className="col-lg-1">
          <span className="text-size ">{rank}</span>
        </div>
        <div className="col-lg-2">
          <span className="text-size">{name}</span>
        </div>
        <div className="col-lg-2">
          <span className="text-size">${marketFullCap}</span>
        </div>
        <div className="col-lg-1">
          <span className="text-size">${coinPrice}</span>
        </div>
        <div className="col-lg-2">
          <span className="text-size">${coinvolume}</span>
        </div>
        <div className="col-lg-2">
          <span className="text-size ml-2">
            {coinSupply}&nbsp;{symbol}
          </span>
        </div>
        <div className="col-lg-1">
          <span className="text-size ml-2">{changePriceCoin}%</span>
        </div>
      </li>
    </div>
  );
};
