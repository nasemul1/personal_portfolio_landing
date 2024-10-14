import React from 'react'
import model from '../assets/model2.png'

function About() {
  return (
    <div className='col-start-2 col-span-10 flex items-center justify-between'>
        <div className=''>
            <div className='flex  items-end justify-center'>
                <div className='z-10 flex flex-col items-center relative'>
                    <div className='w-[374px] h-[83px] absolute top-[13%] bg-[#FD6F00] bg-opacity-60'></div>
                    <img src={model} alt="profile image" className='w-[485px] rounded-br-full rounded-bl-full ' />
                </div>
            </div>
        </div>
        <div className='w-[60%]'>
            <p className='text-[65px] font-bold'>About Me</p>
            <p className='text-[21px]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            <div className='my-5'>
                <label htmlFor="ux-r" className='text-[24px] font-bold block'>UX</label>
                <input type="range" min={0} max="100" value="90" id='ux-r' className="range w-full accent-orange-500" />
                <label htmlFor="web-r" className='text-[24px] font-bold block'>Website Design</label>
                <input type="range" min={0} max="100" value="80" id='web-r' className="range w-full accent-orange-500" />
                <label htmlFor="app-r" className='text-[24px] font-bold block'>App Design</label>
                <input type="range" min={0} max="100" value="95" id='app-r' className="range w-full accent-orange-500" />
                <label htmlFor="ux-r" className='text-[24px] font-bold block'>Graphics Design</label>
                <input type="range" min={0} max="100" value="90" id='ux-r' className="range w-full accent-orange-500" />
            </div>
        </div>
    </div>
  )
}

export default About
