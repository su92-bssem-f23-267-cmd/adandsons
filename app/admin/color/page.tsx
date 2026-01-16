"use client";

import { useState } from "react";
import { Palette, Plus, Edit2, Trash2 } from "lucide-react";

const colors = [
    { id: 1, name: "Red", code: "#FF0000", productCount: 12 },
    { id: 2, name: "Green", code: "#00FF00", productCount: 8 },
    { id: 3, name: "Blue", code: "#0000FF", productCount: 15 },
    { id: 4, name: "Yellow", code: "#FFFF00", productCount: 6 },
    { id: 5, name: "Orange", code: "#FFA500", productCount: 10 },
    { id: 6, name: "Brown", code: "#8B4513", productCount: 5 },
];

export default function ColorPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Palette size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Color</h1>
                        <p className="text-gray-500 text-sm">Manage product colors</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    New
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {colors.map((color) => (
                    <div key={color.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all text-center">
                        <div className="w-16 h-16 rounded-xl mx-auto shadow-inner" style={{ backgroundColor: color.code }}></div>
                        <h3 className="text-sm font-bold text-gray-800 mt-3">{color.name}</h3>
                        <p className="text-xs text-gray-500">{color.productCount} products</p>
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
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Color</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Color Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Color name" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Color Code</label><input type="color" className="w-full h-12 border border-gray-200 rounded-xl cursor-pointer" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
