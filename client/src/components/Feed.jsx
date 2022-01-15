import React from "react";
import { useSelector } from "react-redux";
import SingleCard from "./SingleCard";
import LazyLoad from "react-lazy-load";

/**
 * Feed view
 * @returns
 */
const Feed = () => {
  const assets = useSelector((state) => state.storestate.assets);
  const createFeed = () => {
    return assets.map((asset, index) => {
      return (
        <LazyLoad offset={1000}>
          <SingleCard asset={asset} key={index} />
        </LazyLoad>
      );
    });
  };

  return (
    <div id="Feed">
      <h3>Feed</h3>
      {createFeed()}
    </div>
  );
};

export default Feed;
