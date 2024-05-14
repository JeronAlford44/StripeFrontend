import React, { useState, createContext, useContext, useEffect, SetStateAction } from 'react'
import { Product } from '../Catalog/items';

// Create a context for the cart

interface CartContextProps{
    cartItems: Product[];
    addItemToCart: (item: Product) => void;
    removeItemFromCart: (item: Product) => void;
    clearCart: () => void;
    cartTotal: () => number
    size: () => number
    checkoutInitiated: boolean
    setCheckoutInitiated: React.Dispatch<SetStateAction<boolean>>
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

  const [cartItems, setCartItems] = useState<Product[]>([])
  const [checkoutInitiated, setCheckoutInitiated] = useState<boolean>(false)
//   useEffect(() => {
// const updateLocalStorage = () => {
// window.localStorage.setItem('cart',cartItems)

// }
// updateLocalStorage()
//   },[cartItems])
  // Function to add an item to the cart
  const addItemToCart = (item: Product) => {
    let exists = false

    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        exists = true
        return { ...cartItem, metadata: {count: cartItem.metadata.count + 1} } // Increment the count if item exists
      }
      return cartItem
    })

    if (!exists) {
      updatedCartItems.push({ ...item, metadata:{count: 1} }) // Add the item with count 1 if it doesn't exist
    }

    setCartItems(updatedCartItems)
  }


  // Function to remove an item from the cart
  const removeItemFromCart = (item: Product) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
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
      total += Number(item.default_price) * item.metadata.count
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
    checkoutInitiated,
    setCheckoutInitiated
  }
  

  return <CartContext.Provider value={cartContextValue}>{props.children}</CartContext.Provider>
}

