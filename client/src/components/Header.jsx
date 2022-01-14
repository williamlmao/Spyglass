import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContractAddress } from "../actions";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { loadAssets, setAssetStatus } from "../actions";
import "../fonts/pointpanther.otf";
const Header = () => {
  const dispatch = useDispatch();
  const axios = require("axios").default;
  const [contract, setContract] = useState(
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
  );
  const loadCollection = (contract) => {
    // These assets to be consumed different later on
    const options = {
      method: "GET",
      url: `https://api.opensea.io/api/v1/assets?asset_contract_address=${contract}&order_direction=desc&offset=0&limit=50`,
      headers: {
        Accept: "application/json",
        "X-API-KEY": "a1e7e59f08ab40c2a987005a5e4557bc",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        loadAssets(dispatch, response.data.assets);
        setAssetStatus(dispatch, "Loaded");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <header>
      <span id="Logo">SEER</span>
      <div className="searchbar">
        <InputGroup className="mb-3 search">
          <FormControl
            placeholder="Contract Address"
            aria-label="Contract Address"
            aria-describedby="basic-addon2"
            value={contract}
            onChange={(e) => setContract(e.target.value)}
            className="searchbar"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => {
              setAssetStatus(dispatch, "Loading...");
              setContractAddress(dispatch, contract);
              loadCollection(contract);
            }}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </header>
  );
};

export default Header;