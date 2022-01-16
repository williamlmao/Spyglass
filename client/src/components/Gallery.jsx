import React from "react";
import { useSelector } from "react-redux";
import GalleryDisplay from "./GalleryDisplay";
import NoAssetDisplay from "./NoAssetsDisplay";

/**
 * Container that either shows the views or loading screen
 * @returns
 */
const Gallery = () => {
  const view = useSelector((state) => state.storestate.view);
  const status = useSelector((state) => state.storestate.assetStatus);

  if (status === "Loaded") {
    return (
      <div className="gallery">
        {status === "Loaded" ? <GalleryDisplay /> : status}
      </div>
    );
  } else {
    return <NoAssetDisplay status={status} />;
  }
};

export default Gallery;
