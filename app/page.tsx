"use client"

import Link from "next/link";
import GithubIcon from "./GithubIcon";
import { useFormState } from "react-dom";
import { compressURL } from "./compressURL";
import { BASE_URL } from "./lib/constants";
import { useEffect, useState } from "react";
import { InputEditURL } from "./InputEditURL";

export default function Home() {
    const [stateCompURL, actionCompURL] = useFormState(compressURL, { success: false })
    const [msg, setMsg] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setMsg("");
        }, 3000)
        return () => clearTimeout(timer);
    }, [msg])

    const copyN = (N: string) => {
        navigator.clipboard.writeText(N)
    }

    return (
        <div className="w-screen h-screen bg-slate-800 text-white font-Fredoka tracking-wide flex">
            <div className="flex-1 border-2 flex items-center flex-col justify-between">
                <div className="flex flex-col items-center">
                    {/* title */}
                    <div className="font-semibold text-6xl m-20 mt-36 ">URL Compressr</div>
                    {/* input box */}
                    <form action={actionCompURL} className="flex w-[600px] h-[40px] gap-3">
                        <input
                            className="mt-[2px] flex-1 input-box"
                            name="url" type="url" placeholder="https://github.com/SYTILL" />
                        <button className="bg-sky-500 rounded-md h-[42px] w-24 hover:bg-sky-300 transition">Compress</button>
                    </form>

                    {/* result */}
                    {stateCompURL.success ? (
                        <div className="mt-12 flex-1 flex flex-col w-[600px]">
                            <div className="self-center text-slate-400">Compressing Done! URL will be available for 7 days.</div>
                            <div className="self-center text-slate-400">You can edit URL below if you want. (MUST press "Edit URL"')</div>
                            

                            <div className="flex justify-evenly h-[32px] m-4 gap-3">
                                <InputEditURL compUrl={BASE_URL + stateCompURL.compressedURL!} originalUrl={stateCompURL.original_url!} copyState={setMsg} />
                            </div>

                            {<div className={`self-center text-slate-400 transition-all ease-linear duration-150 ${msg!="" ? 'opacity-100' : 'opacity-0'}`}>{msg}</div>}
                        </div>
                    ) : null}
                </div>



                <div className="mb-4">
                    <Link href={'https://github.com/SYTILL'}>
                        <div className="fill-sky-500">
                            <GithubIcon size={32} />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
