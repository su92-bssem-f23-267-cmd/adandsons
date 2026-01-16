"use client";

import { useState } from "react";
import { TrendingUp, Calendar, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ProfitLossPage() {
    const today = new Date().toISOString().split("T")[0];
    const [fromDate, setFromDate] = useState(today);
    const [toDate, setToDate] = useState(today);

    // Sample data based on KeyPOS
    const totalSales = 41000;
    const totalPurchases = 28500;
    const totalExpenses = 146000;
    const grossProfit = totalSales - totalPurchases;
    const netProfit = grossProfit - totalExpenses;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Profit & Loss</h1>
                        <p className="text-gray-500 text-sm">Financial summary</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-600 rounded-xl font-medium hover:bg-amber-100 transition-colors">
                    <Download size={18} />
                    Export Report
                </button>
            </div>

            {/* Date Filter */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">From Date</label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-gray-700" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">To Date</label>
                            <div className="relative">
                                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-gray-700" />
                            </div>
                        </div>
                    </div>
                    <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-medium">
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">Total Sales</p>
                        <ArrowUpRight size={20} className="text-emerald-500" />
                    </div>
                    <p className="text-2xl font-bold text-emerald-600 mt-2">Rs. {totalSales.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">Total Purchases</p>
                        <ArrowDownRight size={20} className="text-purple-500" />
                    </div>
                    <p className="text-2xl font-bold text-purple-600 mt-2">Rs. {totalPurchases.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-sm">Expenses</p>
                        <ArrowDownRight size={20} className="text-red-500" />
                    </div>
                    <p className="text-2xl font-bold text-red-600 mt-2">Rs. {totalExpenses.toLocaleString()}</p>
                </div>
                <div className={`rounded-2xl shadow-sm border p-6 ${netProfit >= 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                    <p className="text-gray-600 text-sm">Net Profit</p>
                    <p className={`text-2xl font-bold mt-2 ${netProfit >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>Rs. {netProfit.toLocaleString()}</p>
                </div>
            </div>

            {/* Profit & Loss Statement */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-800">Profit & Loss Statement</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-700">Total Sales Revenue</span>
                        <span className="font-bold text-emerald-600">Rs. {totalSales.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-700">Less: Cost of Goods Sold (Purchases)</span>
                        <span className="font-bold text-purple-600">Rs. ({totalPurchases.toLocaleString()})</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200 bg-gray-50 -mx-6 px-6">
                        <span className="text-gray-800 font-semibold">Gross Profit</span>
                        <span className="font-bold text-gray-800">Rs. {grossProfit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-700">Less: Operating Expenses</span>
                        <span className="font-bold text-red-600">Rs. ({totalExpenses.toLocaleString()})</span>
                    </div>
                    <div className={`flex justify-between py-4 -mx-6 px-6 ${netProfit >= 0 ? 'bg-emerald-50' : 'bg-red-50'}`}>
                        <span className="text-gray-800 font-bold text-lg">Net Profit / (Loss)</span>
                        <span className={`font-bold text-xl ${netProfit >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>Rs. {netProfit.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
