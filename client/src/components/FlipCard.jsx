import React from "react";
import Card from "react-bootstrap/Card";

/**
 * A single card grid or feed view
 * Maybe use this to dynamically update class, to display different card styles depending on view
 * @param {*} param0
 * @returns
 */
const FlipCard = ({ asset }) => {
  return (
    <Card>
      <Card.Img variant="top" src={asset.imageUrl} />
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Title>{asset.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default FlipCard;
