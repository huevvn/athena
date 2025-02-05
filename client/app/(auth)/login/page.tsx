"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function Home() {
    // State to track form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Determine if the form is valid (email must include '@' and password must be at least 5 characters)
    const isFormValid = email.includes("@") && password.length >= 5;

    return (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-neutral-900 to-black">
            {/* The container */}
            <div className="bg-black p-10 md:p-14 lg:p-16 shadow-2xl border-b-2 border-r-2 border-[#F9F7F7] rounded-3xl w-full sm:w-[90%] md:w-[80%] lg:w-[50%]">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-center">
                    Hey There, Welcome Back!
                </h1>

                {/* Form Container */}
                <form className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            className="w-full p-4 border border-gray-600 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent text-lg bg-black text-white placeholder-gray-400 transition-all"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            className="w-full p-4 border border-gray-600 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-purple-600 focus:border-transparent text-lg bg-black text-white placeholder-gray-400 transition-all"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        size="lg"
                        className={`w-full p-4 ${
                            isFormValid
                                ? "bg-white rounded-full hover:bg-yellow-200"
                                : "bg-gray-600 rounded-xl cursor-not-allowed"
                        } text-black font-bold shadow-lg transition-all duration-300`}
                        disabled={!isFormValid} // Disable button if form is not valid
                    >
                        Log In
                    </Button>
                </form>

                {/* Social Login */}
                <div className="mt-8 space-y-4">
                    <Button className="w-full p-4 rounded-full bg-white text-black border border-gray-300 shadow-lg hover:bg-yellow-200 transition-all duration-300">
                        <div className="flex justify-center items-center gap-3">
                            <FaGoogle className="w-6 h-6" />
                            <span>Log in with Google</span>
                        </div>
                    </Button>

                    <Button className="w-full p-4 rounded-full bg-white text-black border border-gray-300 shadow-lg hover:bg-yellow-200 transition-all duration-300">
                        <div className="flex justify-center items-center gap-3">
                            <FaGithub className="w-6 h-6" />
                            <span>Log in with GitHub</span>
                        </div>
                    </Button>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-md text-gray-500">
                    <p>
                        Not a member yet?{" "}
                        <a
                            href="signup"
                            className="text-[#F9F7F7] hover:underline"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
