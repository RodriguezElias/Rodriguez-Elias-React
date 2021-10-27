import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function ItemCount({ stock, onAdd }) {
  const [initial, setInitial] = useState();
  const [stockItem, setStockItem] = useState()
  const [changeButton, setChangeButton] = useState(true);
  const [state, setstate] = useState(true);

  useEffect(() => {
    setInitial(1)
    setStockItem(stock)
  }, [stock])

  const addcount = () => {
    if (initial < stockItem) {
      setInitial(initial + 1);
      setstate(false);
    }
  };
  const decreasecount = () => {
    if (initial > 1) {
      setInitial(initial - 1);
      setstate(false);
    }
  };
  const addCart = () => {
    onAdd(initial);
    setChangeButton(false);
    setstate(true);
  };
  return (
    <div className="container-buttons">
      <div className="control-count">
        <button
          className="bg-transparent border-0 button-primary"
          onClick={decreasecount}
        >
          <i className="fas fa-minus"></i>
        </button>
        <span>{initial}</span>
        <button
          className="bg-transparent border-0 button-primary"
          onClick={addcount}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="add-cart">
        {changeButton ? (
          <button onClick={addCart} className="button-primary">
            Agregar Al carrito
          </button>
        ) : (
          <>
            <div style={{ display: state ? "block" : "none" }}>
              <Link to="/cart">
                <button className="  button-primary">Terminar compra</button>
              </Link>
              <Link to="/">
                <button className="  button-primary">Seguir comprando</button>
              </Link>
            </div>
            {state === false && (
              <button onClick={addCart}>Agregar Al carrito</button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
