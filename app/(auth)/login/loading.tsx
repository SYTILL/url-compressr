"use client"

import GithubIcon from "@/app/GithubIcon";
import Link from "next/link";
import InputBox from "./InputBox";


export default function LoginPage() {
    return (
        <>
            <div className="flex-1 flex justify-center items-center">
                <div className="flex flex-col items-center">

                    {/* LOGIN */}
                    <div className="font-semibold text-3xl mb-6">Login</div>

                    {/* input box */}
                    <div className="flex flex-col gap-4 pr-20">
                        <InputBox type="Username" />
                        <InputBox type="Password" />
                        <button className="bg-sky-500 rounded-md h-7 w-20 self-center ml-20 hover:bg-sky-300 transition">Login</button>
                    </div>

                    <div className="mt-8 w-96 h-[2px] bg-slate-300"></div>

                    {/* SIGN UP */}
                    <div className="font-semibold text-3xl m-6">Sign Up</div>

                    {/* input box */}
                    <div className="flex flex-col gap-4 pr-20 mb-6">
                        <InputBox type="Username" />
                        <InputBox type="Email" />
                        <InputBox type="Password" />
                        <button className="bg-sky-500 rounded-md h-7 w-20 self-center ml-20 hover:bg-sky-300 transition">Submit</button>
                    </div>

                    {/* result */}
                </div>
            </div>



            <div className="mb-4">
                <Link href={'https://github.com/SYTILL'}>
                    <div className="fill-sky-500">
                        <GithubIcon size={32} />
                    </div>
                </Link>

            </div>
        </>
    );
}
