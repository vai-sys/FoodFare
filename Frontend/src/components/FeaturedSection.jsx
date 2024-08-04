


import React from 'react';
import img from '../assets/featured.webp';
import { Link } from 'react-router-dom';

const FeaturedSection = () => {
  const featuredRecipeId = "666b7a9a2926a8ec4b366f27"; 

  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
      <div className='relative'>
        <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider'>Featured Recipe</div>
        <img src={img} alt="image" className='rounded' />
      </div>
      <div className='text-start sm:w-1/2'>
        <h2 className='text-xl font-semibold text-slate-950 sm:text-5xl sm:leading-relaxed'>Pineapple + Smoked Jackfruit Pizza</h2>
        <p className='text-xl mt-4 text-[#5c5c5c]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, veritatis.</p>
        <div className='lg:mt-0 lg:flex-shrink-0'>
          <div className='mt-12 inline-flex'>
            <Link to={`/recipes/${featuredRecipeId}`}>
              <button className='py-4 px-8 hover:bg-yellow-600 text-slate-800 hover:text-white font-semibold w-full transition ease-in border border-[#9c702a] focus:outline-none rounded-lg duration-200 text-center text-base'>
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection;
