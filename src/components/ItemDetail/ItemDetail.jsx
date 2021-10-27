import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import Placeholder from "../Placeholder/Placeholder";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

export default function ItemDetail({ item }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (cant) => {
    addToCart({ item: item, quantity: cant });
  };
  return (
    <>
      {!isImageLoaded && <Placeholder />}
      <div
        className={`${isImageLoaded ? "d-block" : "d-none"} container-detail`}
        onLoad={() => setTimeout(() => setIsImageLoaded(true), 1500)}
      >
        <Breadcrumbs category={item.category} bread={item.bread} />
        <div className="detail">
          <div className="image-detail">
            <img src={item.image} alt="" />
          </div>
          <div className="info-detail">
            <h2>{item.name}</h2>
            <div className="stock-detail">
              {item.stock >= 1 ? (
                <p className="me-4 link-light bg-success rounded">Hay Stock</p>
              ) : (
                <p className="me-4 link-light bg-danger rounded">
                  No hay stock
                </p>
              )}
              <p>Categoria: {item.category}</p>
            </div>
            <p>
              Precio Web: <span>{`$ ${item.price}`}</span>
            </p>
            <p className="cuotas">¡Hasta 12 CUOTAS SIN INTERÉS!</p>
            <img
              src="https://www.gezatek.com.ar/images/tarjeas_sin.jpg"
              alt="tarjetas"
            />
            {item.stock >= 1 && <ItemCount onAdd={onAdd} stock={item.stock} />}
            <p className="envios">
              {" "}
              <i class="fas fa-truck"></i> ENVIOS A TODO EL PAÍS
            </p>
            <div className="description-detail">
              <p>Descripcion del producto</p>
              <h4>{item.description}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
