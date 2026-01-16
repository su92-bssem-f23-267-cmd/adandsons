"use client";

import { AlertTriangle, Download } from "lucide-react";
import { exportToPDF } from "@/utils/pdfGenerator";

const zeroStockItems = [
    { id: 1, code: "52", name: "CONFIDOR", category: "Insecticide", unit: "Ltr", lastSold: "2026-01-10" },
    { id: 2, code: "61", name: "GRAMOXONE", category: "Herbicide", unit: "Ltr", lastSold: "2026-01-08" },
    { id: 3, code: "78", name: "MARSHAL", category: "Insecticide", unit: "Kg", lastSold: "2026-01-05" },
    { id: 4, code: "85", name: "ROUND UP", category: "Herbicide", unit: "Ltr", lastSold: "2026-01-12" },
    { id: 5, code: "92", name: "SCORE", category: "Fungicide", unit: "Ltr", lastSold: "2026-01-03" },
];

export default function ZeroStockPage() {
    const handleExport = () => {
        const columns = ["Code", "Product", "Category", "Unit", "Stock", "Last Sold"];
        const data = zeroStockItems.map(item => [
            item.code,
            item.name,
            item.category,
            item.unit,
            "0",
            item.lastSold
        ]);

        exportToPDF({
            title: "Zero Stock Alert Report",
            columns,
            data,
            filename: "zero_stock_report"
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <AlertTriangle size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Zero Stock</h1>
                        <p className="text-gray-500 text-sm">Products with zero inventory</p>
                    </div>
                </div>
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
                >
                    <Download size={18} />
                    Export PDF
                </button>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <div className="flex items-center gap-3">
                    <AlertTriangle size={24} className="text-red-500" />
                    <div>
                        <p className="font-bold text-red-700">{zeroStockItems.length} Products Out of Stock</p>
                        <p className="text-sm text-red-600">These products need to be restocked immediately</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Mobile Card View */}
                <div className="block sm:hidden divide-y divide-gray-100">
                    {zeroStockItems.map((item) => (
                        <div key={item.id} className="p-4 hover:bg-red-50/50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">#{item.code}</span>
                                        <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{item.category} • {item.unit}</p>
                                </div>
                                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-bold text-sm">0</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-50 text-xs text-right text-gray-400">
                                Last Sold: <span className="text-gray-600 font-medium">{item.lastSold}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <table className="w-full hidden sm:table">
                    <thead className="bg-gradient-to-r from-red-500 to-orange-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Code</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Product</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Category</th>
                            <th className="text-center px-6 py-4 text-sm font-medium">Unit</th>
                            <th className="text-center px-6 py-4 text-sm font-medium">Stock</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Last Sold</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {zeroStockItems.map((item, index) => (
                            <tr key={item.id} className="hover:bg-red-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-red-600 font-medium">{item.code}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{item.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                                <td className="px-6 py-4 text-sm text-center"><span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{item.unit}</span></td>
                                <td className="px-6 py-4 text-center"><span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-bold text-sm">0</span></td>
                                <td className="px-6 py-4 text-sm text-gray-600">{item.lastSold}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
