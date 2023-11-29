import React from 'react'
import laptop from '../assest/img/laptop.jpg'

export default function Expert() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 my-10 gap-10'>
    <div className='col-span-1'>
        <img src={laptop} alt="" />
    </div>
    
    <div className='col-span-2 p-5'>
      <h1 className='text-3xl font-semibold text-green-400 my-4'>Learn from Expert</h1>
      <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia a doloribus sunt quasi cupiditate quod magnam fugit! Cumque, repellendus expedita? Fugiat atque magnam harum natus, quibusdam ipsa repudiandae vitae.</p>
      <button className='bg-black text-white p-2 px-5 rounded mt-6'>Get Started</button>
        
    </div>

    </div>
  )
}
