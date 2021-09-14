import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [data, setData] = useState({
    count: initial,
    stocks: stock,
  });
  const addcount = () => {
    if (data.count < data.stocks) {
      setData({
        count: data.count + 1,
        stocks: stock,
      });
    }
  };
  const decreasecount = () => {
    if (data.count > 1) {
      setData({
        count: data.count - 1,
        stocks: stock,
      });
    }
  };

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
      <button onClick={()=>onAdd(data.count)}>Agregar Al carrito</button>
      </div>
    </div>
  );
}
