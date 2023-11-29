import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";


export default function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-[#2699fb] p-4">
      <div className="max-w-[1240px] flex items-center justify-between mx-auto">
        <div className="text-3xl font-bold">Learn React</div>

        {
        toggle ? 
        <IoMdClose onClick={()=> setToggle(!toggle)}     className="text-2xl text-white md:hidden " />
        :
        <IoMdMenu onClick={()=> setToggle(!toggle)} className="text-2xl text-white md:hidden " />
        }
        <ul className="text-white hidden md:flex gap-10 cursor-pointer text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>

        {/* Responsive Menu */}
        <ul className={`duration-300 w-full h-screen md:hidden fixed  top-[68px] bg-black text-white cursor-pointer 
        ${toggle ? 'left-0' : 'left-[-100%]' }
    `}>
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
          <li className="p-5">Services</li>
        </ul>
        {/* Responsive Menu */}
      </div>
    </div>
  );
}
