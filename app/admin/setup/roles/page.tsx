"use client";

import { useState } from "react";
import { Shield, Plus, Edit2, Trash2, Check, X } from "lucide-react";

const roles = [
    { id: 1, name: "Administrator", description: "Full system access", users: 2, permissions: { dashboard: true, sale: true, purchase: true, inventory: true, expense: true, parties: true, banks: true, reports: true, config: true } },
    { id: 2, name: "Cashier", description: "Sales and basic operations", users: 3, permissions: { dashboard: true, sale: true, purchase: false, inventory: false, expense: false, parties: true, banks: false, reports: false, config: false } },
    { id: 3, name: "Inventory Manager", description: "Inventory and stock management", users: 1, permissions: { dashboard: true, sale: false, purchase: true, inventory: true, expense: false, parties: true, banks: false, reports: true, config: false } },
    { id: 4, name: "Accountant", description: "Financial operations", users: 1, permissions: { dashboard: true, sale: false, purchase: false, inventory: false, expense: true, parties: true, banks: true, reports: true, config: false } },
];

const permissionLabels = {
    dashboard: "Dashboard",
    sale: "Sale",
    purchase: "Purchase",
    inventory: "Inventory",
    expense: "Expense",
    parties: "Parties",
    banks: "Banks",
    reports: "Reports",
    config: "Configuration"
};

export default function RolesPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Shield size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Roles</h1>
                        <p className="text-gray-500 text-sm">Manage user roles and permissions</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add Role
                </button>
            </div>

            <div className="space-y-4">
                {roles.map((role) => (
                    <div key={role.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <Shield size={24} className="text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{role.name}</h3>
                                    <p className="text-sm text-gray-500">{role.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">{role.users} users</span>
                                <button className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={16} /></button>
                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {Object.entries(role.permissions).map(([key, value]) => (
                                <span key={key} className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 ${value ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-400"}`}>
                                    {value ? <Check size={12} /> : <X size={12} />}
                                    {permissionLabels[key as keyof typeof permissionLabels]}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Role</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Role Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. Manager" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Description</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Role description" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Permissions</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {Object.values(permissionLabels).map((label) => (
                                        <label key={label} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                            <input type="checkbox" className="rounded" />
                                            <span className="text-sm text-gray-700">{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
