import React from 'react'


const Video = () => {
  return (
    <div  className='h-full  w-full'>
        <video  className="fixed top-0 left-0 w-screen h-screen object-cover" autoPlay loop muted
      playsInline src="/video/video.mp4"></video>
    </div>
  )
}

export default Video