"use client";

import { useState } from "react";
import { Building2, Plus, Edit2, Trash2 } from "lucide-react";

const branches = [
    { id: 1, name: "Main Branch", code: "MB-001", address: "Main Grain Market, Mandi Bahauddin", phone: "047-5221234", isActive: true },
    { id: 2, name: "Gujrat Branch", code: "GB-002", address: "Railway Road, Gujrat", phone: "053-3521111", isActive: true },
    { id: 3, name: "Lahore Warehouse", code: "LW-003", address: "Data Darbar Road, Lahore", phone: "042-37891234", isActive: false },
];

export default function BranchesPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Building2 size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Branch Management</h1>
                        <p className="text-gray-500 text-sm">Manage business branches</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add Branch
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {branches.map((branch) => (
                    <div key={branch.id} className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all ${!branch.isActive ? "opacity-60" : ""}`}>
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Building2 size={24} className="text-blue-600" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${branch.isActive ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>{branch.isActive ? "Active" : "Inactive"}</span>
                                <button className="p-1.5 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={14} /></button>
                                <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mt-4">{branch.name}</h3>
                        <p className="text-sm text-blue-600 font-medium">{branch.code}</p>
                        <p className="text-sm text-gray-500 mt-2">{branch.address}</p>
                        <p className="text-sm text-gray-500">{branch.phone}</p>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Branch</h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm text-gray-600 mb-2">Branch Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Branch name" /></div>
                                <div><label className="block text-sm text-gray-600 mb-2">Branch Code</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. MB-001" /></div>
                            </div>
                            <div><label className="block text-sm text-gray-600 mb-2">Address</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Full address" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Phone</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Phone number" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
