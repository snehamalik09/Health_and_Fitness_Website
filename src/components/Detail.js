import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import targetImage from '../assets/icons/target.png';
import equipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

  

if (!exerciseDetail) {
  return <div>Loading...</div>;
}

const {bodyPart, gifUrl, name, target, equipment, instructions} = exerciseDetail;

  return (
    
    <div id="detail" className='flex-row justify-center md:flex md:justify-around w-[100%]'>
      
      <div className='w-[90%] md:w-[50%] mt-10 mx-auto' >
        <img src={gifUrl} alt="gif" loading="lazy" className=' m-auto w-100 object-cover' />
      </div>

      <div className='flex flex-col w-[90%] md:w-[40%] mx-5 gap-5 mt-20 md:mt-0 '>

        <h1 className='text-2xl md:text-3xl font-bold capitalize'>{name}</h1>
        {instructions.map((instruction, index) => (
            <p key={index} className='text-wrap'> {index+1}. {instruction} </p>
        ))}

        <div className='flex justify-between m-5 items-center text-sm md:text-md'>

          <div className='flex flex-col capitalize items-center gap-3'>
            <button className='bg-[#fff2db] rounded-[50%]'> <img src={BodyPartImage}  alt="bodyPart" className='w-[80px]' /> </button> 
            <h1 className='font-medium'>{bodyPart}</h1>
          </div>

          <div className='flex flex-col capitalize items-center gap-3'>
          <button className='bg-[#fff2db] rounded-[50%]'> <img src={targetImage}  alt="bodyPart"  className='w-[80px]'  /> </button> 
            <h1 className='font-medium'>{target}</h1>
          </div>

          <div className='flex flex-col capitalize items-center gap-3'>
          <button className='bg-[#fff2db] rounded-[50%]'> <img src={equipmentImage}  alt="bodyPart" className='w-[80px]'  /> </button> 
            <h1 className='font-medium'>{equipment}</h1>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Detail;
