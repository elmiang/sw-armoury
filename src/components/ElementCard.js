import { useState } from "react";
import { Card } from "react-bootstrap";
import StarshipModal from "./StarshipModal";
import VehicleModal from "./VehicleModal";

const ElementCard = (props) => {
  const [modalOpen, toggleModal] = useState(false);

  const handleClick = () => {
    toggleModal(!modalOpen);
  }

  return(
    <div>
      <Card bg='secondary gradient' text='light' className="m-3 rounded" onClick={handleClick}>
        <Card.Body>
          <Card.Title className="fw-bolder">{props.name}</Card.Title>
          <Card.Text className="fst-italic">{props.model}</Card.Text>
          <Card.Text className="fw-light">{props.cost_in_credits}</Card.Text>
        </Card.Body>
      </Card>
      {props.vehicle_class && <VehicleModal modalOpen={modalOpen} toggleModal={handleClick} {...props}/>}
      {props.starship_class && <StarshipModal modalOpen={modalOpen} toggleModal={handleClick} {...props}/>}
    </div>
  );
}

export default ElementCard;