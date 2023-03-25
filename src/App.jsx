import { useState } from 'react'
import Video from './components/Video'
import VideoSecond from './components/VideoSecond'
import {BiCheckCircle,BiPhoneIncoming,BiTime,BiLocationPlus} from 'react-icons/bi'
import Slider from './components/Slider'



function App() {

  return (
    <>
    <Video />
    <section className="hero w-full py-[9rem]">
      <div className="w-[90%] mx-auto flex flex-col xl:flex-row items-center p-8 gap-7">

      <article className="left">
      <h3 className="font-light text-xl">THE BEST TRAVEL AGENCY</h3>
      <h1 className="text-bold py-6 text-4xl  md:text-[4rem] leading-normal">DISCOVER THE WORLD WITH OUR <span className='text-orange-700'>GUIDE</span></h1>
      <p className="text-md font-light tracking-widest">
      You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
      </p>
      <p className="mt-4 text-md font-light tracking-widest">Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>
      <div className="py-4 pl-6 space-y-4">
        <div className="info flex items-center">
          <BiCheckCircle size={50} className='mr-6' fill='rgba(333,33,55,0.7)' />
          <p className="font-light text-xl">20 Years of Experience</p>
        </div>
        <div className="info flex items-center">
          <BiCheckCircle size={50} className='mr-6' fill='rgba(111,11,666,0.9)' />
          <p className="font-light text-xl">150+ Tour Destinations</p>
        </div>
        <div className="info flex items-center">
          <BiPhoneIncoming size={50} className='mr-6' fill='rgba(111,11,666,0.9)' />
          <p className="font-light">150+ Tour Destinations<span className='text-sky-700 font-bold'><br /> 076 705 7533</span></p>
        </div>

      </div>
      </article>

      <article className="img ">
        <img src="/src/assets/spencer-davis-ckotRXopwRM-unsplash.jpg" alt="jdkj" className='w-full rounded-md h-full' />
      </article>


      </div>
    </section>
    {/*  */}

    {/*  */}
    <section className=" grid py-[9rem] bg-zinc-200 w-full">
    <div className="w-[90%] mx-auto">
      <h2 className="grid-title text-2xl font-light">CHOOSE YOUR PLACE</h2>
      <h1 className="text-[4rem] uppercase tracking-widest text-amber-700 font-extrabold">Popular <span className='text-darkBlue3'>Tours</span></h1>

      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 mt-6">
      {/*  */}
      <div className="text-white col-span-3 w-full h-[80vh] overflow-hidden relative">
      <div className="gh w-full h-full">
      <h2 className="font-light text-2xl tracking-wider  z-50 absolute right-0 top-8 price bg-accentBlue p-2">$2.550</h2>

      <div className="content absolute bottom-0 left-0 h-full flex flex-col justify-end w-full px-8 py-4 hover:ml-4 hover:mb-14 duration-700 ">
      <h2 className="text-2xl font-light text-">Greece Tour</h2>
      <div className="w-[30%] h-[1px] my-4 bg-red-200 hover:w-full"></div>
      <div className="flex items-center space-x-4">
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={20} />12 days
        </div>
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={20} />12 days
        </div>
        <div className="one flex space-x-2 items-center">
          <BiLocationPlus className='mr-1' size={20} />Cape Town
        </div>
      </div>

      </div>
      </div>
      </div>
      {/*  */}
      <div className='overflow-hidden relative  w-full h-[80vh] col-span-2'>
      <div className="hj w-full text-white h-full">
      <h2 className="font-light text-2xl tracking-wider  z-50 absolute right-0 top-8 price bg-accentBlue p-2">$2.550</h2>

      <div className="content absolute bottom-0 left-0 h-full flex flex-col justify-end w-full px-8 py-4 hover:ml-4 hover:mb-14 duration-700 ">
      <h2 className="text-2xl font-light text-">Greece Tour</h2>
      <div className="w-[30%] h-[1px] my-4 bg-red-200 hover:w-full"></div>
      <div className="flex items-center space-x-4">
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={20} />12 days
        </div>
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={20} />12 days
        </div>
        <div className="one flex space-x-2 items-center">
          <BiLocationPlus className='mr-1' size={20} />Cape Town
        </div>
      </div>

      </div>
      

      </div>
      </div>
      {/*  */}
      </div>

      {/*  */}

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 mt-6">
      {/*  */}
      <div className="text-white col-span-4 w-full h-[50vh] overflow-hidden relative">
      <div className="gh w-full h-full">
      <h2 className="font-light text-lg tracking-wider  z-50 absolute right-0 top-8 price bg-accentBlue p-1">$2.550</h2>

      <div className="content absolute bottom-0 left-0 h-full flex flex-col justify-end w-full px-8 py-4 hover:ml-4 hover:mb-10 duration-700 ">
      <h2 className="text-md font-light text-">Greece Tour</h2>
      <div className="w-[30%] h-[1px] my-2 bg-red-200 hover:w-full"></div>
      <div className="flex items-center space-x-4">
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={15} />12 days
        </div>
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={15} />12 days
        </div>
        <div className="one flex space-x-2 items-center">
          <BiLocationPlus className='mr-1' size={15} />Cape Town
        </div>
      </div>

      </div>
      </div>
      </div>
      {/*  */}
      <div className='overflow-hidden relative  w-full h-[50vh] col-span-4'>
      <div className="hj w-full text-white h-full">
      <h2 className="font-light text-md tracking-wider  z-50 absolute right-0 top-8 price bg-accentBlue p-2">$2.550</h2>

      <div className="content absolute bottom-0 left-0 h-full flex flex-col justify-end w-full px-8 py-4 hover:ml-4 hover:mb-14 duration-700 ">
      <h2 className="text-md font-light text-">Greece Tour</h2>
      <div className="w-[30%] h-[1px] my-2 bg-red-200 hover:w-full"></div>
      <div className="flex items-center space-x-4">
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={15} />12 days
        </div>
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={15} />12 days
        </div>
        <div className="one flex space-x-2 items-center">
          <BiLocationPlus className='mr-1' size={15} />Cape Town
        </div>
      </div>

      </div>
      

      </div>
      </div>
      {/*  */}
      <div className='overflow-hidden relative  w-full h-[50vh] col-span-4'>
      <div className="hj w-full text-white h-full">
      <h2 className="font-light text-md tracking-wider  z-50 absolute right-0 top-8 price bg-accentBlue p-2">$2.550</h2>

      <div className="content absolute bottom-0 left-0 h-full flex flex-col justify-end w-full px-8 py-4 hover:ml-4 hover:mb-14 duration-700 ">
      <h2 className="text-md font-light text-">Greece Tour</h2>
      <div className="w-[30%] h-[1px] my-2 bg-red-200 hover:w-full"></div>
      <div className="flex items-center space-x-4">
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={15} />12 days
        </div>
        <div className="one flex space-x-2 items-center mr-3">
          <BiTime className='mr-1' size={15} />12 days
        </div>
        <div className="one flex space-x-2 items-center">
          <BiLocationPlus className='mr-1' size={15} />Cape Town
        </div>
      </div>

      </div>
      

      </div>
      </div>
      </div>
    </div>

    </section>
      {/*  */}

      <section className="w-full py-[10rem] bo ">
        <div className="w-[90%] mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col space-y-4 items-center">
          <img src="/src/assets/aircraft.jpg" alt="ss" className='w-[5rem] h-[5rem] rounded-full' />
          <h2 className='font-bold text-2xl text-cyan-600'>600</h2>
          <h3 className='font-bold text-xl text-white'>Flight Booking</h3>
        </div>
        <div className="flex flex-col space-y-4 items-center mt-11 lg:mt-0">
          <img src="/src/assets/aircraft.jpg" alt="ss" className='w-[5rem] h-[5rem] rounded-full' />
          <h2 className='font-bold text-2xl text-cyan-600'>600</h2>
          <h3 className='font-bold text-xl text-white'>Flight Booking</h3>
        </div>
        <div className="flex flex-col space-y-4 items-center mt-11 lg:mt-0">
          <img src="/src/assets/aircraft.jpg" alt="ss" className='w-[5rem] h-[5rem] rounded-full' />
          <h2 className='font-bold text-2xl text-cyan-600'>600</h2>
          <h3 className='font-bold text-xl text-white'>Flight Booking</h3>

        </div>
        <div className="flex flex-col space-y-4 items-center mt-11 lg:mt-0">
          <img src="/src/assets/aircraft.jpg" alt="ss" className='w-[5rem] h-[5rem] rounded-full' />
          <h2 className='font-bold text-2xl text-cyan-600'>600</h2>
          <h3 className='font-bold text-xl text-white'>Flight Booking</h3>
        </div>

        </div>
      </section>
      {/*  */}

      <Slider />
      {/*  */}
      <VideoSecond />

      {/*  */}
      <section className="py-20 bg-darkBlue2">
      <div className="w-[90%] mx-auto">
        <h2 className="font-light text-2xl uppercase text-sky-700 tracking-widest">Travel Blog</h2>
        <h1 className="text-4xl md:text-[4rem] text-white font-bold my-8"><span className='text-amber-700' >Travel</span> Experience</h1>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/*  */}
            <div className="card h-[70vh] relative ">
            <div className="img overflow-hidden w-full h-full">
              <img src="/src/assets/ryan-searle-uOz71GyDVpo-unsplash.jpg" alt="mmmk" className='w-full h-full hover:scale-150 duration-500' />
            </div>
              <div className="absolute bottom-[-2.5rem] left-4 p-4 bg-white z-10 w-[90%]">
                <h2 className="font-light uppercase">Travel</h2>
                <p className="text-xl font-bold pt-2 text-sky-600">
                  Tips To A Flawless Honeymoon
                </p>

              </div>
            </div>
            
            {/*  */}
            <div className="card h-[70vh] relative mt-14 md:mt-0">
            <div className="img overflow-hidden w-full h-full">
              <img src="/src/assets/valentin-beauvais-yVUQlyRlJSw-unsplash.jpg" alt="mmmk" className='w-full h-full hover:scale-150 duration-500' />
            </div>
              <div className="absolute bottom-[-2.5rem] left-4 p-4 bg-white z-10 w-[90%]">
                <h2 className="font-light uppercase">Tours</h2>
                <p className="text-xl font-bold pt-2 text-sky-600">
                  Family Adventure Tours for teen & kids
                </p>

              </div>
            </div>
            {/*  */}
            <div className="card h-[70vh] relative mt-14 lg:mt-0">
            <div className="img overflow-hidden w-full h-full">
              <img src="/src/assets/valentin-beauvais-G0odtUZb7Jk-unsplash.jpg" alt="mmmk" className='w-full h-full hover:scale-150 duration-500' />
            </div>
              <div className="absolute bottom-[-2.5rem] left-4 p-4 bg-white z-10 w-[90%]">
                <h2 className="font-light uppercase">Tours</h2>
                <p className="text-xl font-bold pt-2 text-sky-600">
                  Small group tours with flights from Tokyo
                </p>

              </div>
            </div>
            {/*  */}



        </div>

      </div>

      </section>
    </>
    // 
  )
}

export default App
