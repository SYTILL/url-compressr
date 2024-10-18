"use client"

export default function CopyButton({ text }: { text: string }) {
    return (
        <div onClick={() => { navigator.clipboard.writeText(text); }}
            className="w-16 border-2 flex justify-center rounded-lg hover:bg-yellow-400 transition">
            <span>Copy</span>
        </div>
    )
}