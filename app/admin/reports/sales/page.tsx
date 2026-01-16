"use client";

import { useState } from "react";
import { BarChart3, Download, Calendar, Search } from "lucide-react";

const salesData = [
    { id: "INV-006", date: "2026-01-16", customer: "A.D Commission Shop", items: 4, total: 5000 },
    { id: "INV-005", date: "2026-01-11", customer: "Aamir Sohail", items: 3, total: 5000 },
    { id: "INV-004", date: "2026-01-07", customer: "Abid Ali Gujjar", items: 8, total: 20000 },
    { id: "INV-003", date: "2026-01-07", customer: "Aamir Syngenta", items: 2, total: 5000 },
    { id: "INV-002", date: "2026-01-06", customer: "Abuzar Commission Shop", items: 3, total: 4500 },
    { id: "INV-001", date: "2026-01-06", customer: "Adeel Ahmad Chadar", items: 1, total: 1500 },
];

export default function SalesReportPage() {
    const today = new Date().toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState(today);
    const [toDate, setToDate] = useState(today);

    const totalSales = salesData.reduce((sum, s) => sum + s.total, 0);
    const totalItems = salesData.reduce((sum, s) => sum + s.items, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <BarChart3 size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Sales Report</h1>
                        <p className="text-gray-500 text-sm">View sales analytics</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-medium hover:bg-emerald-100 transition-colors">
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
                                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">To Date</label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                            </div>
                        </div>
                    </div>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium">
                        <Search size={18} />
                        Search
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-500 text-sm">Total Sales</p>
                    <p className="text-3xl font-bold text-emerald-600 mt-2">Rs. {totalSales.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-500 text-sm">Total Invoices</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{salesData.length}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <p className="text-gray-500 text-sm">Items Sold</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{totalItems}</p>
                </div>
            </div>

            {/* Sales Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">Invoice #</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Date</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Customer</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Items</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Total (PKR)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {salesData.map((sale) => (
                                <tr key={sale.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-emerald-600">{sale.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{sale.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{sale.customer}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 text-right">{sale.items}</td>
                                    <td className="px-6 py-4 text-sm text-right font-bold text-gray-800">{sale.total.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-50">
                            <tr>
                                <td colSpan={3} className="px-6 py-4 text-sm font-bold text-gray-800">Total</td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-gray-800">{totalItems}</td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">{totalSales.toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}
