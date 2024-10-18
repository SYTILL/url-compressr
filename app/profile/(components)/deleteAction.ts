"use server"

import db from "@/app/lib/db"
import { redirect } from "next/navigation"

export default async function deleteURL(compressed_url: string){
    await db.urls.delete({
        where: {
            compressed_url
        }
    })

    redirect('/profile');
}