// Import Swiper React components
import {BiCheckCircle,BiPhoneIncoming,BiTime,BiLocationPlus} from 'react-icons/bi'
import Flickity from 'react-flickity-component'



const Slider =() => {
    const flickityOptions = {
        initialIndex: 3
    }

  return (
    <>
    <section className=" grid py-[9rem] bg-zinc-200 w-full">
    <div className="w-[90%] mx-auto">
      <h2 className="grid-title text-cyan-900 text-2xl font-light uppercase">Top Destination</h2>
      <h1 className="text-[4rem] uppercase tracking-widest text-lightRed font-extrabold">Popular <span className='text-accentBlue'>Destination</span></h1>

      <div className="mt-6">
    <Flickity options={flickityOptions} className='max-w-full overflow-hidden outline-none' >
      
      <div className='overflow-hidden relative  w-[50%] mr-8 h-[50vh]'>
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
      
      <div className="text-white w-[50%] mr-8 h-[50vh] overflow-hidden relative">
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
      
      <div className='overflow-hidden relative  w-[50%] mr-8 h-[50vh]'>
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
      <div className="text-white w-[50%] mr-8 h-[50vh] overflow-hidden relative">
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
      
      <div className='overflow-hidden relative  w-[50%] mr-8 h-[50vh]'>
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

    </Flickity>
    </div>
      
    </div>
     </section>

    

    </>
  );
};


export default Slider;