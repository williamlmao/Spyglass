import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useKey } from "react-use";
import { setFlipIndex } from "../actions";
import { filterAssets } from "../helpers";
import SingleCard from "./SingleCard";

const Flip = () => {
  const filteredAssets = useSelector(
    (state) => state.storestate.filteredAssets
  );

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
      <div id="flipbook">
        <SingleCard asset={filteredAssets[index]} />
      </div>
    );
  } else {
    return null;
  }
};

// import { useKey } from "react-use";

// const Flip = () => {
//   const [count, set] = useState(0);
//   const increment = () => set((count) => ++count);
//   useKey("ArrowUp", increment);

//   return <div>Press arrow up: {count}</div>;
// };
export default Flip;
