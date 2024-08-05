import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card' 
import { Link } from 'react-router-dom';

const LatestRecipe = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const getLatestItems = async () => {
            try {
                const response = await axios.get('https://foodfare.onrender.com/api/all-items');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        
        getLatestItems();  
    }, []);

    return (
        <div className='px-5 xl:px-10 py-16'>
            <h2 className='text-xl font-semibold text-slate-950 sm:text-5xl sm:leading-relaxed'>Latest Recipes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-clos-3 xl:grid-cols-4 gap-8'>
                {items.length > 0 ? items.slice(0, 4).map((item, index) => (
                    <Card key={item._id} item={item} />
                )) : <p>Loading...</p>}
            </div>
           <Link to="/recipes">
           
           <div className='sm:w-64 mx-auto mt-16'>
    <button type="button" className='py-4 px-8 hover:bg-yellow-600 text-slate-800 hover:text-white font-semibold w-full transition ease-in border border-[#9c702a] focus:outline-none rounded-lg duration-200 text-center text-base '>View Recipe</button>
</div>
           </Link>
        </div>
    )
}

export default LatestRecipe
