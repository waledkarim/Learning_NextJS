import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="border border-black flex justify-between items-center py-3 px-8 bg-slate-800">
            <Link href={'/'} className="text-white font-bold">Waled's Todo</Link>
            <Link href={'/add-topic'} className="bg-white p-2">Add Topic</Link>
        </nav>
    )
}