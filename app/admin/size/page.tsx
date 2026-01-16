"use client";

import { useState } from "react";
import { Maximize, Plus, Edit2, Trash2 } from "lucide-react";

const sizes = [
    { id: 1, name: "Small", abbreviation: "S", productCount: 18 },
    { id: 2, name: "Medium", abbreviation: "M", productCount: 25 },
    { id: 3, name: "Large", abbreviation: "L", productCount: 22 },
    { id: 4, name: "Extra Large", abbreviation: "XL", productCount: 12 },
    { id: 5, name: "500ml", abbreviation: "500ml", productCount: 35 },
    { id: 6, name: "1 Liter", abbreviation: "1L", productCount: 28 },
    { id: 7, name: "5 Liter", abbreviation: "5L", productCount: 15 },
    { id: 8, name: "25 Kg", abbreviation: "25Kg", productCount: 20 },
];

export default function SizePage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Maximize size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Size</h1>
                        <p className="text-gray-500 text-sm">Manage product sizes</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    New
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {sizes.map((size) => (
                    <div key={size.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all text-center">
                        <div className="w-14 h-14 bg-violet-100 rounded-xl mx-auto flex items-center justify-center">
                            <span className="text-violet-600 font-bold text-lg">{size.abbreviation}</span>
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 mt-3">{size.name}</h3>
                        <p className="text-xs text-gray-500">{size.productCount} products</p>
                        <div className="flex justify-center gap-1 mt-2">
                            <button className="p-1.5 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={14} /></button>
                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Size</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Size Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. Large" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Abbreviation</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. L" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
