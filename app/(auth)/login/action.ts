"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import db from "@/app/lib/db";
import getSession from "@/app/lib/getSession";
import { PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_ERROR, PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR } from "@/app/lib/constants";


//-------------------------------------login------------------------------------------------------
const checkUsernameExists = async (username: string) => {
    const user = await db.user.findUnique({
        where: { username_lower: username.toLowerCase() },
        select: { id: true }
    });
    return Boolean(user);
}

const validateLogin = z.object({
    username: z.string().min(1, "Please enter the username").refine(checkUsernameExists, "This username doesn't exist"),
    password: z.string().min(1, "Please enter the password")
})

export const login = async (prevState: any, formData: FormData) => {
    const data = {
        username: formData.get("username"),
        password: formData.get("password"),
    };

    const result = await validateLogin.spa(data);

    if (!result.success) { //username doesn't exist:
        return {
            errors: [],
            fieldErrors: result.error.flatten().fieldErrors,
        };
    }
    else { //if username exists:
        const user = await db.user.findUnique({
            where: { username: result.data.username },
            select: { password: true },
        });

        const ok = await bcrypt.compare(result.data.password, user!.password ?? "");

        //log the user in
        //redirect /profile
        if (ok) {
            const session = await getSession();
            session.username = result.data.username;
            await session.save();
            redirect("/");
        }
        else {
            return {
                fieldErrors: {
                    password: ["Wrong password."],
                    username: [],
                },
            };
        }
    }
}



//-------------------------------------sign up------------------------------------------------------
const checkUsernameNotExists = async (username: string) => {
    const user = await db.user.findUnique({
        where: { username_lower: username.toLowerCase() },
        select: { id: true }
    });
    return !Boolean(user);
}


const validateSignup = z.object({
    username: z.string().min(1, "Please enter the username")
        .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR)
        .max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_ERROR)
        .refine(checkUsernameNotExists, "This username is taken"),
    email: z.string().email("Not a valid email"),
    password: z.string().min(1, "Please enter the password")
        .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR)
        .max(PASSWORD_MAX_LENGTH, PASSWORD_MAX_LENGTH_ERROR)
})

export const signup = async (prevState: any, formData: FormData) => {
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const result = await validateSignup.spa(data);


    if (!result.success) {
        return {
            errors: [],
            fieldErrors: result.error.flatten().fieldErrors,
        };
    }
    else {
        //hash pwd
        const hashedPassword = await bcrypt.hash(result.data.password, 12)

        //save the user to db
        const user = await db.user.create({
            data: {
                username: result.data.username,
                username_lower: result.data.username.toLowerCase(),
                email: result.data.email,
                password: hashedPassword,
            },
            select: {
                username: true,
            },
        });

        //log the user in
        const cookie = await getSession();
        cookie.username = user.username;
        await cookie.save();
        redirect("/profile");
        //redirect /home
    }
}