import React from 'react'
import logo from '../assets/logo.png'
import logo1 from '../assets/logo-d.png'

function Navbar({thm}) {
    
    return (
        <>
            <nav className="col-start-2 col-span-10 flex justify-between items-center px-4 py-10 text-[21px]">
                {thm==='light' ? <img src={logo} alt='logo'/> : <img src={logo1} alt='logo'/>}
                <ul className="flex items-center space-x-6 font-medium dark:text-white">
                    <li><a href="#home" className="hover:text-[#FD6F00]">Home</a></li>
                    <li><a href="#about" className="hover:text-[#FD6F00]">About Me</a></li>
                    <li><a href="#services" className="hover:text-[#FD6F00]">Services</a></li>
                    <li><a href="#projects" className="hover:text-[#FD6F00]">Projects</a></li>
                    <li><a href="#testimonials" className="hover:text-[#FD6F00]">Testimonials</a></li>
                    <li><a href="#contact" className="hover:text-[#FD6F00]">Contact</a></li>
                    <button className="bg-[#FD6F00] text-white px-4 py-2 rounded-md hover:bg-orange-600">
                        Download CV
                    </button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar