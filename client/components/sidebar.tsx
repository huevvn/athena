import {
    MoreVertical,
    ChevronLast,
    ChevronFirst,
    Home,
    ListChecks,
    Calendar,
    Timer,
    Settings,
    User,
    Bell,
    FileText,
    BarChart,
    LifeBuoy,
    ClipboardList,
    Layers,
    Cloud,
    Star,
} from "lucide-react";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-screen bg-black text-white">
            <nav className="h-full flex flex-col border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src="https://img.logoipsum.com/243.svg"
                        className={`overflow-hidden transition-all ${
                            expanded ? "w-48" : "w-0"
                        }`}
                        alt="Logo"
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-xl bg-gray-800 hover:bg-gray-700"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 space-y-2">
                        <SidebarItem
                            icon={<Home size={20} />}
                            text="Dashboard"
                            active
                        />
                        <SidebarItem
                            icon={<ListChecks size={20} />}
                            text="Task Manager"
                        />
                        <SidebarItem
                            icon={<Calendar size={20} />}
                            text="Calendar"
                        />
                        <SidebarItem
                            icon={<Timer size={20} />}
                            text="Pomodoro Timer"
                        />
                        <SidebarItem icon={<User size={20} />} text="Profile" />
                        <SidebarItem
                            icon={<Settings size={20} />}
                            text="Settings"
                        />
                        <SidebarItem
                            icon={<Bell size={20} />}
                            text="Notifications"
                        />
                        <SidebarItem
                            icon={<FileText size={20} />}
                            text="Documents"
                        />
                        <SidebarItem
                            icon={<BarChart size={20} />}
                            text="Analytics"
                        />
                        <SidebarItem
                            icon={<LifeBuoy size={20} />}
                            text="Support"
                        />
                        <SidebarItem
                            icon={<ClipboardList size={20} />}
                            text="Projects"
                        />
                        <SidebarItem
                            icon={<Layers size={20} />}
                            text="Integrations"
                        />
                        <SidebarItem
                            icon={<Cloud size={20} />}
                            text="Cloud Storage"
                        />
                        <SidebarItem
                            icon={<Star size={20} />}
                            text="Favorites"
                        />
                    </ul>
                    {children}
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
                    >
                        <div className="leading-4">
                            <h4 className="font-bold text-white">John Doe</h4>
                            <span className="text-xs text-gray-400">
                                johndoe@gmail.com
                            </span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li
            className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        ${
            active
                ? "bg-yellow-500 text-black"
                : "hover:bg-purple-500 hover:text-black"
        }
    `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                    }`}
                />
            )}
        </li>
    );
}
