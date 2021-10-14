import Item from "../Item/Item";

export default function ItemList({ item, onAdd, status }) {
  return (
    <div className="container-fluid">
      <div className="row">
        {item.map((prod) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3" key={prod.id}>
              <Item
                id={prod.id}
                title={prod.name}
                price={prod.price}
                description={prod.description}
                image={prod.image}
                stock={prod.stock}
                onAdd={onAdd}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
