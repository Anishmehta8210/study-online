import React from 'react'
import ContentInsertForm from '../../components/ContentInsertForm'

const page = async  () => {
    let callingTopic = await fetch("http://127.0.0.1:3000/api/topic")
    callingTopic = await callingTopic.json()
  return (
    <><div classNameName="flex">
        <div classNameName="w-7/12">
            
<ContentInsertForm topics={callingTopic.data}/>

        </div>
    </div>
    </>
  )
}

export default page