import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";


function Navbar() {
  return (
    <div className='w-full flex items-center justify-between'>
        <div className="flex justify-between items-center ">
            <h1 className=" text-2xl lg:text-3xl font-medium text-watermelon tracking-wider mr-6 ">
                Infinito
            </h1>
            <div className="lg:flex items-center text-m font-medium space-x-6 hidden" >
                <a href="" className="text-gray-500 hover:text-black">Home</a>
                <a href="" className="text-gray-500 hover:text-black">Shop</a>
                <a href="" className="text-gray-500 hover:text-black">About</a>
                <a href="" className="text-gray-500 hover:text-black">Blogs</a>
                <div className='relative group flex items-center py-2'>
                    <a href="" className="text-gray-500 group-hover:text-black">Quick links</a>
                    <IoIosArrowDown className='text-gray-500 text-xl group-hover:text-black group-hover:rotate-180 transition duration-300'/>
                    <div className="absolute top-10 left-0 bg-white w-[200px] px-4 py-6  rounded-lg shadow-md hidden group-hover:flex flex-col space-y-1">
                        <div className='p-2 hover:bg-red-300 rounded'><a href="" className="block hover:text-gray-500">Trending Products</a></div>
                        <div className='p-2  hover:bg-red-300 rounded'><a href="" className="block hover:text-gray-500">Best Selling</a></div>
                        <div className='p-2  hover:bg-red-300 rounded'><a href="" className="block hover:text-gray-500">Top Products</a></div>
                    </div>    
                </div>
            </div>

        </div>
        {/* Links */} 
        <div className="search-bar  flex items-center space-x-5">
            <div className=" flex items-center hover:border rounded-xl px-2 py-0.5 group">
                <input type="text" className='bar w-0  transition duration-300 ease-in-out focus:outline-none' />
                <button>
                   <a href=""> <IoIosSearch className='text-2xl text-gray-700 hover:text-watermelon'/> </a>
                </button>
            </div>
            <a href=""> <FaCartShopping className='text-2xl text-gray-700 hover:text-watermelon'/> </a>
        </div>
    </div>
  )
}

export default Navbar
