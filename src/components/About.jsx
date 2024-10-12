import React from 'react'
import model from '../assets/model.png'

function About() {
  return (
    <div className='col-start-2 col-span-10'>
        <div>
            <div className='flex  items-end justify-center'>
                <div className='z-10 flex flex-col items-center relative'>
                    <div className='w-[374px] h-[83px] absolute top-[13%] bg-[#FD6F00] bg-opacity-60'></div>
                    <img src={model} alt="profile image" className='w-[485px] h-[600px] rounded-br-full rounded-bl-full ' />
                </div>
                <div class="p-1 h-[485px] w-[485px] rounded-full overflow-hidden flex items-center justify-center absolute bg-gradient-to-b from-white to-[#FD6F00]">
                    <div class="w-full h-full rounded-full bg-white">
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default About