"use client";

import { useState } from "react";
import { Users, Plus, Search, Edit2, Trash2, Phone, Mail } from "lucide-react";

interface Customer {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    balance: number;
}

const customers: Customer[] = [
    { id: 1, name: "A.D Commission Shop", phone: "0302-9594500", email: "adcommission@email.com", address: "Mandi Bahauddin", balance: 45000 },
    { id: 2, name: "Aamir Sohail", phone: "0321-6543210", email: "aamir.sohail@email.com", address: "Gujrat", balance: 12500 },
    { id: 3, name: "Aamir Syngenta", phone: "0333-1234567", email: "aamirsyngenta@email.com", address: "Lahore", balance: -8000 },
    { id: 4, name: "Abid Ali Gujjar", phone: "0345-9876543", email: "abidgujjar@email.com", address: "Faisalabad", balance: 75000 },
    { id: 5, name: "Abid Hussain", phone: "0300-1122334", email: "abidhussain@email.com", address: "Multan", balance: 22000 },
    { id: 6, name: "Abuzar Commission Shop", phone: "0312-5566778", email: "abuzar@email.com", address: "Sargodha", balance: 38500 },
    { id: 7, name: "Adeel Ahmad Chadar", phone: "0334-4455667", email: "adeelahmad@email.com", address: "Jhang", balance: 15000 },
    { id: 8, name: "Adil Hussain", phone: "0323-7788990", email: "adilhussain@email.com", address: "Sahiwal", balance: 0 },
];

export default function CustomersPage() {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const filteredCustomers = customers.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.phone.includes(search)
    );

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Users size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
                        <p className="text-gray-500 text-sm">Manage your customers</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add Customer
                </button>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or phone..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                </div>
            </div>

            {/* Customers Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Name</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Phone</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Email</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Address</th>
                                <th className="text-right px-6 py-4 text-sm font-medium">Balance (PKR)</th>
                                <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredCustomers.map((customer, index) => (
                                <tr key={customer.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{customer.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-1"><Phone size={14} /> {customer.phone}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{customer.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{customer.address}</td>
                                    <td className={`px-6 py-4 text-sm text-right font-bold ${customer.balance > 0 ? 'text-emerald-600' : customer.balance < 0 ? 'text-red-600' : 'text-gray-600'}`}>{customer.balance.toLocaleString()}</td>
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

            {/* Add Customer Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Customer</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Customer Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Full name" /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm text-gray-600 mb-2">Phone</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0300-1234567" /></div>
                                <div><label className="block text-sm text-gray-600 mb-2">Email</label><input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="email@example.com" /></div>
                            </div>
                            <div><label className="block text-sm text-gray-600 mb-2">Address</label><textarea rows={2} className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Address" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Opening Balance</label><input type="number" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium">Save Customer</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
