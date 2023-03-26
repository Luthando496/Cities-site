import React ,{useState}from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'




const SingleQuestion = ({id,info,question}) => {
    const[show,setShow]=useState(false)



  return (
    <div>
         <div key={id} className="card duration-700 bg-gray-400 p-4 my-7 w-full  md:w-[50%]">
            <h2 className="text-xl flex justify-between items-center text-stone-200">{question}<button className="p-5 duration-700 " onClick={()=> setShow(!show)} >{show ? <AiOutlineMinus className='text-stone-200' size={30} /> : <AiOutlinePlus />}</button></h2>

            {show && (<p className="py-4  duration-700  px-2 text-stone-200">{info}</p>)}
            
        </div>
    </div>
  )
}

export default SingleQuestion