import Axios from "axios";
import React from "react";

const Api = () => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0";
  Axios.get(API_URL).then((res) => {
    console.log(res);
    console.log(res.data);
    console.log(res.data.results);
    console.log(res.data.results.url);
    //왜 data > results 는 되는데
    //왜 data > results > url 이건 안될까?
  });

  return <div>Api</div>;
};

export default Api;
