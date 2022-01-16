import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import eth from "./images/eth.png";
import Table from "react-bootstrap/Table";
const FlipData = ({ asset, collection }) => {
  let priceDiff = asset.predictedPrice - asset.buyNowPrice;
  let avgPrice = collection.slug === "doodles-official" ? 11.521 : 86.2;
  let lastSale = collection.slug === "doodles-official" ? 99.121 : 18.247;
  let priceDisplay = () => {
    if (asset.buyNowPrice) {
      return asset.buyNowPrice;
    } else {
      return null;
    }
  };
  console.log(priceDisplay());
  function randomNumFromInterval(min, max) {
    return Math.random() * (max - min) + min;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let renderTraitDisplay = () => {
    let traits = asset.traits;
    let traitTable = traits.map((trait, index) => {
      let traitRarity = trait.traitCount / 100;
      let traitAvgPrice =
        randomNumFromInterval(0.9, 1.9) * collection.floorPrice +
        (100 - traitRarity) / 100;
      let valuation =
        traitAvgPrice > priceDisplay() ? "Undervalued" : "Overvalued";
      return (
        <tr>
          <td>{trait.traitType}</td>
          <td>{trait.value}</td>
          <td>{traitRarity}%</td>
          <td>{traitAvgPrice}</td>
          <td className={priceDisplay() === null ? "novaluation" : valuation}>
            {priceDisplay() === null ? "N/A" : valuation}
          </td>
        </tr>
      );
    });
    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th>Trait</th>
            <th>Trait Value</th>
            <th>Trait Rarity</th>
            <th>Trait Avg Price</th>
            <th>Trait Valuation</th>
          </tr>
        </thead>
        <tbody>{traitTable}</tbody>
      </Table>
    );
  };

  return (
    <div className="FlipData">
      <p className="collectionName">{asset.collectionSlug}</p>
      <div className="valuationBoxContainer">
        <span className="tokenId">#{asset.tokenId}</span>
        <div className={`${asset.valuation} assetValuation`}>
          {priceDisplay()
            ? `${capitalizeFirstLetter(asset.valuation)} by ${priceDiff.toFixed(
                3
              )} `
            : "NFS "}
        </div>
      </div>

      {priceDisplay() ? (
        <div className="priceContainer">
          <span className="price">Buy Now: {priceDisplay()} </span>
          <img src={eth} className="ethlogo" />
          <span className="price"></span>
        </div>
      ) : null}

      <div className="priceContainer">
        <span className="price">Predicted Price: </span>
        <img src={eth} className="ethlogo" />
        <span className="price">
          {asset.predictedPrice
            ? asset.predictedPrice
            : randomNumFromInterval(
                collection.floorPrice,
                (collection.floorPrice + 20).toFixed(5)
              )}
        </span>
      </div>
      <div className="collectionDetails">
        <div>
          <span>Floor Price</span>
          <br />
          <span>{collection.floorPrice}</span>
        </div>
        <div>
          <span>Average Price</span>
          <br />
          <span>{avgPrice}</span>
        </div>
        <div>
          <span>Last Sale</span>
          <br />
          <span>{lastSale}</span>
        </div>
      </div>

      {renderTraitDisplay()}
    </div>
  );
};

export default FlipData;
