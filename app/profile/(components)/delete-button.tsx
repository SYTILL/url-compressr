"use client"

import db from "@/app/lib/db"
import deleteURL from "./deleteAction"

export default function DeleteButton({ compressed_url }: { compressed_url: string }) {
    const delete1 = () => {deleteURL(compressed_url)}

    return (
        <div className="w-16 border-2 flex justify-center rounded-lg hover:bg-red-500 transition" onClick={delete1}>
            <span>Delete</span>
        </div>
    )
}