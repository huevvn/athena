import Navbar from "@/components/ui/navbar";
import { WavyBackground } from "@/components/ui/wavy-background";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            {/* Content Section */}
            <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Wavy Background with Rotation */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <WavyBackground />
                </div>

                {/* Services Grid Container */}
                <div className="relative z-10 w-full max-w-8xl px-4 sm:px-6 xl:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
                        {[
                            {
                                title: "Habit Tracking & Journaling",
                                href: "/services/project-management",
                                color: "from-black to-yellow-700",
                            },
                            {
                                title: "To-Do List & Task Tracking",
                                href: "/services/task-tracking",
                                color: "from-red-950 to-[#DBE2EF]",
                            },
                            {
                                title: "Calendar & Event Scheduling",
                                href: "/services/team-collaboration",
                                color: "from-black to-[#3F72AF]",
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
                                className="group relative flex justify-center items-center p-4 sm:p-6 aspect-square rounded-[3rem] bg-gradient-to-br transition-all duration-300 hover:scale-[1.02] active:scale-100 hover:shadow-xl hover:shadow-black/30 overflow-hidden"
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
            </div>
        </main>
    );
}
