"use client";

import { useState } from "react";
import { Wallet, Download, Calendar } from "lucide-react";

const vendorPayments = [
    { id: 1, date: "2026-01-16", vendor: "Syngenta Pakistan", invoice: "PUR-003", amount: 45000, method: "Bank Transfer" },
    { id: 2, date: "2026-01-12", vendor: "Engro Fertilizers", invoice: "PUR-002", amount: 85000, method: "Bank Transfer" },
    { id: 3, date: "2026-01-08", vendor: "FMC Corporation", invoice: "PUR-001", amount: 25000, method: "Cash" },
    { id: 4, date: "2026-01-05", vendor: "Kanzo AG", invoice: "PUR-005", amount: 18500, method: "Bank Transfer" },
    { id: 5, date: "2026-01-02", vendor: "ICI Pakistan", invoice: "PUR-004", amount: 32000, method: "Cash" },
];

export default function VendorPaidPage() {
    const today = new Date().toISOString().split("T")[0];
    const totalPaid = vendorPayments.reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Wallet size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Vendor Paid</h1>
                        <p className="text-gray-500 text-sm">Payments made to vendors</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
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
                    <div className="bg-red-50 px-6 py-3 rounded-xl">
                        <span className="text-gray-600">Total Paid:</span>
                        <span className="text-2xl font-bold text-red-600 ml-2">Rs. {totalPaid.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-red-500 to-rose-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Date</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Vendor</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Invoice</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Method</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {vendorPayments.map((payment, index) => (
                            <tr key={payment.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{payment.date}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{payment.vendor}</td>
                                <td className="px-6 py-4 text-sm text-red-600 font-medium">{payment.invoice}</td>
                                <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{payment.method}</span></td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-red-600">Rs. {payment.amount.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                        <tr>
                            <td colSpan={5} className="px-6 py-4 text-right font-bold text-gray-700">Total:</td>
                            <td className="px-6 py-4 text-right font-bold text-red-600">Rs. {totalPaid.toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
