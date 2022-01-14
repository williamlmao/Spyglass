import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setView } from "../actions";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const ViewSelection = () => {
  const dispatch = useDispatch();
  return (
    <div className="settings">
      <ButtonGroup aria-label="Basic example">
        <Button
          variant="secondary"
          onClick={() => {
            setView(dispatch, "Grid");
          }}
        >
          Grid
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setView(dispatch, "Feed");
          }}
        >
          Feed
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setView(dispatch, "Flip");
          }}
        >
          Flipbook
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ViewSelection;
