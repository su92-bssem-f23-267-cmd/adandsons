"use client";

import { useState } from "react";
import { Package, Download, Search } from "lucide-react";
import { exportToPDF } from "@/utils/pdfGenerator";

const stockData = [
    { id: 1, code: "49", name: "ACETO CHLOR", category: "Herbicide", unit: "Ltr", inStock: 45, soldQty: 120, purchaseQty: 165 },
    { id: 2, code: "34", name: "ACTARA", category: "Insecticide", unit: "Gm", inStock: 30, soldQty: 85, purchaseQty: 115 },
    { id: 3, code: "30", name: "ALLYMAX", category: "Herbicide", unit: "Gm", inStock: 25, soldQty: 42, purchaseQty: 67 },
    { id: 4, code: "37", name: "AMISTAR", category: "Fungicide", unit: "Ltr", inStock: 18, soldQty: 38, purchaseQty: 56 },
    { id: 5, code: "7", name: "AMUNIOM SALPHAT", category: "Fertilizer", unit: "Kg", inStock: 500, soldQty: 1200, purchaseQty: 1700 },
    { id: 6, code: "29", name: "AXIAL", category: "Herbicide", unit: "Ltr", inStock: 22, soldQty: 65, purchaseQty: 87 },
];

export default function StockSummaryPage() {
    const [search, setSearch] = useState("");
    const today = new Date().toISOString().split("T")[0];
    const totalProducts = stockData.length;
    const totalStock = stockData.reduce((sum, item) => sum + item.inStock, 0);

    const handleExport = () => {
        const columns = ["Code", "Product", "Category", "Unit", "In Stock", "Sold", "Purchased"];
        const data = stockData.map(item => [
            item.code,
            item.name,
            item.category,
            item.unit,
            item.inStock,
            item.soldQty,
            item.purchaseQty
        ]);

        exportToPDF({
            title: "Stock Summary Report",
            columns,
            data,
            filename: "stock_summary"
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Package size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Stock Summary</h1>
                        <p className="text-gray-500 text-sm">Inventory stock overview</p>
                    </div>
                </div>
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
                >
                    <Download size={18} />
                    Export PDF
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Total Products</p>
                    <p className="text-3xl font-bold text-blue-600 mt-1">{totalProducts}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Total Stock Qty</p>
                    <p className="text-3xl font-bold text-cyan-600 mt-1">{totalStock.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Total Sold</p>
                    <p className="text-3xl font-bold text-emerald-600 mt-1">{stockData.reduce((s, i) => s + i.soldQty, 0).toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Total Purchased</p>
                    <p className="text-3xl font-bold text-purple-600 mt-1">{stockData.reduce((s, i) => s + i.purchaseQty, 0).toLocaleString()}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="flex-1 relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl" placeholder="Search products..." />
                    </div>
                    <div className="flex gap-2">
                        <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                        <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Mobile Card View */}
                <div className="block sm:hidden divide-y divide-gray-100">
                    {stockData.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                        <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">#{item.code}</span>
                                        <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{item.category} • {item.unit}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">In Stock</p>
                                    <p className="text-base font-bold text-blue-600">{item.inStock}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-gray-50">
                                <div>
                                    <p className="text-xs text-gray-400">Sold</p>
                                    <p className="text-sm font-bold text-emerald-600">{item.soldQty}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">Purchased</p>
                                    <p className="text-sm font-bold text-purple-600">{item.purchaseQty}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <table className="w-full hidden sm:table">
                    <thead className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                        <tr>
                            <th className="text-left px-4 py-4 text-sm font-medium">Code</th>
                            <th className="text-left px-4 py-4 text-sm font-medium">Product</th>
                            <th className="text-left px-4 py-4 text-sm font-medium">Category</th>
                            <th className="text-center px-4 py-4 text-sm font-medium">Unit</th>
                            <th className="text-right px-4 py-4 text-sm font-medium">In Stock</th>
                            <th className="text-right px-4 py-4 text-sm font-medium">Sold Qty</th>
                            <th className="text-right px-4 py-4 text-sm font-medium">Purchase Qty</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {stockData.filter(i => i.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4 text-sm text-blue-600 font-medium">{item.code}</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700">{item.name}</td>
                                <td className="px-4 py-4 text-sm text-gray-600">{item.category}</td>
                                <td className="px-4 py-4 text-sm text-center"><span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{item.unit}</span></td>
                                <td className="px-4 py-4 text-sm text-right font-bold text-blue-600">{item.inStock}</td>
                                <td className="px-4 py-4 text-sm text-right text-emerald-600">{item.soldQty}</td>
                                <td className="px-4 py-4 text-sm text-right text-purple-600">{item.purchaseQty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
