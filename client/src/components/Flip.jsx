import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useKey } from "react-use";
import { setFlipIndex } from "../actions";
import { filterAssets } from "../helpers";

const Flip = () => {
  const filteredAssets = useSelector(
    (state) => state.storestate.filteredAssets
  );
  console.log("filtered assets FLIP", filteredAssets);
  const [index, setIndex] = useState(0);
  // const dispatch = useDispatch();
  // const filteredAssets = useSelector((state) => state.storestate.filteredAssets);
  // const index = useSelector((state) => state.storestate.flipIndex);

  const handleRight = () => {
    console.log("index", index);
    if (index < filteredAssets.length) {
      setIndex((index) => ++index);
    }
  };
  const handleLeft = () => {
    console.log("handling left");
    console.log("index", index);
    if (index > 1) {
      console.log("index", index);
      setIndex((index) => --index);
    }
  };
  useKey("ArrowRight", handleRight);
  useKey("ArrowLeft", handleLeft);

  if (Object.keys(filteredAssets).length > 0) {
    return (
      <div id="flipbook">
        <h3>FLIP</h3>
        <h1>{index}</h1>
        <p>{filteredAssets[index].name}</p>
        <img src={filteredAssets[index].imageUrl} alt="hello" />
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
