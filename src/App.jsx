import {React, useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light');
        
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
    }
  };
  return (
    <div className='relative grid grid-cols-12 gap-3 font-montserrat dark:bg-[#1E1E1E] dark:text-white'>
      <button
          onClick={toggleTheme}
          className="fixed top-10 right-10 flex justify-center items-center py-2 px-2 transition-colors duration-500 border rounded-full"
      >
          {theme==='light' && <box-icon name='moon' rotate='180' animation='tada' ></box-icon>}
          {theme==='dark' && <box-icon name='sun' rotate='180' animation='tada' color='#ffffff' ></box-icon>}
      </button>
      <Navbar thm={theme}/>
      <Hero thm={theme}/>
      <About />
      <Project />
      <Testimonial />
      <Contact />
      <Footer thm={theme}/>
    </div>
  )
}

export default App