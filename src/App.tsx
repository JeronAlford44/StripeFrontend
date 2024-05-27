import React from 'react'
import './App.css'
import Catalog from './Catalog/Catalog'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import CartProvider from './Providers/CartProvider'

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
            </Routes>
          </CartProvider>
        </Router>
      </main>
    </div>
  )
}

export default App
