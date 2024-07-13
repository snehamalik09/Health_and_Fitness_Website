import React from 'react';
import BodyPart from '../components/BodyPart';
// import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';
// import RightArrowIcon from '../assets/icons/right-arrow.png';

// const LeftArrow = () =>{
//   const {scrollPrev} = useContext(VisibilityContext);
//   return (
//     <div onClick={() => scrollPrev()}  className="right-arrow inline-block" >
//       <img src={LeftArrowIcon}  />
//     </div>
//   );
// };

// const RightArrow = () =>{
//   const {scrollNext} = useContext(VisibilityContext);
//   return (
//     <div onClick={() => scrollNext()}  className="left-arrow inline-block" >
//       <img src={RightArrowIcon}  />
//     </div>
//   );
// };

// const HorizontalScrollbar = ( {data, bodyPart, setBodyPart} ) => {
//   return (
//     <div className="flex overflow-x-auto whitespace-nowrap">
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {data.map( (item) => (
//         <div className='inline-block' key={item.id || item} itemID={item.id || item} title={item.id || item} >
//             <BodyPart item={item} bodyPart={bodyPart} setBodyPart = {setBodyPart} />
//         </div>
//       ) )}
//     </ScrollMenu>
//     </div>
//   )
// }

// export default HorizontalScrollbar

// const itemRefs = useRef(null);

const HorizontalScrollbar = ( {data, bodyPart, setBodyPart} ) => {
  return (
    <div className='w-100 my-10 flex gap-32 overflow-x-scroll '>
      {data.map( (item) => (
          <div className=' w-100' key={item.id || item} itemID={item.id || item} title={item.id || item} >
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart = {setBodyPart} />
          </div>
      ) )}
    </div>
  )
}

export default HorizontalScrollbar
