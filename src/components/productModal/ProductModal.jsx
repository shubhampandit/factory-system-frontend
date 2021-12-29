import React from "react";
import { Modal } from "react-bootstrap";
import "./ProductModal.css";

function ProductModal(props) {
  const { children, openModal, setOpenModal } = props;
  return (
    <Modal
      size="lg"
      show={openModal}
      onHide={() => setOpenModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

export default ProductModal;
