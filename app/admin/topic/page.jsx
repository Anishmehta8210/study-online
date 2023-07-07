import Link from 'next/link'
import React from 'react'
import AdminTopicCalling from '../components/AdminTopicCalling'

const page = async () => {

    let callingTopic = await fetch("http://127.0.0.1:3000/api/topic",{cache:"no-store"})
    callingTopic = await callingTopic.json()
  return (
    <>
    
<div className="relative overflow-x-auto">
    <div className="flex justify-between">
        <h1 className='text-2xl font-bold'>Manage Topics</h1>
        <Link href="/admin/topic/insert" className='bg-green-500 hover:bg-green-800 text-white px-3 py-2 rounded'>Add Topic</Link>
    </div>
    <AdminTopicCalling callingTopic={callingTopic} />
</div>

    </>
  )
}

export default page