"use client";

import { useState } from "react";
import { MapPin, Plus, Edit2, Trash2 } from "lucide-react";

const areas = [
    { id: 1, name: "Mandi Bahauddin", partyCount: 25 },
    { id: 2, name: "Gujrat", partyCount: 18 },
    { id: 3, name: "Lahore", partyCount: 45 },
    { id: 4, name: "Faisalabad", partyCount: 32 },
    { id: 5, name: "Multan", partyCount: 15 },
    { id: 6, name: "Karachi", partyCount: 28 },
    { id: 7, name: "Sargodha", partyCount: 12 },
    { id: 8, name: "Jhang", partyCount: 8 },
    { id: 9, name: "Sahiwal", partyCount: 10 },
];

export default function AreasPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Areas</h1>
                        <p className="text-gray-500 text-sm">Manage geographic areas</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {areas.map((area) => (
                    <div key={area.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                <MapPin size={20} className="text-blue-600" />
                            </div>
                            <div className="flex gap-1">
                                <button className="p-1.5 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={14} /></button>
                                <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={14} /></button>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mt-3">{area.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{area.partyCount} parties</p>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Area</h2>
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Area Name</label>
                            <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="e.g. Lahore" />
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
