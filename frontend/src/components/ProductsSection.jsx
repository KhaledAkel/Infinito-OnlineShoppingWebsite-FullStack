import React from 'react'
import Product from './Product'

import { products } from '../data/slider'

function ProductsSection() {
  return (
    <div className=' mt-9'>
        <div className='flex flex-col justify-center items-center mb-3'>
          <h1 className='text-4xl font-extrabold text-center'>Our Products</h1>
          <p className='text-md text-center'>Explore More</p>
          <div className='w-32 bg-watermelon h-1'></div>
        </div>
        <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-10'  > 
            {products.map((pr) => ( 
                <Product key={pr.id} img={pr.image} title={pr.title} price={pr.price} />
            ))}

        </div>
    </div>

  )
}

export default ProductsSection
