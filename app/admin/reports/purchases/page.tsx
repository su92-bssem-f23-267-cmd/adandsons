"use client";

import { useState } from "react";
import { BarChart3, Download, Calendar, Search } from "lucide-react";

const purchaseData = [
    { id: "PUR-003", date: "2026-01-16", vendor: "Syngenta Pakistan", items: 15, total: 85000 },
    { id: "PUR-002", date: "2026-01-10", vendor: "Engro Fertilizers", items: 25, total: 125000 },
    { id: "PUR-001", date: "2026-01-05", vendor: "FMC Corporation", items: 10, total: 42000 },
];

export default function PurchasesReportPage() {
    const today = new Date().toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState(today);
    const [toDate, setToDate] = useState(today);

    const totalPurchases = purchaseData.reduce((sum, p) => sum + p.total, 0);
    const totalItems = purchaseData.reduce((sum, p) => sum + p.items, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <BarChart3 size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Purchase Report</h1>
                        <p className="text-gray-500 text-sm">View purchase analytics</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-xl font-medium hover:bg-purple-100 transition-colors">
                    <Download size={18} />
                    Export PDF
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">From Date</label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 text-gray-700" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">To Date</label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 text-gray-700" />
                            </div>
                        </div>
                    </div>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-medium">
                        <Search size={18} />
                        Search
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-500 text-sm">Total Purchases</p>
                    <p className="text-3xl font-bold text-purple-600 mt-2">Rs. {totalPurchases.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-500 text-sm">Total Invoices</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{purchaseData.length}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-500 text-sm">Items Purchased</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{totalItems}</p>
                </div>
            </div>

            {/* Purchases Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">Invoice #</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Date</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Vendor</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Items</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Total (PKR)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {purchaseData.map((purchase) => (
                                <tr key={purchase.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-purple-600">{purchase.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{purchase.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{purchase.vendor}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 text-right">{purchase.items}</td>
                                    <td className="px-6 py-4 text-sm text-right font-bold text-gray-800">{purchase.total.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-50">
                            <tr>
                                <td colSpan={3} className="px-6 py-4 text-sm font-bold text-gray-800">Total</td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-gray-800">{totalItems}</td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-purple-600">{totalPurchases.toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}
