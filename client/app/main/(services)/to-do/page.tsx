"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SidebarDemo() {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: <IconBrandTabler className="w-5 h-5" />,
        },
        {
            label: "Profile",
            href: "#",
            icon: <IconUserBolt className="w-5 h-5" />,
        },
        {
            label: "Settings",
            href: "#",
            icon: <IconSettings className="w-5 h-5" />,
        },
        {
            label: "Logout",
            href: "#",
            icon: <IconArrowLeft className="w-5 h-5" />,
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className="flex h-screen w-full bg-gray-100 dark:bg-neutral-800">
            {/* Sidebar */}
            <Sidebar open={open} setOpen={setOpen} className="h-full">
                <SidebarBody className="flex flex-col h-full">
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        {open ? <Logo /> : <LogoIcon />}
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="p-2">
                        <SidebarLink
                            link={{
                                label: "Manu Arora",
                                href: "#",
                                icon: (
                                    <img
                                        src="https://assets.aceternity.com/manu.png"
                                        className="w-7 h-7 rounded-full"
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <Dashboard />
            </div>
        </div>
    );
}

const Logo = () => (
    <Link
        href="#"
        className="flex items-center text-sm text-black dark:text-white py-1"
    >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-2"
        >
            Acet Labs
        </motion.span>
    </Link>
);

const LogoIcon = () => (
    <Link href="#" className="flex items-center">
        <div className="h-5 w-6 bg-black dark:bg-white rounded-lg" />
    </Link>
);

// Dashboard Content
const Dashboard = () => (
    <div className="flex flex-col flex-1 p-4 md:p-10 bg-neutral-900 rounded-tl-[50px] h-full overflow-auto"></div>
);
