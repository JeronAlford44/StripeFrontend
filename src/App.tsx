import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Catalog from './Catalog/Catalog'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import CartProvider from './GlobalProviders/CartProvider'
import Checkout from './Cart/Checkout'

import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from './Cart/CheckoutForm'
import { loadStripe } from '@stripe/stripe-js'
import newPaymentIntent from './stripe/PaymentIntent'
import NewCheckoutForm from './Cart/NewCheckout'
import CartPage from './Cart/Cart'



function App() {
  return (
    <div className="App">
      <main className="bg-black w-screen h-screen p-16 overflow-auto">
        <Router>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/test" element={null} />
            </Routes>
          </CartProvider>
        </Router>
      </main>
    </div>
  )
}

export default App
