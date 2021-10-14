import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import PlaceholderCart from "../Placeholder/PlaceholderCart";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";


export default function ItemDetail({ item }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(0);

  const onAdd = (cant) => {
    setAmount(cant);
    addToCart({ item: item, quantity: cant });
  };
  return (
    <>
      {!isImageLoaded && <PlaceholderCart />}
      <div
        className={`${isImageLoaded ? "d-block" : "d-none"} container-detail`}
        onLoad={() => setTimeout(() => setIsImageLoaded(true), 1500)}
      >
        <Breadcrumbs category={item.category} bread={item.bread} />
        <div className="image-detail">
          <img src={item.image} alt="" />
        </div>
        <div className="info-detail">
          <h2>{item.name}</h2>
          <p className="item-description">{item.description}</p>
          <p>
            Precio Web: <span>{`$ ${item.price}`}</span>
          </p>
          <ItemCount initial={1} onAdd={onAdd} stock={5} />
        </div>
      </div>
    </>
  );
}
