import Link from "next/link";
import db from "../lib/db";
import ProfileInfo from "./ProfileInfo";
import getSession from "../lib/getSession";
import { notFound } from "next/navigation";

export default async function ProfilePage() {
    const cookie = await getSession();
    if (!cookie.username) {
        notFound();
    }

    const user = await db.user.findUnique({
        where: {
            username: cookie.username
        },
        select: {
            username: true,
            email: true,
            isPro: true,
        }
    })

    return (
        <div className="flex flex-col w-[450px]">
            <ProfileInfo username={user?.username!} email={user?.email!} plans={user?.isPro ? "Premium (100+ URLs, forever)" : "Free (up to 10 URLs, valid for 7 days)"} />

            {/* plans */}
            < div className="mt-4" >
                <div className="my-2"><span className="text-3xl">PLANS</span></div>
                <div className="flex flex-col border-2 p-4 gap-4 rounded-lg">
                    {/* username */}
                    <div className="flex gap-4">
                        <div className="border-2 rounded-lg h-10 w-24 flex items-center justify-center bg-sky-500"><span>Username</span></div>
                        <div className="flex-1 flex items-center h-10 border-2 rounded-lg pl-3"><span>asdf</span></div>
                    </div>
                </div>
            </div >
        </div>
    )
}