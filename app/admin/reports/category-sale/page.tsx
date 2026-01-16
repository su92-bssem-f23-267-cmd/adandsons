"use client";

import { useState } from "react";
import { Grid3X3, Download, Calendar } from "lucide-react";

const categorySales = [
    { id: 1, name: "Fertilizer", products: 42, qtySold: 2050, totalSale: 476500 },
    { id: 2, name: "Insecticide", products: 35, qtySold: 345, totalSale: 398000 },
    { id: 3, name: "Herbicide", products: 28, qtySold: 285, totalSale: 347000 },
    { id: 4, name: "Fungicide", products: 18, qtySold: 125, totalSale: 285600 },
    { id: 5, name: "Seed", products: 25, qtySold: 180, totalSale: 156000 },
    { id: 6, name: "Equipment", products: 12, qtySold: 45, totalSale: 125000 },
];

export default function CategorySalePage() {
    const today = new Date().toISOString().split("T")[0];
    const totalSales = categorySales.reduce((s, c) => s + c.totalSale, 0);
    const totalQty = categorySales.reduce((s, c) => s + c.qtySold, 0);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Grid3X3 size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Category Sale</h1>
                        <p className="text-gray-500 text-sm">Sales by category</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Download size={18} />
                    Export PDF
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center gap-4">
                    <Calendar size={20} className="text-gray-400" />
                    <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                    <span className="text-gray-400">to</span>
                    <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Categories</p>
                    <p className="text-3xl font-bold text-teal-600 mt-1">{categorySales.length}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Items Sold</p>
                    <p className="text-3xl font-bold text-emerald-600 mt-1">{totalQty.toLocaleString()}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Total Sales</p>
                    <p className="text-3xl font-bold text-green-600 mt-1">Rs. {totalSales.toLocaleString()}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Category</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Products</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Qty Sold</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Total Sale</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">% Share</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {categorySales.map((cat, index) => (
                            <tr key={cat.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{cat.name}</td>
                                <td className="px-6 py-4 text-sm text-right text-gray-600">{cat.products}</td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-teal-600">{cat.qtySold}</td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">Rs. {cat.totalSale.toLocaleString()}</td>
                                <td className="px-6 py-4 text-sm text-right"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg font-medium">{((cat.totalSale / totalSales) * 100).toFixed(1)}%</span></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                        <tr>
                            <td colSpan={3} className="px-6 py-4 text-right font-bold text-gray-700">Total:</td>
                            <td className="px-6 py-4 text-right font-bold text-teal-600">{totalQty.toLocaleString()}</td>
                            <td className="px-6 py-4 text-right font-bold text-emerald-600">Rs. {totalSales.toLocaleString()}</td>
                            <td className="px-6 py-4 text-right font-bold text-green-600">100%</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
