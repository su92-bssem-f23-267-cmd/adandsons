"use client";

import { useState, useEffect } from "react";
import {
    Users,
    ShoppingCart,
    Package,
    ArrowDownLeft,
    ArrowUpRight,
    Wallet,
    Store,
    RotateCcw,
    Search,
    Calendar,
    TrendingUp,
    Sparkles
} from "lucide-react";

// Sample invoice data - based on KeyPOS actual data
const recentInvoices = [
    { id: "INV-006", customer: "A.D Commission Shop", amount: 5000, status: "paid" },
    { id: "INV-005", customer: "Aamir Sohail", amount: 5000, status: "paid" },
    { id: "INV-004", customer: "Abid Ali Gujjar", amount: 20000, status: "pending" },
    { id: "INV-003", customer: "Aamir Syngenta", amount: 5000, status: "paid" },
    { id: "INV-002", customer: "Abuzar Commission Shop", amount: 4500, status: "partial" },
    { id: "INV-001", customer: "Adeel Ahmad Chadar", amount: 1500, status: "paid" },
];

interface StatCard {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    gradient: string;
    iconBg: string;
    trend?: string;
    trendUp?: boolean;
}

const statCards: StatCard[] = [
    {
        label: "Visited Customers",
        value: 8,
        icon: <Users size={22} />,
        gradient: "from-blue-500 via-blue-600 to-indigo-700",
        iconBg: "bg-white/20",
        trend: "+12%",
        trendUp: true
    },
    {
        label: "Total Sale",
        value: "41,000",
        icon: <ShoppingCart size={22} />,
        gradient: "from-emerald-400 via-emerald-500 to-teal-600",
        iconBg: "bg-white/20",
        trend: "+8%",
        trendUp: true
    },
    {
        label: "Total Purchases",
        value: "28,500",
        icon: <Package size={22} />,
        gradient: "from-violet-500 via-purple-500 to-purple-700",
        iconBg: "bg-white/20",
        trend: "+5%",
        trendUp: true
    },
    {
        label: "Payment In",
        value: "33,500",
        icon: <ArrowDownLeft size={22} />,
        gradient: "from-green-400 via-emerald-500 to-green-600",
        iconBg: "bg-white/20",
        trend: "+15%",
        trendUp: true
    },
    {
        label: "Payment Out",
        value: "15,000",
        icon: <ArrowUpRight size={22} />,
        gradient: "from-rose-400 via-red-500 to-rose-600",
        iconBg: "bg-white/20",
        trend: "-3%",
        trendUp: false
    },
    {
        label: "Customer Balance",
        value: "359,500",
        icon: <Wallet size={22} />,
        gradient: "from-amber-400 via-orange-500 to-amber-600",
        iconBg: "bg-white/20"
    },
    {
        label: "Vendor Balance",
        value: "125,000",
        icon: <Store size={22} />,
        gradient: "from-indigo-400 via-indigo-500 to-blue-600",
        iconBg: "bg-white/20"
    },
    {
        label: "Sale Return",
        value: "2,500",
        icon: <RotateCcw size={22} />,
        gradient: "from-pink-400 via-pink-500 to-rose-600",
        iconBg: "bg-white/20"
    }
];

export default function AdminDashboard() {
    const today = new Date().toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState(today);
    const [toDate, setToDate] = useState(today);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="space-y-6 pb-8">
            {/* Animated Welcome Banner */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 p-6 lg:p-8 shadow-2xl transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: "3s" }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30 animate-pulse">
                            <Sparkles size={32} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white">Welcome Back! 👋</h1>
                            <p className="text-white/80 text-sm lg:text-base mt-1">AD & Sons Agri Traders Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                            <p className="text-white/80 text-xs">Today's Date</p>
                            <p className="text-white font-bold">{new Date().toLocaleDateString('en-PK', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
                        </div>
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                            <p className="text-white/80 text-xs flex items-center gap-1"><TrendingUp size={12} /> Growth</p>
                            <p className="text-white font-bold">+24%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Date Filter Section with Glassmorphism */}
            <div className={`bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-5 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <div className="flex flex-col lg:flex-row gap-4 items-end">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-emerald-600 transition-colors">
                                From Date
                            </label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                                <input
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50/80 border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 font-medium hover:border-emerald-300"
                                />
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-sm font-semibold text-gray-600 mb-2 group-focus-within:text-emerald-600 transition-colors">
                                To Date
                            </label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                                <input
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50/80 border-2 border-gray-100 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-gray-700 font-medium hover:border-emerald-300"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="w-full lg:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
                        <Search size={18} />
                        Search
                    </button>
                </div>
            </div>

            {/* Stats Cards Grid with Stagger Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {statCards.map((stat, index) => (
                    <div
                        key={index}
                        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.gradient} p-5 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        style={{ transitionDelay: `${150 + index * 75}ms` }}
                    >
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        {/* Glass Overlay */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3">
                                <div className={`w-10 h-10 lg:w-12 lg:h-12 ${stat.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                                {stat.trend && (
                                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${stat.trendUp ? "bg-white/30 text-white" : "bg-white/30 text-white"}`}>
                                        {stat.trend}
                                    </span>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-0.5 drop-shadow-sm">
                                {typeof stat.value === "number" ? stat.value : `Rs. ${stat.value}`}
                            </h3>
                            <p className="text-sm text-white/80 font-medium">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Invoices Table with Premium Design */}
            <div className={`bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="p-5 lg:p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                                <ShoppingCart size={20} className="text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Recent Invoices</h2>
                                <p className="text-xs text-gray-500">Latest transactions</p>
                            </div>
                        </div>
                        <button className="text-sm text-emerald-600 font-semibold hover:text-emerald-700 transition-colors w-full sm:w-auto text-center sm:text-right">View All →</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    {/* Mobile Card View */}
                    <div className="block sm:hidden divide-y divide-gray-100">
                        {recentInvoices.map((invoice, index) => (
                            <div key={invoice.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                                            <span className="text-emerald-600 font-bold text-xs">{index + 1}</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-sm">{invoice.id}</p>
                                            <p className="text-xs text-gray-500">{invoice.customer}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${invoice.status === "paid"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : invoice.status === "pending"
                                            ? "bg-amber-100 text-amber-700"
                                            : "bg-blue-100 text-blue-700"
                                        }`}>
                                        {invoice.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pl-11">
                                    <span className="text-xs text-gray-400">Total Amount</span>
                                    <span className="text-base font-bold text-gray-800">Rs. {invoice.amount.toLocaleString()}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="w-full hidden sm:table">
                        <thead>
                            <tr className="bg-gradient-to-r from-emerald-500 to-teal-600">
                                <th className="text-left px-4 lg:px-6 py-4 text-sm font-semibold text-white">Invoice</th>
                                <th className="text-left px-4 lg:px-6 py-4 text-sm font-semibold text-white">Customer</th>
                                <th className="text-center px-4 lg:px-6 py-4 text-sm font-semibold text-white">Status</th>
                                <th className="text-right px-4 lg:px-6 py-4 text-sm font-semibold text-white">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentInvoices.map((invoice, index) => (
                                <tr
                                    key={invoice.id}
                                    className="hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-teal-50/50 transition-all duration-300 group cursor-pointer"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <td className="px-4 lg:px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <span className="text-emerald-600 font-bold text-xs">{index + 1}</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-emerald-600">{invoice.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 text-sm font-medium text-gray-700">{invoice.customer}</td>
                                    <td className="px-4 lg:px-6 py-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${invoice.status === "paid"
                                            ? "bg-emerald-100 text-emerald-700"
                                            : invoice.status === "pending"
                                                ? "bg-amber-100 text-amber-700"
                                                : "bg-blue-100 text-blue-700"
                                            }`}>
                                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-4 lg:px-6 py-4 text-right">
                                        <span className="text-lg font-bold text-gray-800">Rs. {invoice.amount.toLocaleString()}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
