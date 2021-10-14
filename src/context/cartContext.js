import { useState, createContext , useContext } from "react";

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)


export default function CartContextProvider({children}){
  const [cartList, setCartList] = useState([])
  
  // function isInCart(id){
  //   return cartList.some(prod => prod.item.id === id)
  // }
  function addToCart(item){
    let productIndex = cartList.findIndex(prod => prod.item.id === item.item.id)
    if (productIndex === -1) {
      setCartList([...cartList, item])
    }
    else{
      let cartModified = [...cartList]
      cartModified[productIndex].quantity += item.quantity
      setCartList(cartModified)
    }
  }
  const deleteCart = () => {
    setCartList([])
  }
  const deleteItem= (item) =>{
    const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id)
    setCartList([...deleteProduct])
    console.log(cartList);
  }
  const calcPrice =()=>{
    return cartList.reduce((acum,prod)=> (acum + (prod.quantity * prod.item.price)), 0)
  }

  const iconCart = () => {
    return cartList.reduce((acum, prod) => acum + prod.quantity, 0)
  }
  
  return(
    <cartContext.Provider value={{cartList, addToCart, deleteCart, calcPrice, deleteItem, iconCart}}>
      {children}
    </cartContext.Provider>

  )
}