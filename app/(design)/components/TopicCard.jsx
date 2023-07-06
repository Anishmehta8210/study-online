import React from 'react'

const TopicCard = ({value}) => {
  return (
    <div className='flex flex-col'>
        <h2 className='text-xl font-bold'>{value.topic_title} </h2>
        <p className='text-lg'>{value.description}</p>

    </div>
  )
}

export default TopicCard