import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useKeyPressEvent } from "react-use";

const Flip = () => {
  const assets = useSelector((state) => state.storestate.assets);

  const [index, setIndex] = useState(0);
  const handleRight = () => {
    setIndex(index + 1);
  };
  const handleLeft = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };
  useKeyPressEvent("ArrowRight", handleRight);
  useKeyPressEvent("ArrowLeft", handleLeft);

  if (Object.keys(assets).length > 0) {
    return (
      <div id="flipbook">
        <h3>FLIP</h3>
        <p>{assets[index].name}</p>
        <img src={assets[index].image_url} alt="hello" />
      </div>
    );
  } else {
    return null;
  }
};

export default Flip;
