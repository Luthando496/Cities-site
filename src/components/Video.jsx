import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-screen relative'>
    <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
        <video autoPlay loop muted src='/src/assets/city.mp4' className='w-full h-full object-cover' />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="text-center space-y-6">
            <h3 className="text-3xl text-white uppercase font-light">Lets Travel the continent together</h3>
            <h1 className="text-3xl md:text-[4rem] video-title font-bold text-white">Explore The Continent<br /> With Travel Trivia</h1>
            <button className='video-btn uppercase bg-sky-300 py-4 px-8 border-none text-2xl text-white hover:bg-lime-400 hover:text-purple-400 duration-700 rounded-full'>Read More</button>

        </div>
        </div>
    </div>
  )
}

export default Video