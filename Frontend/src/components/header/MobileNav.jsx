


import React from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";

const MobileNav = ({ menuItems, onClose, onOpen, hideLeft }) => {
  return (
    <div className='flex items-center justify-between h-16 px-6 lg:px-12 bg-white'>
      <button onClick={onOpen} className='border rounded'>
        <HiBars3BottomRight className='w-7 h-7' />
      </button>
      <div className={`transition-all w-full h-full fixed bg-white z-50 top-0 ${hideLeft} flex justify-center items-center`}>
        <button onClick={onClose} className="absolute right-8 top-32">
         <IoIosCloseCircleOutline className='w-8 h-8'/>
        </button>
        <div>
          <ul className='flex flex-col gap-5'>
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link 
                  to={menu.toLowerCase() === 'home' ? '/' : `/${menu.toLowerCase()}`} 
                  className="text-2xl font-medium text-black"
                  onClick={onClose}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex items-center gap-4 mt-10 font-medium'>
            <li><button className='px-4 py-3 text-black border rounded'>Log In</button></li>
            <li><button className='px-4 py-3 text-black border rounded'>Log Out</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
