"use client";

import { Menu, Bell, Moon, Sun, Palette, User, LogOut, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AdminHeaderProps {
    onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const userData = localStorage.getItem("user");
        if (userData) {
            const user = JSON.parse(userData);
            setCurrentUser({ name: user.name, email: user.email });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        router.push("/login");
    };

    return (
        <header className="fixed top-0 right-0 left-0 lg:left-72 h-16 lg:h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 z-30 shadow-sm transition-all duration-500">
            <div className="h-full px-4 lg:px-6 flex items-center justify-between">
                {/* Left Side */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden p-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <Menu size={22} />
                    </button>

                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-2">
                        <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                            <span className="text-white font-bold text-sm">A</span>
                        </div>
                        <span className="font-bold text-gray-800">AD & Sons</span>
                    </div>

                    {/* Desktop Search Bar */}
                    <div className="hidden lg:flex items-center">
                        <div className="relative group">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search anything..."
                                className="w-80 pl-11 pr-4 py-2.5 bg-gray-50/80 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 text-gray-700 placeholder-gray-400 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2 lg:gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="p-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                        title="Toggle Theme"
                    >
                        {isDarkMode ? (
                            <Sun size={20} className="text-amber-500 group-hover:rotate-180 transition-transform duration-500" />
                        ) : (
                            <Moon size={20} className="text-gray-500 group-hover:rotate-12 transition-transform duration-300" />
                        )}
                    </button>

                    {/* Color Palette */}
                    <button
                        className="p-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 hidden sm:block group"
                        title="Color Palette"
                    >
                        <Palette size={20} className="text-gray-500 group-hover:text-purple-500 transition-colors" />
                    </button>

                    {/* Notifications */}
                    <button
                        className="p-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 relative group"
                        title="Notifications"
                    >
                        <Bell size={20} className="text-gray-500 group-hover:text-emerald-500 group-hover:animate-wiggle transition-colors" />
                        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full border-2 border-white animate-pulse"></span>
                    </button>

                    {/* User Profile */}
                    <div className="relative ml-2">
                        <button
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                            className="flex items-center gap-3 p-1.5 pl-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className="hidden sm:block text-right">
                                <p className="text-sm font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors">
                                    {currentUser?.name || "Admin User"}
                                </p>
                                <p className="text-xs text-gray-500">Administrator</p>
                            </div>
                            <div className="w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                                <User size={20} className="text-white" />
                            </div>
                        </button>

                        {/* Profile Dropdown with animation */}
                        {showProfileMenu && (
                            <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-2 z-50 animate-slideDown">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <User size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-700">
                                                {currentUser?.name || "Admin User"}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {currentUser?.email || "admin@example.com"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all duration-300 group"
                                >
                                    <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
