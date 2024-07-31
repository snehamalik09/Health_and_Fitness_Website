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
    <div className='flex flex-col justify-center text-center mb-[-10%] lg:mb-[2%] mt-[16%] lg:mt-[3%] overflow-x-hidden'>
      <div className=''>
      <h1 className='text-2xl md:text-4xl tracking-wide font-semibold'>Awesome Exercises You <br/> Should Know! </h1>   <br/> <br/>
      <div className='flex gap-4 justify-center items-center text-md md:text-lg'>
        <input type="text" value={search} placeholder="Search Exercises" onChange = {(e) => {setSearch(e.target.value.toLowerCase())}} 
        className='w-[60%] px-[1%] py-[0.5%] border-2 border-red-600'></input>
        
        <a href="#exercise" onClick={handleSearch} 
        className='py-[0.5%] px-[2%]  bg-red-600 rounded-sm border-2 border-red-600 text-white transition-all duration-300 delay-50 hover:rounded-md hover:text-red-600 hover:text-bold hover:bg-[#FFFAFB]'> 
        Search  </a>  
        
      </div>
      
      </div>

      <div className=' my-20 ml-5 md:mx-20 md:overflow-auto'>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </div>

    </div>
  )
}

export default SearchExercise


