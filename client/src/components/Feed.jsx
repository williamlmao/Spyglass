import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import SingleCard from "./Card";

const Feed = () => {
  const assets = useSelector((state) => state.storestate.assets);
  const createFeed = () => {
    return assets.map((asset) => {
      return <SingleCard image={asset.imageUrl} name={asset.name} />;
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
