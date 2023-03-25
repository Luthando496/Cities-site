import React,{useState} from 'react'
import {CiMenuBurger} from 'react-icons/ci'
// import

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full bg-black'>
      <nav className="w-[80%] mx-auto text-white flex justify-between border-blue-500 border-b">
      <h1>
        <img src="/src/assets/logo-white.png" alt="ss" className='w-[5rem] h-[5rem] ' />
      </h1>

      <ul className={`text-white ${isOpen ? 'block absolute top-[5.4rem] translate-x-0 duration-700 ease-in-out left-0 translate w-[80%] z-10 bg-sky-500/80' : 'hidden translate-x-[-44rem] duration-700'} lg:flex w-full lg:justify-evenly lg:items-center uppercase`}>
        <li className='px-8 py-2'>
          <h4>HOME</h4>
        </li>
        <li className='px-8 py-2'>
          <h4>About</h4>
        </li>
        <li className='px-8 py-2'>
          <h4>Tours</h4>
        </li>
        <li className='px-8 py-2'>
          <h4>Destination</h4>
        </li>
        <li className='px-8 py-2'>
          <h4>Gallery</h4>
        </li>
      </ul>
      <CiMenuBurger onClick={()=> setIsOpen(!isOpen)} size={50} fill='rgba(111,341,33,0.7)' className='self-end duration-700  lg:hidden' />
      </nav>
    </div>
  )
}

export default Navbar