"use client";

import { useState } from "react";
import { Building2, Plus, Edit2, Trash2, CreditCard } from "lucide-react";

interface Bank {
    id: number;
    bankName: string;
    accountTitle: string;
    accountNumber: string;
    balance: number;
}

const banks: Bank[] = [
    { id: 1, bankName: "HBL", accountTitle: "AD & Sons Agri Traders", accountNumber: "0012-95678901-03", balance: 185000 },
    { id: 2, bankName: "Meezan Bank", accountTitle: "AD Sons Agricultural", accountNumber: "0310-28765432-01", balance: 92500 },
    { id: 3, bankName: "Allied Bank", accountTitle: "AD Sons Trading", accountNumber: "0095-41223344-01", balance: 45000 },
    { id: 4, bankName: "Bank Alfalah", accountTitle: "AD Agriculture", accountNumber: "0188-32567890-03", balance: 28500 },
];

export default function BanksPage() {
    const [showModal, setShowModal] = useState(false);
    const totalBalance = banks.reduce((sum, b) => sum + b.balance, 0);

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Building2 size={24} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Banks</h1>
                        <p className="text-gray-500 text-sm">Manage bank accounts</p>
                    </div>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Plus size={18} />
                    Add Bank
                </button>
            </div>

            {/* Total Balance Card */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
                <p className="text-cyan-100 mb-2">Total Bank Balance</p>
                <p className="text-4xl font-bold">Rs. {totalBalance.toLocaleString()}</p>
            </div>

            {/* Banks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {banks.map((bank) => (
                    <div key={bank.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between">
                            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                                <CreditCard size={24} className="text-cyan-600" />
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 text-amber-500 hover:bg-amber-50 rounded-lg"><Edit2 size={16} /></button>
                                <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={16} /></button>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mt-4">{bank.bankName}</h3>
                        <p className="text-sm text-gray-500 mt-1">{bank.accountTitle}</p>
                        <p className="text-xs text-gray-400 mt-1">{bank.accountNumber}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-2xl font-bold text-cyan-600">Rs. {bank.balance.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Bank Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Bank</h2>
                        <div className="space-y-4">
                            <div><label className="block text-sm text-gray-600 mb-2">Bank Name</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Bank name" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Account Title</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="Account title" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Account Number</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0000-00000000-00" /></div>
                            <div><label className="block text-sm text-gray-600 mb-2">Opening Balance</label><input type="number" className="w-full px-4 py-3 border border-gray-200 rounded-xl" placeholder="0" /></div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200">Cancel</button>
                            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium">Save Bank</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
