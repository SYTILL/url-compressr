"use server"

import { z } from "zod"
import { genRandomURL } from "./lib/constants";
import db from "./lib/db";
import getSession from "./lib/getSession";
import { redirect } from "next/navigation";

interface stateType {
    success: boolean;
    compressedURL?: string;
    original_url?: string;
    error_msg?: string;
    urlID?: number;
}

export const compressURL = async (state: stateType, formData: FormData): Promise<stateType> => {
    const cookie = await getSession();

    if (!cookie.username) {
        redirect('/login');
    }

    const user = await db.user.findUnique({
        where: { username: cookie.username },
        select: { isPro: true, urls: true }
    });

    if (!user) {
        return { success: false, error_msg: "User Doesn't Exist" }
    }

    if (!user.isPro || user.urls.length >= 10) {
        return { success: false, error_msg: "Free users can create up to 10 URLs" }
    }


    const urlz = z.string().url()
    const result = urlz.safeParse(formData.get("url"));

    if (result.success) {

        const userID = await db.user.findUnique({
            where: { username: cookie.username },
            select: { id: true }
        })

        const compressedURL = genRandomURL();
        const created_url = await db.urls.create({
            data: {
                compressed_url: compressedURL,
                original_url: result.data,
                userId: userID?.id
            },
            select: {
                id: true
            }
        })

        return {
            urlID: created_url.id,
            success: true,
            compressedURL,
            original_url: result.data,
        }
    }

    return { success: false, error_msg: "Invalid URL" }
}