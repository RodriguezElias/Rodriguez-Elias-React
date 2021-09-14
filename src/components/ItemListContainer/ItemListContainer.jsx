import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import getFetch from '../../utils/Mocks'
import './ItemListContainer.css'

export default function ItemListContainer({greetings}) {
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true)
  useEffect(() => {
    getFetch()
    .then((response) => {
      setProduct(response);
    })
    .catch((err) => console.log(err))
    .finally(()=> setloading(false))
  }, [])
 
  const onAdd = (cant)=>{
    console.log(cant);
  }
  return (
    <div className="container-list">
      <div className="title">
      <h1>
        {greetings}
      </h1>
      </div>
      <div className="container-cards">
        {loading? <h2>Cargando...</h2> : <ItemList item={product} onAdd={onAdd}/>}
      </div>
    </div>
  )
}
