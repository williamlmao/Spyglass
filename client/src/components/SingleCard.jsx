import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Table from "react-bootstrap/Table";
import eth from "./images/eth.png";
/**
 * A single card grid or feed view
 * Maybe use this to dynamically update class, to display different card styles depending on view
 * @param {*} param0
 * @returns
 */
const SingleCard = ({ asset, collection }) => {
  const [checked, setChecked] = useState(false);
  const [ratingValue, setratingValue] = useState(asset.rating);
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

  function randomNumFromInterval(min, max) {
    return Math.random() * (max - min) + min;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderButtons = () => {
    let buttons = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
    ];
    return buttons.map((button, idx) => {
      return (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={"outline-dark"}
          name="radio"
          value={button.value}
          checked={asset.rating === button.value}
          onChange={(e) => setratingValue(e.currentTarget.value)}
          size="sm"
          className="singleCardButton"
        >
          {button.value}
        </ToggleButton>
      );
    });
  };

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
      <Table bordered hover className="singleCardTable">
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
    <Card className="singleCardContainer">
      <div className="overlay">{renderTraitDisplay()}</div>
      <Card.Img variant="top" src={asset.imageUrl} />
      <Card.Title className="singleCardTitle">
        {asset.name ? asset.name : "#" + asset.tokenId}
      </Card.Title>
      <Card.Body>
        <div className="singleCardPrice">
          {priceDisplay() ? (
            <div className="priceContainer">
              <span className="singleCardPrice">
                Buy Now: {priceDisplay()}{" "}
              </span>
              <img src={eth} className="ethlogo" />
            </div>
          ) : null}
        </div>

        <div className={`singleCardAssetVal ${asset.valuation}`}>
          {priceDisplay()
            ? `${capitalizeFirstLetter(asset.valuation)} by ${priceDiff.toFixed(
                3
              )} `
            : "NFS "}
        </div>

        <div className="singlecardControls">
          <ButtonGroup>{renderButtons()}</ButtonGroup>
          <div className="singlecardlikebutton">
            {asset.liked ? (
              <BsSuitHeartFill className="likeButtonFilled" />
            ) : (
              <BsSuitHeart className="likeButtonEmpty" />
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
