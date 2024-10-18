"use server"

import db from "@/app/lib/db";
import getSession from "@/app/lib/getSession";
import { redirect } from "next/navigation";

export default async function paymentAction() {
    const cookie = await getSession();

    await db.user.update({
        where: { username: cookie.username },
        data: { isPro: true }
    })

    redirect('/profile')
}