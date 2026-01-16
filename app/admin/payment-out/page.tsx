"use client";

import { useState } from "react";
import { ArrowUpRight, Save } from "lucide-react";

interface PaymentRecord {
    id: number;
    vendor: string;
    amount: number;
    date: string;
    method: string;
}

export default function PaymentOutPage() {
    const [vendor, setVendor] = useState("");
    const [amount, setAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("Cash");
    const [description, setDescription] = useState("");

    const [payments] = useState<PaymentRecord[]>([
        { id: 1, vendor: "Syngenta Pakistan", amount: 45000, date: "2026-01-16", method: "Bank Transfer" },
        { id: 2, vendor: "Engro Fertilizers", amount: 85000, date: "2026-01-12", method: "Bank Transfer" },
        { id: 3, vendor: "FMC Corporation", amount: 25000, date: "2026-01-08", method: "Cash" },
    ]);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                    <ArrowUpRight size={24} className="text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Payment Out</h1>
                    <p className="text-gray-500 text-sm">Make payments to vendors</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Payment Form */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">New Payment</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Select Vendor</label>
                                <select value={vendor} onChange={(e) => setVendor(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-700 bg-white">
                                    <option value="">Select Vendor...</option>
                                    <option value="abc">ABC Distributors</option>
                                    <option value="xyz">XYZ Suppliers</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Amount (PKR)</label>
                                <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-700 text-lg font-medium" placeholder="0" />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Payment Method</label>
                                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-700 bg-white">
                                    <option value="Cash">Cash</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                    <option value="Cheque">Cheque</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Description</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-700" placeholder="Payment description..." />
                            </div>

                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                                <Save size={18} />
                                Save Payment
                            </button>
                        </div>
                    </div>
                </div>

                {/* Recent Payments */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-5 border-b border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-800">Recent Payments</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">#</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Vendor</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Method</th>
                                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Amount (PKR)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {payments.map((payment, index) => (
                                        <tr key={payment.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-700">{payment.vendor}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500">{payment.date}</td>
                                            <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-medium">{payment.method}</span></td>
                                            <td className="px-6 py-4 text-sm text-red-600 text-right font-bold">{payment.amount.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
