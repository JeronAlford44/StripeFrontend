import { useContext, useState } from 'react'

import { useCart } from '../Providers/CartProvider'

export interface Item {
  name: string
  price: string
  description: string
  image: string
  count: number
}

export default function CatalogCard({ item }: { item: Item }) {
  
  const [quantity, setQuantity] = useState(0)
  const Cart = useCart()

  const increment = () => {
    setQuantity(num => num + 1)
    Cart?.addItemToCart(item)
  }

  const decrement = () => {
    // RemoveItem(item)
setQuantity(num => Math.max(0, num - 1))
      Cart?.removeItemFromCart(item)
  }

  return (
    <div>
      <section className="bg-gray-900 rounded-lg shadow-md p-4 transition duration-300 transform hover:scale-105">
        <img className="w-64 h-48 object-cover rounded-lg mb-2" src={item.image} alt={item.name} />
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">{item.name}</div>
          <div className="text-gray-300 text-lg font-bold">${item.price}</div>
        </div>
        {/* {(hovered || quantity > 0) && <div className="text-gray-300 mt-2">{item.description}</div>} */}
        <div
          // onMouseOver={() => setHovered(true)}
          // onMouseOut={() => setHovered(false)}
          className="cursor-pointer"
        ></div>
        <div className="text-white  justify-center flex flex-row gap-4">
          <button className="bg-gray-600 px-4 rounded" onClick={decrement}>
            <span>-</span>
          </button>
          <div>{quantity}</div>
          <button className="bg-gray-600 px-4 rounded" onClick={increment}>
            <span>+</span>
          </button>
        </div>
      </section>
    </div>
  )
}
