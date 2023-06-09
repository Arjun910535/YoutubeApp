import React from 'react'

const Card = ({ info }) => {

    const { channelTitle , title , thumbnails } = info && info.snippet
    const { viewCount } = info && info.statistics
    
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt="thumbnail" src= {thumbnails.medium.url }/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} views</li>
        </ul>
    </div>
  )
}

export default Card