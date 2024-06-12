import React from 'react'
import Hero from './Hero'
import CategoryWrapper from './Category/CategoryWrapper'

const Home = () => {
  return (
    <div className='container mx-auto'>
       <div className='flex flex-col items-center justify-center w-full py-20'>
        <Hero/>
        <CategoryWrapper/>
       </div>
      
    </div>
  )
}

export default Home
