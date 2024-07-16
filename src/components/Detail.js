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
    
    <div id="detail" className='flex justify-around w-[100%]'>
      
      <div className='w-[50%] mt-10'>
        <img src={gifUrl} alt="gif" loading="lazy" className=' m-auto w-100 object-cover' />
      </div>

      <div className='flex flex-col w-[40%] mx-5 gap-5 '>

        <h1 className='text-3xl font-bold capitalize'>{name}</h1>
        {instructions.map((instruction, index) => (
            <p key={index} className='text-wrap'> {index+1}. {instruction} </p>
        ))}

        <div className='flex justify-between m-5 items-center'>

          <div className='flex flex-col capitalize items-center gap-3'>
            <button className='bg-[#fff2db] rounded-[50%]'> <img src={BodyPartImage}  alt="bodyPart"  width="80" /> </button> 
            <h1 className='font-medium'>{bodyPart}</h1>
          </div>

          <div className='flex flex-col capitalize items-center gap-3'>
          <button className='bg-[#fff2db] rounded-[50%]'> <img src={targetImage}  alt="bodyPart"  width="80" /> </button> 
            <h1 className='font-medium'>{target}</h1>
          </div>

          <div className='flex flex-col capitalize items-center gap-3'>
          <button className='bg-[#fff2db] rounded-[50%]'> <img src={equipmentImage}  alt="bodyPart"  width="80" /> </button> 
            <h1 className='font-medium'>{equipment}</h1>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Detail;
