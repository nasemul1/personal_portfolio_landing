import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'

function App() {
  return (
    <div className='grid grid-cols-12 gap-3 font-montserrat'>
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  )
}

export default App