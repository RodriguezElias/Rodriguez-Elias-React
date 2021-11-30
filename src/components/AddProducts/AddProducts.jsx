import FormAddProduct from "../FormAddProduct/FormAddProduct";
import { useState } from "react";
import { getFirestore } from "../../services/getFirebase";
import "firebase/firestore";
import { useLoginContext } from "../../context/loginContext";

function AddProducts() {
  const [idorder, setidorder] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const { user } = useLoginContext();
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
      });
    setModalShow(true);
  };
  const handleClose = (reset) => {
    reset({
      bread: "",
      category: "",
      description: "",
      image: "",
      name: "",
      price: "",
      stock: "",
    });
    setModalShow(false);
    setidorder("");
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
    <>
      {user && (
        <div className="form-add">
          <span>Complete los campos para agregar un producto</span>
          <FormAddProduct
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            handleClose={handleClose}
            idorder={idorder}
            modalShow={modalShow}
          />
        </div>
      )}
      {!user && (
        <div className="cart-empty">
          <p>Para agregar productos debe estar logueado</p>
        </div>
      )}
    </>
  );
}

export default AddProducts;
