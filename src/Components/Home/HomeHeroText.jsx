import React from 'react'
import Video from './Video'


const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center '>
        <div className='text-[9.5vw] uppercase flex items-center justify-center leading-[10vw]'>The spark for</div>
        <div className='text-[9.5vw] uppercase flex items-start justify-center leading-[10vw]'>all 
            <div className='h-[8vw] w-[16vw] -mt-2  overflow-hidden rounded-full '>
             <Video />
            </div>
            things</div>
        <div className='text-[9.5vw] uppercase flex items-center justify-center leading-[10vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText