import React from 'react'

const page = async () => {

  let countTopic = await fetch("http://127.0.0.1:3000/api/topic",{cache:"no-store"});
  countTopic  = await countTopic.json();
  countTopic = countTopic.data.length;

  let countContent = await fetch("http://127.0.0.1:3000/api/content",{cache:"no-store"});
  countContent  = await countContent.json();
  countContent = countContent.data.length;


  return (
    <div className='flex flex-1 gap-4'>
        <div className="p-4 bg-white flex-1 rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid grid-cols-3 gap-8 p-4 mx-auto text-gray-900 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">{countTopic}</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Topics</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">{ countContent }</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Contents</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Users</dd>
                </div>
               
            </dl>
        </div>
    </div>
  )
}

export default page