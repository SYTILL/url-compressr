interface ProfileInfoProps {
    username: string;
    email: string;
    plans: string;
}

export default function ProfileInfo({ username, email, plans }: ProfileInfoProps) {
    return (
        < div className="mt-20" >
            <div className="my-2"><span className="text-3xl">INFO</span></div>
            <div className="flex flex-col border-2 p-4 gap-4 rounded-lg">
                {/* username */}
                <div className="flex gap-4">
                    <div className="border-2 rounded-lg h-10 w-24 flex items-center justify-center bg-sky-500"><span>Username</span></div>
                    <div className="flex-1 flex items-center h-10 border-2 rounded-lg pl-3"><span>{username}</span></div>
                </div>
                {/* email */}
                <div className="flex gap-4">
                    <div className="border-2 rounded-lg h-10 w-24 flex items-center justify-center bg-sky-500"><span>Email</span></div>
                    <div className="flex flex-col h-16 flex-1 ">
                        <div className="flex items-center h-10 border-2 rounded-lg pl-3"><span>{email}</span></div>
                        <div className="text-sm text-red-500 mt-1">Click <u>here</u> to verify your email!</div>
                    </div>
                </div>
                {/* plans */}
                <div className="flex gap-4">
                    <div className="border-2 rounded-lg h-10 w-24 flex items-center justify-center bg-yellow-400 text-black"><span>Plans</span></div>
                    <div className="flex flex-col h-16 flex-1 ">
                        <div className="flex items-center h-10 border-2 rounded-lg pl-3"><span>{plans}</span></div>
                        <div className="text-sm text-red-500 mt-1">Click <u>here</u> to upgrade to a premium version!</div>
                    </div>
                </div>
            </div>
        </div >
    )
}