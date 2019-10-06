import React, { useEffect, useState } from "react";
import { instAPI } from "./api/index";
import "./App.css";
import { CryptoDatas } from "./components/CryptoDatas";
import { Navbar } from "./components/Navbar";

// export interface IData {
//   changePercent24Hr: string;
//   id: string;
//   marketCapUsd: string;
//   maxSupply: string;
//   name: string;
//   priceUsd: string;
//   rank: string;
//   supply: string;
//   symbol: string;
//   volumeUsd24Hr: string;
//   vwap24Hr: string;
// }

const App: React.FC = () => {
  // const [datas, setDatas] = useState({
  //   data: Array<IData>()
  // });

  // useEffect(() => {
  //   const runEffect = async () => {
  //     const Chipo = await instAPI({
  //       url: `/assets`,
  //       method: "get"
  //     });
  //     setDatas({ data: Chipo.data.data });
  //   };
  //   runEffect();
  // }, []);
  return (
    <div>
      <Navbar />
      <CryptoDatas />
    </div>
  );
};

export default App;

// {datas.data.map(data => {
//           console.log(data.id, "asdas");
//           return <li key={data.id}>{data.name}</li>;
//         })}
//       </ul>{" "}
//       }
