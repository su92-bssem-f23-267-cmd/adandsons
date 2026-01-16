"use client";

import { useState } from "react";
import { Users, Plus, Search, Edit2, Trash2, Eye, Download } from "lucide-react";
import { exportToPDF } from "@/utils/pdfGenerator";

interface Party {
    id: number;
    code: string;
    name: string;
    phone: string;
    type: "Customer" | "Vendor";
    area: string;
    balance: number;
}

const parties: Party[] = [
    { id: 1, code: "1", name: "A.D Commission Shop", phone: "0302-9594500", type: "Customer", area: "Mandi Bahauddin", balance: 45000 },
    { id: 2, code: "2", name: "Aamir Sohail", phone: "0321-6543210", type: "Customer", area: "Gujrat", balance: 12500 },
    { id: 3, code: "3", name: "Aamir Syngenta", phone: "0333-1234567", type: "Customer", area: "Lahore", balance: -8000 },
    { id: 4, code: "4", name: "Abid Ali Gujjar", phone: "0345-9876543", type: "Customer", area: "Faisalabad", balance: 75000 },
    { id: 5, code: "5", name: "Syngenta Pakistan", phone: "042-35761111", type: "Vendor", area: "Lahore", balance: -85000 },
    { id: 6, code: "6", name: "Engro Fertilizers", phone: "021-35297501", type: "Vendor", area: "Karachi", balance: -125000 },
    { id: 7, code: "7", name: "FMC Corporation", phone: "042-35890234", type: "Vendor", area: "Lahore", balance: -42000 },
    { id: 8, code: "8", name: "Adeel Ahmad Chadar", phone: "0334-4455667", type: "Customer", area: "Jhang", balance: 15000 },
];

export default function PartiesPage() {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const filtered = parties.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

    const handleExport = () => {
        const columns = ["Code", "Name", "Phone", "Type", "Area", "Balance"];
        const data = filtered.map(item => [
            item.code,
            item.name,
            item.phone,
            item.type,
            item.area,
            item.balance.toLocaleString()
        ]);

        exportToPDF({
            title: "Parties List Report",
            columns,
            data,
            filename: "parties_list"
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Users size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Parties</h1>
                        <p className="text-gray-500 text-sm">Manage customers and vendors</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 px-4 py-3 bg-white text-emerald-600 border border-emerald-100 rounded-xl font-medium hover:bg-emerald-50 transition-all"
                    >
                        <Download size={18} />
                        Export
                    </button>
                    <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                        <Plus size={18} />
                        New
                    </button>
                    <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200">Settings</button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-500">Party Search By Name & Number</span>
                    <div className="flex-1 relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl" placeholder="Search..." />
                    </div>
                    <span className="text-sm text-gray-500">Showing 1 to {filtered.length} of {parties.length} entries</span>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    {/* Mobile Card View */}
                    <div className="block sm:hidden divide-y divide-gray-100">
                        {filtered.map((party) => (
                            <div key={party.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center font-bold text-emerald-600">
                                            {party.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-800 text-sm">{party.name}</h3>
                                            <p className="text-xs text-gray-500">{party.phone}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${party.type === "Customer" ? "bg-emerald-100 text-emerald-700" : "bg-purple-100 text-purple-700"}`}>
                                        {party.type}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pl-13 mb-3">
                                    <p className="text-xs text-gray-500">{party.area}</p>
                                    <span className={`text-sm font-bold ${party.balance >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                                        Rs. {party.balance.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-gray-50">
                                    <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><Eye size={16} /></button>
                                    <button className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={16} /></button>
                                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tablet/Desktop Table View */}
                    <table className="w-full hidden sm:table">
                        <thead className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                            <tr>
                                <th className="text-left px-4 py-4 text-sm font-medium">#Sr</th>
                                <th className="text-left px-4 py-4 text-sm font-medium">Code</th>
                                <th className="text-left px-4 py-4 text-sm font-medium">Name</th>
                                <th className="text-left px-4 py-4 text-sm font-medium">Number</th>
                                <th className="text-left px-4 py-4 text-sm font-medium">Party Type</th>
                                <th className="text-left px-4 py-4 text-sm font-medium">Area</th>
                                <th className="text-right px-4 py-4 text-sm font-medium">Amount</th>
                                <th className="text-center px-4 py-4 text-sm font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filtered.map((party, index) => (
                                <tr key={party.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 text-sm text-gray-600">{index + 1}</td>
                                    <td className="px-4 py-4 text-sm text-emerald-600 font-medium">{party.code}</td>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700">{party.name}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{party.phone}</td>
                                    <td className="px-4 py-4 text-sm"><span className={`px-2 py-1 rounded-lg text-xs font-medium ${party.type === "Customer" ? "bg-emerald-100 text-emerald-700" : "bg-purple-100 text-purple-700"}`}>{party.type}</span></td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{party.area}</td>
                                    <td className={`px-4 py-4 text-sm text-right font-bold ${party.balance >= 0 ? "text-emerald-600" : "text-red-600"}`}>{party.balance.toLocaleString()}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center justify-center gap-1">
                                            <button className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-lg"><Eye size={16} /></button>
                                            <button className="p-1.5 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={16} /></button>
                                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Party</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Party name" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Phone</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="03XX-XXXXXXX" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Type</label><select className="w-full px-4 py-3 border border-gray-200 rounded-xl"><option>Customer</option><option>Vendor</option></select></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Area</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Area" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
