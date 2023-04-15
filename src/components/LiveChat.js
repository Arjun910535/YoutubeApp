import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, generateRandomString } from '../utils/helper'

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("")

    const chatMessages = useSelector(store => store.chat.messages)

    const dispatch = useDispatch()

    useEffect(()=> {
        const poll = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomString(20) + " 🚀"
            }))
        }, 1500)

        return () => clearInterval(poll)
    
    })

  return (
    <>
    <div className='w-full h-[550px] p-2 ml-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
       <div>
       {
        chatMessages.map((item, index) =>  
        <ChatMessage  key={index}
         name={item.name}
          message={item.message}
          />)
       }
       </div> 
    </div>
    <form className='w-full ml-2 p-2 border border-black'
    onSubmit={(e) => {
      e.preventDefault()
      dispatch(addMessage({
        name: "Arjun",
        message: liveMessage
      }))
      setLiveMessage("")
    }}
    >
        <input className='px-2 w-80' type='text' 
        value={liveMessage}
        onChange={ e => setLiveMessage(e.target.value)}
        />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat