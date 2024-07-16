import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {exerciseOptions, youtubeOptions,fetchData} from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideo from '../components/ExerciseVideo';


const ExerciseDetail = () => {

const [exerciseDetail, setExerciseDetail] = useState(null);
const [youtubeVideos, setYoutubeVideos] = useState([]);
const {id} = useParams();

useEffect(() => {
  const fetchExerciseData = async () => {
    try {
      const url = 'https://exercisedb.p.rapidapi.com';
      const e = await fetchData(`${url}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(e);

      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const youtubeData = await fetchData(`${youtubeUrl}/search?query=${e.name}`, youtubeOptions);
      setYoutubeVideos(youtubeData.contents);
      
      document.title = "Health & Fitness Hub";
    } 
    catch (error) {
      console.error('Failed to fetch exercise details');
    }
  };

  fetchExerciseData();
  
}, [id]);

  return (
    <div className=' '>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo youtubeVideos={youtubeVideos} exerciseDetail={exerciseDetail}  />
      <SimilarExercises exerciseDetail={exerciseDetail}  />
    </div>
  )
}

export default ExerciseDetail;
