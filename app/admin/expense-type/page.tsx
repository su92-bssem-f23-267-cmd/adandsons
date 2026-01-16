"use client";

import { useState } from "react";
import { Tag, Plus, Edit2, Trash2 } from "lucide-react";

const expenseTypes = [
    { id: 1, name: "Rent", description: "Monthly shop/office rent", expenseCount: 12 },
    { id: 2, name: "Utilities", description: "Electricity, water, gas bills", expenseCount: 24 },
    { id: 3, name: "Salaries", description: "Staff salaries and wages", expenseCount: 12 },
    { id: 4, name: "Transport", description: "Vehicle fuel and transportation", expenseCount: 30 },
    { id: 5, name: "Maintenance", description: "Repairs and maintenance", expenseCount: 8 },
    { id: 6, name: "Office Supplies", description: "Stationery and office items", expenseCount: 15 },
    { id: 7, name: "Communication", description: "Phone and internet bills", expenseCount: 12 },
    { id: 8, name: "Miscellaneous", description: "Other miscellaneous expenses", expenseCount: 20 },
];

export default function ExpenseTypePage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Tag size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Expense Type</h1>
                        <p className="text-gray-500 text-sm">Manage expense categories</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    New
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Type Name</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Description</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Expenses</th>
                            <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {expenseTypes.map((type, index) => (
                            <tr key={type.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{type.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{type.description}</td>
                                <td className="px-6 py-4 text-sm text-right text-gray-600">{type.expenseCount}</td>
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

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Expense Type</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Type Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. Rent" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Description</label><textarea rows={2} className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Description..." /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
