"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
    text: string;
}

export default function FormButton({ text }: ButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className="bg-sky-500 rounded-md h-7 w-20 self-center ml-20 hover:bg-sky-300 transition disabled:cursor-not-allowed">
            {pending ? "Loading..." : text}
        </button>
    )
}