import React from "react";
import { Modal } from "react-bootstrap";

const VehicleModal = (props) => {
  return(
    <Modal>
      <Modal.Header>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
    </Modal>
  );
}

export default VehicleModal;