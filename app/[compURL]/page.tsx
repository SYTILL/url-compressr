// import db from "../lib/db";
import { notFound, redirect } from "next/navigation";
import LinkNotFound from "../not-found";
import db from "../lib/db";


export default async function redirectLink({ params: { compURL } }: { params: { compURL: string } }) {
    const originalURL = await db.urls.findUnique({
        where: {
            compressed_url: compURL
        }
    })

    if(originalURL){
        redirect(originalURL.original_url);
    }
    else{
        notFound();
    }
}