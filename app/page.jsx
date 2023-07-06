import Image from 'next/image'
import Side from './(design)/components/Side'
import TopicCard from './(design)/components/TopicCard'

export default async function Home() {
  return (
    <>
    <div className="flex">
      <div className="w-2/12">
        <Side />
      </div>
      <div className="w-10/12">
        <div className="p-5">
        {/* <TopicCard /> */}
        </div>
      </div>
    </div>
    </>
  )
}
