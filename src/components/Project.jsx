import React from 'react'
import p1 from '../assets/1.png'
import p2 from '../assets/3.png'
import p3 from '../assets/2.png'

function Project() {
  return (
    <div className='my-28 col-start-2 col-span-10 flex flex-col justify-center'>
        <p className='text-[65px] text-center font-semibold'>My Projects</p>
        <p className='text-center text-[21px] my-5'>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
        <div className='my-5 mx-auto flex gap-x-3'>
            <button className='px-4 py-3 border rounded-xl text-semibold text-[24px] '>All</button>
            <button className='px-4 py-3 border rounded-xl text-semibold text-[24px] '>UI/UX</button>
            <button className='px-4 py-3 border rounded-xl bg-orange-500 text-white text-semibold text-[24px] '>Web design</button>
            <button className='px-4 py-3 border rounded-xl text-semibold text-[24px] '>App Design</button>
            <button className='px-4 py-3 border rounded-xl text-semibold text-[24px] '>Graphics Design</button>
        </div>
        <div className='mx-auto my-10 flex gap-x-10'>
            <div>
                <div className='w-[485px] h-[489px] bg-[#FFEBDB] rounded-lg overflow-hidden relative'>
                    <img src={p1} alt='project 1' className='w-[274px] absolute top-28 left-10 z-10'/>
                    <img src={p1} alt='project 1' className='w-[274px] absolute top-[-300px] left-40'/>
                </div>
                <p className='text-[19px] text-orange-500 font-medium mt-5 mb-3'>Web Design</p>
                <p className='text-[24px] font-semibold'>AirCalling Landing Page Design </p>
            </div>
            <div>
                <div className='w-[485px] h-[489px] bg-[#FFEBDB] rounded-lg overflow-hidden relative'>
                    <img src={p2} alt='project 1' className='w-[274px] absolute top-28 left-10 z-10'/>
                    <img src={p2} alt='project 1' className='w-[274px] absolute top-[-300px] left-40'/>
                </div>
                <p className='text-[19px] text-orange-500 font-medium mt-5 mb-3'>Web Design</p>
                <p className='text-[24px] font-semibold'>AirCalling Landing Page Design </p>
            </div>
            <div>
                <div className='w-[485px] h-[489px] bg-[#FFEBDB] rounded-lg overflow-hidden relative'>
                    <img src={p3} alt='project 1' className='w-[274px] absolute top-28 left-10 z-10'/>
                    <img src={p3} alt='project 1' className='w-[274px] absolute top-[-300px] left-40'/>
                </div>
                <p className='text-[19px] text-orange-500 font-medium mt-5 mb-3'>Web Design</p>
                <p className='text-[24px] font-semibold'>AirCalling Landing Page Design </p>
            </div>
        </div>
    </div>
  )
}

export default Project