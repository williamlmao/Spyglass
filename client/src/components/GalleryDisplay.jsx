import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Flip from "./Flip";
import Grid from "./Grid";
import Feed from "./Feed";
import { filterAssets } from "./FilterSelection";

const GalleryDisplay = () => {
  const view = useSelector((state) => state.storestate.view);
  const assets = useSelector((state) => state.storestate.assets);

  const traitFilters = {
    Hats: ["Horns"],
    Clothing: ["Turtleneck"],
    // Current price is min - max
    // current_price: [0, 50000],
  };
  // console.log("filtered", filterAssets(assets, traitFilters));
  if (view === "Flip") {
    return (
      <div>
        Gallery
        <Flip />
      </div>
    );
  } else if (view === "Feed") {
    return (
      <div>
        Gallery
        <Feed />
      </div>
    );
  } else if (view === "Grid") {
    return (
      <div>
        Gallery
        <Grid />
      </div>
    );
  } else {
    return <div>Not found</div>;
  }
};

export default GalleryDisplay;
