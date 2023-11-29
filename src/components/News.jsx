import React from "react";

export default function () {
  return (
    <div className="bg-[#2699fb] my-10">
      <div className="container mx-auto md:flex justify-between py-16 p-5 ">
        <div>
          <h1 className="text-white text-3xl font-semibold ">
            Want to learn latest I.T skills?
          </h1>
          <p className="text-white">
            Sing up to our newsletter and stye up to date
          </p>
        </div>
        <div>
          <input type="text" className="rounded p-2 outline-none sm:mb-6  " />
          <button className="bg-black text-white p-2 rounded ml-2 border-none mb-7 ">Notify me</button>
          <p>We are bout the protection of your data. Read our </p>
          <span className="text-blue-800 font-semibold cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
