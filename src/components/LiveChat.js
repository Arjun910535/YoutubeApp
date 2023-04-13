import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, generateRandomString } from '../utils/helper'

const LiveChat = () => {

    const chatMessages = useSelector(store => store.chat.messages)

    const dispatch = useDispatch()

    useEffect(()=> {
        const poll = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomString(20) + " 🚀"
            }))
        }, 2000)

        return () => clearInterval(poll)
    
    })

  return (
    <div className='w-full h-[550px] p-2 ml-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
       {
        chatMessages.map((item, index) =>  
        <ChatMessage  key={index}
         name={item.name}
          message={item.message}
          />)
       }
    </div>
  )
}

export default LiveChat