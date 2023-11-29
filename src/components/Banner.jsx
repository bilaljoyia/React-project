import React from 'react'
import Typed from 'react-typed';


export default function Banner() {
  return (
    <div className='bg-[#2699fb] py-[100px] h-screen '>
        <div className='max-w-[1240px] mx-auto font-bold mt-32 text-center '>
            <div className='text-xl my-2'>
                Learn with us
            </div>  
            <h1 className='py-6 text-white text-4xl md:text-[60px]'>Grow with us.</h1>
            <h3 className='text-3xl'>Learn
           <Typed className='pl-2'
                    strings={['Web Development', 'Master Vue', 'Ethical Hacking']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                />
            </h3>
            <button className='bg-black text-white p-2 px-5 rounded mt-3'>Get Started</button>
        </div>
    </div>
  )
}
