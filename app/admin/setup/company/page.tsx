"use client";

import { useState } from "react";
import { Building, Save, Upload } from "lucide-react";

export default function CompanySetupPage() {
    const [companyName, setCompanyName] = useState("AD & Sons Agri Traders");
    const [phone, setPhone] = useState("047-5221234");
    const [email, setEmail] = useState("info@adagri.pk");
    const [address, setAddress] = useState("Main Grain Market, Mandi Bahauddin, Punjab, Pakistan");
    const [ntn, setNtn] = useState("5678901-4");

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                    <Building size={24} className="text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Company Setup</h1>
                    <p className="text-gray-500 text-sm">Configure your company details</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Company Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Company Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Company Name</label>
                                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Phone</label>
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-600 mb-2">Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">Address</label>
                                <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-2">NTN Number</label>
                                <input type="text" value={ntn} onChange={(e) => setNtn(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                                <Save size={18} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                {/* Logo Upload */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Company Logo</h2>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-xl mx-auto flex items-center justify-center">
                                <Building size={32} className="text-gray-400" />
                            </div>
                            <p className="text-gray-500 text-sm mt-4">Upload your company logo</p>
                            <button className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors mx-auto">
                                <Upload size={16} />
                                Upload Image
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
