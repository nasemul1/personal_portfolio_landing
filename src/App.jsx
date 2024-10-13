import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='grid grid-cols-12 gap-3 font-montserrat'>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App