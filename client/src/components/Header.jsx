import React, { useEffect, useState } from "react";
import ViewSelection from "./ViewSelection";
import FilterSelection from "./FilterSelection";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeFilteredAssets,
  setContractAddress,
  initializeCollection,
} from "../actions";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Modal from "react-bootstrap/Modal";
import SearchBar from "./SearchBar";
import { BsSearch } from "react-icons/bs";
import {
  loadAssets,
  loadInitialAssets,
  setAssetStatus,
  setFilteredAssets,
} from "../actions";
import { endpoint } from "../helpers";
import "../fonts/pointpanther.otf";

const Header = () => {
  const status = useSelector((state) => state.storestate.assetStatus);
  const dispatch = useDispatch();
  const axios = require("axios").default;
  // todo: rename this and remove doodles-official
  const [contract, setContract] = useState("doodles-official");
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loadCollection = (contractSlug) => {
    // These assets to be consumed different later on
    let limit = 500;
    const options = (type, slug, limit, i) => {
      return {
        method: "GET",
        url: endpoint(type, contractSlug, limit, i),
      };
    };
    axios
      .request(options("collections", contractSlug))
      .then(function (response) {
        console.log("res data", response.data);
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
          .request(options("assets", contractSlug, 10000 - limit, limit))
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
    <header>
      <span id="Logo">SPYGLASS</span>

      {status !== "Loaded" ? (
        <div className="searchbar"></div>
      ) : (
        <div className="searchbar">
          <SearchBar />
        </div>
      )}

      <div className="connectwallet">Connect Wallet</div>
      <div className="header2">
        <Button
          variant="primary"
          className="filtersButton"
          onClick={handleShow}
        >
          Filter
        </Button>

        <Button className="collectionButton">Collection Details</Button>
        <ViewSelection />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <FilterSelection />
        <Modal.Footer></Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
