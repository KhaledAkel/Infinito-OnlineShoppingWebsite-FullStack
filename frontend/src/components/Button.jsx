import React from 'react'

function Button(props) {
  return (
    <div className='bg-white text-watermelon w-32 text-center p-2 rounded mt-2 cursor-pointer z-20'>
      <span className='font-bold'>{props.text}</span>
    </div>
  )
}

export default Button
