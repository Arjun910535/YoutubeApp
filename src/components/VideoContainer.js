import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import Card from './Card'

const VideoContainer = () => {

    const [videos , setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        setVideos(json.items)
    }

  return (
    <div className='flex flex-wrap'>
        {
            videos.map(video => 
               <Link key={video.id} to={"/watch?v=" + video.id} > 
               <Card info={video}/>
               </Link>
                )
        }
    </div>
  )
}

export default VideoContainer