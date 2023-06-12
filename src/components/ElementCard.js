import { useState } from "react";
import { Card } from "react-bootstrap";
import VehicleModal from "./VehicleModal";

const ElementCard = (props) => {
  const [modalOpen, toggleModal] = useState(false);

  const handleClick = () => {
    toggleModal(!modalOpen);
  }

  const { name, model, cost_in_credits } = props;

  return(
    <div>
      <Card bg='secondary gradient' text='light' className="m-3 rounded" onClick={handleClick}>
        <Card.Body>
          <Card.Title className="fw-bolder">{name}</Card.Title>
          <Card.Text className="fst-italic">{model}</Card.Text>
          <Card.Text className="fw-light">{!isNaN(cost_in_credits) ? 'ᖬ' + new Intl.NumberFormat().format(cost_in_credits) : props.cost_in_credits}</Card.Text>
        </Card.Body>
      </Card>
      <VehicleModal modalOpen={modalOpen} toggleModal={handleClick} {...props}/>
    </div>
  );
}

export default ElementCard;