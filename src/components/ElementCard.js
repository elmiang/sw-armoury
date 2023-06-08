import React from "react";
import { Card } from "react-bootstrap";

const ElementCard = ({name, model, cost_in_credits}) => {
  return(
    <Card bg='secondary gradient' text='light' className="m-3 rounded">
      <Card.Body>
        <Card.Title className="fw-bolder">{name}</Card.Title>
        <Card.Text className="fst-italic">{model}</Card.Text>
        <Card.Text className="fw-light">{cost_in_credits}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ElementCard;