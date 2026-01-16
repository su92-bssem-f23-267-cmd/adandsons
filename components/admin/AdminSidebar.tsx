"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Boxes,
    Receipt,
    Users,
    Building2,
    BarChart3,
    Settings,
    ChevronDown,
    ChevronRight,
    RefreshCw,
    Sparkles
} from "lucide-react";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    href?: string;
    children?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
    {
        label: "Dashboard",
        icon: <LayoutDashboard size={20} />,
        href: "/admin"
    },
    {
        label: "Sale",
        icon: <ShoppingCart size={20} />,
        children: [
            { label: "Sale Invoice", href: "/admin/sale-invoice" },
            { label: "Payment In", href: "/admin/payment-in" }
        ]
    },
    {
        label: "Purchase",
        icon: <Package size={20} />,
        children: [
            { label: "Purchase Invoice", href: "/admin/purchase-invoice" },
            { label: "Payment Out", href: "/admin/payment-out" }
        ]
    },
    {
        label: "Inventory",
        icon: <Boxes size={20} />,
        children: [
            { label: "Products", href: "/admin/products" },
            { label: "Category", href: "/admin/categories" },
            { label: "Company", href: "/admin/company" },
            { label: "Color", href: "/admin/color" },
            { label: "Size", href: "/admin/size" },
            { label: "Units", href: "/admin/units" },
            { label: "Tax Rate", href: "/admin/tax-rate" }
        ]
    },
    {
        label: "Expense",
        icon: <Receipt size={20} />,
        children: [
            { label: "Expense", href: "/admin/expenses" },
            { label: "Expense Type", href: "/admin/expense-type" }
        ]
    },
    {
        label: "Parties",
        icon: <Users size={20} />,
        children: [
            { label: "Parties", href: "/admin/parties" },
            { label: "Areas", href: "/admin/areas" }
        ]
    },
    {
        label: "Banks",
        icon: <Building2 size={20} />,
        href: "/admin/banks"
    },
    {
        label: "Reports",
        icon: <BarChart3 size={20} />,
        children: [
            { label: "Stock Summary", href: "/admin/reports/stock-summary" },
            { label: "Sale Summary", href: "/admin/reports/sales" },
            { label: "Vendor Paid", href: "/admin/reports/vendor-paid" },
            { label: "Customer Collection", href: "/admin/reports/customer-collection" },
            { label: "Purchase History", href: "/admin/reports/purchases" },
            { label: "Zero Stock", href: "/admin/reports/zero-stock" },
            { label: "Products Low Stock", href: "/admin/reports/low-stock" },
            { label: "Product Sale", href: "/admin/reports/product-sale" },
            { label: "Category Sale", href: "/admin/reports/category-sale" },
            { label: "Profit & Loss", href: "/admin/reports/profit-loss" }
        ]
    },
    {
        label: "Configuration",
        icon: <Settings size={20} />,
        children: [
            { label: "Branch Management", href: "/admin/setup/branches" },
            { label: "Users", href: "/admin/setup/users" },
            { label: "Roles", href: "/admin/setup/roles" },
            { label: "General Settings", href: "/admin/setup/settings" }
        ]
    }
];

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
    const pathname = usePathname();
    const [expandedMenus, setExpandedMenus] = useState<string[]>(["Sale"]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = (label: string) => {
        setExpandedMenus(prev =>
            prev.includes(label)
                ? prev.filter(item => item !== label)
                : [...prev, label]
        );
    };

    const isActive = (href: string) => pathname === href;
    const isParentActive = (children: { label: string; href: string }[]) =>
        children.some(child => pathname === child.href);

    return (
        <>
            {/* Mobile Overlay with blur */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

            {/* Sidebar with glass effect */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl z-50 transform transition-all duration-500 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                </div>

                {/* Logo Section */}
                <div className={`relative h-20 flex items-center px-6 border-b border-white/10 transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-pulse">
                                <span className="text-white font-bold text-xl">A</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDuration: "2s" }}>
                                <Sparkles size={10} className="text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-white text-xl tracking-tight">AD & Sons</h1>
                            <p className="text-xs text-emerald-400 font-medium">Agri Traders</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="relative flex-1 overflow-y-auto py-4 px-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" style={{ maxHeight: "calc(100vh - 160px)" }}>
                    {menuItems.map((item, index) => (
                        <div
                            key={item.label}
                            className={`mb-1 transition-all duration-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                            style={{ transitionDelay: `${100 + index * 50}ms` }}
                        >
                            {item.children ? (
                                <>
                                    <button
                                        onClick={() => toggleMenu(item.label)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${isParentActive(item.children)
                                            ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`transition-all duration-300 group-hover:scale-110 ${isParentActive(item.children) ? "text-emerald-400" : ""}`}>
                                                {item.icon}
                                            </span>
                                            {item.label}
                                        </div>
                                        <span className={`transition-transform duration-300 ${expandedMenus.includes(item.label) ? "rotate-180" : ""}`}>
                                            <ChevronDown size={16} />
                                        </span>
                                    </button>

                                    {/* Animated Submenu */}
                                    <div
                                        className={`overflow-hidden transition-all duration-400 ease-out ${expandedMenus.includes(item.label)
                                            ? "max-h-[500px] opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-emerald-500/30 pl-4">
                                            {item.children.map((child, childIndex) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={onClose}
                                                    className={`block px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${isActive(child.href)
                                                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 translate-x-1"
                                                        : "text-gray-500 hover:bg-white/5 hover:text-white hover:translate-x-1"
                                                        }`}
                                                    style={{ transitionDelay: expandedMenus.includes(item.label) ? `${childIndex * 30}ms` : "0ms" }}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.href!}
                                    onClick={onClose}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${isActive(item.href!)
                                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <span className={`transition-all duration-300 group-hover:scale-110 ${isActive(item.href!) ? "text-white" : ""}`}>
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Switch Branch Button with glow effect */}
                <div className="relative p-4 border-t border-white/10">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group">
                        <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                        Switch Branch
                    </button>
                </div>
            </aside>
        </>
    );
}
