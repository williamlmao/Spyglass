import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import FlipData from "./FlipData";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { likeAsset, rateAsset } from "../actions";
import { useKeyPressEvent } from "react-use";
const FlipCard = ({ asset }) => {
  console.log("im rerendering", asset.rating);
  let dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [ratingValue, setratingValue] = useState(asset.rating);
  console.log("rating value", ratingValue);
  useEffect(() => {
    setChecked(asset.rating);
  }, [asset.rating]);
  // When an asset is liked, dispatch the token id
  const handleLike = () => {
    console.log(asset.tokenId + " is liked");
    likeAsset(dispatch, asset.tokenId);
  };
  const handleRating = (key) => {
    console.log("rating is set to " + key);
    setratingValue(key);
    rateAsset(dispatch, asset.tokenId, key);
  };
  useKeyPressEvent(" ", () => {
    handleLike();
  });
  useKeyPressEvent("1", () => {
    console.log("1 is pressed");
    handleRating(1);
  });
  useKeyPressEvent("2", () => {
    handleRating(2);
  });
  useKeyPressEvent("3", () => {
    handleRating(3);
  });
  useKeyPressEvent("4", () => {
    handleRating(4);
  });
  useKeyPressEvent("5", () => {
    handleRating(5);
  });
  useKeyPressEvent("6", () => {
    handleRating(6);
  });
  useKeyPressEvent("7", () => {
    handleRating(7);
  });
  useKeyPressEvent("8", () => {
    handleRating(8);
  });
  useKeyPressEvent("9", () => {
    handleRating(9);
  });
  useKeyPressEvent("0", () => {
    handleRating(10);
  });

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
          size="lg"
        >
          {button.value}
        </ToggleButton>
      );
    });
  };
  return (
    <div id="flipbook">
      <div className="flipcard">
        <SingleCard asset={asset} />
        <div className="flipcardLayer1">
          <AiOutlineCaretLeft className="caret" />
          <div className="likebutton">
            {asset.liked ? (
              <BsSuitHeartFill className="likeButtonFilled" />
            ) : (
              <BsSuitHeart className="likeButtonEmpty" />
            )}
          </div>

          <AiOutlineCaretRight className="caret" />
        </div>
        <div className="flipcardLayer2">
          <ButtonToolbar>
            <ButtonGroup>{renderButtons()}</ButtonGroup>
          </ButtonToolbar>
        </div>

        <FlipData asset={asset} />
      </div>
    </div>
  );
};

export default FlipCard;
