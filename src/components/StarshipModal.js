import React from "react";
import { Modal } from "react-bootstrap";

const StarshipModal = (props) => {
  return(
    <div>
      <Modal show={props.modalOpen}>
      <Modal.Header>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
    </Modal>
    </div>
  );
}

export default StarshipModal;