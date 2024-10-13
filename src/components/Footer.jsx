import React from 'react'

function Footer() {
  return (
    <div className='col-start-1 col-span-12 bg-[#F8F8F8] flex flex-col items-center'>
        <div className="my-20 flex items-center gap-x-2 scale-150">
                <div className='bg-[#FD6F00] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
                    <p className='font-satisfy font-bold text-[28px] text-white'>mu</p>
                </div>
                <span className="text-2xl text-[#545454]"><span className='text-[#1E1E1E] font-bold'>M</span>umair</span>
        </div>
        <div className='flex gap-x-10 mb-10'>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Home</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>About Us</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Services</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Projects</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Testimonials</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Contact</a>
        </div>
        <div className='mb-10 flex gap-x-2'>
                <box-icon type='logo' name='facebook-circle' size="md"></box-icon>
                <box-icon type='logo' name='twitter' size="md"></box-icon>
                <box-icon name='instagram' type='logo' size="md"></box-icon>
                <box-icon type='logo' name='linkedin-square' size="md"></box-icon>
        </div>
        <div className='w-full h-[84px] bg-[#545454] flex items-center justify-center'>
            <p className='text-[21px] text-white font-medium text-center'>© 2023 <span className='text-orange-500'>Mumair</span> All Rights Reserved , Inc.</p>
        </div>
    </div>
  )
}

export default Footer