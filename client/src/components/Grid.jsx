import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { filterAssets } from "../helpers";
import SingleCard from "./SingleCard";

const Grid = () => {
  const filteredAssets = useSelector(
    (state) => state.storestate.filteredAssets
  );
  const createGrid = () => {
    return filteredAssets.map((asset, index) => {
      return <SingleCard asset={asset} key={index} />;
    });
  };
  return <div id="Grid">{createGrid()}</div>;
};

export default Grid;
