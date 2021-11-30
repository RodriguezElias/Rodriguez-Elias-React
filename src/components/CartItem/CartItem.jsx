export default function CartItem({
  item,
  image,
  name,
  price,
  quantity,
  deleteitem
}) {
  return (
    <div className="cart-item" >
      <div className="image-item">
        <img src={image} alt="" />
      </div>
      <div className="info-item">
        <div className="icon-remove-item">
          <button onClick={() => deleteitem(item)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
        <p className="fs-4 fw-bold">{name}</p>
        <p>Precio: {price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
    </div>
  );
}
