import React from 'react'
import Button from './Button'

const list = ["All", "Movies" , "Games", "Songs", "Shorts", "News", "Cricket", "Poker", "Apple", "Samsung", "Nokia", "King"]

const ButtonList = () => {
  return (
    <div className='flex'>
        {
        list.map(item => <Button key={item} name={item}/>)
        }
    </div>
  )
}

export default ButtonList