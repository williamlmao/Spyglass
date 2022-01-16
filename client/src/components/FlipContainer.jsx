import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useKey } from "react-use";
import { setFlipIndex } from "../actions";
import { filterAssets } from "../helpers";
import FlipSubContainer from "./FlipSubContainer";

const Flip = ({ filteredAssets, collection }) => {
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    if (index < filteredAssets.length) {
      setIndex((index) => ++index);
    }
  };
  const handleLeft = () => {
    setIndex((index) => --index);
  };
  useKey("ArrowRight", handleRight);
  useKey("ArrowLeft", handleLeft);

  if (Object.keys(filteredAssets).length > 0) {
    if (filteredAssets[index] === undefined) {
      console.log("resetting filters to 0");
      setIndex(0);
      console.log("index", index);
    }
    return (
      <div className="flipview">
        <FlipSubContainer
          asset={filteredAssets[index]}
          collection={collection}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Flip;
