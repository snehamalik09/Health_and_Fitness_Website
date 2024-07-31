import React, {useState, useEffect} from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import { Pagination, Stack } from '@mui/material';

const Exercise = ({setExercises, bodyPart, exercises}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const[PagesToShow, setPagesToShow] = useState(6);

  useEffect(() => {

    const fetchExcecisesData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', exerciseOptions);
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exerciseData);

    };
  
    fetchExcecisesData();
  }, [bodyPart, setExercises]);  

  

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width:768px)')
    const handleResize = () => {
      setPagesToShow(mediaQuery.matches ? 9 : 6);
    };

    handleResize();
    
  })

  

 
  const paginate = (e, value) => {
    setCurrentPage(value);
  }

  const lastIndexofExercise = currentPage*PagesToShow;
  const firstIndexofExercise = lastIndexofExercise - PagesToShow;

  const currentExercises = exercises.slice(firstIndexofExercise, lastIndexofExercise);

  return (
    <div name="exercise" id="exercise" className='mx-[5%] md:mt-[5%] flex flex-col justify-center overflow-x-hidden'>
      <h1 className='font-normal text-2xl md:text-3xl'>{exercises && exercises.length > 0 ? "Search Results ......" : " Search Results ...... "}</h1>
       <p className='font-normal text-red-600 mt-5 md:text-lg'> {exercises && exercises.length>0 ? "Click on the exercise to view details" : "No Results!!! try with another keyword"} </p>
      <div className='grid grid-cols-2 gap-10 mt-14 md:m-10 lg:m-10 lg:mt-0 md:grid-cols-3 lg:gap-24 lg:p-20 '>
        {
          currentExercises.map((item) => (
              <ExerciseCard key={item.id} exercise ={item} />
          ))}
      </div>

      <div className=''>
      <Stack mt="100px" alignItems="center" justifyContent="center">
        {exercises.length > PagesToShow && (
          <a href="#exercise">
            <div className=''>
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / PagesToShow)}
            page={currentPage}
            onChange={paginate}
            size="large"
            siblingCount={1}
            boundaryCount={0}
          />
          </div>
          </a>
        )}
      </Stack>
      </div>

    </div>
  )
}

export default Exercise
