"use client"

import Link from "next/link";
import GithubIcon from "../GithubIcon";

export default function NotFound() {

    return (
        <div className="flex-1 flex items-center flex-col justify-between">
            <div className="flex flex-col items-center mt-32">
                <div>Please log in</div>
            </div>

            <div className="mb-4">
                <Link href={'https://github.com/SYTILL'}>
                    <div className="fill-sky-500">
                        <GithubIcon size={32} />
                    </div>
                </Link>

            </div>
        </div>
    )
}