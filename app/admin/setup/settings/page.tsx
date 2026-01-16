"use client";

import { useState } from "react";
import { Settings, Save, Bell, Printer, Globe, Database } from "lucide-react";

export default function SettingsPage() {
    const [invoicePrefix, setInvoicePrefix] = useState("INV-");
    const [purchasePrefix, setPurchasePrefix] = useState("PUR-");
    const [currency, setCurrency] = useState("PKR");
    const [dateFormat, setDateFormat] = useState("DD-MM-YYYY");
    const [lowStockAlert, setLowStockAlert] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [autoPrint, setAutoPrint] = useState(false);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                    <Settings size={24} className="text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                    <p className="text-gray-500 text-sm">Configure system settings</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Invoice Settings */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Database size={20} className="text-gray-500" />
                        <h2 className="text-lg font-semibold text-gray-800">Invoice Settings</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Sale Invoice Prefix</label>
                            <input type="text" value={invoicePrefix} onChange={(e) => setInvoicePrefix(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Purchase Invoice Prefix</label>
                            <input type="text" value={purchasePrefix} onChange={(e) => setPurchasePrefix(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700" />
                        </div>
                    </div>
                </div>

                {/* Regional Settings */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Globe size={20} className="text-gray-500" />
                        <h2 className="text-lg font-semibold text-gray-800">Regional Settings</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Currency</label>
                            <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700 bg-white">
                                <option value="PKR">PKR - Pakistani Rupee</option>
                                <option value="USD">USD - US Dollar</option>
                                <option value="EUR">EUR - Euro</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Date Format</label>
                            <select value={dateFormat} onChange={(e) => setDateFormat(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 text-gray-700 bg-white">
                                <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                                <option value="MM-DD-YYYY">MM-DD-YYYY</option>
                                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Bell size={20} className="text-gray-500" />
                        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Low Stock Alerts</p>
                                <p className="text-sm text-gray-500">Get notified when stock is low</p>
                            </div>
                            <button onClick={() => setLowStockAlert(!lowStockAlert)} className={`w-12 h-6 rounded-full transition-colors ${lowStockAlert ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                                <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${lowStockAlert ? 'translate-x-6' : 'translate-x-0.5'}`} />
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Email Notifications</p>
                                <p className="text-sm text-gray-500">Receive daily reports via email</p>
                            </div>
                            <button onClick={() => setEmailNotifications(!emailNotifications)} className={`w-12 h-6 rounded-full transition-colors ${emailNotifications ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                                <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Printer Settings */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Printer size={20} className="text-gray-500" />
                        <h2 className="text-lg font-semibold text-gray-800">Printer Settings</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Auto Print Invoice</p>
                                <p className="text-sm text-gray-500">Automatically print after saving</p>
                            </div>
                            <button onClick={() => setAutoPrint(!autoPrint)} className={`w-12 h-6 rounded-full transition-colors ${autoPrint ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                                <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${autoPrint ? 'translate-x-6' : 'translate-x-0.5'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                    <Save size={18} />
                    Save All Settings
                </button>
            </div>
        </div>
    );
}
