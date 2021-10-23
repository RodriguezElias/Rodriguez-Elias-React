import { Modal } from "react-bootstrap";

export default function ModalOrder(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Id de compra: {props.idorder}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Operacion Exitosa</h4>
        <p>{props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className={"button-primary"}
          onClick={props.mycustomattribute}
        >
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}
