"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const TopicInsertForm = () => {
    const router = useRouter()
    const [topic_title,setTopic_Title] = useState("")
    const [description,setDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        let data = await fetch("/api/topic",{
            method:"POST",
            body:JSON.stringify({topic_title,description}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        data = await data.json();
        router.push("/admin/topic")
    }
  return (
    <>
    <div className="w-full mx-auto max-w-lg mt-12 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" onSubmit={handleSubmit} >
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Insert Topic</h5>
        <div>
            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic Title</label>
            <input type="text" name=" Topic title" id="email" value={topic_title} onChange={e => setTopic_Title(e.target.value)}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Topic Title" required/>
        </div>
        <div>
            <label for="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea rows="5" value={description} onChange={e => setDescription(e.target.value)}cols="5" type="password" name="Descrip" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required ></textarea>
        </div>
        
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Topic</button>
       
    </form>
</div>
    </>
  )
}

export default TopicInsertForm