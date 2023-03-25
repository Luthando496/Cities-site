import React from 'react'
import {BiCheckCircle,BiPhoneIncoming,BiTime,BiLocationPlus} from 'react-icons/bi'



const VideoSecond = () => {
  return (
        <div className='w-full h-screen relative'>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <video autoPlay loop muted src='/src/assets/Pexels Videos 2818546.mp4' className='w-full h-full object-cover' />
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-center space-y-6">
                <h3 className="text-3xl text-white uppercase font-light">Costa Victoria Cochin</h3>
                <div className="flex text-white items-center space-x-4">
                    <div className="one flex space-x-2 items-center  mr-3">
                    <BiTime className='mr-1' size={20} />12 days
                    </div>
                    <div className="one flex space-x-2 items-center mr-3">
                    <BiTime className='mr-1' size={20} />12 days
                    </div>
                    <div className="one flex space-x-2 items-center">
                    <BiLocationPlus className='mr-1' size={20} />Cape Town
                    </div>
                </div>
                <button className='video-btn uppercase bg-yellow-300 py-4 px-8 border-none text-2xl text-white hover:bg-lightRed hover:text-darkBlue3 duration-300 ease-out hover:rounded-full'>Read More</button>
    
            </div>
            </div>
        </div>
  )
}

export default VideoSecond