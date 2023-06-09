import React from "react";
import { Modal } from "react-bootstrap";

const StarshipModal = (props) => {
  const onOverlayClick = (event) => {
    props.toggleModal();
    event.stopPropagation();
  }

  const onModalClick = (event) => {
    event.stopPropagation();
  }

  return(
    <div className="modal-overlay" onClick={onOverlayClick}>
      <Modal show={props.modalOpen} onClick={onModalClick}>
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