import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
const FlipData = ({ asset }) => {
  let priceDiff = asset.predictedPrice - asset.buyNowPrice;
  return (
    <div className="FlipData">
      <span>#{asset.tokenId}</span>

      <span>#{asset.tokenId}</span>
      <span># Buy Now: {asset.numSales}</span>
      <span># Of Sales: {asset.numSales}</span>
      <span>Predicted Price: {asset.predictedPrice}</span>
      <span>For sale: {asset.saleListed}</span>
      <div className="valuationBox">
        <div className="valuation-overpriced">
          {asset.valuation} Overpriced by {priceDiff}
        </div>
        <span>based on a predicted price of {asset.predictedPrice}42</span>
      </div>
      <div>{JSON.stringify(asset)}</div>
    </div>
  );
};

export default FlipData;
