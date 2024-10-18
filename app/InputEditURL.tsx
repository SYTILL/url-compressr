import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { BASE_URL } from "./lib/constants";
import { editURL } from "./editURL";

export default function InputEditURL({ compUrl, originalUrl, urlID, copyState }:
    { compUrl: string, originalUrl: string, urlID: number, copyState: Dispatch<SetStateAction<string>> }) {

    const [URL, setURL] = useState(BASE_URL + compUrl);

    useEffect(() => { setURL(BASE_URL + compUrl) }, [compUrl])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value.length, BASE_URL.length)
        if (e.target.value.length <= BASE_URL.length) {
            console.log(2)
            setURL(BASE_URL)
            return
        }
        const regex = /^[a-zA-Z0-9-.,_~!*$&'()*+;=:@?#]+$/
        if (!(regex.test(e.target.value[e.target.value.length - 1]))) {
            console.log(1, e.target.value[e.target.value.length - 1])
            return
        }
        setURL(e.target.value)
    }

    const checkEditURL = async () => {
        if (await editURL(URL, originalUrl, urlID)) {
            copyState("Done!");
        }
        else {
            copyState("This URL is taken.");
        }
    }

    return (
        <>
            <input className="m-[2px] input-box p-2 flex-1 text-sm" type="text" placeholder="asdfasdfsdf" value={URL} onChange={onChange} />
            <button className="button-box pb-[1px]" onClick={() => { navigator.clipboard.writeText(URL); copyState("Copied!"); }}>Copy</button>
            <button className="button-box pb-[1px] pl-[1px]" onClick={() => checkEditURL()}>Edit URL</button>
        </>
    )
}