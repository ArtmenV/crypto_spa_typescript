import React, { useEffect, useState } from "react";
import { instAPI } from "./api/index";
import "./App.css";

export interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// Array<DataPost>()
const App: React.FC = () => {
  const [datas, setDatas] = useState({
    data: []
  });

  useEffect(() => {
    const runEffect = async () => {
      const Chipo = await instAPI({
        url: `/assets`,
        method: "get"
      });
      setDatas({ data: Chipo.data });
    };
    runEffect();
  }, []);

  console.log(datas, "asdas");
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {/* {datas.post.map(data => {
            console.log(data.id, "asdas");
            return <li key={data.id}>{data.title}</li>;
          })} */}
        </ul>
      </header>
    </div>
  );
};

export default App;
