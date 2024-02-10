import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Mint from './pages/Mint'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </>
  )
}

export default App