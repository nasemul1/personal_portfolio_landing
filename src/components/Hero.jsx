import React from 'react'
import model from '../assets/model.png'
import 'boxicons'

function Hero({thm}) {
  return (
    <div className='my-20 p-4 col-start-2 col-span-10 flex items-center justify-between gap-x-5'>
        <div className='w-[50%]'>
            <p className='font-bold text-[24px]'>Hi I am</p>
            <p className='font-bold text-[32px] text-[#FD6F00]'>Mohammad Umair</p>
            <p className='font-bold text-[100px] leading-[120px]'>UI & UX</p>
            <p className='ml-[16%] font-bold text-[100px] leading-[120px]'>Designer</p>
            <p className='text-[21px] mt-5'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            <button className='mt-5 text-[21px] bg-[#FD6F00] text-white px-7 py-2 rounded-md hover:bg-orange-600'>Hire Me</button>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex  items-end justify-center'>
                <div className='z-10 flex flex-col items-center relative'>
                    <div className='w-[374px] h-[83px] absolute top-[13%] bg-[#FD6F00] bg-opacity-60'></div>
                    <img src={model} alt="profile image" className='w-[485px] rounded-br-full rounded-bl-full ' />
                </div>
            </div>
            <div className='my-6 flex gap-x-2'>
                {thm ==='light' ? <box-icon type='logo' name='facebook-circle' size="md"></box-icon> : <box-icon name='facebook-circle' type='logo' color='#ffffff' size="md"></box-icon>}
                {thm ==='light' ? <box-icon type='logo' name='twitter' size="md"></box-icon> : <box-icon name='twitter' type='logo' color='#ffffff' size="md"></box-icon>}
                {thm ==='light' ? <box-icon type='logo' name='instagram' size="md"></box-icon> : <box-icon name='instagram' type='logo' color='#ffffff' size="md"></box-icon>}
                {thm ==='light' ? <box-icon type='logo' name='linkedin-square' size="md"></box-icon> : <box-icon name='linkedin-square' type='logo' color='#ffffff' size="md"></box-icon>}
            </div>
        </div>
    </div>
  )
}

export default Hero

{/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-orange-500 opacity-80" /> */}