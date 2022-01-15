import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Flip from "./Flip";
import Grid from "./Grid";
import Feed from "./Feed";
import GalleryDisplay from "./GalleryDisplay";
import NoAssetDisplay from "./NoAssetsDisplay";
import ViewSelection from "./ViewSelection";
import FilterSelection from "./FilterSelection";

const Gallery = () => {
  const view = useSelector((state) => state.storestate.view);
  const status = useSelector((state) => state.storestate.assetStatus);

  if (status === "Loaded") {
    return (
      <div>
        <ViewSelection />
        <FilterSelection />
        <div className="gallery">
          <h3>Gallery</h3>
          {status === "Loaded" ? <GalleryDisplay /> : status}
        </div>
      </div>
    );
  } else {
    return <NoAssetDisplay />;
  }
};

export default Gallery;
