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
import "../fonts/pointpanther.otf";
const Header = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.storestate.collection);
  return <div>{/* <img src={collection.bannerImageUrl} /> */}</div>;
};

export default Header;
