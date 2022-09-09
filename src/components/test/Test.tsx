import Axios from "axios";
import React from "react";

const Test = () => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0";
  Axios.get(API_URL).then((res) => {
    console.log(res);
    console.log(res.data);
    console.log(res.data.results);

    // 상세 데이터 접근 시 , 모델링 했나 확인 , 그려줄땐 특히 필요함
    // tailwind 사용

    <strong>여기 안에서의 css는</strong>;
  });
  return <div></div>;
};

export default Test;
