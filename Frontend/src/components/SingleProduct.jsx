


import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
  const item = useLoaderData();
 useEffect(()=>{
window.scrollTo(0,0);
 },[])
  return (
    <div className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
      <article className='w-full max-w-4xl'>
        <div className='bg-white md:my[5rem] md:py-8 pb-8 md:rounded-xl'>
          <picture>
            <img src={item.thumbnail_image} alt="thumbnail_image" className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto'></img>
          </picture>
          <div className='px-8'>
            <h2 className='text-4xl mt-12 text-slate-900'>{item.name}</h2>
            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, optio?</p>
            
         
            <div className='mt-4'>
              <h3 className='text-xl font-semibold text-slate-900'>Tags</h3>
              <div className='flex flex-wrap gap-2 mt-2'>
                {item.tags.map((tag, index) => (
                  <span key={index} className='px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
              <h2 className='text-xl font-semibold ml-2'>Preparation Time</h2>
              <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                <li className='pl-3 mt-3'>
                  <p>
                    <span>Preparation Time: </span><span>{item.more[0].prep_time}</span>
                  </p>
                </li>
                <li className='pl-3 mt-3'>
                  <p>
                    <span>Cooking Time: </span><span>{item.more[0].cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>
          </div>
          
          <div className='mt-5 px-8'>
            <h3 className='text-xl font-semibold text-slate-900'>Ingredients</h3>
            <ul className='list-disc marker:text-blue-500 mt-4 ml-6 text-slate-950 marker:align-middle'>
              {
                item?.ingredients.map((ingredient, index) => (
                  <li key={ingredient._id || index} className='pl-4 mt-2'>
                    <span>{ingredient?.name}: </span>
                    <span>{ingredient?.quantity}</span>
                  </li>
                ))
              }
            </ul>
          </div>

         
          <div className='mt-8 px-8'>
  <h3 className='text-xl font-semibold text-slate-900'>Instructions</h3>
  <ul className=' mt-4 ml-6 text-slate-950 list-none'>
    {item.instructions.split('\n').filter(line => line.trim() !== '' && isNaN(line.trim())).map((instruction, index) => (
      <li key={index} className='pl-2 mt-2'>
        {instruction.trim()}
      </li>
    ))}
  </ul>
</div>
        </div>
      </article>
    </div>
  )
}

export default SingleProduct