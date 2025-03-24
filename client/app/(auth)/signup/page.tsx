"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignUp() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const isFormValid =
        fname.length >= 2 &&
        lname.length >= 2 &&
        email.includes("@") &&
        password.length >= 8 &&
        role !== "";

    return (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-neutral-900 to-black">
            <div className="bg-black p-10 md:p-14 lg:p-16 shadow-2xl border-b-2 border-r-2 border-[#F9F7F7] rounded-3xl w-full sm:w-[90%] md:w-[80%] lg:w-[50%]">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-center">
                    Create Your Account
                </h1>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-transparent text-lg bg-black text-white placeholder-gray-400 transition-all"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-transparent text-lg bg-black text-white placeholder-gray-400 transition-all"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 border border-gray-600 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-transparent text-lg bg-black text-white placeholder-gray-400 transition-all"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 border border-gray-600 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-transparent text-lg bg-black text-white placeholder-gray-400 transition-all"
                        />
                    </div>

                    {/* Role Selection */}
                    <div>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full p-4 border border-gray-600 rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-red-200 focus:border-transparent text-lg bg-black text-white placeholder-gray-400 transition-all appearance-none"
                        >
                            <option value="">Select Your Role</option>

                            {/* Tech Roles */}
                            <optgroup label="Technology">
                                <option value="software-engineer">
                                    Software Engineer
                                </option>
                                <option value="frontend-dev">
                                    Frontend Developer
                                </option>
                                <option value="backend-dev">
                                    Backend Developer
                                </option>
                                <option value="fullstack-dev">
                                    Full Stack Developer
                                </option>
                                <option value="data-scientist">
                                    Data Scientist
                                </option>
                                <option value="devops-engineer">
                                    DevOps Engineer
                                </option>
                                <option value="qa-engineer">QA Engineer</option>
                                <option value="mobile-dev">
                                    Mobile Developer
                                </option>
                                <option value="game-dev">Game Developer</option>
                                <option value="blockchain-dev">
                                    Blockchain Developer
                                </option>
                                <option value="ai-ml-engineer">
                                    AI/ML Engineer
                                </option>
                                <option value="cybersecurity">
                                    Cybersecurity Specialist
                                </option>
                            </optgroup>

                            {/* Design & Creative */}
                            <optgroup label="Design & Creative">
                                <option value="ux-ui">UX/UI Designer</option>
                                <option value="graphic-designer">
                                    Graphic Designer
                                </option>
                                <option value="product-designer">
                                    Product Designer
                                </option>
                                <option value="motion-designer">
                                    Motion Designer
                                </option>
                            </optgroup>

                            {/* Management & Business */}
                            <optgroup label="Management & Business">
                                <option value="product-manager">
                                    Product Manager
                                </option>
                                <option value="project-manager">
                                    Project Manager
                                </option>
                                <option value="scrum-master">
                                    Scrum Master
                                </option>
                                <option value="business-analyst">
                                    Business Analyst
                                </option>
                                <option value="entrepreneur">
                                    Entrepreneur
                                </option>
                            </optgroup>

                            {/* Other Professions */}
                            <optgroup label="Other Professions">
                                <option value="data-analyst">
                                    Data Analyst
                                </option>
                                <option value="technical-writer">
                                    Technical Writer
                                </option>
                                <option value="it-consultant">
                                    IT Consultant
                                </option>
                                <option value="system-admin">
                                    System Administrator
                                </option>
                                <option value="network-engineer">
                                    Network Engineer
                                </option>
                                <option value="cloud-architect">
                                    Cloud Architect
                                </option>
                                <option value="digital-marketer">
                                    Digital Marketer
                                </option>
                                <option value="seo-specialist">
                                    SEO Specialist
                                </option>
                                <option value="content-strategist">
                                    Content Strategist
                                </option>
                                <option value="sales-engineer">
                                    Sales Engineer
                                </option>
                            </optgroup>

                            {/* General */}
                            <optgroup label="General">
                                <option value="student">Student</option>
                                <option value="researcher">Researcher</option>
                                <option value="educator">Educator</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="other">Other</option>
                            </optgroup>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <Button
                        size="lg"
                        className={`w-full p-4 ${
                            isFormValid
                                ? "bg-yellow-200 rounded-full hover:bg-red-400"
                                : "bg-gray-600 rounded-xl cursor-not-allowed"
                        } text-black font-bold shadow-lg transition-all duration-300`}
                        disabled={!isFormValid}
                    >
                        Create Account
                    </Button>
                </form>

                {/* Social Sign Up */}
                <div className="mt-8 space-y-4">
                    <Button className="w-full p-4 rounded-full bg-white text-black border border-gray-300 shadow-lg hover:bg-yellow-200 transition-all duration-300">
                        <div className="flex justify-center items-center gap-3">
                            <FaGoogle className="w-6 h-6" />
                            <span>Sign up with Google</span>
                        </div>
                    </Button>

                    <Button className="w-full p-4 rounded-full bg-white text-black border border-gray-300 shadow-lg hover:bg-yellow-200 transition-all duration-300">
                        <div className="flex justify-center items-center gap-3">
                            <FaGithub className="w-6 h-6" />
                            <span>Sign up with GitHub</span>
                        </div>
                    </Button>
                </div>

                {/* Footer */}
                <div className="mt-6 text-center text-md text-gray-500">
                    <p>
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-[#F9F7F7] hover:underline"
                        >
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
