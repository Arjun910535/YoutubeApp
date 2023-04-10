import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'



const Head = () => {

    const dispatch = useDispatch() 

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-10 cursor-pointer' 
        alt='menu' 
        src='https://www.svgrepo.com/show/312300/hamburger-menu.svg' />

     <a href='/'> 
        <img 
        className='h-10 mx-2' 
        alt='icon' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png' />
      </a>
        </div>

        <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" />

        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'> 
        🔍
         </button>
        </div>

        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'/>
        </div>
    </div>
  )
}

export default Head
