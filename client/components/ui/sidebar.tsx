"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

interface Links {
    label: string;
    href: string;
    icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
    undefined
);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

export const SidebarProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <SidebarContext.Provider value={{ open, setOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return <SidebarProvider>{children}</SidebarProvider>;
};

export const SidebarBody = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "h-full w-[250px] px-4 py-4 bg-neutral-100 dark:bg-neutral-800 hidden md:flex md:flex-col",
                className
            )}
        >
            {children}
        </div>
    );
};

export const MobileSidebar = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    const { open, setOpen } = useSidebar();
    return (
        <div className="md:hidden w-full bg-neutral-100 dark:bg-neutral-800 flex items-center px-4 py-3 justify-between">
            <IconMenu2
                className="text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
            />
            {open && (
                <div
                    className={cn(
                        "absolute inset-0 h-full w-full bg-white dark:bg-neutral-900 p-10 flex flex-col justify-between",
                        className
                    )}
                >
                    <div
                        className="absolute right-10 top-10 text-neutral-800 dark:text-neutral-200"
                        onClick={() => setOpen(false)}
                    >
                        <IconX />
                    </div>
                    {children}
                </div>
            )}
        </div>
    );
};

export const SidebarLink = ({
    link,
    className,
}: {
    link: Links;
    className?: string;
}) => {
    return (
        <Link
            href={link.href}
            className={cn(
                "flex items-center gap-2 py-2 text-neutral-700 dark:text-neutral-200",
                className
            )}
        >
            {link.icon}
            <span>{link.label}</span>
        </Link>
    );
};

export default function SidebarDemo() {
    const links = [
        {
            label: "Dashboard",
            href: "#",
            icon: <IconMenu2 className="w-5 h-5" />,
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
        { label: "Logout", href: "#", icon: <IconX className="w-5 h-5" /> },
    ];

    return (
        <div className="flex h-screen w-full bg-gray-100 dark:bg-neutral-800">
            <Sidebar>
                <SidebarBody>
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <div className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink
                                    key={idx}
                                    link={link}
                                    className="px-3 py-2 text-sm font-medium rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                </SidebarBody>
                <MobileSidebar>
                    <div className="flex flex-col gap-2 mt-8">
                        {links.map((link, idx) => (
                            <SidebarLink
                                key={idx}
                                link={link}
                                className="px-3 py-2 text-sm font-medium rounded-md"
                            />
                        ))}
                    </div>
                </MobileSidebar>
            </Sidebar>
            <div className="flex-1 flex flex-col h-full overflow-hidden p-4 md:p-10 bg-neutral-900 rounded-l-[50px]">
                {/* Main Content */}
            </div>
        </div>
    );
}
