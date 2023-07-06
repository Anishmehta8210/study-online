import Link from 'next/link'
import React from 'react'

const page = async () => {

    let callingContent = await fetch("http://127.0.0.1:3000/api/content")
    callingContent = await callingContent.json()
  return (
    <>
    
<div className="relative overflow-x-auto">
    <div className="flex justify-between">
        <h1 className='text-2xl font-bold'>Manage Content</h1>
        <Link href="" className='bg-green-500 hover:bg-green-800 text-white px-3 py-2 rounded'>Add Topic</Link>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    content
                </th>
                <th scope="col" className="px-6 py-3">
                    Author
                </th>
                <th scope="col" className="px-6 py-3">
                    Views
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                callingContent.data.map((value,key) => (
                    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {value._id}
                </th>
                <td className="px-6 py-4">
                    {value.content_title}
                </td>
                <td className="px-6 py-4">
                    {value.content_text}
                </td>
                <td className="px-6 py-4">
                    {value.author}
                </td>
                <td className="px-6 py-4">
                    {value.views}
                </td>
                <td className="px-6 py-4">
                    {(value.status)? <span className='bg-red-600 px-2 py-1 rounded text-white'>Live</span>:<span className='bg-green-600 px-2 py-1 rounded text-white'>Draft</span>}
                </td>
                <td className="px-6 py-4 flex gap-1">
                   <Link href="" className='bg-red-600 hover:bg-red-800 text-white px-3 py-2 rounded'>Delete</Link>
                   <Link href="" className='bg-sky-600 hover:bg-sky-800 text-white px-3 py-2 rounded'>Edit</Link>
                   <Link href="" className='bg-yellow-600 hover:bgyellow-800 text-white px-3 py-2 rounded'>View</Link>
                </td>
            </tr>
                ))
            }

        </tbody>
    </table>
</div>

    </>
  )
}

export default page