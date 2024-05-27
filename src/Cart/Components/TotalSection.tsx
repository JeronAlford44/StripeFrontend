import React, { useEffect } from 'react'
import { useCart } from '../../Providers/CartProvider'
import { useNavigate } from 'react-router-dom'
import { OpenStripeCheckoutSessionUrl } from '../../stripe-api/CheckoutUrl'

export default function TotalSection() {
  const Cart = useCart()

  

  const handlePay = () => {
    const requestBody = {
      lineItems: Cart?.cartItems.map(item => {
        return {
          itemName: item.id,
          quantity: item.metadata.count,
          cost: item.default_price,
        }
      }),
    }
    OpenStripeCheckoutSessionUrl(requestBody)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl text-white font-bold mb-8 text-left">Order Summary</div>
      <div className="flex flex-col p-6 rounded-md shadow-md w-full gap-4">
        <div className="text-white grid grid-cols-2  text-left">
          <p>Shipping cost</p>
          <p>TBD</p>
        </div>
        <div className="text-white grid grid-cols-2  text-left">
          <p>Discount</p>
          <p>$0</p>
        </div>
        <div className="text-white grid grid-cols-2  text-left">
          <p>Tax</p>
          <p>$0</p>
        </div>
        <div className="text-xl text-white font-bold grid grid-cols-2 text-left ">
          <p>Total</p>
          <p>${Cart?.cartTotal()}</p>
        </div>
        <button
          onClick={handlePay}
          className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300 w-full"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}
