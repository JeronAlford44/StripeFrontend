import React from 'react'
import { useCart } from '../Providers/CartProvider'
import { useNavigate } from 'react-router-dom'

export default function ViewCart() {
  const navigate = useNavigate()
  const Cart = useCart()

  const handlePay = () => {
    // Implement payment functionality here
    navigate('/checkout') // Redirect to checkout page after payment
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl text-white font-bold mb-8">Your Cart</div>
      <div className="mb-4">
        <button
          onClick={handlePay}
          className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Pay Now
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {Cart?.cartItems.map((item, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md mb-2"
            />
            <div className="text-xl text-white font-bold mb-1">{item.name}</div>
            <div className="text-gray-300 mb-2">{item.description}</div>
            <div className="text-gray-400 mb-2">Price: ${item.price}</div>
            <div className="text-gray-400">Quantity: {item.count}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
