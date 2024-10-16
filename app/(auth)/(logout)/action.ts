"use server"

import getSession from "@/app/lib/getSession";
import { redirect } from "next/navigation";

export default async function Logout() {
    const session = await getSession();

    await session.destroy();
    await session.save();

    redirect("/");
}