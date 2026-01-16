"use client";

import { useState } from "react";
import { Receipt, Search, Edit2, Trash2 } from "lucide-react";

interface Expense {
    id: number;
    category: string;
    amount: number;
    date: string;
    description: string;
    method: string;
}

const expenses: Expense[] = [
    { id: 1, category: "Rent", amount: 35000, date: "2026-01-15", description: "Shop rent for January", method: "Bank Transfer" },
    { id: 2, category: "Utilities", amount: 12500, date: "2026-01-14", description: "Electricity bill - LESCO", method: "Cash" },
    { id: 3, category: "Salaries", amount: 85000, date: "2026-01-10", description: "Staff salaries - 3 employees", method: "Bank Transfer" },
    { id: 4, category: "Transport", amount: 8500, date: "2026-01-08", description: "Delivery van fuel and maintenance", method: "Cash" },
    { id: 5, category: "Maintenance", amount: 5000, date: "2026-01-05", description: "Godown repair work", method: "Cash" },
];

export default function ExpensesPage() {
    const [search, setSearch] = useState("");
    const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Receipt size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Expenses</h1>
                        <p className="text-gray-500 text-sm">View all expenses</p>
                    </div>
                </div>
                <div className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-2">
                    <span className="text-sm text-gray-600">Total: </span>
                    <span className="text-lg font-bold text-rose-600">Rs. {totalExpenses.toLocaleString()}</span>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search expenses..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 text-gray-700" />
                </div>
            </div>

            {/* Expenses Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Category</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Description</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Date</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Method</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Amount (PKR)</th>
                                <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {expenses.map((expense, index) => (
                                <tr key={expense.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-lg text-xs font-medium">{expense.category}</span></td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{expense.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{expense.date}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{expense.method}</td>
                                    <td className="px-6 py-4 text-sm text-right font-bold text-rose-600">{expense.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={16} /></button>
                                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                        </div>
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
