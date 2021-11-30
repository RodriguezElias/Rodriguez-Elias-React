import { useState, useEffect } from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase";
import "firebase/firestore";
import FormOrder from "../FormOrder/FormOrder";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState([]);
  const [idorder, setidorder] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });
  const { cartList, calcPrice, deleteItem } = useCartContext();

  useEffect(() => {
    setTotalPrice(calcPrice());
  }, [cartList, calcPrice]);

  const handleOnSubmit = (e) => {
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
              <CartItem
                key={item.item.id}
                item={item}
                image={item.item.image}
                name={item.item.name}
                price={item.item.price}
                quantity={item.item.quantity}
                deleteitem={deleteItem}
              />
            ))}
          </div>
          <div className="container-payment">
            <div className="payment-info">
              <p>
                Precio Total: <span>{totalPrice}</span>
              </p>
            </div>
            <FormOrder
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              idorder={idorder}
              ModalShow={modalShow}
            />
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
