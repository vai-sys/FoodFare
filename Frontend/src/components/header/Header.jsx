import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resources", "contact", "about"];

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


// import React, { useState } from 'react';
// import DesktopNav from './DesktopNav';
// import MobileNav from './MobileNav'

// const Header = () => {
//   const [hideLeft, setHideLeft] = useState("-left-[1000px]");
//   const menuItems=["recipes","resources","Contact","About"];
//   const onOpen = () => {
//     setHideLeft("left-0");
//   };

//   const onClose = () => {
//     setHideLeft("-left-[1000px]");
//   };

//   return (
//     <div>
//       {/* Desktop View */}
//       <div className='hidden md:block'>
//         <DesktopNav menuItems={menuItems} />
//       </div>
//       {/* Mobile View */}
//       <div className='block md:hidden'>

//         <MobileNav
//          menuItem={menuItems}
//          onClose={onClose}
//          hideLeft={hideLeft}
//          onOpen={onOpen}
        
        
        
        {/* <button onClick={onOpen} className="p-4 text-black ">Open Mobile Menu</button> */}
        {/* <div className={`fixed top-0 ${hideLeft} transition-left duration-300 bg-white w-full h-full z-50`}> */}

          
          {/* <button onClick={onClose} className="p-4 text-white bg-red-500">Close Mobile Menu</button>
          <ul className="mt-8">
            {menuItems.map((menu, index) => (
              <li key={index} className="p-4 border-b">
                <Link to={menu.path} className="font-medium text-gray-950">{menu}</Link>
              </li>
            ))}
          </ul> */}
        {/* </div> */}
      {/* </div>
    </div>
  );
};

export default Header; */}


// import React, { useState } from 'react';
// import DesktopNav from './DesktopNav';

// const Header = () => {
//   const [hideLeft, setHideLeft] = useState("-left-[1000px]");
//   const menuItems=["recipes","resources","Contact","About"];
 

//   const onOpen = () => {
//     setHideLeft("left-0");
//   };

//   const onClose = () => {
//     setHideLeft("-left-[1000px]");
//   };

//   return (
//     <div>
//       <div className='hidden max-[900px]:block'>
//         <DesktopNav menuItems={menuItems} />
//       </div>
//       <div className='block min-[900px]:hidden'>
//         <button onClick={onOpen}>Open Mobile Menu</button>
//         <div className={`fixed top-0 ${hideLeft} transition-left duration-300 bg-white w-full h-full`}>
//           <button onClick={onClose}>Close Mobile Menu</button>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


