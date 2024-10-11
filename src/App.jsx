import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='grid grid-cols-12 gap-3 font-montserrat'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App