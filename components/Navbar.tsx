"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, UserPlus, Home, Users, Info, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-900/95 backdrop-blur-xl shadow-2xl fixed top-0 left-0 z-50 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo and Name */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
                            <div className="bg-gray-900 rounded-lg p-1">
                                <img
                                    src="/Ad_Sons-removebg-preview.png"
                                    alt="AD & Sons Traders Logo"
                                    className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent tracking-tight">
                                AD & Sons
                            </span>
                            <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-wider uppercase">
                                Traders
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-2 items-center">
                        <div className="flex gap-1 mr-4 bg-gray-800/80 rounded-full p-1.5">
                            <Link href="/" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all font-medium">
                                <Home size={16} />
                                Home
                            </Link>
                            <Link href="/customers" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all font-medium">
                                <Users size={16} />
                                Customers
                            </Link>
                            <Link href="/about" className="flex items-center gap-1.5 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-all font-medium">
                                <Info size={16} />
                                About Us
                            </Link>
                        </div>

                        <div className="flex gap-3">
                            <Link href="/login" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all">
                                <LogIn size={16} />
                                Login
                            </Link>
                            <Link href="/signup" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105 transition-all">
                                <UserPlus size={16} />
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-gray-900 border-t border-gray-800 animate-in slide-in-from-top duration-300`}>
                <div className="px-4 pt-2 pb-6 space-y-1">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <Home size={20} />
                        Home
                    </Link>
                    <Link
                        href="/customers"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <Users size={20} />
                        Customers
                    </Link>
                    <Link
                        href="/about"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <Info size={20} />
                        About Us
                    </Link>

                    <div className="pt-4 flex flex-col gap-3">
                        <Link
                            href="/login"
                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            <LogIn size={18} />
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            <UserPlus size={18} />
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
