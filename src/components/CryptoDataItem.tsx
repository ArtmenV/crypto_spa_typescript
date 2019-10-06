import React from "react";
import { IData } from "../store/getApiData/types";

export const CryptoDatasItem = ({ marketCap, price, name, symbol }: any) => {
  return (
    <li>
      <h3>{marketCap}</h3>
    </li>
  );
};
