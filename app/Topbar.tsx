"use server"

import getSession from "./lib/getSession";
import Logout from "./(auth)/(logout)/action";
import Link from "next/link";


export default async function Topbar() {
    const session = await getSession();

    return (
        <div className="fixed bg-slate-800 h-10 flex gap-3 items-center justify-end mr-3 w-screen border-b-2 border-slate-300 text-white">
            <Link className="absolute left-3 text-white" href={"/"}>Home</Link>
            <Link className=" text-white" href={"/profile"}>Profile</Link>
            {session.username ?
                <form className="mr-2" action={Logout}><button>Logout</button></form>
                :
                <Link className="mr-2 text-white" href={"/login"}>Login</Link>
            }
        </div>
    )
}