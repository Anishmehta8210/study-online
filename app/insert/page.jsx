import InsertPostForm from "../(design)/components/InsertPostForm"

const insert = async () => {
    let callingTopic = await fetch("http://127.0.0.1:3000/api/topic")
    callingTopic = await callingTopic.json()
    return(
        <>
        <div className="flex justify-center">
            <div className="w-6/12">
                <InsertPostForm Topics={callingTopic.data}/>
            </div>
        </div>
        </>
    )
}

export default insert