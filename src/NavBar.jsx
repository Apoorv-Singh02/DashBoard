import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"

function NavBar() {
  return (
    <div className="flex h-24 w-screen backdrop-blur-sm bg-white/30 justify-between items-center px-4 active:border-white overflow-clip mb-12">
        <div className='text-lg text-white font-bold'>
            <img src="https://uploads-ssl.webflow.com/60d587746fd9b73fa84f0665/60d6da7b9b981f813d9b1dd4_Group%201505.svg" className='h-20' />
        </div>
        <div className='flex h-10 items-center justify-between bg-blue-950 rounded-2xl px-3 text-white w-64'>
            <input type="text" placeholder='Search' className='bg-transparent active:outline-none focus:outline-none'  />
            <AiOutlineSearch className='text-lg mx-0 cursor-pointer'/>
        </div>
    </div>
  )
}

export default NavBar
