import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Flipbook from "./Flipbook";
import "../styles.css";
import "../fonts/circularstd.ttf";

const App = () => {
  const axios = require("axios").default;
  const [assets, setAssets] = useState("");

  useEffect(() => {
    // Set up key handler

    // These assets to be consumed different later on
    const options = {
      method: "GET",
      url: "https://api.opensea.io/api/v1/assets?asset_contract_address=0xa5c0bd78d1667c13bfb403e2a3336871396713c5&order_direction=desc&offset=0&limit=50",
      headers: {
        Accept: "application/json",
        "X-API-KEY": "a1e7e59f08ab40c2a987005a5e4557bc",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAssets(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Flipbook assets={assets.assets}></Flipbook>
    </div>
  );
};

export default App;
