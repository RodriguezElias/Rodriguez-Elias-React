import Placeholder from "../Placeholder/Placeholder";
import Item from "../Item/Item";
import './ItemList.css'

export default function ItemList({item,onAdd,status}) {


  return (
    <div className="container-product">
      {item.map((prod) => {
        return (
          <Item
            key={prod.id}
            id={prod.id}
            title={prod.name}
            price={prod.price}
            description={prod.description}
            image={prod.image}
            stock={prod.stock}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
}
