import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        Recipes
      </h1>
  
      <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {items.map((item) => (
          <div key={item._id} className='bg-white p-4 rounded-lg shadow'>
            <h2 className='text-lg font-semibold'>{item.name}</h2>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
