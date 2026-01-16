"use client";

import { useState } from "react";
import { ShoppingBag, Download, Calendar, Search } from "lucide-react";

const productSales = [
    { id: 1, code: "7", name: "AMUNIOM SALPHAT", category: "Fertilizer", unit: "Kg", qtySold: 1200, totalSale: 264000 },
    { id: 2, code: "8", name: "CAN SARSBAZ", category: "Fertilizer", unit: "Kg", qtySold: 850, totalSale: 212500 },
    { id: 3, code: "34", name: "ACTARA", category: "Insecticide", unit: "Gm", qtySold: 85, totalSale: 238000 },
    { id: 4, code: "49", name: "ACETO CHLOR", category: "Herbicide", unit: "Ltr", qtySold: 120, totalSale: 126000 },
    { id: 5, code: "29", name: "AXIAL", category: "Herbicide", unit: "Ltr", qtySold: 65, totalSale: 221000 },
    { id: 6, code: "37", name: "AMISTAR", category: "Fungicide", unit: "Ltr", qtySold: 38, totalSale: 159600 },
];

export default function ProductSalePage() {
    const [search, setSearch] = useState("");
    const today = new Date().toISOString().split("T")[0];
    const totalSales = productSales.reduce((s, p) => s + p.totalSale, 0);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <ShoppingBag size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Product Sale</h1>
                        <p className="text-gray-500 text-sm">Sales by product</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Download size={18} />
                    Export PDF
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Calendar size={20} className="text-gray-400" />
                        <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                        <span className="text-gray-400">to</span>
                        <input type="date" defaultValue={today} className="px-4 py-2.5 border border-gray-200 rounded-xl" />
                    </div>
                    <div className="relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl" placeholder="Search product..." />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Total Products Sold</p>
                    <p className="text-3xl font-bold text-indigo-600 mt-1">{productSales.length}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                    <p className="text-gray-500 text-sm">Total Sales Value</p>
                    <p className="text-3xl font-bold text-purple-600 mt-1">Rs. {totalSales.toLocaleString()}</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Code</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Product</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Category</th>
                            <th className="text-center px-6 py-4 text-sm font-medium">Unit</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Qty Sold</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Total Sale</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {productSales.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-indigo-600 font-medium">{item.code}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{item.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                                <td className="px-6 py-4 text-sm text-center"><span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{item.unit}</span></td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-indigo-600">{item.qtySold}</td>
                                <td className="px-6 py-4 text-sm text-right font-bold text-purple-600">Rs. {item.totalSale.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                        <tr>
                            <td colSpan={6} className="px-6 py-4 text-right font-bold text-gray-700">Total:</td>
                            <td className="px-6 py-4 text-right font-bold text-purple-600">Rs. {totalSales.toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
