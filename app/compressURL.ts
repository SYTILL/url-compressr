"use server"

import { z } from "zod"
import { genRandomURL } from "./lib/constants";
import db from "./lib/db";

interface stateType {
    success: boolean;
    compressedURL?: string;
    original_url?: string;
}

export const compressURL = async (state: stateType, formData: FormData) => {
    const urlz = z.string().url()
    const result = urlz.safeParse(formData.get("url"));

    if (result.success) {

        const compressedURL = genRandomURL();
        await db.urls.create({
            data: {
                compressed_url: compressedURL,
                original_url: result.data,
            }
        })

        return {
            success: true,
            compressedURL: compressedURL,
            original_url: result.data,
        }
    }

    return { success: false }
}