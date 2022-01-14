import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Flip from "./Flip";
import Grid from "./Grid";
import Feed from "./Feed";
import GalleryDisplay from "./GalleryDisplay";

const Gallery = () => {
  const view = useSelector((state) => state.storestate.view);
  const status = useSelector((state) => state.storestate.assetStatus);

  return (
    <div className="gallery">
      <h3>Gallery</h3>
      {status === "Loaded" ? <GalleryDisplay /> : status}
    </div>
  );
};

export default Gallery;
