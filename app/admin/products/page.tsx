"use client";

import { useState } from "react";
import { Package, Plus, Search, Edit2, Trash2, Eye } from "lucide-react";

interface Product {
    id: number;
    code: string;
    name: string;
    category: string;
    purchasePrice: number;
    salePrice: number;
    stock: number;
    unit: string;
}

const sampleProducts: Product[] = [
    { id: 1, code: "49", name: "ACETO CHLOR", category: "Herbicide", purchasePrice: 850, salePrice: 1050, stock: 45, unit: "Ltr" },
    { id: 2, code: "34", name: "ACTARA", category: "Insecticide", purchasePrice: 2200, salePrice: 2800, stock: 30, unit: "Gm" },
    { id: 3, code: "30", name: "ALLYMAX", category: "Herbicide", purchasePrice: 1500, salePrice: 1850, stock: 25, unit: "Gm" },
    { id: 4, code: "37", name: "AMISTAR", category: "Fungicide", purchasePrice: 3500, salePrice: 4200, stock: 18, unit: "Ltr" },
    { id: 5, code: "7", name: "AMUNIOM SALPHAT", category: "Fertilizer", purchasePrice: 180, salePrice: 220, stock: 500, unit: "Kg" },
    { id: 6, code: "29", name: "AXIAL", category: "Herbicide", purchasePrice: 2800, salePrice: 3400, stock: 22, unit: "Ltr" },
    { id: 7, code: "8", name: "CAN SARSBAZ", category: "Fertilizer", purchasePrice: 200, salePrice: 250, stock: 350, unit: "Kg" },
    { id: 8, code: "44", name: "CHLORI", category: "Insecticide", purchasePrice: 450, salePrice: 580, stock: 40, unit: "Ltr" },
    { id: 9, code: "38", name: "COPER OXI", category: "Fungicide", purchasePrice: 650, salePrice: 820, stock: 35, unit: "Kg" },
    { id: 10, code: "15", name: "DAP FATEH", category: "Fertilizer", purchasePrice: 320, salePrice: 400, stock: 200, unit: "Kg" },
];

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const filteredProducts = sampleProducts.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Package size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
                        <p className="text-gray-500 text-sm">Manage your product inventory</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add Product
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products by name or code..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700" />
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">Code</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Name</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Category</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Purchase</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Sale</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Stock</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Unit</th>
                                <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-blue-600">{product.code}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{product.name}</td>
                                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">{product.category}</span></td>
                                    <td className="px-6 py-4 text-sm text-gray-500 text-right">{product.purchasePrice.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-right font-medium">{product.salePrice.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-sm text-right"><span className={`font-bold ${product.stock < 50 ? 'text-red-600' : 'text-emerald-600'}`}>{product.stock}</span></td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{product.unit}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Eye size={16} /></button>
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

            {/* Add Product Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Product</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm text-gray-600 mb-2">Product Code</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="P001" /></div>
                                <div><label className="block text-sm text-gray-600 mb-2">Category</label><select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white"><option>Medicine</option><option>Supplements</option><option>Personal Care</option></select></div>
                            </div>
                            <div><label className="block text-sm text-gray-600 mb-2">Product Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Product name" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm text-gray-600 mb-2">Purchase Price</label><input type="number" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0" /></div>
                                <div><label className="block text-sm text-gray-600 mb-2">Sale Price</label><input type="number" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0" /></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm text-gray-600 mb-2">Opening Stock</label><input type="number" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0" /></div>
                                <div><label className="block text-sm text-gray-600 mb-2">Unit</label><select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white"><option>Pcs</option><option>Box</option><option>Tin</option><option>Kg</option></select></div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-medium">Save Product</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
