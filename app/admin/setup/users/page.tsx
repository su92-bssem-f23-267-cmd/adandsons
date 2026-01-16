"use client";

import { useState } from "react";
import { Users, Plus, Edit2, Trash2, Shield, ShieldCheck, ShieldX } from "lucide-react";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    lastLogin: string;
}

const users: User[] = [
    { id: 1, name: "Muhammad Farooq", email: "mrfarooq030@gmail.com", role: "Admin", status: "Active", lastLogin: "2026-01-16" },
    { id: 2, name: "Nasir Shehzad", email: "mn716767@gmail.com", role: "Admin", status: "Active", lastLogin: "2026-01-15" },
    { id: 3, name: "Ali Hassan", email: "ali@example.com", role: "Cashier", status: "Active", lastLogin: "2026-01-16" },
];

export default function UsersPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Users size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
                        <p className="text-gray-500 text-sm">Manage system users</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add User
                </button>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                            <tr>
                                <th className="text-left px-6 py-4 text-sm font-medium">#</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Name</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Email</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Role</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Status</th>
                                <th className="text-left px-6 py-4 text-sm font-medium">Last Login</th>
                                <th className="text-center px-6 py-4 text-sm font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.map((user, index) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            {user.role === "Admin" ? <ShieldCheck size={16} className="text-blue-600" /> : <Shield size={16} className="text-gray-500" />}
                                        </div>
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${user.role === "Admin" ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}>{user.role}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${user.status === "Active" ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>{user.status}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{user.lastLogin}</td>
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

            {/* Add User Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New User</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Full Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="User name" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Email</label><input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="email@example.com" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Password</label><input type="password" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="********" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Role</label>
                                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white">
                                    <option>Admin</option>
                                    <option>Cashier</option>
                                    <option>Viewer</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium">Add User</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
