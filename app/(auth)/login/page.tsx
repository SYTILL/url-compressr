"use client"

import GithubIcon from "@/app/GithubIcon";
import Link from "next/link";
import { login, signup } from "./action";
import InputBox from "./InputBox";
import { useFormState } from "react-dom";
import FormButton from "./FormButton";


export default function LoginPage() {
    const [stateLogin, actionLogin] = useFormState(login, { errors: [], fieldErrors: {} });
    const [stateSignup, actionSignup] = useFormState(signup, { errors: [], fieldErrors: {} });

    return (
        <>
            <div className="flex-1 flex justify-center items-center">
                <div className="flex flex-col items-center">

                    {/* LOGIN */}
                    <div className="font-semibold text-3xl mb-6">Login</div>

                    {/* input box */}
                    <form action={actionLogin} className="flex flex-col gap-4 pr-20">
                        <InputBox type="Username" errorMsg={stateLogin?.fieldErrors.username} />
                        <InputBox type="Password" errorMsg={stateLogin?.fieldErrors.password} />
                        <FormButton text="Login" />
                    </form>

                    <div className="mt-8 w-96 h-[2px] bg-slate-300"></div>

                    {/* SIGN UP */}
                    <div className="font-semibold text-3xl m-6">Sign Up</div>

                    {/* input box */}
                    <form action={actionSignup} className="flex flex-col gap-4 pr-20 mb-6">
                        <InputBox type="Username" errorMsg={stateSignup?.fieldErrors.username} />
                        <InputBox type="Email" errorMsg={stateSignup?.fieldErrors.email} />
                        <InputBox type="Password" errorMsg={stateSignup?.fieldErrors.password} />
                        <FormButton text="Submit" />
                    </form>

                    {/* result */}
                </div>
            </div>



            <div className="mb-4">
                <Link href={'https://github.com/SYTILL'}>
                    <div className="fill-sky-500">
                        <GithubIcon size={32} />
                    </div>
                </Link>

            </div>
        </>
    );
}
