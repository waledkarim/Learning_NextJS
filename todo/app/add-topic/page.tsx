export default function AddTopic(){
    return(
        <form className="mt-3 flex flex-col gap-4">
            <input 
                type="text"
                className="border border-slate-300 p-3"
                placeholder="Add Topic"
            />
            <input 
                type="text"
                className="border border-slate-300 p-3"
                placeholder="Add Description"
            />
            <button className="bg-green-600 font-bold py-4 text-white" type="submit">
                Add Topic
            </button>
        </form>
    )
}