import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({item,onAdd}) {


  return (
    <div className="container-product">
      {item.map((prod) => {
        return (
          <Item
            key={prod.id}
            title={prod.name}
            description={prod.descripcion}
            image={prod.image}
            stock={prod.stock}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
}
