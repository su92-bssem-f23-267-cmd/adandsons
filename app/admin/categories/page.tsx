"use client";

import { useState } from "react";
import { FolderOpen, Plus, Edit2, Trash2 } from "lucide-react";

interface Category {
    id: number;
    name: string;
    description: string;
    productCount: number;
}

const sampleCategories: Category[] = [
    { id: 1, name: "Herbicide", description: "Weed killers and grass control products", productCount: 28 },
    { id: 2, name: "Insecticide", description: "Pest control and insect killers", productCount: 35 },
    { id: 3, name: "Fungicide", description: "Fungal disease control products", productCount: 18 },
    { id: 4, name: "Fertilizer", description: "Soil nutrients and plant food", productCount: 42 },
    { id: 5, name: "Seed", description: "Agricultural seeds and seedlings", productCount: 25 },
    { id: 6, name: "Equipment", description: "Sprayers and farming equipment", productCount: 12 },
];

export default function CategoriesPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <FolderOpen size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
                        <p className="text-gray-500 text-sm">Manage product categories</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add Category
                </button>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleCategories.map((category) => (
                    <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                <FolderOpen size={24} className="text-amber-600" />
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={16} /></button>
                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mt-4">{category.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-2xl font-bold text-amber-600">{category.productCount}</span>
                            <span className="text-gray-500 text-sm ml-2">Products</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Category Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Category</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Category Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Category name" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Description</label><textarea rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Category description..." /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-medium">Save Category</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
