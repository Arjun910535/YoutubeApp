import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='felx items-center shadow-sm'>
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage