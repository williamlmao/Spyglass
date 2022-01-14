import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import SingleCard from "./Card";

const Grid = () => {
  const assets = useSelector((state) => state.storestate.assets);
  const createGrid = () => {
    return assets.map((asset) => {
      return <SingleCard image={asset.image_url} name={asset.name} />;
    });
  };

  return (
    <div id="Grid">
      <h3>Grid</h3>
      {createGrid()}
    </div>
  );
};

export default Grid;
