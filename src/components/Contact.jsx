import React from 'react'

function Contact() {
  return (
    <div className='col-start-4 col-span-6 flex flex-col justify-center my-20'>
        <p className='text-[65px] text-center font-semibold'>Lets Design Together</p>
        <p className='text-[21px] text-center my-5'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        <div className='mx-auto my-10 flex gap-x-5'>
            <input type="email" placeholder='Enter Your Mail' className='text-[21px] p-3 w-[627px] min-w-[627px] border rounded-md'/>
            <button className='px-5 py-4 bg-orange-500 text-white font-medium rounded-md text-[24px]'>Contact Me</button>
        </div>
    </div>
  )
}

export default Contact