import React from 'react';
import dumbell from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div
      className={`w-[150px] h-[150px] cursor-pointer my-10 ${bodyPart === item ? 'border-t-4 border-red-600' : ''}`}
      onClick={() => setBodyPart(item)}
    >
    <a href="#exercise"> <img className='p-2' src={dumbell} alt="dumbell" /> </a> 
    <p className='capitalize font-semibold'>{item}</p>
</div>
  );
};

export default BodyPart;
