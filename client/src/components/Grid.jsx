import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { filterAssets } from "../helpers";
import SingleCard from "./Card";

const Grid = () => {
  const filteredAssets = useSelector(
    (state) => state.storestate.filteredAssets
  );
  // const createGrid = () => {
  //   return filteredAssets.map((asset) => {
  //     return <SingleCard image={asset.imageUrl} name={asset.name} />;
  //   });
  // };
  console.log("filtered", filterAssets);
  return (
    <div id="Grid">
      <h3>Grid</h3>
      {/* {createGrid()} */}
    </div>
  );
};

export default Grid;
