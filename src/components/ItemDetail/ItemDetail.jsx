import { useState } from "react";
import { useCartContext } from "../../context/cartContext";

import ItemCount from "../ItemCount/ItemCount";
import PlaceholderCart from "../Placeholder/PlaceholderCart";


export default function ItemDetail({ item }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const {addToCart} = useCartContext()
  const [amount, setAmount] = useState(0)
  
    const onAdd = (cant)=>{
      setAmount(cant)
      addToCart({item: item, cantidad: cant})
    }
  return (
    <div>
      {!isImageLoaded && <PlaceholderCart />}
      <div className={`${isImageLoaded ? "d-block" : "d-none"}`} onLoad={() => setTimeout(() => setIsImageLoaded(true), 2000)} >
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
    </div>
  );
}
