"use client";

import { useState } from "react";
import { Building, Plus, Edit2, Trash2 } from "lucide-react";

interface Company {
    id: number;
    name: string;
    description: string;
    productCount: number;
}

const companies: Company[] = [
    { id: 1, name: "Syngenta", description: "Swiss-based agrochemical company", productCount: 28 },
    { id: 2, name: "FMC Corporation", description: "American chemical manufacturing company", productCount: 15 },
    { id: 3, name: "Engro", description: "Pakistani conglomerate - fertilizers", productCount: 22 },
    { id: 4, name: "ICI Pakistan", description: "Industrial chemicals and agrochemicals", productCount: 18 },
    { id: 5, name: "Kanzo AG", description: "Agricultural products manufacturer", productCount: 12 },
    { id: 6, name: "BASF", description: "German chemical company", productCount: 8 },
];

export default function CompanyPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                        <Building size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Company</h1>
                        <p className="text-gray-500 text-sm">Manage product manufacturers</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companies.map((company) => (
                    <div key={company.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                                <Building size={24} className="text-slate-600" />
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={16} /></button>
                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mt-4">{company.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{company.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-2xl font-bold text-slate-600">{company.productCount}</span>
                            <span className="text-gray-500 text-sm ml-2">Products</span>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Company</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Company Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Company name" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Description</label><textarea rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Company description..." /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-xl font-medium">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
