"use client";

import { useState } from "react";
import { Coins, Download, Calendar } from "lucide-react";

const customerPayments = [
    { id: 1, date: "2026-01-16", customer: "Abid Ali Gujjar", invoice: "INV-004", amount: 20000, method: "Cash" },
    { id: 2, date: "2026-01-15", customer: "A.D Commission Shop", invoice: "INV-006", amount: 8500, method: "Bank Transfer" },
    { id: 3, date: "2026-01-14", customer: "Aamir Sohail", invoice: "INV-005", amount: 5000, method: "Cash" },
    { id: 4, date: "2026-01-12", customer: "Adeel Ahmad Chadar", invoice: "INV-001", amount: 2500, method: "Cash" },
    { id: 5, date: "2026-01-10", customer: "Aamir Syngenta", invoice: "INV-003", amount: 5000, method: "Bank Transfer" },
];

export default function CustomerCollectionPage() {
    const today = new Date().toISOString().split("T")[0];
    const totalCollected = customerPayments.reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Coins size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Customer Collection</h1>
                        <p className="text-gray-500 text-sm">Payments received from customers</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Download size={18} />
                    Export PDF
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Calendar size={20} className="text-gray-400" />
                        <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                        <span className="text-gray-400">to</span>
                        <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                    </div>
                    <div className="bg-emerald-50 px-6 py-3 rounded-xl">
                        <span className="text-gray-600">Total Collected:</span>
                        <span className="text-2xl font-bold text-emerald-600 ml-2">Rs. {totalCollected.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-emerald-500 to-green-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Date</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Customer</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Invoice</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Method</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {customerPayments.map((payment, index) => (
                            <tr key={payment.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{payment.date}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{payment.customer}</td>
                                <td className="px-6 py-4 text-sm text-emerald-600 font-medium">{payment.invoice}</td>
                                <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{payment.method}</span></td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">Rs. {payment.amount.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                        <tr>
                            <td colSpan={5} className="px-6 py-4 text-right font-bold text-gray-700">Total:</td>
                            <td className="px-6 py-4 text-right font-bold text-emerald-600">Rs. {totalCollected.toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
