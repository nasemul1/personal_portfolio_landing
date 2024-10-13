import React from 'react'
import pr1 from '../assets/profile1.jpeg'
import pr2 from '../assets/profile2.jpeg'

function Testimonial() {
  return (
    <div className='col-start-1 col-span-12 w-full flex flex-col justify-center'>
        <p className='text-[65px] font-semibold mx-auto'>Testimonials</p>
        <p className='text-[21px] mx-auto'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        <div className='my-10 flex justify-center gap-x-12 overflow-hidden'>
            <div className='opacity-35 w-[1087px] min-w-[1087px] h-[344px] bg-[#F8F8F8] rounded-xl flex items-center justify-between gap-x-10 p-10' >
                <img src={pr1} alt="profile 1" className='w-[235px] h-[235px] rounded-full'/>
                <div>
                    <p className='text-[21px] '><span className='text-orange-500 text-[32px] font-bold pr-1'>"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-orange-500 text-[32px] font-bold pl-1'>"</span></p>
                    <p className='text-[24px] text-justify font-semibold'>Name</p>
                    <p className='text-[19px]'>CEO</p>
                </div>
            </div>
            <div className='w-[1087px] min-w-[1087px] h-[344px] bg-[#F8F8F8] rounded-xl flex items-center justify-between gap-x-10 p-10' >
                <img src={pr2} alt="profile 1" className='w-[235px] min-w-[235px] h-[235px] min-h-[235px] object-cover rounded-full'/>
                <div>
                    <p className='text-[21px] '><span className='text-orange-500 text-[32px] font-bold pr-1'>"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-orange-500 text-[32px] font-bold pl-1'>"</span></p>
                    <p className='text-[24px] text-justify font-semibold'>Name</p>
                    <p className='text-[19px]'>CEO</p>
                </div>
            </div>
            <div className='opacity-35 w-[1087px] min-w-[1087px] h-[344px] bg-[#F8F8F8] rounded-xl flex items-center justify-between gap-x-10 p-10' >
                <img src={pr1} alt="profile 1" className='w-[235px] h-[235px] rounded-full'/>
                <div>
                    <p className='text-[21px] '><span className='text-orange-500 text-[32px] font-bold pr-1'>"</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.<span className='text-orange-500 text-[32px] font-bold pl-1'>"</span></p>
                    <p className='text-[24px] text-justify font-semibold'>Name</p>
                    <p className='text-[19px]'>CEO</p>
                </div>
            </div>
        </div>
        <div className='mx-auto my-10 flex gap-x-3'>
            <button className='px-10 py-2 rounded-xl bg-[#D9D9D9]'></button>
            <button className='px-10 py-2 rounded-xl bg-orange-500'></button>
            <button className='px-10 py-2 rounded-xl bg-[#D9D9D9]'></button>
            <button className='px-10 py-2 rounded-xl bg-[#D9D9D9]'></button>
        </div>
    </div>
  )
}

export default Testimonial