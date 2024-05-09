import React from 'react'
import logo from './logo.svg'
import './App.css'
import Catalog from './Catalog/Catalog'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import ViewCart from './Cart/ViewCart'
import CartProvider from './Providers/CartProvider'
import Checkout from './Cart/Checkout'

function App() {
  return (
    <div className="App">
      <main className="bg-black w-screen h-screen p-16 overflow-auto">
        <Router>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/cart" element={<ViewCart />} />
              <Route path = '/checkout' element={<Checkout/>}/>
            </Routes>
          </CartProvider>
        </Router>
      </main>
    </div>
  )
}

export default App
