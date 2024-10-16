interface InputBoxProps {
    type: string;
    errorMsg?: string[];
}




export default function InputBox({ type, errorMsg }: InputBoxProps) {
    return (
        <div className="flex w-[350px] gap-3">
            <div className="w-20 flex pt-1"><span className="self-center ml-auto mb-auto">{type}</span></div>
            
            <div className="">
                <input className="h-8 w-64 input-box p-2" name={type.toLowerCase()} type={type.toLowerCase()} placeholder="" />
                {errorMsg?.map((msg) =>
                    <div className="text-sm text-red-500 mt-1">{msg}</div>
                )}
            </div>
        </div>
    )
}