import React, { useEffect, useState } from 'react';
import banner1 from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';
import banner4 from '../assets/images/banner4.jpg';
import banner5 from '../assets/images/banner5.jpg';

const banners = [
  {
    src : banner2,
    id : 1
  },
  {
    src : banner1,
    id : 2
  },
  {
    src : banner3,
    id : 3
  },
  {
    src : banner4, 
    id : 4
  },
  {
    src : banner5, 
    id : 5
  },
]

const HeroBanner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const interval = useEffect(()=>{
    setInterval(()=>{
      setCurrentBannerIndex((prevIndex) => (prevIndex+1) % (banners.length))
    }, 5000)

    return() => clearInterval(interval);
  }, []);

  return (
    <div id="HeroBanner" className='overflow-x-hidden md:h-screen'>
      <div className='p-[8%] leading-relaxed overflow-x-hidden'>
        <h2 className='text-2xl lg:text-3xl text-red-600 font-bold'> Health & Fitness Hub </h2> <br/>
        <h1 className='text-3xl lg:text-4xl font-semibold'> Sweat, Smile <br/> and repeat <br/> </h1> <br/>
        <p className='text-md lg:text-lg'>Check out the most effective exercises personalized to you.</p> <br/> <br/>
        <button className='p-2 md:p-3 bg-red-600 rounded-md text-white lg:text-lg border-2 border-red-600
        transition-all duration-300 delay-150 hover:text-red-600 hover:text-bold hover:bg-[#FFFAFB]'> 
        <a href="#exercise"> Explore Exercises</a> </button>
        <div className=' '>
        <img key={banners[currentBannerIndex].id} src={banners[currentBannerIndex].src} alt="Banner" className='hidden lg:block md:w-[40%] md:object-cover absolute right-[3%] 2xl:right-[6%] top-0 h-[100%]' />    
        <img src={banners[0].src} alt="BannerImage"className='hidden md:block lg:hidden w-[40%] h-[100%] absolute top-0 ml-[55%]' ></img> 
        </div>   
      </div>
    
    </div>
  )
}

export default HeroBanner


