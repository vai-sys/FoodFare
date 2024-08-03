import React from 'react'
import Hero from './Hero'
import CategoryWrapper from './Category/CategoryWrapper'
import FeaturedSection from './FeaturedSection'
import LatestRecipe from './LatestRecipe'


const Home = () => {
  return (
    <div className='container mx-auto'>
       <div className='flex flex-col items-center justify-center w-full py-20'>
        <Hero/>
        <CategoryWrapper/>
       </div>

       <FeaturedSection/>
       <LatestRecipe/>
      
      
    </div>
  )
}

export default Home
