import ModalOrder from "../../modals/ModalOrder";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { getFirestore } from "../../services/getFirebase";
import "firebase/firestore";
function AddProducts() {
  const [idorder, setidorder] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [formProduct, setFormProduct] = useState({
    bread: "",
    category: "",
    description: "",
    image: "",
    name: "",
    price: "",
    stock: "",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();

    /* Conexion a base de datos firestores*/
    const db = getFirestore();
    db.collection("items")
      .add(formProduct)
      .then((resp) => setidorder(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        setFormProduct({
          bread: "",
          category: "",
          description: "",
          image: "",
          name: "",
          price: "",
          stock: "",
        });
        e.target.reset();
      });
    setModalShow(true);
  };
  const handleClose = () => {
    setModalShow(false);
    setidorder("")
  };

  /*Guardar los inputs en el estado del formulario*/
  const handleOnChange = (e) => {
    if (e.target.name === "price" || e.target.name === "stock") {
      setFormProduct({
        ...formProduct,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setFormProduct({
        ...formProduct,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <div className="form-add">
      <span>Complete los campos para agregar un producto</span>
      <Form
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        id="form-order"
        className="mt-4"
      >
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Bread</Form.Label>
              <Form.Control
                type="text"
                name="bread"
                //defaultValue={formData.name}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                //defaultValue={formData.tel}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                //defaultValue={formData.email}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Link Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                //defaultValue={formData.email}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control
                type="text"
                name="name"
                //defaultValue={formData.name}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                //defaultValue={formData.tel}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                //defaultValue={formData.name}
              />
            </Form.Group>
          </Col>
        </Row>
        <button className="button-primary">Agregar Producto</button>
        <ModalOrder
          message={"Se agrego el producto a la base de datos"}
          show={modalShow}
          onHide={() => setModalShow(false)}
          idorder={idorder}
          mycustomattribute={handleClose}
        />
      </Form>
    </div>
  );
}

export default AddProducts;
