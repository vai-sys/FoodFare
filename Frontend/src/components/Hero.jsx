import React from 'react'
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='px-5 mb-10 xl:px-10 md:w-1/2'>
    
      <form action='/search' className='relative flex p-4 bg-white border rounded'>
        <FaSearch className='w-5 h-5 mr-2 text-neutral-300'/>
        <input className='w-full outline-none placeholder:text-[#1b2629]' name="query" type="search" placeholder="Search for recipe" id="search" required/>
      </form>
    </div>
  )
}

export default Hero
