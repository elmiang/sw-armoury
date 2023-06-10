import { useState } from "react";
import { Card } from "react-bootstrap";
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
          <Card.Text className="fw-light">{!isNaN(props.cost_in_credits) ? 'ᖬ' + props.cost_in_credits : props.cost_in_credits}</Card.Text>
        </Card.Body>
      </Card>
      <VehicleModal modalOpen={modalOpen} toggleModal={handleClick} {...props}/>
    </div>
  );
}

export default ElementCard;