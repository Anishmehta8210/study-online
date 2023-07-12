"use client"
import React, { useState } from 'react'

const InsertPostForm = ({Topics}) => {
    const [topic_id,setTopic_id] = useState("")
    const [content_title,setContentTitle] = useState("")
    const [content_text,setContent_text] = useState("")
    const [author,setAuthor] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = await fetch("/api/content",{
            method:"POST",
            body:JSON.stringify({topic_id,content_title,content_text,author}),
            header:{
                "Content-Type":"application/json"
            }
        })
        data = await data.json()
        alert((data.message)|| (data.error))
    }
  return (
    <>
     <div className="bg-gray-200 border p-5 rounded">
                <h1 className='text-3xl text-semibold'>Insert Post  Here</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="name">Topic id</label>
                        <select   className="border px-3 py-2"  value={topic_id} onChange={(e) => setTopic_id(e.target.value)} >
                            <option >Select Topic</option>
                            {
                              Topics.map((value,key) => (<option key={key}  value={value._id}>{value.topic_title}</option>))
                            }
                        </select>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="Contenttitle">Content Title</label>
                        <input type="text" name='content_title'  className="border px-3 py-2" placeholder='Enter Content Title' value={content_title} onChange={(e) => setContentTitle(e.target.value)} />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="content_text">Content</label>
                        <textarea rows="5" type="text" name='content_text'  className="border px-3 py-2" placeholder='Enter Content Text'  onChange={(e) => setContent_text(e.target.value)} >{content_text}</textarea>
                    </div>
                   
                    <div className="mb-3 flex flex-col">
                        <input type="submit" value="Insert Post" className="bg-purple-900 text-white px-3 py-2 w-full" />
                    </div>
                </form>
            </div>
    </>
  )
}

export default InsertPostForm