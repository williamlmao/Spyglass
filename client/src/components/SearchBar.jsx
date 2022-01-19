import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  initializeCollection,
  initializeFilteredAssets,
  loadAssets,
  loadInitialAssets,
  setAssetStatus,
  setContractAddress,
} from "../actions";
import "../fonts/pointpanther.otf";
import { endpoint } from "../helpers";
const SearchBar = () => {
  const dispatch = useDispatch();
  const axios = require("axios").default;
  // todo: rename this and remove doodles-official
  const [contract, setContract] = useState("boredapeyachtclub");
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loadCollection = (contractSlug) => {
    // These assets to be consumed different later on
    let limit = 50;
    const options = (type, slug, limit, i) => {
      return {
        method: "GET",
        url: endpoint(type, contractSlug, limit, i),
      };
    };
    const addLikeRating = (data) => {
      return data.map((asset) => {
        asset["liked"] = false;
        asset["rating"] = null;
      });
    };
    axios
      .request(options("collections", contractSlug))
      .then(function (response) {
        initializeCollection(dispatch, response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    // Load first 500 assets for performance
    axios
      .request(options("assets", contractSlug, limit, 0))
      .then(function (response) {
        loadInitialAssets(dispatch, response.data);
        // // On initial submission of a new contract, filtered assets is equal to assets
        initializeFilteredAssets(dispatch);
        setAssetStatus(dispatch, "Loaded");
        // Load remaining assets
        // todo: update these to be dynamic based on collection size
        axios
          .request(options("assets", contractSlug, 1000 - limit, limit))
          .then(function (response) {
            loadAssets(dispatch, response.data);
            // // On initial submission of a new contract, filtered assets is equal to assets
            initializeFilteredAssets(dispatch);
            setAssetStatus(dispatch, "Loaded");
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <InputGroup>
        <FormControl
          placeholder="Enter a collection slug or address"
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
          <BsSearch />
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
