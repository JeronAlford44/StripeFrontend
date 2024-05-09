import React, { useState, createContext, useContext, useEffect } from 'react'
import { Item } from "../Catalog/CatalogCard";
// Create a context for the cart

interface CartContextProps{
    cartItems: Item[];
    addItemToCart: (item: Item) => void;
    removeItemFromCart: (item: Item) => void;
    clearCart: () => void;
    cartTotal: () => number
    size: () => number
}
const CartContext = createContext<CartContextProps|null>(null)

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext)
}

// CartProvider component
export default function CartProvider(props: { children: React.ReactElement | any }) {
  // State to hold the cart items
  //need to build local storage spot on startup, upate storage as cart changes, update cart with storage items upon page reload
  window.localStorage.setItem('cart',[])
  const [cartItems, setCartItems] = useState<Item[]>([])
  useEffect(() => {
const updateLocalStorage = () => {
window.localStorage.setItem('cart',cartItems)

}
updateLocalStorage()
  },[cartItems])
  // Function to add an item to the cart
  const addItemToCart = (item: Item) => {
    let exists = false

    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.name === item.name) {
        exists = true
        return { ...cartItem, count: cartItem.count + 1 } // Increment the count if item exists
      }
      return cartItem
    })

    if (!exists) {
      updatedCartItems.push({ ...item, count: 1 }) // Add the item with count 1 if it doesn't exist
    }

    setCartItems(updatedCartItems)
  }


  // Function to remove an item from the cart
  const removeItemFromCart = (item: Item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.name !== item.name)
    setCartItems(updatedCartItems)
  }

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([])
  }
  const size = () => {
    let unique = cartItems.filter((item, i, ar) => ar.indexOf(item) === i)
    return unique.length
  }
  const cartTotal = () => {
    let total = 0.00
    cartItems.forEach(item =>{
      total += Number(item.price) * item.count
    })
    return total
  } 

  // Value to be provided by the context
  const cartContextValue: CartContextProps = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    cartTotal,
    size,
  }
  

  return <CartContext.Provider value={cartContextValue}>{props.children}</CartContext.Provider>
}
