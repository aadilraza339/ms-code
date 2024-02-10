import './App.css'

import React from 'react'

import Footer from './components/footer'
import Header from './components/Header'
import Router from './routing/index'
const App = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
