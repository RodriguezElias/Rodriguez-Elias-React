import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { getItems } from "../../utils/Mocks";
import { useParams } from "react-router-dom";

export default function ItemListContainer({greetings}) {
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true)
  const { idCategory } = useParams()
  

  useEffect(() => {
    if (idCategory) {
      getItems
      .then((response) => {
        setProduct(response.filter(prod => prod.category === idCategory));
      })
      .catch((err) => console.log(err))
      .finally(()=> setloading(false))
    }else{
      getItems
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => console.log(err))
      .finally(()=> setloading(false))
    }
  }, [idCategory])
 
  return (
    <div className="container-list">
      <div className="title">
      <h1>
        {greetings}
      </h1>
      </div>
      <div className="container-cards">
        {loading? <h2>Cargando...</h2> : <ItemList item={product}/>}
      </div>
    </div>
  )
}
