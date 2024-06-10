import React from 'react'
import {Link} from 'react-router-dom'

const DesktopNav = ({menuItems}) => {
  return (
    <div className='flex items-center justify-between h-16 px-6 lg:px-12'>
      <ul  className='flex gap-7'>
        {
            menuItems?.map((menu,index)=>(
                <li key={index}>
                    <Link to="/" className="font-medium text-gray-950">{menu}</Link>
                </li>
            ))
        }
      </ul>

      <ul className='flex items-center font-medium gaap-4'>
        <li ><button className='px-4 py-2 text-black rounded'>Log In</button></li>
        <li><button className='px-4 py-2 text-black rounded'>Log Out</button></li>
      </ul>
    </div>
  )
}

export default DesktopNav
