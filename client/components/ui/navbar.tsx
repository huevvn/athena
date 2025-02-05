import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <header className="h-20 fixed top-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center justify-between">
            {/* Logo */}
            <a href="/">
                <aside className="flex items-center gap-2 sm:gap-4">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="invert"
                    />
                </aside>
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10">
                <ul className="flex lg:text-xl md:text-lg font-bold items-center gap-10 list-none">
                    <li>
                        <a
                            href="#"
                            className="text-white hover:text-yellow-200 duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/plans"
                            className="text-white hover:text-yellow-200 duration-300"
                        >
                            Plans
                        </a>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="text-white hover:text-yellow-200 duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="text-white hover:text-yellow-200 duration-300"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navigation (Hamburger Menu) */}
            <div className="md:hidden flex items-center">
                <button className="text-white">
                    {/* Mobile hamburger icon, can be replaced with a real icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu"
                    >
                        <path d="M3 12h18M3 6h18M3 18h18"></path>
                    </svg>
                </button>
            </div>

            {/* Profile Section */}
            <aside className="flex items-center gap-4">
                <Link
                    href="#"
                    className="flex items-center gap-3 transition-colors duration-300 p-2"
                >
                    <div className="flex items-center gap-2">
                        <div className="relative rounded-full ring-2">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    width={25}
                                    height={25}
                                    className="rounded-full"
                                />
                            </Avatar>
                        </div>
                        <span className="ml-1 text-slate-300 lg:text-xl md:text-lg font-bold hover:text-yellow-200 transition-colors duration-300">
                            Profile
                        </span>
                    </div>
                </Link>
            </aside>
        </header>
    );
};

export default Navbar;
