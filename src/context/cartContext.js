import { useState, createContext , useContext } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)


export default function CartContextProvider({children}){
  const [cartList, setCartList] = useState([])
  function isInCart(id){
    return cartList.some(prod => prod.item.id === id)
  }
  function addToCart(item){
    let productIndex = cartList.findIndex(prod => prod.item.id === item.item.id)
    if (productIndex === -1) {
      setCartList([...cartList, item])
    }
    else{
      let cartModified = [...cartList]
      cartModified[productIndex].cantidad += item.cantidad
      setCartList(cartModified)
    }
  }
  console.log(cartList);
  const deleteCart = () => {
    cartList([])
  }
  
  return(
    <cartContext.Provider value={{cartList, addToCart, deleteCart}}>
      {children}
    </cartContext.Provider>

  )
}