"use client";
import { useState } from "react";
import { User, Bell, Shield, Globe, Palette, Mail, Key, Save, Camera, Moon, Sun, Smartphone, CreditCard } from "lucide-react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        sms: false,
        marketing: true
    });

    const tabs = [
        { id: "profile", name: "Profile", icon: User },
        { id: "notifications", name: "Notifications", icon: Bell },
        { id: "security", name: "Security", icon: Shield },
        { id: "billing", name: "Billing", icon: CreditCard },
        { id: "appearance", name: "Appearance", icon: Palette },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-500 mt-1">Manage your account settings</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Tabs */}
                <div className="lg:w-64 flex-shrink-0">
                    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                        <nav className="space-y-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id
                                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                                            : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <tab.icon className="w-5 h-5" />
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    {/* Profile Tab */}
                    {activeTab === "profile" && (
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Profile Information</h3>

                            {/* Avatar */}
                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                                        A
                                    </div>
                                    <button className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Admin User</h4>
                                    <p className="text-sm text-gray-500">admin@extraweb.com</p>
                                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">Change Photo</button>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Admin"
                                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue="User"
                                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        defaultValue="admin@extraweb.com"
                                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        defaultValue="+1 234 567 890"
                                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                                    <textarea
                                        rows="4"
                                        defaultValue="System administrator for ExtraWeb platform."
                                        className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                                <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Notifications Tab */}
                    {activeTab === "notifications" && (
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Notification Preferences</h3>

                            <div className="space-y-4">
                                {[
                                    { key: "email", label: "Email Notifications", desc: "Receive notifications via email", icon: Mail },
                                    { key: "push", label: "Push Notifications", desc: "Receive push notifications", icon: Bell },
                                    { key: "sms", label: "SMS Notifications", desc: "Receive notifications via SMS", icon: Smartphone },
                                    { key: "marketing", label: "Marketing Emails", desc: "Receive marketing and promotional emails", icon: Globe },
                                ].map((item) => (
                                    <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                <item.icon className="w-5 h-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{item.label}</p>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                            className={`relative w-12 h-6 rounded-full transition-colors ${notifications[item.key] ? "bg-blue-500" : "bg-gray-300"
                                                }`}
                                        >
                                            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform shadow ${notifications[item.key] ? "left-7" : "left-1"
                                                }`} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === "security" && (
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Change Password</h3>
                                <div className="space-y-4 max-w-md">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                                        <Key className="w-4 h-4" />
                                        Update Password
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Two-Factor Authentication</h3>
                                <p className="text-sm text-gray-500 mb-4">Add an extra layer of security to your account.</p>
                                <button className="px-4 py-2 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition-colors">
                                    Enable 2FA
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Billing Tab */}
                    {activeTab === "billing" && (
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Billing & Subscription</h3>

                            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-white/80">Current Plan</p>
                                        <p className="text-2xl font-bold">Pro Plan</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-white/80">Monthly</p>
                                        <p className="text-2xl font-bold">$49</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="w-5 h-5 text-gray-600" />
                                        <div>
                                            <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                                            <p className="text-sm text-gray-500">Expires 12/2026</p>
                                        </div>
                                    </div>
                                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <button className="text-sm text-red-600 hover:text-red-700 font-medium">Cancel Subscription</button>
                            </div>
                        </div>
                    )}

                    {/* Appearance Tab */}
                    {activeTab === "appearance" && (
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Appearance</h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setDarkMode(false)}
                                            className={`flex-1 p-4 rounded-xl border-2 transition-all ${!darkMode ? "border-blue-500 bg-blue-50" : "border-gray-200"
                                                }`}
                                        >
                                            <Sun className="w-6 h-6 mx-auto mb-2 text-amber-500" />
                                            <p className="font-medium text-gray-900">Light</p>
                                        </button>
                                        <button
                                            onClick={() => setDarkMode(true)}
                                            className={`flex-1 p-4 rounded-xl border-2 transition-all ${darkMode ? "border-blue-500 bg-blue-50" : "border-gray-200"
                                                }`}
                                        >
                                            <Moon className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                                            <p className="font-medium text-gray-900">Dark</p>
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Accent Color</label>
                                    <div className="flex gap-3">
                                        {["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#EC4899"].map((color) => (
                                            <button
                                                key={color}
                                                className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
