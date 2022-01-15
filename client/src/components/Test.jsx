import React, { useEffect, useState } from "react";
import ViewSelection from "./ViewSelection";
import FilterSelection from "./FilterSelection";
import { useSelector, useDispatch } from "react-redux";
import { setContractAddress } from "../actions";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Modal from "react-bootstrap/Modal";
import { loadAssets, setAssetStatus, setFilteredAssets } from "../actions";

const Test = () => {
  const assets = useSelector((state) => state.storestate.assets);
  return <div>{JSON.stringify(assets)}</div>;
};

export default Test;
