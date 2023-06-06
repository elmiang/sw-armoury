import React from "react";
import { Card } from "react-bootstrap";

const CardVehicle = (props) => {
  return(
    <Card style={{ width: '8%'}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.model}</Card.Text>
        <Card.Text>{props.cost_in_credits}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardVehicle;