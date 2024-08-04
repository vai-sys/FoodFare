// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from './Card';
// import CategoryWrapper from './Category/CategoryWrapper';

// const Recipes = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const getLatestItems = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/all-items');
//         setItems(response.data);
//       } catch (error) {
//         console.error('Error fetching items:', error);
//       }
//     };

//     getLatestItems();
//   }, []);

//   return (
//     <div className='px-6 lg:px-12 py-20'>
//       <h1 className='text-xl text-center font-semibold text-slate-950 sm:text-5xl sm:leading-relaxed'>
//         All Recipes
//       </h1>
//       <CategoryWrapper/>
//             <ul  className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4'>
//              {
//                items.map((item)=>(
//                 <Card key={item._id} item={item}/>
//               ))
//              }
//             </ul>
     
//     </div>
//   );
// };

// export default Recipes;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import CategoryWrapper from './Category/CategoryWrapper';

const Recipes = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getLatestItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/all-items');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    getLatestItems();
  }, []);

  return (
    <div className='px-6 lg:px-12 py-20'>
      <h1 className='text-xl text-center font-semibold text-slate-950 sm:text-5xl sm:leading-relaxed'>
        All Recipes
      </h1>
      <CategoryWrapper/>
      <ul className={`mt-20 grid grid-cols-1 ${items.length === 2 ? 'md:grid-cols-2 justify-center' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
        {
          items.map((item) => (
            <Card key={item._id} item={item}/>
          ))
        }
      </ul>
    </div>
  );
};

export default Recipes;


