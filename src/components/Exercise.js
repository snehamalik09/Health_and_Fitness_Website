import React, {useState, useEffect} from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import { Pagination, Stack } from '@mui/material';

const Exercise = ({setExercises, bodyPart, exercises}) => {

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

  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1)

  const paginate = (e, value) => {
    setCurrentPage(value);
  }

  const lastIndexofExercise = currentPage*exercisesPerPage;
  const firstIndexofExercise = lastIndexofExercise - exercisesPerPage;

  const currentExercises = exercises.slice(firstIndexofExercise, lastIndexofExercise);

  return (
    <div name="exercise" id="exercise" className='mx-[5%] flex flex-col justify-center '>
      <h1 className='font-normal text-3xl'>{exercises && exercises.length > 0 ? "Showing Results ......" : "No Results!!! try with another keyword"}</h1>
      <div className='grid grid-cols-3 gap-24 p-20 m-10 mt-0'>
        {
          currentExercises.map((item) => (
              <ExerciseCard key={item.id} exercise ={item} />
          ))}
      </div>
      <Stack mt="100px" alignItems="center" justifyContent="center" width="100%">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  )
}

export default Exercise