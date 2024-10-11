import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="col-start-2 col-span-10 flex justify-between items-center p-4 bg-white text-[21px]">
            <div className="flex items-center gap-x-2">
                <div className='bg-orange-500 w-[40px] h-[40px] rounded-full flex justify-center items-center'>
                    <p className='font-satisfy font-bold text-[28px] text-white'>mu</p>
                </div>
                <span className="text-2xl text-[#545454]"><span className='text-[#1E1E1E] font-bold'>M</span>umair</span>
            </div>
            <ul className="flex items-center space-x-6 font-medium text-[#1E1E1E]">
                <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                <li><a href="#about" className="hover:text-orange-500">About Me</a></li>
                <li><a href="#services" className="hover:text-orange-500">Services</a></li>
                <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
                <li><a href="#testimonials" className="hover:text-orange-500">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                    Download CV
                </button>
            </ul>
        </nav>
    </>
  )
}

export default Navbar