import React from 'react';
import BodyPart from '../components/BodyPart';


const HorizontalScrollbar = ( {data, bodyPart, setBodyPart} ) => {
  return (
    <div className='w-100 my-10 grid grid-cols-3 gap-4 auto-rows-[17%] md:flex md:gap-32 md:overflow-x-scroll '>
      {data.map( (item) => (
          <div className=' w-100' key={item.id || item} itemID={item.id || item} title={item.id || item} >
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart = {setBodyPart} />
          </div>
      ) )}
    </div>
  )
}

export default HorizontalScrollbar
