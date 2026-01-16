"use client";

import { useState } from "react";
import {
    Search,
    FileText,
    Settings,
    Plus,
    Minus,
    Trash2,
    Save,
    RotateCcw,
    Package
} from "lucide-react";

interface PurchaseItem {
    id: number;
    code: string;
    name: string;
    batch: string;
    expiryDate: string;
    purchasePrice: number;
    qty: number;
    unit: string;
    salePrice: number;
}

export default function PurchaseInvoicePage() {
    const [items, setItems] = useState<PurchaseItem[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedVendor, setSelectedVendor] = useState("");
    const [paymentType, setPaymentType] = useState("Cash");
    const [enteredAmount, setEnteredAmount] = useState(0);

    const subTotal = items.reduce((sum, item) => sum + (item.purchasePrice * item.qty), 0);
    const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
    const balance = subTotal - enteredAmount;

    const handleAddItem = () => {
        const newItem: PurchaseItem = {
            id: items.length + 1,
            code: `P${String(items.length + 1).padStart(3, "0")}`,
            name: "Sample Product",
            batch: "B001",
            expiryDate: "2026-12-31",
            purchasePrice: 100,
            qty: 1,
            unit: "Pcs",
            salePrice: 150
        };
        setItems([...items, newItem]);
    };

    const handleQuantityChange = (id: number, delta: number) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const handleRemoveItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleReset = () => {
        setItems([]);
        setSearchQuery("");
        setSelectedVendor("");
        setEnteredAmount(0);
    };

    return (
        <div className="space-y-4">
            {/* Page Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Package size={20} className="text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-gray-800">Purchase Invoice</h1>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-colors">
                            <FileText size={16} />
                            Old Invoices
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-colors">
                            <Settings size={16} />
                            Settings
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                {/* Left Section */}
                <div className="xl:col-span-3 space-y-4">
                    {/* Search & Vendor Selection */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-gray-500 mb-2">
                                    Search & Scan Item (alt + I)
                                </label>
                                <div className="relative">
                                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Type to search items..."
                                        className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700"
                                    />
                                    <button
                                        onClick={handleAddItem}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-500 mb-2">
                                    Select Vendor
                                </label>
                                <select
                                    value={selectedVendor}
                                    onChange={(e) => setSelectedVendor(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 bg-white"
                                >
                                    <option value="">Select Vendor...</option>
                                    <option value="vendor-1">ABC Distributors</option>
                                    <option value="vendor-2">XYZ Suppliers</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Items Table */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                                    <tr>
                                        <th className="text-left px-4 py-3 text-sm font-medium w-16">Action</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium w-12">#Sr</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium">Code</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium">Name</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium">Batch</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium">Expiry Date</th>
                                        <th className="text-right px-4 py-3 text-sm font-medium">Purchase Price</th>
                                        <th className="text-center px-4 py-3 text-sm font-medium w-28">Qty</th>
                                        <th className="text-left px-4 py-3 text-sm font-medium">Unit</th>
                                        <th className="text-right px-4 py-3 text-sm font-medium">Sale Price</th>
                                        <th className="text-right px-4 py-3 text-sm font-medium">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {items.length === 0 ? (
                                        <tr>
                                            <td colSpan={11} className="px-4 py-16 text-center text-gray-400">
                                                <div className="flex flex-col items-center gap-2">
                                                    <Package size={48} className="text-gray-300" />
                                                    <p>No items added yet</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        items.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="px-4 py-3">
                                                    <button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-gray-600">{index + 1}</td>
                                                <td className="px-4 py-3 text-sm font-medium text-purple-600">{item.code}</td>
                                                <td className="px-4 py-3 text-sm text-gray-700">{item.name}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500">{item.batch}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500">{item.expiryDate}</td>
                                                <td className="px-4 py-3 text-sm text-gray-500 text-right">{item.purchasePrice.toLocaleString()}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center justify-center gap-1">
                                                        <button onClick={() => handleQuantityChange(item.id, -1)} className="p-1 bg-gray-100 hover:bg-gray-200 rounded"><Minus size={14} /></button>
                                                        <input type="number" value={item.qty} onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, qty: Math.max(1, parseInt(e.target.value) || 1) } : i))} className="w-12 text-center py-1 border border-gray-200 rounded text-sm" />
                                                        <button onClick={() => handleQuantityChange(item.id, 1)} className="p-1 bg-gray-100 hover:bg-gray-200 rounded"><Plus size={14} /></button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm text-gray-500">{item.unit}</td>
                                                <td className="px-4 py-3 text-sm text-gray-700 text-right font-medium">{item.salePrice.toLocaleString()}</td>
                                                <td className="px-4 py-3 text-sm text-purple-600 text-right font-bold">{(item.purchasePrice * item.qty).toLocaleString()}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-50 border-t border-gray-100 px-4 py-3">
                            <div className="grid grid-cols-4 gap-4 text-center">
                                <div><p className="text-xs text-gray-500 mb-1">Total Item</p><p className="text-lg font-bold text-gray-800">{totalItems}</p></div>
                                <div><p className="text-xs text-gray-500 mb-1">Paid</p><p className="text-lg font-bold text-purple-600">{enteredAmount.toLocaleString()}</p></div>
                                <div><p className="text-xs text-gray-500 mb-1">Balance</p><p className={`text-lg font-bold ${balance > 0 ? 'text-red-600' : 'text-purple-600'}`}>{balance.toLocaleString()}</p></div>
                                <div><p className="text-xs text-gray-500 mb-1">Return</p><p className="text-lg font-bold text-gray-800">0</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Payment Summary */}
                <div className="xl:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-20">
                        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                            <span className="text-sm text-gray-500">Sub Total</span>
                            <span className="text-lg font-bold text-gray-800">{subTotal.toLocaleString()}</span>
                        </div>

                        <div className="flex items-center justify-between py-4 border-b border-gray-100">
                            <span className="text-sm font-medium text-purple-600">Pay Able</span>
                            <span className="text-xl font-bold text-purple-600">{subTotal.toLocaleString()}</span>
                        </div>

                        <div className="py-4 border-b border-gray-100">
                            <label className="block text-sm text-gray-500 mb-2">Payment Type</label>
                            <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 bg-white">
                                <option value="Cash">Cash</option>
                                <option value="Credit">Credit</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                            </select>
                        </div>

                        <div className="py-4 border-b border-gray-100">
                            <label className="block text-sm text-gray-500 mb-2">Enter Amount</label>
                            <input type="number" value={enteredAmount} onChange={(e) => setEnteredAmount(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all text-gray-700 text-right text-lg font-medium" placeholder="0" />
                        </div>

                        <div className="py-4 bg-gradient-to-r from-purple-500 to-indigo-600 -mx-4 px-4 rounded-b-xl mt-4">
                            <div className="flex items-center justify-between">
                                <span className="text-white font-medium">Total</span>
                                <span className="text-2xl font-bold text-white">{subTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                                <Save size={18} />
                                Save
                            </button>
                            <button onClick={handleReset} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition-colors">
                                <RotateCcw size={18} />
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
