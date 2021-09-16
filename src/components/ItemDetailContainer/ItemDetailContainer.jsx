import { useState,useEffect } from "react"
import { getItem } from "../../utils/Mocks"
import ItemDetail from "../ItemDetail/ItemDetail"

export default function ItemDetailContainer() {
  const [item, setItem] = useState({})
  useEffect(() => {
    getItem
    .then(resp => setItem(resp))
  },[])

  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}
