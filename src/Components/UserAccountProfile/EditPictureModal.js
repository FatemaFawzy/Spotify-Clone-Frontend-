import React from "react";
import Modal from 'react-bootstrap/Modal'
import "./EditPictureModal.css"

const EditPictureModal = (props) =>{

  
  return (
    <Modal className="modal-edit-picture-class"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-header-edit-picture-class">
        <Modal.Title id="contained-modal-title-vcenter">
          Change Your Profile Picture
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-edit-picture-class">
        <h4>Pick up a photo</h4>
       < input type="file" onChange={props.onChangeFile} />

      </Modal.Body>
      <Modal.Footer className="modal-footer-edit-picture-class">
        {props.photo? <button onClick={props.onSaveFile}>Change</button>:null}
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPictureModal;