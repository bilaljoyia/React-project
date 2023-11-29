import React from 'react'
import { FaGit, FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <div className='bg-[#2699fb]'>
            <div className='container mx-auto py-10 p-5'>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Learn React </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur. Eius inventore corporis aut illo quo nemo debitis consequuntur!</p>
                        <div className="mt-5 flex text-xl space-x-10">
                            <FaSquareFacebook />
                            <IoLogoInstagram />
                            <FaTwitter />
                            <FaGithub />
                        </div>
                    </div>
                    <div className="solution text-center">
                        <h1 className='text-xl font-semibold mb-5'>Solution</h1>
                        <ul className='text-white leading-10'>
                            <li>Analytics</li>
                            <li>Marketing</li>
                            <li>Commerce</li>
                            <li>Insight</li>
                        </ul>
                    </div>
                    <div className="support text-center">
                        <h1 className='text-xl font-semibold mb-5'>Support</h1>
                        <ul className='text-white leading-10'>
                            <li>Analytics</li>
                            <li>Marketing</li>
                            <li>Commerce</li>
                            <li>Insight</li>
                        </ul>
                    </div>
                    <div className="company text-center">
                        <h1 className='text-xl font-semibold mb-5'>Company</h1>
                        <ul className='text-white leading-10'>
                            <li>Analytics</li>
                            <li>Marketing</li>
                            <li>Commerce</li>
                            <li>Insight</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
