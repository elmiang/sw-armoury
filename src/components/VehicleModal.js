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

  const onKeyPress = (event) => {
    if (props.modalOpen && event.key === 'Escape') {
      props.toggleModal();
    }
  }

  const {vehicle_class, starship_class, model, manufacturer, cost_in_credits, 
        max_atmosphering_speed, length, crew, cargo_capacity, hyperdrive_rating, MGLT} = props;

  const formatter = new Intl.NumberFormat();

  return(
    <div className="modal-overlay" onClick={onOverlayClick} onKeyDown={onKeyPress}>
      <Modal className="card-modal" show={props.modalOpen} onClick={onModalClick}>
        <Modal.Header className="justify-content-center">
          <Modal.Title className="display-6">{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <div className="fst-italic">
              <p>{vehicle_class ? vehicle_class : starship_class} {model}</p>
              <p>{manufacturer}</p>
            </div>
            <div className="align-self-center">
              <img src={props.imageUrl} alt="" width='400' height='400'/>
            </div>
            <div className="py-3 px-2">
              <h3 className="pb-2">Specifications</h3>
              <div className="ps-2">
                <p>Max atmosphering speed: {max_atmosphering_speed} km/h</p>
                {starship_class && <p>Hyperdrive Rating: {hyperdrive_rating}</p>}
                {starship_class && <p>MGLT: {MGLT}</p>}
                <p>Length: {formatter.format(length)} meters</p>
                <p>Crew: {crew}</p>
                <p>Cargo capacity: {!isNaN(cargo_capacity) ? formatter.format(cargo_capacity) : 0} kilograms</p>
              </div>
            </div>
            <p className="align-self-center fs-4 fw-bold">{!isNaN(cost_in_credits) ? 'ᖬ' + formatter.format(cost_in_credits) : cost_in_credits}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VehicleModal;