import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'

function App() {
  return (
    <div className='grid grid-cols-12 gap-3 font-montserrat'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App