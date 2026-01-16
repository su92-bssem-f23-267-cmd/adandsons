"use client";

import { useState } from "react";
import { Percent, Plus, Edit2, Trash2 } from "lucide-react";

const taxRates = [
    { id: 1, name: "GST Standard", rate: 17, description: "General Sales Tax" },
    { id: 2, name: "GST Reduced", rate: 5, description: "Reduced rate for essential items" },
    { id: 3, name: "Zero Rated", rate: 0, description: "Zero-rated supplies" },
    { id: 4, name: "Exempt", rate: 0, description: "Tax exempt items" },
    { id: 5, name: "Service Tax", rate: 15, description: "Services tax rate" },
];

export default function TaxRatePage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Percent size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Tax Rate</h1>
                        <p className="text-gray-500 text-sm">Manage tax rates</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    New
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Tax Name</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Description</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Rate (%)</th>
                            <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {taxRates.map((tax, index) => (
                            <tr key={tax.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{tax.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{tax.description}</td>
                                <td className="px-6 py-4 text-sm text-right"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg font-bold">{tax.rate}%</span></td>
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
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Tax Rate</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Tax Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. GST Standard" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Rate (%)</label><input type="number" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="17" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Description</label><textarea rows={2} className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Tax description..." /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
