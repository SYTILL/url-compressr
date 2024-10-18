
import { BASE_URL } from "@/app/lib/constants";
import CopyButton from "./copy-button";
import DeleteButton from "./delete-button";

interface ProfileURLsProps {
    URLs: {
        compressed_url: string;
        original_url: string;
    }[] | undefined;
    isPro: boolean;
}


export default function ProfileURLs({ URLs, isPro }: ProfileURLsProps) {

    return (
        < div className="mt-4 mb-20" >
            <div className="my-2"><span className="text-3xl">URLS</span></div>
            <div className="flex flex-col border-2 p-4 gap-2 rounded-lg">
                {isPro ?
                    (!URLs || URLs.length === 0 ? (
                        <div className="text-sky-500">Go back to Home and try compressing URLs!</div>
                    ) : (
                        URLs.map(({ compressed_url, original_url }, index) => (
                            <div key={index} className="flex gap-2">
                                {/* side bar */}
                                <div className="w-2 h-16 border-2 bg-slate-400 border-slate-400 rounded-lg"></div>
                                <div className="flex-1 flex flex-col gap-2">
                                    {/* original url */}
                                    <div className="flex gap-2">
                                        <input className="m-[2px] input-box p-2 h-6 flex-1 text-sm"
                                            type="text" placeholder="asdfasdfsdf" autoComplete="off" value={original_url} readOnly />
                                        <DeleteButton compressed_url={compressed_url}/>
                                    </div>
                                    {/* compress url */}
                                    <div className="flex gap-2">
                                        <input className="m-[2px] input-box p-2 h-6 flex-1 text-sm"
                                            type="text" placeholder="asdfasdfsdf" autoComplete="off" value={BASE_URL + compressed_url} readOnly />
                                        <CopyButton text={BASE_URL + compressed_url} />
                                    </div>
                                </div>
                            </div>
                        ))
                    ))
                    : <div className="text-red-500">Only available for Premium users</div>
                }
            </div>
        </div >
    )
}