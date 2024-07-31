import React, {useState, useEffect} from 'react';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({exerciseDetail}) => {

  const [similarTargetExercise, setSimilarTargetExercise] = useState([]);
  const [similarEquipmentExercise, setSimilarEquipmentExercise] = useState([]);
  const [isLargeScreen, setLargeScreen] = useState(window.matchMedia('(min-width:768px)'));
  
  useEffect(() => {

      const fetchExerciseData = async () => {
        const allExercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=200', exerciseOptions);
        if(!exerciseDetail){
          return (
            <div> Loading... </div>
          )
        }
        const {target, equipment} = exerciseDetail;
        if(exerciseDetail){

          const similarTarget = allExercises.filter(exercise => exercise.target === target);
          setSimilarTargetExercise(similarTarget);

          const similarEquipment = allExercises.filter(exercise => exercise.equipment === equipment);
          setSimilarEquipmentExercise(similarEquipment);
        }
          
        else{
          setSimilarTargetExercise([]);
          setSimilarEquipmentExercise([]);
        }     
    }
  
    fetchExerciseData();
  },[exerciseDetail]);


  useEffect(()=>{
    const mediaquery = window.matchMedia('(min-width:768px)');

    const updateScreenSize = (e) => {
      setLargeScreen(e.matches);
    }

    updateScreenSize(mediaquery);

    mediaquery.addEventListener('change', updateScreenSize);

    return () => {
      mediaquery.removeEventListener('change', updateScreenSize);
    };
  });

  const displayedTargetExercises = isLargeScreen ? similarTargetExercise : similarTargetExercise.slice(0, 5);
  const displayedEquipmentExercises = isLargeScreen ? similarEquipmentExercise : similarEquipmentExercise.slice(0, 5);




  return (
    <div>
      <div className='flex flex-col gap-20 m-12 mb-0 overflow-x-auto relative'> 
      <div className='sticky left-0'> <h1 className='font-bold text-2xl tracking-wider text-red-600'>Similar <span className='text-black'>Target</span> Exercises</h1> </div> 
        <div className='grid grid-cols-2 gap-5 md:flex md:flex-row md:gap-[10%] md:mb-10'>
        {
          displayedTargetExercises.map((item) => (
               <ExerciseCard key={item.id} exercise ={item} />
          ))}
      </div>  
      </div>

      <div className='flex flex-col gap-20 m-12 mb-0 overflow-x-auto relative'> 
      <div className='sticky left-0'> <h1 className='font-bold text-2xl tracking-wider text-red-600'>Similar <span className='text-black'>Equipment</span> Exercises</h1> </div> 
        <div className='grid grid-cols-2 gap-5 md:flex md:flex-row md:gap-[10%] md:mb-10'>
        {
          displayedEquipmentExercises.map((item) => (
              <ExerciseCard key={item.id} exercise ={item} />
          ))}
      </div>  
      </div>

    </div>
  )
}

export default SimilarExercises 

