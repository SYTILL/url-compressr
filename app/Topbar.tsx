"use server"

import getSession from "./lib/getSession";
import Logout from "./(auth)/(logout)/action";
import Link from "next/link";


export default async function Topbar() {
    const session = await getSession();

    return (
        <div className="h-10 flex gap-3 items-center justify-end mr-3">
            <Link className="absolute left-3 text-white" href={"/"}>Home</Link>
            <Link className=" text-white" href={"/profile"}>Profile</Link>
            {session.username ?
                <form action={Logout}><button>Logout</button></form>
                :
                <Link className=" text-white" href={"/login"}>Login</Link>
            }
        </div>
    )
}