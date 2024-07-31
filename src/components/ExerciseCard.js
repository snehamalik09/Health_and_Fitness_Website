import React from 'react'
import {Link} from 'react-router-dom';

const ExerciseCard = ( {exercise} ) => {

  const truncateName = (title, wordCount) => {
    const words = title.split(' ');
    if(words.length>wordCount){
      return words.slice(0, 5).join(' ')+'....';
    }
    return title;
  }

  return (
    <div className=' mb-10'>
      <Link to={`/exercise/${exercise.id}`} >
      <div className='w-[100%] h-[80%] border-2 md:p-2 '>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className='w-full h-full object-cover' />
        </div>        
      </Link>
      <div className='hidden md:flex justify-between gap-10 p-4 mt-5  text-center '>
      <button className='w-[35%] h-[20%]   overflow-hidden bg-green-300 px-4 py-1 rounded-md capitalize text-center hover:bg-green-400 hover:text-white'>{exercise.bodyPart}</button>
      <button className='w-[35%] h-[20%]  overflow-hidden bg-green-300 px-4 py-1 rounded-md capitalize text-center hover:bg-green-400 hover:text-white'>{exercise.target}</button>
      </div>
      <p className='text-md text-center capitalize font-normal m-2'>{truncateName(exercise.name, 4)}</p>
    </div>
  )
}

export default ExerciseCard


