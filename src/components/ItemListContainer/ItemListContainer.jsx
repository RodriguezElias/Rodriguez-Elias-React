import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Placeholder from "../Placeholder/Placeholder";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { getFirestore } from "../../services/getFirebase";

export default function ItemListContainer() {
  const [product, setProduct] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 }
  ]);
  const [loading, setloading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      const dbQuery = getFirestore();
      dbQuery
        .collection("items")
        .where("category", "==", idCategory)
        .get()
        .then((resp) => {
          setProduct(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setloading(false));
    } else {
      const dbQuery = getFirestore();
      dbQuery
        .collection("items")
        .get()
        .then((resp) => {
          setProduct(
            resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setloading(false));
    }
  }, [idCategory]);
  return (
    <div className="container-list">
      <Breadcrumbs category={idCategory} />
      <div className="row">
        {loading &&
          product.map((prod) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 mt-3" key={prod.id}>
                <Placeholder />
              </div>
            );
          })}
      </div>
      {!loading && <ItemList item={product} />}
    </div>
  );
}
