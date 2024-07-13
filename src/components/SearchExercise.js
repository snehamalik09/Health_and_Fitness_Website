import React from 'react'
import {useState, useEffect} from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from '../components/HorizontalScrollbar'

const SearchExercise = ({bodyPart, setBodyPart, setExercises} ) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect( () => {
    const fecthBodyParts = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fecthBodyParts();
  }, [])

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=200', exerciseOptions);
      const searchedExercises = exercisesData.filter( (exercise) => exercise.name.toLowerCase().includes(search) ||
      exercise.target.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search) 
      )
      setSearch("");
      setExercises(searchedExercises);
    }
    
  }
  return (
    <div className='flex flex-col justify-center text-center mt-[8%]'>
      <div className=''>
      <h1 className='text-4xl tracking-wide font-semibold'>Awesome Exercises You <br/> Should Know! </h1>   <br/> <br/>
      <div>
        <input type="text" value={search} placeholder="Search Exercises" onChange = {(e) => {setSearch(e.target.value.toLowerCase())}} className='w-[60%] p-3 border-white'></input>
        
        <a href="#exercise"> <button onClick={handleSearch} className='py-3 px-8 bg-red-600 rounded-sm text-white text-lg'> Search </button>   </a>
      </div>
      
      </div>

      <div className=' my-20 mx-20'>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </div>

    </div>
  )
}

export default SearchExercise
