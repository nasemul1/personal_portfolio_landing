import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className='grid grid-cols-12 gap-3 font-montserrat'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App