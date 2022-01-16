import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { filterAssets } from "../helpers";
import SingleCard from "./SingleCard";

const Grid = ({ assets, collection }) => {
  const createGrid = () => {
    return assets.map((asset, index) => {
      return <SingleCard asset={asset} collection={collection} key={index} />;
    });
  };
  return <div id="Grid">{createGrid()}</div>;
};

export default Grid;
