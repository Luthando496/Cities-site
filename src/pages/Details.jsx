import React from 'react'

const Details = () => {
  return (
    <>
    <div className='details'>
    <div className="w-[90%] mx-auto flex flex-col space-y-6 justify-center ">
        <h2 className='text-xl font-light uppercase text-white'>IMAGES AND VIDEOS</h2>
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[5rem] text-yellow-500 font-bold uppercase">Images and Videos GAllery</h1>
    </div>

    </div>

    <div className="w-full py-[7rem] bg-slate-100">
    <h3 className='text-2xl font-light text-accentBlue text-center'>Images</h3>
    <h1 className='text-[4rem] text-red-600 uppercase text-center'>Image Gallery</h1>
    <div className="w-[80%] mx-auto grid md:grid-cols-3 grid-cols-2 gap-5">

    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/6526440/pexels-photo-6526440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/3617456/pexels-photo-3617456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/4471200/pexels-photo-4471200.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/13884250/pexels-photo-13884250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/3814205/pexels-photo-3814205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/10543004/pexels-photo-10543004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/4726161/pexels-photo-4726161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/7492217/pexels-photo-7492217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/1095648/pexels-photo-1095648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>
    <div className="cardf w-full h-[15rem]">
        <img src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="sd" className='w-full h-full' />
    </div>

    </div>

    </div>
    </>
  )
}

export default Details