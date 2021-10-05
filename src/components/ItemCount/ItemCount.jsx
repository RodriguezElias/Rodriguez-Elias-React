import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [data, setData] = useState({
    count: initial,
    stock: stock,
  });
  const [changeButton, setChangeButton] = useState(true)
  const [state, setstate] = useState(true)
  const addcount = () => {
    if (data.count < data.stock) {
      setData({
        count: data.count + 1,
        stock,
      });
      setstate(false)
    }
  };
  const decreasecount = () => {
    if (data.count > 1) {
      setData({
        count: data.count - 1,
        stock,
      });
      setstate(false)
    }
  };
  const addCart = () =>{
    onAdd(data.count)
    setChangeButton(false)
    setstate(true)
  }
  console.log(state);
  return (
    <div className="container-buttons">
      <div className="control-count">
        <button className="bg-transparent border-0" onClick={decreasecount}>
          <i className="fas fa-minus"></i>
        </button>
        <span>{data.count}</span>
        <button className="bg-transparent border-0" onClick={addcount}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="add-cart">
        { changeButton ? (
          <button onClick={addCart}>Agregar Al carrito</button>
        ) : (
          <>
          <div style={{ display: state? 'block': 'none' } }>
          <Link to='/cart'>
          <button>Terminar compra</button>
          </Link>
          <Link to='/'>
          <button>Seguir comprando</button>
          </Link>
          </div>
          {state ===false && <button onClick={addCart}>Agregar Al carrito</button>}
          </>
        )}
      </div>
    </div>
  );
}
