export default function EditTopic(){
    return(
        <form className="mt-3 flex flex-col gap-4">
            <input 
                type="text"
                className="border border-slate-300 p-3"
                placeholder="Update Topic"
            />
            <input 
                type="text"
                className="border border-slate-300 p-3"
                placeholder="Update Description"
            />
            <button className="bg-green-600 font-bold py-4 text-white" type="submit">
                Update Topic
            </button>
        </form>
    )
}