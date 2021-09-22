import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { getItems } from "../../utils/Mocks"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {
  const [item, setItem] = useState({})
  const { id } = useParams()
  useEffect(() => {
    getItems
    .then((response) => {
      setItem(response.find(prod => prod.id.toString() === id))
    })
  },[id])
  
  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}
