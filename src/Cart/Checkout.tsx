import { useState } from 'react'
import { useCart } from '../Providers/CartProvider'

export default function Checkout() {
  const Cart = useCart()
  const [cardNumber, setCardNumber] = useState<string>('')
  const [expDate, setExpDate] = useState<string>('')
  const [cvv, setCvv] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission, such as processing payment or validating inputs
  }

  return (
    <section className="flex flex-row justify-evenly">
      <section>
        <div className="text-white text-3xl font-bold mb-6">CHECKOUT</div>
        <div>
          {Cart?.cartItems.map(item => {
            return (
              <div>
                <div className="text-white">{item.id}</div>
                <div className="text-gray-600">{item.default_price}</div>
                <div className="text-white">Quantity: {item.metadata.count}</div>
              </div>
            )
          })}
        </div>
        <div className="text-white">Total: {Cart?.cartTotal()}</div>
      </section>
      <section className="flex flex-col items-center">
        <div className="p-8 w-96 bg-gray-300 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={cardNumber}
              onChange={e => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={expDate}
              onChange={e => setExpDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={cvv}
              onChange={e => setCvv(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Pay Now
            </button>
          </form>
        </div>
      </section>
    </section>
  )
}
