"use client";

import { useState } from "react";
import { Receipt, Plus, Save } from "lucide-react";

export default function AddExpensePage() {
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Cash");

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Receipt size={24} className="text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Add Expense</h1>
                    <p className="text-gray-500 text-sm">Record a new expense</p>
                </div>
            </div>

            {/* Expense Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-2xl">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Expense Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 text-gray-700 bg-white">
                            <option value="">Select Category...</option>
                            <option value="rent">Rent</option>
                            <option value="utilities">Utilities</option>
                            <option value="salaries">Salaries</option>
                            <option value="transport">Transport</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Amount (PKR)</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 text-gray-700 text-lg font-medium" placeholder="0" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Payment Method</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 text-gray-700 bg-white">
                            <option value="Cash">Cash</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="Card">Card</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-2">Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 text-gray-700" placeholder="Expense description..." />
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                        <Save size={18} />
                        Save Expense
                    </button>
                </div>
            </div>
        </div>
    );
}
