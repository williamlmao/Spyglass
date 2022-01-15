import React from "react";

const NoAssetDisplay = ({ status }) => {
  let msg;
  if (status === "No Address") {
    msg = <h1>Search for a collection to get started</h1>;
  } else {
    msg = <h1>Loading...This may take up to 30 seconds...</h1>;
  }

  return <div className="NoAssetDisplay">{msg}</div>;
};

export default NoAssetDisplay;
