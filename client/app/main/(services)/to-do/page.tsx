"use client";

import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Page() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Design UI for To-Do App", completed: false },
        { id: 2, text: "Implement Drag & Drop", completed: false },
    ]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;
        setTasks([
            ...tasks,
            { id: Date.now(), text: newTask, completed: false },
        ]);
        setNewTask("");
    };

    const removeTask = (id: number) =>
        setTasks(tasks.filter((task) => task.id !== id));
    const toggleComplete = (id: number) =>
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );

    return (
        <div className="flex min-h-screen bg-black text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

                {/* Task Input */}
                <div className="flex gap-2 mb-4">
                    <input
                        className="w-full p-2 border rounded-lg bg-gray-900 text-white placeholder-gray-400"
                        placeholder="Add a new task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button
                        onClick={addTask}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Add
                    </button>
                </div>

                {/* Task List */}
                <ul className="space-y-3">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center justify-between p-3 bg-gray-800 rounded-lg shadow-md"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleComplete(task.id)}
                                    className="w-5 h-5"
                                />
                                <span
                                    className={
                                        task.completed
                                            ? "line-through text-gray-500"
                                            : "text-white"
                                    }
                                >
                                    {task.text}
                                </span>
                            </div>
                            <button
                                onClick={() => removeTask(task.id)}
                                className="text-red-400 hover:text-red-600"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
