import { notFound, redirect } from "next/navigation";
import db from "../lib/db";


export default async function redirectLink({ params: { compURL } }: { params: { compURL: string } }) {
    const originalURL = await db.urls.findUnique({
        where: {
            compressed_url: compURL
        }
    })

    console.log(originalURL);

    if(originalURL){
        redirect(originalURL.original_url);
    }
    else{
        notFound();
    }
}