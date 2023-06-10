import React from "react";
import { Modal } from "react-bootstrap";

const VehicleModal = (props) => {
  const onOverlayClick = (event) => {
    if (props.modalOpen) {
      props.toggleModal();
      event.stopPropagation();
    }
  }

  const onModalClick = (event) => {
    event.stopPropagation();
  }

  return(
    <div className="modal-overlay" onClick={onOverlayClick}>
      <Modal className="card-modal" show={props.modalOpen} onClick={onModalClick}>
        <Modal.Header className="justify-content-center">
          <Modal.Title className="fs-2">{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="fst-italic">
            <p>{props.vehicle_class ? props.vehicle_class : props.starship_class} {props.model}</p>
            <p>{props.manufacturer}</p>
            <p>{!isNaN(props.cost_in_credits) ? 'ᖬ' + props.cost_in_credits : props.cost_in_credits}</p>
          </div>
          <div className="py-3 px-2">
            <h3 className="pb-2">Specifications</h3>
            <p>Max speed: {props.max_atmosphering_speed} km/h</p>
            <p>Length: {props.length} meters</p>
            <p>Crew: {props.crew}</p>
            <p>Cargo capacity: {props.cargo_capacity} kilograms</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VehicleModal;