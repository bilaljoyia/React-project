import React from 'react'
import web from '../assest/img/single.png'
import Digital from '../assest/img/double.png'
import App from '../assest/img/triple.png'

export default function Plan() {
  return (
    <div className='container mx-auto'>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-36 gap-10 mx-5 ">
        <div className="card1 h-[500px] p-5 text-center flex-col shadow-xl hover:scale-105 duration-300">
            <img className='w-14' src={web} alt="" />
            <h2 className='text-2xl font-bold'>Web Development</h2>
            <h3 className='text-2xl font-bold my-10'>149$</h3>
            <p>Lorem ipsum dolor.</p>
            <hr />
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur.</p>
            <hr />
            <p>Lorem, ipsum dolor.</p>
            <button className='p-2 px-14 rounded mt-8 bg-green-400 font-semibold '>Start Trial</button>
        </div>
        <div className="card2 h-[500px] bg-gray-100 p-5 text-center shadow-xl hover:scale-105 duration-300">
            <img className='w-14' src={Digital} alt="" />
            <h2 className='text-2xl font-bold'>Digital Marketing</h2>
            <h3 className='text-2xl font-bold my-10'>149$</h3>
            <p>Lorem ipsum dolor.</p>
            <hr />
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur.</p>
            <hr />
            <p>Lorem, ipsum dolor.</p>
            <button className='p-2 px-14 rounded mt-8 bg-black text-green-500 font-semibold '>Start Trial</button>
        </div>
        <div className="card3 h-[500px] p-5 text-center shadow-xl hover:scale-105 duration-300">
            <img className='w-14' src={App} alt="" />
            <h2 className='text-2xl font-bold'>App Development</h2>
            <h3 className='text-2xl font-bold my-10'>149$</h3>
            <p>Lorem ipsum dolor.</p>
            <hr />
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur.</p>
            <hr />
            <p>Lorem, ipsum dolor.</p>
            <button className='p-2 px-14 rounded mt-8 bg-green-400 font-semibold '>Start Trial</button>
        </div>
      </div>
    </div>
  )
}
