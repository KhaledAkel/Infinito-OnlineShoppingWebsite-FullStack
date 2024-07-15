import React from 'react'
import { Navbar, Hero, ProductsSection, Offer } from './components'

function App() {
  return (
    <div className=" w-full bg-white">
      <div className="w-[92%] lg:w-[88%] mx-auto py-8">
        <Navbar />
        <Hero />
        <ProductsSection />
        <Offer />
  
      </div>
  </div>

  )
}

export default App
