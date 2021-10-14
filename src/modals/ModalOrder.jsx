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
        <h4>Compra Exitosa</h4>
        <p>Puede seguir comprando o ver sus ordenes de compras en el menu.</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={props.mycustomattribute}
          style={{
            backgroundColor: "#3ac8c8 ",
            padding: "4px",
            borderRadius: "5px",
            margin: "2px",
          }}
        >
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}
