import React from 'react'
import smartwatch from '../assets/category/smartwatch2-removebg-preview.png'

function Offer() {
  return (
    <div className='relative mt-20 w-[80%] md:w-full bg-brandGreen h-[700px] md:h-[300px]  mx-auto rounded-xl flex flex-col md:flex-row content-between justify-between items-center text-white text-center p-4'>
        <div className='md:text-start'>
            <p>30% OFF</p>
            <h1 className='font-extrabold text-4xl'>Happy</h1>
            <h1 className='font-extrabold text-4xl'>Hours</h1>
        </div>
        <div className=' '><img src={smartwatch} alt="" className='w-[800px] scale-150 md:scale-100 md:w-[450px]'/></div> 
        <div className='md:text-end'>
            <h1 className='font-extrabold text-4xl'>Winter Sale</h1>
            <p>Get 30% off on all products</p>
            <button className='bg-white text-brandGreen px-6 py-2 rounded-lg cursor-pointer'>Shop Now</button>
        </div>
    </div>
  )
}

export default Offer
