"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        const userData = localStorage.getItem("user");
        if (!userData) {
            router.push("/login");
        } else {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                    {/* Animated Logo */}
                    <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/50 animate-pulse">
                            <span className="text-white font-bold text-3xl">A</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl animate-ping opacity-30"></div>
                    </div>

                    {/* Loading Spinner */}
                    <div className="relative">
                        <div className="w-12 h-12 border-4 border-emerald-500/30 rounded-full"></div>
                        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>

                    <div className="text-center">
                        <p className="text-white font-semibold text-lg">AD & Sons</p>
                        <p className="text-emerald-400 text-sm animate-pulse">Loading Dashboard...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
            {/* Animated Background Pattern */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Sidebar */}
            <AdminSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Header */}
            <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

            {/* Main Content */}
            <main className="lg:ml-72 pt-16 lg:pt-20 min-h-screen relative">
                <div className="p-4 lg:p-6">
                    {children}
                </div>
            </main>

            {/* Custom Styles */}
            <style jsx global>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-10deg); }
                    75% { transform: rotate(10deg); }
                }
                
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
                
                .animate-wiggle {
                    animation: wiggle 0.5s ease-in-out;
                }
                
                /* Custom Scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #10b981, #14b8a6);
                    border-radius: 4px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #059669, #0d9488);
                }
                
                /* Mobile touch improvements */
                @media (max-width: 1024px) {
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                }
            `}</style>
        </div>
    );
}
