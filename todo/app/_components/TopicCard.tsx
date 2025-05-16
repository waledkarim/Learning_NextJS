import Link from 'next/link';
import { HiOutlineTrash, HiPencilAlt } from 'react-icons/hi';


export default function TopicCard(){
    return(
        <div className="border border-slate-300 my-3 p-3">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Topic title</h1>
                <div className='flex'>
                    <span>
                        <HiOutlineTrash size={24} className='text-red-500'/>
                    </span>
                    <Link href={'/edit-topic/123'}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </div>
            </div>
            <div>
                <p className="font-semibold">
                    Topic description
                </p>
            </div>
        </div>
    )
}