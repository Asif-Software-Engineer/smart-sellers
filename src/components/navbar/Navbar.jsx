import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 w-full flex p-4 h-[8.2rem] bg-gradient-to-r from-black/80 to-black/80">
        <div className='ml-8 '>
            <img src="./assets/images/logo.webp" alt="logo" className='absolute '/>
        </div>
        <ul className="text-white flex justify-end items-center ml-auto font-bold">
            <li><a className='cursor-pointer p-4 uppercase' href='home' >Home</a></li>
            <li><a className='cursor-pointer p-4 uppercase' href='form' >Try Now</a></li>
            <li><a className='cursor-pointer p-4 uppercase' href='about' >About Us</a></li>
        </ul>
    </nav>
  )
}
