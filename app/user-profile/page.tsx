"use client";

import { useState, useEffect } from "react";
import { User, Mail, Calendar, Shield, LogOut, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function UserProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (!userData) {
            router.push("/login");
        } else {
            setUser(JSON.parse(userData));
            setLoading(false);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        router.push("/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-10">
                        <Link href="/" className="p-2 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                            <ArrowLeft size={20} />
                        </Link>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Account Profile
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Column - Avatar & Basic Info */}
                        <div className="md:col-span-1">
                            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 shadow-2xl text-center">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
                                    <User size={48} className="text-white" />
                                </div>
                                <h2 className="text-xl font-bold mb-1">{user?.name}</h2>
                                <p className="text-gray-400 text-sm mb-6">{user?.email}</p>

                                <button
                                    onClick={handleLogout}
                                    className="w-full py-3 rounded-xl bg-red-500/10 text-red-400 font-semibold border border-red-500/20 hover:bg-red-500/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <LogOut size={18} />
                                    Sign Out
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="md:col-span-2 space-y-6">
                            {/* Profile Details Card */}
                            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 shadow-2xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Shield size={20} className="text-purple-400" />
                                    Security Information
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                                        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Full Name</p>
                                            <p className="font-medium">{user?.name}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                                        <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email Address</p>
                                            <p className="font-medium">{user?.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                                        <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Member Since</p>
                                            <p className="font-medium">January 2026</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info Box */}
                            <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20">
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Welcome to AD & Sons Traders. Your account gives you access to special pricing and farming guidance personalized for your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
