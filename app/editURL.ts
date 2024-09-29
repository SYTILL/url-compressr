"use server"

import { BASE_URL } from "./lib/constants";
import db from "./lib/db";

export const editURL = async (URL: string, originalURL: string) => {
    const newURL = await db.urls.findUnique({
        where: {
            compressed_url: URL.replace(BASE_URL, '')
        }
    })

    if(!newURL){
        await db.urls.create({
            data: {
                compressed_url: URL.replace(BASE_URL, ''),
                original_url: originalURL
            }
        })

        return true;
    }

    return false;
}