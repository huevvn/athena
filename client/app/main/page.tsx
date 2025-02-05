import Navbar from "@/components/ui/navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            {/* Content Section */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* Services Grid Container */}
                <div className="relative z-10 w-full max-w-8xl px-4 sm:px-6 xl:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
                        {[
                            {
                                title: "Habit Tracking & Journaling",
                                href: "/services/project-management",
                                color: "from-black to-blue-950",
                            },
                            {
                                title: "To-Do List & Task Tracking",
                                href: "/services/task-tracking",
                                color: "from-green-950 to-white/70",
                            },
                            {
                                title: "Calendar & Event Scheduling",
                                href: "/services/team-collaboration",
                                color: "from-orange-950 to-yellow-700",
                            },
                            {
                                title: "Pomodoros & Time Tracking",
                                href: "/services/performance-analytics",
                                color: "from-red-950 to-black",
                            },
                        ].map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative flex justify-center items-center p-4 sm:p-6 aspect-square rounded-3xl bg-gradient-to-br transition-all duration-300 hover:scale-[1.02] active:scale-100 hover:shadow-xl hover:shadow-black/30 overflow-hidden"
                            >
                                {/* Gradient Background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                                />

                                {/* Content */}
                                <span className="relative z-10 text-white text-center text-lg sm:text-xl lg:text-2xl font-semibold leading-tight sm:leading-snug px-2 break-words">
                                    {service.title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Wavy Background with Performance Optimizations */}
                <WavyBackground
                    className="absolute inset-0 z-0 pointer-events-none"
                    backgroundFill="black"
                    waveOpacity={0.15}
                    blur={10}
                />
            </div>
        </main>
    );
}
