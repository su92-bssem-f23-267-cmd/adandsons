"use client";

import { Download, AlertCircle } from "lucide-react";
import { exportToPDF } from "@/utils/pdfGenerator";

const lowStockItems = [
    { id: 1, code: "34", name: "ACTARA", category: "Insecticide", unit: "Gm", current: 8, minimum: 15 },
    { id: 2, code: "37", name: "AMISTAR", category: "Fungicide", unit: "Ltr", current: 5, minimum: 12 },
    { id: 3, code: "29", name: "AXIAL", category: "Herbicide", unit: "Ltr", current: 3, minimum: 10 },
    { id: 4, code: "55", name: "DERMASOL", category: "Fungicide", unit: "Ltr", current: 4, minimum: 8 },
    { id: 5, code: "63", name: "KARATE", category: "Insecticide", unit: "Ltr", current: 6, minimum: 15 },
];

export default function LowStockPage() {
    const handleExport = () => {
        const columns = ["Code", "Product", "Category", "Unit", "Current Qty", "Min Qty", "Shortage"];
        const data = lowStockItems.map(item => [
            item.code,
            item.name,
            item.category,
            item.unit,
            item.current,
            item.minimum,
            item.minimum - item.current
        ]);

        exportToPDF({
            title: "Low Stock Alert Report",
            columns,
            data,
            filename: "low_stock_report"
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                        <AlertCircle size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Products Low Stock</h1>
                        <p className="text-gray-500 text-sm">Products below minimum quantity</p>
                    </div>
                </div>
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
                >
                    <Download size={18} />
                    Export PDF
                </button>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <div className="flex items-center gap-3">
                    <AlertCircle size={24} className="text-amber-500" />
                    <div>
                        <p className="font-bold text-amber-700">{lowStockItems.length} Products Running Low</p>
                        <p className="text-sm text-amber-600">These products are below minimum stock level</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Mobile Card View */}
                <div className="block sm:hidden divide-y divide-gray-100">
                    {lowStockItems.map((item) => (
                        <div key={item.id} className="p-4 hover:bg-amber-50/50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">#{item.code}</span>
                                        <h3 className="font-bold text-gray-800 text-sm">{item.name}</h3>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{item.category} • {item.unit}</p>
                                </div>
                                <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg font-bold text-sm">
                                    {item.current}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-50 text-xs">
                                <div className="flex gap-4">
                                    <span className="text-gray-500">Min: {item.minimum}</span>
                                    <span className="text-red-500 font-bold">Short: -{item.minimum - item.current}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <table className="w-full hidden sm:table">
                    <thead className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
                        <tr>
                            <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Code</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Product</th>
                            <th className="text-left px-6 py-4 text-sm font-medium">Category</th>
                            <th className="text-center px-6 py-4 text-sm font-medium">Unit</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Current</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Minimum</th>
                            <th className="text-right px-6 py-4 text-sm font-medium">Short</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {lowStockItems.map((item, index) => (
                            <tr key={item.id} className="hover:bg-amber-50">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-amber-600 font-medium">{item.code}</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-700">{item.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                                <td className="px-6 py-4 text-sm text-center"><span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">{item.unit}</span></td>
                                <td className="px-6 py-4 text-sm text-right"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg font-bold">{item.current}</span></td>
                                <td className="px-6 py-4 text-sm text-right text-gray-600">{item.minimum}</td>
                                <td className="px-6 py-4 text-sm text-right"><span className="text-red-600 font-bold">-{item.minimum - item.current}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
