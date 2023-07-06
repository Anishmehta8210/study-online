import Link from 'next/link'
import React from 'react'

const Side = async () => {

    const callingTopics = await fetch("http://127.0.0.1:3000/api/topic",{cache:"no-store"})
    let topics = await callingTopics.json()

  return (
    <>
    <div className="flex flex-col items text-center ">
        <Link href="" className='bg-purple-600 text-black font-semibold font-sans text-2xl p-4 hover:bg-purple-800' >Topics</Link>
        {
            topics.data.map((value,key) => (<Link href={`/content/${value._id}`} key={key} className='bg-purple-200 text-black  font-sans text-lg px-4 py-2 hover:bg-purple-400' >{value.topic_title}</Link>
            ))
        }
    </div>
    </>
  )
}

export default Side