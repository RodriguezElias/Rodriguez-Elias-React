import { useCartContext } from "../../context/cartContext";

export default function Cart() {
  const { cartList } = useCartContext();
  return (
    <div>
      {cartList.map((item) => (
        <div>
          <h2>{item.item.name}</h2>
          <h3>{item.cantidad}</h3>
          </div>
      ))}
    </div>
  );
}
