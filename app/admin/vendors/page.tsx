"use client";

import { useState } from "react";
import { Store, Plus, Search, Edit2, Trash2, Phone } from "lucide-react";

interface Vendor {
    id: number;
    name: string;
    company: string;
    phone: string;
    email: string;
    balance: number;
}

const vendors: Vendor[] = [
    { id: 1, name: "Syngenta Pakistan", company: "Syngenta Pakistan Ltd", phone: "042-35761111", email: "info@syngenta.pk", balance: -85000 },
    { id: 2, name: "FMC Corporation", company: "FMC Pakistan", phone: "042-35890234", email: "sales@fmc.pk", balance: -42000 },
    { id: 3, name: "Engro Fertilizers", company: "Engro Corp", phone: "021-35297501", email: "orders@engro.com", balance: -125000 },
    { id: 4, name: "ICI Pakistan", company: "ICI Pakistan Ltd", phone: "042-36313456", email: "ici@ici.com.pk", balance: 0 },
    { id: 5, name: "Kanzo AG", company: "Kanzo Agricultural", phone: "042-35421234", email: "kanzo@kanzoag.pk", balance: -28500 },
];

export default function VendorsPage() {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Store size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Vendors</h1>
                        <p className="text-gray-500 text-sm">Manage your suppliers</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add Vendor
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search vendors..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 text-gray-700" />
                </div>
            </div>

            {/* Vendors Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Vendor Name</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Company</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Phone</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Email</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Balance (PKR)</th>
                                <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vendors.map((vendor, index) => (
                                <tr key={vendor.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{vendor.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{vendor.company}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-1"><Phone size={14} /> {vendor.phone}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{vendor.email}</td>
                                    <td className={`px-6 py-4 text-sm text-right font-bold ${vendor.balance < 0 ? 'text-red-600' : 'text-gray-600'}`}>{vendor.balance.toLocaleString()}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
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

            {/* Add Vendor Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Vendor</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Vendor Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Vendor name" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Company Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Company name" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm text-gray-600 mb-2">Phone</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="042-12345678" /></div>
                                <div><label className="block text-sm text-gray-600 mb-2">Email</label><input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="email@company.com" /></div>
                            </div>
                            <div><label className="block text-sm text-gray-600 mb-2">Opening Balance</label><input type="number" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-medium">Save Vendor</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
