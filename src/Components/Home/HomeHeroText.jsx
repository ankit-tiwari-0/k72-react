import React from 'react'
import Video from './Video'


const HomeHeroText = () => {
  return (
    <div className='font-[font2] pt-5 text-center '>
        <div className='text-[9.5vw] uppercase flex items-center justify-center leading-[9vw]'>L'étincelle</div>
        <div className='text-[9.5vw] uppercase flex items-start justify-center leading-[9vw]'>qui 
            <div className='h-[8vw] w-[16vw] -mt-1  overflow-hidden rounded-full '>
             <Video />
            </div>
            génère</div>
        <div className='text-[9.5vw] uppercase flex items-center justify-center leading-[9vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText