import Link from "next/link";

export default function Not_found(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Not-Found!</h1>
            <span className="mt-4 text-lg text-gre">The Request Resource is not Found</span>
            <p className="mt-6"><Link href={`/`} className=" text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">NextNews</Link></p>
        </div>
    )
}