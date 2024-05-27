import React from 'react'
import { useCart } from '../../Providers/CartProvider'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../Catalog/items'

const CartItemCard = ({ index, item }: { index: number; item: Product }) => {
  return (
    <div key={index} className="flex flex-row p-6 gap-x-32 rounded-lg shadow-lg">
      <img
        src={item.images[0]}
        alt={item.id}
        className="w-auto h-24 object-cover rounded-lg mb-4"
      />
      <div>
        <section>
          <div className="text-2xl text-white font-bold mb-2">{item.id}</div>
        </section>
        <section className="flex flex-row gap-x-16">
          <p className="text-gray-400">Each ${item.default_price}</p>
          <p className="text-gray-400">Quantity {item.metadata.count}</p>
        </section>
      </div>

      {/* <div className="text-gray-300 mb-2">{item.description}</div> */}
    </div>
  )
}
export default function CartSection() {
  const Cart = useCart()
  

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="text-4xl text-white font-extrabold mb-10">Shopping Cart</div>
      <div className="mb-6"></div>
      <div className="grid  gap-6 w-full max-w-6xl">
        {Cart?.cartItems.map((item, index) => (
          <CartItemCard index={index} item={item} />
        ))}
      </div>
    </div>
  )
}
