import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {
  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const dbQuery = getFirestore()
    dbQuery.collection('items').doc(id).get()
    .then(item => setItem({id: item.id, ...item.data()}))
    .catch((err) => console.log(err))
  },[id])
  
  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}
