import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["Home", "Resources","Recipes", "Contact", "About"];

  const onOpen = () => {
    setHideLeft("left-0");
  };

  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return (
    <div>
      {/* Desktop View */}
      <div className='hidden md:block'>
        <DesktopNav menuItems={menuItems} />
      </div>
      {/* Mobile View */}
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



