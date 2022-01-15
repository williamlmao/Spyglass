import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
const FlipData = ({ asset }) => {
  return (
    <div className="FlipData">
      <p>Current Price</p>
      <p>Avg Collection Price</p>
      <p>Overvalued Undervalued</p>
      <div>{JSON.stringify(asset)}</div>
    </div>
  );
};

export default FlipData;
