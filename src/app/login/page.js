'use client'
import { useState } from "react"
import { signin } from "../config/firebase"
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { authentication } from "../config/firebase";
import { useRouter } from "next/navigation"
import Navbar from "../navbar/Navbar"
export default function login() {
    const router = useRouter()
    const [isEmail, setIsEmail] = useState()
    const [IsPassword, setIsPassword] = useState()
    console.log("Email============>" , isEmail);
    console.log("Email============>" , IsPassword);

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
          .then((re) => {
            router.push("/dashboard", { scroll: false });
            console.log(re);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

    const onSignin = async()=>{
        if (isEmail === null || IsPassword === null) {
            alert("Please Filled out the empty area")
        }
        else {


            try {
                await signin(isEmail, IsPassword)
                alert("Successfully Login")
                router.push('/dashboard', { scroll: false })
            } catch (e) {
                alert("You have enter wrong email and password")
            }
            setIsEmail("")
            setIsPassword("")
        }
    }

    return (
        <>
        <Navbar />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <header className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    onChange={(e) => setIsEmail(e.target.value)}
                                    value={isEmail}
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    onChange={(e) => setIsPassword(e.target.value)}
                                    value={IsPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={onSignin}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                            <button
                                onClick={signInWithFacebook}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
                            >
                                Facebook
                            </button>
                        </div>
                    </header>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <span style={{cursor : 'pointer'}} onClick={()=> router.push('/signup', { scroll: false })} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}