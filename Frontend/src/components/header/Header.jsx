import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["Home", "Recipes", "About"];

  const onOpen = () => {
    setHideLeft("left-0");
  };

  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return (
    <div>
   
      <div className='hidden md:block'>
        <DesktopNav menuItems={menuItems} />
      </div>
    
      <div className='block md:hidden'>
        <MobileNav
          menuItems={menuItems}
          onClose={onClose}
          hideLeft={hideLeft}
          onOpen={onOpen}
        />
      </div>
    </div>
  );
};

export default Header;



