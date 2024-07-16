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
    <div className=' '>
      <Link to={`/exercise/${exercise.id}`} >
      <div className='w-72 h-48 p-2 border-4 border-black'>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className='w-full h-full object-cover' />
        </div>        
      </Link>
      <div className='flex justify-between gap-10 p-4 mt-5'>
        <button className='w-24 h-8 overflow-hidden bg-pink-200 px-4 py-1 rounded-md capitalize hover:bg-pink-300 hover:text-white'>{exercise.bodyPart}</button>
        <button className='w-24 h-8 overflow-hidden bg-green-300 px-4 py-1 rounded-md capitalize hover:bg-green-400 hover:text-white'>{exercise.target}</button>
      </div>
      <p className='text-md text-center capitalize font-normal mb-2'>{truncateName(exercise.name, 4)}</p>
    </div>
  )
}

export default ExerciseCard


