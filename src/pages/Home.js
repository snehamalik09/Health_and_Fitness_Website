import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Exercise from '../components/Exercise'
import SearchExercise from '../components/SearchExercise'
import {useState, useEffect} from 'react';

const Home = () => {
  useEffect(()=>{
    document.title = "Health & Fitness Hub";
  }, [])

  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <div className='w-[100%] '>
      <HeroBanner/>
      <SearchExercise setExercises={setExercises} bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
      <Exercise setExercises={setExercises} bodyPart = {bodyPart} exercises = {exercises} />
    </div>
  )
}

export default Home
