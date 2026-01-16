"use client";

import { useState } from "react";
import { Scale, Plus, Edit2, Trash2 } from "lucide-react";

const units = [
    { id: 1, name: "Piece", abbreviation: "Pcs", productCount: 45 },
    { id: 2, name: "Kilogram", abbreviation: "Kg", productCount: 38 },
    { id: 3, name: "Gram", abbreviation: "Gm", productCount: 22 },
    { id: 4, name: "Liter", abbreviation: "Ltr", productCount: 30 },
    { id: 5, name: "Milliliter", abbreviation: "ml", productCount: 15 },
    { id: 6, name: "Box", abbreviation: "Box", productCount: 18 },
    { id: 7, name: "Packet", abbreviation: "Pkt", productCount: 25 },
    { id: 8, name: "Bottle", abbreviation: "Btl", productCount: 12 },
];

export default function UnitsPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Scale size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Units</h1>
                        <p className="text-gray-500 text-sm">Manage measurement units</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    New
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Unit Name</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Abbreviation</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Products</th>
                            <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {units.map((unit, index) => (
                            <tr key={unit.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{unit.name}</td>
                                <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-lg text-xs font-medium">{unit.abbreviation}</span></td>
                                <td className="px-6 py-4 text-sm text-right text-gray-600">{unit.productCount}</td>
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
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Unit</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Unit Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. Kilogram" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Abbreviation</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. Kg" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
