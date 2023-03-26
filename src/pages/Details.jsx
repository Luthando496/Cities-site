import React,{useState} from 'react'
import {BsCheckLg} from 'react-icons/bs'
import {BiPhoneIncoming} from 'react-icons/bi'
import { questions } from '../Questions'
import SingleQuestion from '../components/SingleQuestion'
import Slide from '../components/Slide'


const Details = () => {

    const[data,setData]=useState(questions)

  return (
    <>
    <Slide />
        <section className="py-[8rem] w-[90%] mx-auto flex flex-col lg:grid lg:grid-cols-3">
        <div className=" lg:col-span-2">
            <h2 className="text-2xl text-sky-700 uppercase">Travel Agency</h2>
            <h1 className="text-[4rem] uppercase font-bold text-darkBlue3">Roma,<span className="text-sky-500"> Italy</span></h1>

            <h2 className="text-3xl font-bold pt-10 text-blue-800">Information</h2>

            <p className="py-8 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aperiam nesciunt possimus repudiandae ducimus laudantium, ratione et aliquam. Dicta, optio consequatur tempore autem ipsa animi consectetur accusamus quia.</p>

            <h2 className="text-gray-400">5 Days 4 Nights, Group:5 - 10 People, Roma Italy</h2>

            <p className="py-8 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem aperiam nesciunt possimus repudiandae ducimus laudantium, ratione et aliquam. Dicta, optio consequatur tempore autem ipsa animi consectetur accusamus quia.</p>

            <div className="grid grid-cols-2 pr-8">
                {/*  */}
                <ul className="flex text-sky-500 flex-col space-y-4">
                    <li className="pb-4 border-bottom border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">Departure</h2>
                    </li>
                    <li className="pb-4 border-bottom border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">Departure Time</h2>
                    </li>
                    <li className="pb-4 border-bottom border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">Return Time</h2>
                    </li>
                    <li className="pb-4 border-bottom border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">Dress Code</h2>
                    </li>
                    <li className="pb-4 ">
                        <h2 className="capitalize text-xl">Price Includes</h2>
                    </li>
                </ul>
                {/*  */}
                <ul className="flex flex-col text-sky-500  space-y-4 text-left">
                    <li className="pb-4 border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">CPT International Airport</h2>
                    </li>
                    <li className="pb-4 border-bottom border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">7,00AM</h2>
                    </li>
                    <li className="pb-4 border-bottom border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">Approximately 9.30PM</h2>
                    </li>
                    <li className="pb-4 border-bottom border-blue-500 border-b-2">
                        <h2 className="capitalize text-xl">Casual, comfortable and light</h2>
                    </li>
                    <li className="">
                        <h2 className="capitalize text-xl flex items-center"><BsCheckLg className='mr-4' fill='blue' /> Accommodation</h2>
                    </li>
                    <li className="">
                        <h2 className="capitalize text-xl flex items-center"><BsCheckLg className='mr-4' fill='blue' /> Porter & Personal Guide</h2>
                    </li>
                    <li className="">
                        <h2 className="capitalize text-xl flex items-center"><BsCheckLg className='mr-4' fill='blue' /> Insurance</h2>
                    </li>
                    <li className="">
                        <h2 className="capitalize text-xl flex items-center"><BsCheckLg className='mr-4' fill='blue' /> Breakfast</h2>
                    </li>
                    <li className="">
                        <h2 className="capitalize text-xl flex items-center"><BsCheckLg className='mr-4' fill='blue' /> Transportation / Car</h2>
                    </li>
                </ul>
            </div>

            
        </div>

        <div className="mt-10 lg:mt-0 lg:col-span-1">
            <div className="card bg-slate-600">
            <div className="card-title bg-sky-700 py-7 px-4">
                <h2 className="text-2xl text-white font-semibold">Form $900</h2>
            </div>
            <div className="px-6 py-8 space-y-6 flex flex-col">
                <input type="text" placeholder='Name' className='px-6 py-4 bg-black/50 text-white w-full' />
                <input type="email" placeholder='Email' className='px-6 py-4 bg-black/50 text-white w-full' />
                <input type="date" className='px-6 py-4 bg-black/50 text-white w-full' />
                <input type="text" placeholder='People' className='px-6 py-4 bg-black/50 text-white w-full' />
                <textarea  placeholder='Email' className='px-6 py-4 bg-black/50 text-white w-full h-[10rem]' ></textarea>
                <button className='w-full lg:w-[40%] text-xl hover:bg-sky-600 duration-500 px-6 py-4 bg-blue-600 text-white'>Book Now</button>
            </div>

            </div>
        </div>

        </section>
        <div className="py-4 w-[80%] mx-auto text-center">
                <h2 className="text-6xl text-sky-700 capitalize">Tour Gallery</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
                    <img src="https://images.pexels.com/photos/4253928/pexels-photo-4253928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cape-town-tours" className="w-full h-[50vh] object-cover" />
                    <img src="https://images.pexels.com/photos/3770287/pexels-photo-3770287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cape-town-tours" className="w-full h-[50vh] object-cover" />
                    <img src="https://images.pexels.com/photos/11831654/pexels-photo-11831654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="cape-town-tours" className="w-full h-[50vh] object-cover" />
                    <img src="https://images.pexels.com/photos/6790328/pexels-photo-6790328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cape-town-tours" className="w-full h-[50vh] object-cover" />
                    <img src="https://images.pexels.com/photos/6624558/pexels-photo-6624558.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load/" alt="cape-town-tours" className="w-full h-[50vh] object-cover" />
                    <img src="https://images.pexels.com/photos/9324233/pexels-photo-9324233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cape-town-tours" className="w-full h-[50vh] object-cover" />
                    <img src="https://images.pexels.com/photos/3392324/pexels-photo-3392324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cape-town-tours" className="w-full h-[50vh] object-cover" />
                    <img src="https://images.pexels.com/photos/9324230/pexels-photo-9324230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-[50vh] object-cover" />
                </div>
                
        </div>
        <div className="py-10 w-[90%] mx-auto ">

        <h2 className="h2 text-3xl font-bold text-lightRed">Tour Plan</h2>

        <div className="flex flex-col">
        {data.map(i=>{
                return <SingleQuestion key={i.id}  {...i} />
        })}
        </div>


        </div>

        <section className="py-[10rem] rev">
          <div className="mx-auto flex flex-col w-[95%] lg:grid lg:grid-cols-2 gap-7">
          {/*  */}
          <div className="text-white ">
          <h2 className="text-3xl leading-normal font-bold">We Provide Top Destinations Expecially For You Book Now and Enjoy!</h2>
          <div className="info flex items-center mt-10">
          <BiPhoneIncoming size={50} className='mr-6' fill='rgba(111,11,666,0.9)' />
          <p className="font-light text-xl">Call Now<span className='text-sky-300 font-bold'><br /> 076 705 7533</span></p>
        </div>
          </div>
          {/*  */}
          <div className="">
          <div className="card bg-black/50 p-8">
          <h4 className="text-xl text-white font-light">TESTIMONIALS</h4>
          <h1 className="text-2xl font-bold text-sky-700 my-4">TRAVELERS REVIEWS</h1>
          <div className="w-full bg-black h-[1px]"></div>
          <p className="py-14 text-white font-light text-sm cto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          </div>

          </div>

          </div>

      </section>
    </>
  )
}

export default Details