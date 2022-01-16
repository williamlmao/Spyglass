import React from "react";
import Card from "react-bootstrap/Card";
import FlipData from "./FlipData";
/**
 * A single card grid or feed view
 * Maybe use this to dynamically update class, to display different card styles depending on view
 * @param {*} param0
 * @returns
 */
const FlipCard = ({ asset }) => {
  return (
    <div className="flipcard">
      <div className="flipImageContainer">
        <img src={asset.imageUrl} className="flipImg" />
      </div>

      <FlipData asset={asset} />
    </div>
  );
};

export default FlipCard;
