import React, { useEffect, useState } from "react";
import { useKeyPressEvent } from "react-use";

const Flipbook = ({ assets }) => {
  // Subcomponent will be image display
  // Use state to index and control which asset is being shown
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

  if (assets) {
    return (
      <div id="flipbook">
        <p>{assets[index].name}</p>

        <img src={assets[index].image_url} alt="hello" />
        <p>{JSON.stringify(assets)}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Flipbook;
