// import React from 'react'
// import { useState } from 'react';

// const Header = () => {
//     const [hideLeft,setHideLeft]=useState("-left-[1000px]");
//     const menuItems=["recipes","resources","Contact","About"];
//     const onOpen=()=>{
//         setHideLeft("left-0");
//     }
//     const onClose=()=>{
//         setHideLeft("-left-[1000px]");
//     }

//   return (
//     <div>
//       <div className='max-[900px] :hideen'>Desktop</div>
//       <div className='min-[900px] :hidden'>Mobile</div>
//     </div>
//   )
// }

// export default Header


import React, { useState } from 'react';

const Header = () => {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menuItems = ["recipes", "resources", "Contact", "About"];
  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };

  return (
    <div>
      <div className="hidden md:block">Desktop</div>
      <div className="block md:hidden">
        <button onClick={onOpen}>Open Menu</button>
        <div className={`absolute top-0 left-0 ${hideLeft} transition-all duration-300`}>
          {/* <ul>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}
          <button onClick={onClose}>Close Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
