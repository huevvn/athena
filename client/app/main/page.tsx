"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/ui/navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

const services = [
    {
        title: "Canvas",
        description:
            "Canvas is your digital sanctuary — write journal entries, visualize your ideas, organize content, and plan your vision in one fluid space. Designed to be distraction-free, flexible, and deeply personal.",
        href: "/services/canvas",
        color: "from-black to-[#3F72AF]",
    },
    {
        title: "Flow",
        description:
            "Flow brings structure to your day — track tasks, build lasting habits, focus with intention, and reflect with clarity. Seamlessly blends productivity with wellbeing in one smooth workspace.",
        href: "/services/flow",
        color: "from-red-950 to-black",
    },
];

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <main className="min-h-screen flex flex-col">
                <Navbar />

                <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Wavy Background */}
                    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                        <WavyBackground />
                    </div>

                    {/* Services */}
                    <div className="z-10 w-full max-w-full px-4 sm:px-6 xl:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center p-4 sm:p-6">
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    href={service.href}
                                    className="group relative flex flex-col justify-center items-center w-full h-72 rounded-[3rem] bg-gradient-to-br transition-all duration-300 hover:scale-[1.005] active:scale-100 hover:shadow-2xl hover:shadow-black/30 overflow-hidden"
                                >
                                    {/* Gradient Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
                                    />

                                    {/* Title */}
                                    <span className="relative z-10 text-white text-2xl sm:text-4xl font-black text-center">
                                        {service.title}
                                    </span>

                                    {/* Description (hidden until hover) */}
                                    <motion.p className="absolute bottom-6 px-6 text-center text-yellow-100 text-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden xl:block">
                                        {service.description}
                                    </motion.p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}
