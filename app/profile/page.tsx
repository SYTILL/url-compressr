import db from "../lib/db";
import getSession from "../lib/getSession";
import { notFound } from "next/navigation";
import ProfileInfo from "./(components)/ProfileInfo";
import ProfilePlans from "./(components)/ProfilePlans";
import ProfileURLs from "./(components)/ProfileURLs";

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
            urls: true,
        }
    })

    if(!user){
        notFound();
    }


    return (
        <div className="flex flex-col w-[450px] overflow-y-auto">
            <ProfileInfo username={user.username} email={user.email} plans={user.isPro ? "Premium" : "Free"} />

            {user.isPro ? null : <ProfilePlans />}

            <ProfileURLs URLs={user.urls} isPro={user.isPro} />

        </div>
    )
}