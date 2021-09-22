import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

export default function ItemDetail({ item }) {
  const [amount, setAmount] = useState(0)
  const onAdd = (cant)=>{
    console.log(cant);
    setAmount(cant)
  }
  
  
  return (
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>
      <div>
        <h1>{item.name}</h1>
        <h2>{item.description}</h2>
        <span>{item.price}</span>
      </div>
      <div>
        <ItemCount  initial={1} onAdd={onAdd} stock={5}/>
      </div>
    </div>
  );
}
