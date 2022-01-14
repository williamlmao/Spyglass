import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Flip from "./Flip";
import Grid from "./Grid";
import Feed from "./Feed";

const GalleryDisplay = () => {
  const view = useSelector((state) => state.storestate.view);
  console.log("view", view);
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
