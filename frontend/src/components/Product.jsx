import React from 'react'

function Product(props) {
  return (
    <div className=' group rounded'>
        <div className='relative w-full flex justify-center items-center'>
            <img src={props.img} alt="" className='w-full rounded group-hover:blur transition duration-100' />
            <span className='bg-watermelon text-white w-32 h-10 p-2 rounded-xl cursor-pointer hidden justify-center items-center z-30 absolute  group-hover:flex'>Add to cart</span>
        </div>
        <div className='py-2'>
            <p className='font-bold'>{props.title}</p>
            <p>€{props.price}</p>
        </div> 
    </div>
  )
}

export default Product
