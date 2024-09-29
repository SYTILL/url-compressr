"use client"

import Link from "next/link";
import GithubIcon from "./GithubIcon";

export default function NotFound() {

    return (
        <div className="w-screen h-screen bg-slate-800 text-white font-Fredoka tracking-wide flex">
            <div className="flex-1 border-2 flex items-center flex-col justify-between">
                <div className="flex flex-col items-center">
                    {/* title */}
                    <Link href={'/'}>
                        <div className="font-semibold text-6xl m-20 mt-36 ">URL Compressr</div>
                    </Link>
                    <div>Invalid URL</div>
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
    )
}