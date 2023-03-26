import React,{useState} from 'react'
import {CiMenuBurger} from 'react-icons/ci'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

// import

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full bg-black'>
      <nav className="w-[80%] mx-auto text-white flex justify-between border-blue-500 border-b">
      <h1>
        <img src="/assets/logo-white.png" alt="ss" className='w-[5rem] h-[5rem] ' />
      </h1>

      <ul className='text-white hidden lg:flex w-full lg:justify-evenly lg:items-center uppercase'>
        <li>
          <Link to='/' >HOME</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
        </ul>

      {isOpen ? <CiMenuBurger onClick={()=> setIsOpen(!isOpen)} size={50} fill='rgba(111,341,33,0.7)' className='self-end duration-1000 lg:hidden' /> : <FaTimes onClick={()=> setIsOpen(!isOpen)} size={50} fill='rgba(111,341,33,0.7)' className='self-end duration-1000' /> }
     <div className={!isOpen ? 'fixed z-30 duration-1000 left-0 h-full top-0 w-[50%] md:w-[30%] bg-black text-white': 'fixed top-0 h-full left-[-100%] duration-1000 z-30'}>
      <h2 className="text">
        <img src="/assets/logo-white.png" alt="logo" className='w-[5rem]' />
      </h2>

      <ul className="flex flex-col w-[90%] mx-auto overflow-hidden space-y-5">
        <Link to='/' className='uppercase text-center border p-2 w-full font-light text-2xl hover:bg-rose-500 duration-700 '>
          Home
        </Link>
        <Link to='/contact' className='uppercase border text-center p-2 w-full font-light text-2xl hover:bg-rose-500 duration-700 '>
          Contact
        </Link>
        <Link to='/gallery' className='border uppercase text-center p-2 w-full font-light text-2xl hover:bg-rose-500 duration-700 '>
        gallery
        </Link>
        <Link className='uppercase text-center p-2 w-full font-light text-2xl hover:bg-rose-500 duration-700 border'>
          Home
        </Link>
      </ul>
     </div>
      </nav>
    </div>
  )
}

export default Navbar