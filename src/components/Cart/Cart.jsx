import { useCartContext } from "../../context/cartContext";
import { useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState([]);
  const { cartList, calcPrice, deleteItem, iconCart } = useCartContext();

  useEffect(() => {
    setTotalPrice(calcPrice());
  }, [cartList, calcPrice]);
  return (
    <>
      {(cartList.length > 0) && (
        <div className="container-cart">
          <div className="container-items">
            {cartList.map((item) => (
              <div className="cart-item">
                <div className="image-item">
                  <img src={item.item.image} alt="" />
                </div>
                <div className="info-item">
                  <div className="icon-remove-item">
                    <button onClick={() => deleteItem(item)}>
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                  <p>{item.item.name}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="container-payment">
            <p>
              Precio Total: <span>{totalPrice}</span>
            </p>
          </div>
        </div>
      )}
      {(cartList.length === 0) && (
        <div className="cart-empty">
          <p>No hay productos en su carrito</p>
          <Link to="/">
          <button>Ir a lista de productos</button>
          </Link>
        </div>
      )}
    </>
  );
}
