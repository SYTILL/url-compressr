import paymentAction from "./paymentAction";


export default function ProfilePlans() {
    const action = paymentAction;

    return (
        < div className="mt-4" >
            <div className="my-2"><span className="text-3xl">PLANS</span></div>
            <div className="flex flex-col border-2 p-4 gap-4 rounded-lg">
                {/* FREE */}
                <div className="flex gap-4">
                    <div className="border-2 rounded-lg h-10 w-24 flex items-center justify-center"><span>Free</span></div>
                    <div className="flex-1 flex items-center h-10 border-2 rounded-lg pl-3"><span>up to 10 URLs, valid for 7 days</span></div>
                </div>
                {/* PREMIUM */}
                <div className="flex gap-4">
                    <div className="border-2 rounded-lg h-10 w-24 flex items-center justify-center text-yellow-400"><span>Premium</span></div>
                    <div className="flex-1 flex items-center h-10 border-2 rounded-lg pl-3"><span>manage 100+ URLs, forever</span></div>
                </div>
                {/* PREMIUM */}
                <form action={action} className="flex">
                    <button className="h-10 border rounded-lg flex-1 flex justify-center items-center hover:bg-sky-500 transition">
                        <span>{`Upgrade to Premium! (it's free actually)`}</span>
                    </button>
                </form>
            </div>
        </div >
    )
}