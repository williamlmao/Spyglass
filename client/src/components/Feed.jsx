import React from "react";
import FlipCard from "./FlipCard";

/**
 * Feed view
 * @returns
 */
const Feed = ({ assets, collection }) => {
  const createFeed = () => {
    return assets.map((asset, index) => {
      return <FlipCard asset={asset} collection={collection} key={index} />;
    });
  };

  return <div id="Feed">{createFeed()}</div>;
};

export default Feed;
