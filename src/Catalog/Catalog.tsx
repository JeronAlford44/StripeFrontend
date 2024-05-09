import React, { useState, useEffect } from 'react'
import items from './items'
import CatalogCard from './CatalogCard'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

import { useNavigate } from 'react-router-dom'
import { useCart } from '../Providers/CartProvider'

export default function Catalog() {
    const Cart = useCart()
  const navigate = useNavigate()


  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-between">
        <div className="flex justify-center self-center">
          <span className=" text-white text-3xl">ELECTRONIC SUPERSTORE</span>
        </div>
        <div className="flex justify-end gap-8">
          <ShoppingCartOutlinedIcon
            className="text-white"
            style={{ width: '48px', height: '48px' }}
          />
          <div className="text-white">{Cart?.size()}</div>
          <button onClick={() => {
            navigate('/cart')
          }}className="px-2 bg-gray-400 rounded-lg">
            <span className="text-white text-lg font-bold">View Cart</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {items.map((item, idx) => {
          return (
            <section key={idx} className="">
              <CatalogCard item={item} />
            </section>
          )
        })}
      </div>
    </section>
  )
}
