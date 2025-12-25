"use client";
import { useState } from "react";
import { Shield, Key, Smartphone, Monitor, Globe, Clock, AlertTriangle, Check, Eye, EyeOff, LogOut } from "lucide-react";

const loginHistory = [
    { id: 1, device: "Windows PC", browser: "Chrome 120", location: "New York, USA", ip: "192.168.1.***", time: "Just now", current: true },
    { id: 2, device: "iPhone 15", browser: "Safari", location: "New York, USA", ip: "192.168.1.***", time: "2 hours ago", current: false },
    { id: 3, device: "MacBook Pro", browser: "Firefox 121", location: "Boston, USA", ip: "10.0.0.***", time: "Yesterday", current: false },
    { id: 4, device: "Android Phone", browser: "Chrome Mobile", location: "New York, USA", ip: "192.168.1.***", time: "3 days ago", current: false },
];

export default function SecurityPage() {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Security</h1>
                <p className="text-gray-500 mt-1">Manage your account security settings</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Change Password */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Key className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Change Password</h3>
                            <p className="text-sm text-gray-500">Update your password regularly</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                            <div className="relative">
                                <input
                                    type={showCurrentPassword ? "text" : "password"}
                                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                    placeholder="Enter current password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? "text" : "password"}
                                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                    placeholder="Enter new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                    placeholder="Confirm new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                            Update Password
                        </button>
                    </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Two-Factor Authentication</h3>
                            <p className="text-sm text-gray-500">Add extra security to your account</p>
                        </div>
                    </div>

                    <div className={`p-4 rounded-xl mb-4 ${twoFactorEnabled ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}>
                        <div className="flex items-center gap-3">
                            {twoFactorEnabled ? (
                                <Check className="w-5 h-5 text-green-600" />
                            ) : (
                                <AlertTriangle className="w-5 h-5 text-amber-600" />
                            )}
                            <div>
                                <p className={`font-medium ${twoFactorEnabled ? "text-green-700" : "text-amber-700"}`}>
                                    {twoFactorEnabled ? "2FA is enabled" : "2FA is not enabled"}
                                </p>
                                <p className={`text-sm ${twoFactorEnabled ? "text-green-600" : "text-amber-600"}`}>
                                    {twoFactorEnabled ? "Your account is protected" : "Enable 2FA for better security"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${twoFactorEnabled
                                ? "bg-red-100 text-red-700 hover:bg-red-200"
                                : "bg-green-500 text-white hover:bg-green-600"
                            }`}
                    >
                        {twoFactorEnabled ? "Disable 2FA" : "Enable 2FA"}
                    </button>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <h4 className="font-medium text-gray-900 mb-3">Recovery Options</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                <span className="text-sm text-gray-600">Recovery Email</span>
                                <span className="text-sm font-medium text-gray-900">admin@backup.com</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                <span className="text-sm text-gray-600">Recovery Phone</span>
                                <span className="text-sm font-medium text-gray-900">+1 *** *** 7890</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login History */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                <Clock className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Login History</h3>
                                <p className="text-sm text-gray-500">Recent login activity on your account</p>
                            </div>
                        </div>
                        <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                            Log out all devices
                        </button>
                    </div>
                </div>

                <div className="divide-y divide-gray-50">
                    {loginHistory.map((session) => (
                        <div key={session.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                                    {session.device.includes("iPhone") || session.device.includes("Android") ? (
                                        <Smartphone className="w-5 h-5 text-gray-600" />
                                    ) : (
                                        <Monitor className="w-5 h-5 text-gray-600" />
                                    )}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-medium text-gray-900">{session.device}</p>
                                        {session.current && (
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {session.browser} • {session.location}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">{session.time}</p>
                                <p className="text-xs text-gray-400">{session.ip}</p>
                            </div>
                            {!session.current && (
                                <button className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                    <LogOut className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
