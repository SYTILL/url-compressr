
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent{
    username?: string;
}

export default function getSession(){
    return getIronSession<SessionContent>(cookies(),{
        cookieName: "urlcompressr",
        password: process.env.COOKIE_PASSWORD!,
        cookieOptions:{
            maxAge: 3 * 60 * 60,
        }
    });
}