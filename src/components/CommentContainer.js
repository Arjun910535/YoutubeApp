import React from 'react'


const commentsData = [
    {
        name: "Arjun Singh",
        text: "lorem ipsum dollar",
        replies: []
    }, 
    {
        name: "Arjun Singh",
        text: "lorem ipsum dollar",
        replies: [
            {
                name: "Arjun Singh",
                text: "lorem ipsum dollar",
                replies: [
                    {
                        name: "Arjun Singh",
                        text: "lorem ipsum dollar",
                        replies: [
                            {
                            name: "Arjun Singh",
                            text: "lorem ipsum dollar",
                            replies: [
                                {
                                name: "Arjun Singh",
                                text: "lorem ipsum dollar",
                                replies: []
                            }, ]
                        }, ]
                    }, 
                    {
                        name: "Arjun Singh",
                        text: "lorem ipsum dollar",
                        replies: []
                    }, 
                ]
            }, 
            {
                name: "Arjun Singh",
                text: "lorem ipsum dollar",
                replies: [
                    {
                        name: "Arjun Singh",
                        text: "lorem ipsum dollar",
                        replies: []
                    }, 
                ]
            }, 
        ]
    }, 
    {
        name: "Arjun Singh",
        text: "lorem ipsum dollar",
        replies: [
            {
                name: "Arjun Singh",
                text: "lorem ipsum dollar",
                replies: []
            }, 
            {
                name: "Arjun Singh",
                text: "lorem ipsum dollar",
                replies: []
            }, 
        ]
    }, 
    {
        name: "Arjun Singh",
        text: "lorem ipsum dollar",
        replies: []
    }, 
]

const Comment = ({data}) => {
    const { name, text } = data
    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-2'>
        <img className='w-8 h-8' alt='userImg' src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'/>

        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
        </div>
}

const CommentsList = ({comments}) => {
    // Don't use index as key
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 ml-5  border border-l-black'>
             <CommentsList comments={comment.replies} /> 
            </div>
        </div>
    ))
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl'>Comments:</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentContainer