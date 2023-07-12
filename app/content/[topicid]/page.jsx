import TopicCard from "@/app/(design)/components/TopicCard";
import Link from "next/link";


export default async function Home({ params }) {
  let callingContent = await fetch(
    `http://127.0.0.1:3000/api/content/${params.topicid}`,{cache:"no-store"}
  );
  callingContent = await callingContent.json();

  let callingTopic = await fetch(
    `http://127.0.0.1:3000/api/topic/${params.topicid}`,{cache:"no-store"}
  );
  callingTopic = await callingTopic.json();

  return (
    <>
      <TopicCard value={callingTopic.data} />
      <div className="flex mt-5">
        <h2 className="text-lg font-semibold">
          All {callingTopic.data.topic_title} Contents
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {callingContent.data.map((value, key) => (
          <Link
            href={`/view/${value._id}`}
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {value.content_title}
            </h5>
          </Link>
        ))}
      </div>
    </>
  );
}