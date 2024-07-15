import React from 'react'

function sliderCard(props) {
  return (
    <div className=' w-full h-[500px] p-6 flex flex-col items-center content-between'>
        <div className='flex flex-col lg:flex-row-reverse items-center justify-between text-center'>
          <img src={props.img} className='w-[300px] lg:w-[400px]'/>    
          <p className='text-4xl lg:text-5xl  font-semibold text-white'>{props.par}</p>
        </div>
    </div>
  )
}


export default sliderCard
