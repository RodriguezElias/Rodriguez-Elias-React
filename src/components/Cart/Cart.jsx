import { useState, useEffect } from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase";
import "firebase/firestore";
import ModalOrder from "../../modals/ModalOrder";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState([]);
  const [confirmShow, setConfirmShow] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [idorder, setidorder] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const { cartList, calcPrice, deleteItem, deleteCart } = useCartContext();

  useEffect(() => {
    setTotalPrice(calcPrice());
  }, [cartList, calcPrice]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    /* Crear orden de compra*/
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = formData;
    order.totalOrder = calcPrice();
    order.item = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.name;
      const quantity = cartItem.quantity;
      const price = cartItem.item.price;
      const totalPrice = cartItem.item.price * cartItem.quantity;
      return { id, title, quantity, price, totalPrice };
    });

    /* Conexion a base de datos firestores*/
    const db = getFirestore();
    db.collection("orders")
      .add(order)
      .then((resp) => setidorder(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        setFormData({
          name: "",
          tel: "",
          email: "",
        });
        e.target.reset();
      });

    /*Actualizar el stock en el listado de items*/
    const itemsToUpdate = db.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((i) => i.item.id)
    );

    const batch = db.batch();

    itemsToUpdate.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((item) => item.item.id === docSnapshot.id).quantity,
        });
      });
      batch
        .commit()
        .then(function () {
          return true;
        })
        .catch((err) => console.log(err));
    });
    setModalShow(true);
  };
  const validateEmail = () => {
    const email1 = document.querySelector(".email1");
    const email2 = document.querySelector(".email2");
    if (email1.value === email2.value) {
      setConfirmShow(true);
      setAlertShow(false);
    } else if (email1.value === " " || email2.value === " ") {
      setConfirmShow(false);
      setAlertShow(true);
    } else {
      setConfirmShow(false);
      setAlertShow(true);
    }
  };

  /*Guardar los inputs en el estado del formulario*/
  const handleOnChange = (e) => {
    if (e.target.name === "tel") {
      setFormData({
        ...formData,
        tel: Number(e.target.value),
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      {cartList.length > 0 && (
        <div className="container-cart">
          <div className="container-items">
            {cartList.map((item) => (
              <div className="cart-item" key={item.item.id}>
                <div className="image-item">
                  <img src={item.item.image} alt="" />
                </div>
                <div className="info-item">
                  <div className="icon-remove-item">
                    <button onClick={() => deleteItem(item)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                  <p className="fs-4 fw-bold">{item.item.name}</p>
                  <p>Precio: {item.item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="container-payment">
            <div className="payment-info">
              <p>
                Precio Total: <span>{totalPrice}</span>
              </p>
            </div>
            <div className="form-order">
              <span className="fs-4 fw-bold ">
                Complete el formulario para confirmar su compra
              </span>
              <Form
                validated={validated}
                onChange={handleOnChange}
                onSubmit={handleOnSubmit}
                id="form-order"
                className="mt-4"
              >
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    defaultValue={formData.name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="Telefono"
                    name="tel"
                    defaultValue={formData.tel}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    //onChange={validateEmail}
                    className="email1"
                    type="email"
                    placeholder="Email"
                    name="email"
                    defaultValue={formData.email}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="email2"
                    onChange={validateEmail}
                    required
                    type="email"
                    placeholder="Confirme su email"
                    name="email2"
                  />
                  <Form.Text id="passwordHelpBlock" muted>
                    Podra confirmar su compra una vez que complete todo el
                    formulario
                  </Form.Text>
                </Form.Group>
                {confirmShow === true && (
                  <button
                    style={{
                      backgroundColor: "#3ac8c8",
                      padding: "4px",
                      margin: "2px",
                      borderRadius: "5px",
                    }}
                  >
                    Confirmar Compra
                  </button>
                )}
                <Alert variant={"danger"} show={alertShow}>
                  Los Emails no coinciden, vuelve a intentar!
                </Alert>
                <ModalOrder
                  message={
                    "Puede seguir comprando o ver sus ordenes de compras en el menu."
                  }
                  mycustomattribute={deleteCart}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  idorder={idorder}
                />
              </Form>
            </div>
          </div>
        </div>
      )}
      {cartList.length === 0 && (
        <div className="cart-empty">
          <p>No hay productos en su carrito</p>
          <Link to="/">
            <button className="button-primary">Ir a lista de productos</button>
          </Link>
        </div>
      )}
    </>
  );
}
