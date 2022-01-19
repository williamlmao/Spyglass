import React from "react";
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
