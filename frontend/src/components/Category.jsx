import React from 'react'
import BrowseButton from './Button'


import earphone from '../assets/category/earphone.png'
import vr from '../assets/category/vr.png'
import watch from '../assets/category/watch.png'
import speaker from '../assets/category/speaker.png'
import macbbok from '../assets/category/macbook.png'
import gaming from '../assets/category/gaming.png'

function Category() {
  return (
    <div>
      <div className="grid xl:grid-cols-3 gap-3 mt-4 rounded-xl"> 
          <div className="flex flex-col justify-center h-[300px] col-span-1 bg-gradient-to-br from-black/90 to-black/70  rounded-lg p-3 relative ">
              <h1  className="text-4xl text-white font-extrabold">Next</h1>
              <h1 className="text-4xl text-white font-extrabold">Generation</h1>
              <img src={earphone} alt="" className='absolute overflow-hidden w-[300px] right-0 bottom-1'/>
              <BrowseButton text={'Browse now'}/>
              
          </div>
          <div className="flex flex-col justify-center h-[300px] col-span-1 bg-brandGreen rounded-lg  p-3 relative ">
              <h1 className="text-4xl text-white font-extrabold"> Next</h1>
              <h1 className="text-4xl text-white font-extrabold">Generation</h1>
              <img src={vr} alt="" className='absolute w-[300px] right-0 top-9' />
              <BrowseButton text={'Browse now'}/>
          </div>
          <div className="flex flex-col justify-center h-[300px] col-span-1 lg:col-span-1 bg-brandBlue rounded-lg p-3 relative ">
              <h1 className="text-4xl text-white font-extrabold">Next</h1>
              <h1 className="text-4xl text-white font-extrabold z-10">Generation</h1>
              <img src={speaker} alt="" className='absolute overflow-hidden w-[300px] right-0 '/>
              <BrowseButton text={'Browse now'}/>
          </div>
      </div>
      <div className='mt-4'>
        <div className='grid lg:grid-cols-2 gap-3'>
          <div className="flex flex-col justify-center h-[300px] col-span-1 bg-brandYellow  rounded-lg p-3 relative ">
                <h1  className="text-4xl text-white font-extrabold">Next</h1>
                <h1 className="text-4xl text-white font-extrabold">Generation</h1>
                <img src={watch} alt="" className='absolute overflow-hidden w-[400px] right-0 '/>
                <BrowseButton text={'Browse now'}/>
            </div>
            <div className="flex flex-col justify-center h-[300px] col-span-1 bg-watermelon  rounded-lg p-3 relative ">
                <h1  className="text-4xl text-white font-extrabold">Next</h1>
                <h1 className="text-4xl text-white font-extrabold">Generation</h1>
                <img src={gaming} alt="" className='absolute overflow-hidden w-[300px] right-9 bottom-0 '/>
                <BrowseButton text={'Browse now'} />
            </div>

        </div>
      </div>

    </div>
  )
}

export default Category