import React from "react";
import SearchBar from "./SearchBar";

const NoAssetDisplay = ({ status }) => {
  if (status === "No Address") {
    return (
      <div className="startingpage">
        <div className="startingpagecontents">
          <h1>Find the best NFTs on the OpenSea with Spyglass</h1>
          <h3>Start by searching for a collection</h3>
          <SearchBar />
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default NoAssetDisplay;
