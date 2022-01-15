import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Flip from "./Flip";
import Grid from "./Grid";
import Feed from "./Feed";
import { filterAssets } from "./FilterSelection";

const GalleryDisplay = () => {
  const view = useSelector((state) => state.storestate.view);
  const assets = useSelector((state) => state.storestate.assets);

  if (view === "Flip") {
    return (
      <div>
        <Flip />
      </div>
    );
  } else if (view === "Feed") {
    return (
      <div>
        <Feed />
      </div>
    );
  } else if (view === "Grid") {
    return (
      <div>
        <Grid />
      </div>
    );
  } else {
    return <div>Not found</div>;
  }
};

export default GalleryDisplay;
