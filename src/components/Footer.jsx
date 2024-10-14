import React from 'react'

function Footer({thm}) {
  return (
    <div className='col-start-1 col-span-12 bg-[#F8F8F8] dark:bg-[#1E1E1E] flex flex-col items-center'>
        <div className="mt-20 mb-10 flex items-center gap-x-2">
                    <div className='bg-[#FD6F00] w-[48px] h-[48px] rounded-full flex justify-center items-center'>
                        <p className='font-satisfy font-bold text-[28px] text-white'>mu</p>
                    </div>
                    <span className="text-[48px] text-gray-500 dark:text-white"><span className='text-black dark:text-white font-bold'>M</span>umair</span>
                </div>
        <div className='flex gap-x-10 mb-10'>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Home</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>About Us</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Services</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Projects</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Testimonials</a>
            <a href='/' className='text-[21px] cursor-pointer font-medium'>Contact</a>
        </div>
        <div className='mb-20 flex gap-x-2'>
                {thm ==='light' ? <box-icon type='logo' name='facebook-circle' size="md"></box-icon> : <box-icon name='facebook-circle' type='logo' color='#ffffff' size="md"></box-icon>}
                {thm ==='light' ? <box-icon type='logo' name='twitter' size="md"></box-icon> : <box-icon name='twitter' type='logo' color='#ffffff' size="md"></box-icon>}
                {thm ==='light' ? <box-icon type='logo' name='instagram' size="md"></box-icon> : <box-icon name='instagram' type='logo' color='#ffffff' size="md"></box-icon>}
                {thm ==='light' ? <box-icon type='logo' name='linkedin-square' size="md"></box-icon> : <box-icon name='linkedin-square' type='logo' color='#ffffff' size="md"></box-icon>}
            </div>
        <div className='w-full h-[84px] bg-[#545454] flex items-center justify-center'>
            <p className='text-[21px] text-white font-medium text-center'>© 2023 <span className='text-orange-500'>Mumair</span> All Rights Reserved , Inc.</p>
        </div>
    </div>
  )
}

export default Footer