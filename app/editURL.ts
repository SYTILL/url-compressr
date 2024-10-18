"use server"

import { notFound } from "next/navigation";
import { BASE_URL } from "./lib/constants";
import db from "./lib/db";
import getSession from "./lib/getSession";

export const editURL = async (URL: string, originalURL: string, urlID: number) => {
    const newURL = await db.urls.findUnique({
        where: {
            compressed_url: URL.replace(BASE_URL, '')
        }
    })

    if(!newURL){
        const cookie = await getSession();

        const user = await db.user.findUnique({
            where: {
                username: cookie.username
            },
            select:{
                id: true
            }
        })

        if(!user){
            notFound();
        }

        await db.urls.update({
            where:{
                id: urlID
            },
            data: {
                userId: user.id,
                compressed_url: URL.replace(BASE_URL, ''),
                original_url: originalURL
            }
        })

        return true;
    }

    return false;
}