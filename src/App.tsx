import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Catalog from './Catalog/Catalog'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import ViewCart from './Cart/ViewCart'
import CartProvider from './Providers/CartProvider'
import Checkout from './Cart/Checkout'

import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './Cart/CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import newPaymentIntent from './stripe/PaymentIntent'
import NewCheckoutForm from './Cart/NewCheckout'

export const stripePromise = loadStripe(
  'pk_test_51P9sC2KLCmwYX1xyvntRwqQM9FHxgdKprKWqgnZVWQ8fd6wMoJbJubxp51D2uSGkZIBoNj8hNT4poyx9wI3rE19z00s4WXixFl'
)

function App() {

   
  return (
    <div className="App">
      <main className="bg-black w-screen h-screen p-16 overflow-auto">
        <Router>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/cart" element={<ViewCart />} />
              <Route path="/checkout" element={<Checkout />} />
              
              <Route
                path="/test"
                element={<NewCheckoutForm/>}
              />
            </Routes>
          </CartProvider>
        </Router>
      </main>
    </div>
  )
}

export default App
