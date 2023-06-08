import React from "react";
import { Card } from "react-bootstrap";

const ElementCard = (props) => {
  return(
    <Card bg='secondary gradient' text='light' className="m-3 rounded">
      <Card.Body>
        <Card.Title className="fw-bolder">{props.name}</Card.Title>
        <Card.Text className="fst-italic">{props.model}</Card.Text>
        <Card.Text className="fw-light">{props.cost_in_credits}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ElementCard;