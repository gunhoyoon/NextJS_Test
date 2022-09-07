import Axios from "axios";
import React from "react";

const Api = () => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0";
  Axios.get(API_URL).then((res) => {
    console.log(res);
    console.log(res.data);
    console.log(res.data.results);
    const resulits = res.data.results;
    const name = resulits[0].name;
    // 상세 데이터 인덱스 접근
    // 데이터 접근 고민 완벽해결
  });

  return <div></div>;
};

export default Api;
