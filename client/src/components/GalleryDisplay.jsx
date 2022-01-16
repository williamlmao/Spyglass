import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Flip from "./FlipContainer";
import Grid from "./Grid";
import Feed from "./Feed";
import { filterAssets } from "./FilterSelection";

const GalleryDisplay = () => {
  const view = useSelector((state) => state.storestate.view);
  const filteredAssets = useSelector(
    (state) => state.storestate.filteredAssets
  );
  const collection = useSelector((state) => state.storestate.collection);
  if (view === "Flip") {
    return (
      <div>
        <Flip filteredAssets={filteredAssets} collection={collection} />
      </div>
    );
  } else if (view === "Feed") {
    return (
      <div>
        <Feed assets={filteredAssets} collection={collection} />
      </div>
    );
  } else if (view === "Grid") {
    return (
      <div>
        <Grid assets={filteredAssets} collection={collection} />
      </div>
    );
  } else {
    return <div>Not found</div>;
  }
};

export default GalleryDisplay;
