"use client";

import { useState } from "react";
import { Boxes, Search, AlertTriangle } from "lucide-react";

interface StockItem {
    id: number;
    code: string;
    name: string;
    category: string;
    currentStock: number;
    minStock: number;
    unit: string;
    lastUpdated: string;
}

const stockItems: StockItem[] = [
    { id: 1, code: "49", name: "ACETO CHLOR", category: "Herbicide", currentStock: 45, minStock: 20, unit: "Ltr", lastUpdated: "2026-01-16" },
    { id: 2, code: "34", name: "ACTARA", category: "Insecticide", currentStock: 8, minStock: 15, unit: "Gm", lastUpdated: "2026-01-15" },
    { id: 3, code: "30", name: "ALLYMAX", category: "Herbicide", currentStock: 25, minStock: 10, unit: "Gm", lastUpdated: "2026-01-14" },
    { id: 4, code: "37", name: "AMISTAR", category: "Fungicide", currentStock: 5, minStock: 12, unit: "Ltr", lastUpdated: "2026-01-10" },
    { id: 5, code: "7", name: "AMUNIOM SALPHAT", category: "Fertilizer", currentStock: 500, minStock: 100, unit: "Kg", lastUpdated: "2026-01-16" },
    { id: 6, code: "29", name: "AXIAL", category: "Herbicide", currentStock: 3, minStock: 10, unit: "Ltr", lastUpdated: "2026-01-12" },
    { id: 7, code: "8", name: "CAN SARSBAZ", category: "Fertilizer", currentStock: 350, minStock: 50, unit: "Kg", lastUpdated: "2026-01-15" },
];

export default function StockPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const filteredItems = stockItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.code.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "all" || (filter === "low" && item.currentStock < item.minStock);
        return matchesSearch && matchesFilter;
    });

    const lowStockCount = stockItems.filter(item => item.currentStock < item.minStock).length;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Boxes size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Stock Management</h1>
                        <p className="text-gray-500 text-sm">Monitor your inventory levels</p>
                    </div>
                </div>
                {lowStockCount > 0 && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-xl text-red-600">
                        <AlertTriangle size={18} />
                        <span className="font-medium">{lowStockCount} items low on stock</span>
                    </div>
                )}
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by product name or code..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 text-gray-700" />
                    </div>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 text-gray-700 bg-white">
                        <option value="all">All Products</option>
                        <option value="low">Low Stock Only</option>
                    </select>
                </div>
            </div>

            {/* Stock Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">Code</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Product Name</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Category</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Current Stock</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Min Stock</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Unit</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Status</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Last Updated</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredItems.map((item) => (
                                <tr key={item.id} className={`hover:bg-gray-50 ${item.currentStock < item.minStock ? 'bg-red-50' : ''}`}>
                                    <td className="px-6 py-4 text-sm font-medium text-indigo-600">{item.code}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{item.name}</td>
                                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-medium">{item.category}</span></td>
                                    <td className="px-6 py-4 text-sm text-right font-bold">{item.currentStock}</td>
                                    <td className="px-6 py-4 text-sm text-right text-gray-500">{item.minStock}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.unit}</td>
                                    <td className="px-6 py-4 text-sm">
                                        {item.currentStock < item.minStock ? (
                                            <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-medium flex items-center gap-1 w-fit"><AlertTriangle size={12} /> Low Stock</span>
                                        ) : (
                                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-medium">In Stock</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.lastUpdated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
