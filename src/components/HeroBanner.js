import React from 'react'
import HeroImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <div id="HeroBanner" >
      <div className='p-28 leading-relaxed'>
        <h2 className='text-3xl text-red-600 font-semibold'> Fitness Club </h2> <br/>
        <h1 className='text-5xl font-semibold'> Sweat, Smile <br/> and repeat <br/> </h1> <br/>
        <p className='text-lg'>Check out the most effective exercises personalized to you.</p> <br/> <br/>
        <button className='p-3 bg-red-600 rounded-md text-white text-lg border-2 border-red-600
        transition-all duration-300 delay-150 hover:text-red-600 hover:text-bold hover:bg-[#FFFAFB]'> 
        <a href="#exercise"> Explore Exercises</a> </button>
        <img src={HeroImage} alt="Banner" className='absolute right-20 top-0 h-screen' />
      </div>
    
    </div>
  )
}

export default HeroBanner
