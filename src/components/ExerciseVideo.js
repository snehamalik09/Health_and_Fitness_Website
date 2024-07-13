import React from 'react'

const ExerciseVideo = ({youtubeVideos, exerciseDetail}) => {
  if(!youtubeVideos.length){
    return(
      <div></div>
    )
  }

  if(!exerciseDetail){
    return(
      <div> </div>
    )
  }

  console.log(youtubeVideos);

  const truncateTitle = (title, wordCount) => {
    const words = title.split(' ');
    if(words.length>wordCount){
      return words.slice(0, 5).join(' ')+'....';
    }
    return title;
  }

  return (
    <div className='m-12 flex flex-col '>
      <h1 className='capitalize font-bold text-2xl tracking-wider text-red-600'>Watch <span className='text-black'> {exerciseDetail.name} </span>  Exercise Videos</h1>
      <div className='mt-10 flex justify-around items-center'>
        {
          youtubeVideos?.slice(0, 3).map((item, index) => (
            <a key={index} href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
              <img src={item.video.thumbnails[0].url} alt={item.video.title} className='w-80 h-44 object-cover border-4 border-[#f3d0d7]' />
              <div className='text-center text-sm text-normal p-2'>
                <p>{truncateTitle(item.video.title, 7)} </p>
              </div>
            </a>
            
          ))
        }
      </div>
    </div>
  )
}

export default ExerciseVideo
