import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { setView } from "../actions";

const ViewSelection = () => {
  const dispatch = useDispatch();
  return (
    <div className="viewSettings">
      <div className="viewAs">View As:</div>
      <div className="viewButtons">
        <Button
          variant="secondary"
          onClick={() => {
            setView(dispatch, "Grid");
          }}
          className="viewbutton1"
        >
          Grid
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setView(dispatch, "Feed");
          }}
          className="viewbutton2"
        >
          Feed
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setView(dispatch, "Flip");
          }}
          className="viewbutton3"
        >
          Flipbook
        </Button>
      </div>
    </div>
  );
};

export default ViewSelection;
