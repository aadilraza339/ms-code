import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Product from '../pages/product'
// import OtherPage from './pages/OtherPage';

const router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />

        {/* <Route path="/other" element={<OtherPage />} /> */}
      </Routes>
    </Router>
  )
}
export default router
