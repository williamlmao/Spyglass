import React from "react";
import { useSelector } from "react-redux";
import FlipCard from "./FlipCard";
import SingleCard from "./SingleCard";

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
