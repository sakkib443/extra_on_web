"use client";
import { useState } from "react";
import { CreditCard, Download, Receipt, Plus, Check, Clock, Star, Zap, Crown } from "lucide-react";

const billingHistory = [
    { id: "INV-2025-001", date: "2025-12-01", amount: 49, status: "Paid", description: "Avada Theme" },
    { id: "INV-2025-002", date: "2025-11-15", amount: 39, status: "Paid", description: "WoodMart Theme" },
    { id: "INV-2025-003", date: "2025-11-01", amount: 25, status: "Paid", description: "ReactPro Dashboard" },
    { id: "INV-2025-004", date: "2025-10-15", amount: 45, status: "Paid", description: "EduMax Theme" },
];

const membershipPlans = [
    {
        name: "Free",
        price: 0,
        period: "forever",
        features: ["Browse templates", "Community support", "5 downloads/month"],
        current: false,
        icon: Star
    },
    {
        name: "Premium",
        price: 29,
        period: "month",
        features: ["Unlimited downloads", "Priority support", "Early access", "No watermarks", "Commercial license"],
        current: true,
        popular: true,
        icon: Zap
    },
    {
        name: "Business",
        price: 79,
        period: "month",
        features: ["Everything in Premium", "Team licenses (5 users)", "Dedicated support", "Custom requests", "White-label rights"],
        current: false,
        icon: Crown
    }
];

export default function UserBillingPage() {
    const totalSpent = billingHistory.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Billing</h1>
                    <p className="text-gray-500 mt-1">Manage your subscription and payments</p>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" />
                    Add Payment Method
                </button>
            </div>

            {/* Current Plan Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-3xl p-8 text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold rounded-full">PREMIUM</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Premium Membership</h2>
                        <p className="text-white/80">Unlimited downloads, priority support, and more!</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-baseline gap-1 justify-end">
                            <span className="text-4xl font-bold">$29</span>
                            <span className="text-white/70">/month</span>
                        </div>
                        <p className="text-white/70 text-sm mt-1">Next billing: Jan 1, 2026</p>
                        <button className="mt-3 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium hover:bg-white/30 transition-colors">
                            Manage Subscription
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <p className="text-3xl font-bold text-gray-900">${totalSpent}</p>
                    <p className="text-sm text-gray-500">Total Spent</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <p className="text-3xl font-bold text-gray-900">{billingHistory.length}</p>
                    <p className="text-sm text-gray-500">Transactions</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <p className="text-3xl font-bold text-green-600">$120</p>
                    <p className="text-sm text-gray-500">Saved with Premium</p>
                </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-9 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                            <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">•••• •••• •••• 4242</p>
                            <p className="text-sm text-gray-500">Expires 12/2026</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Default</span>
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">Edit</button>
                    </div>
                </div>
            </div>

            {/* Membership Plans */}
            <div>
                <h3 className="font-bold text-gray-900 mb-4">Available Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {membershipPlans.map((plan) => {
                        const IconComponent = plan.icon;
                        return (
                            <div
                                key={plan.name}
                                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 transition-all hover:shadow-xl ${plan.current ? "border-purple-500 shadow-purple-500/20" : "border-gray-100"
                                    }`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        Most Popular
                                    </span>
                                )}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.current
                                            ? "bg-gradient-to-br from-violet-500 to-fuchsia-500"
                                            : "bg-gray-100"
                                        }`}>
                                        <IconComponent className={`w-6 h-6 ${plan.current ? "text-white" : "text-gray-500"}`} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{plan.name}</h4>
                                        {plan.current && <span className="text-xs text-purple-600 font-medium">Current Plan</span>}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                                    <span className="text-gray-500">/{plan.period}</span>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-xl text-sm font-medium transition-all ${plan.current
                                            ? "bg-gray-100 text-gray-500 cursor-default"
                                            : "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:opacity-90"
                                        }`}
                                    disabled={plan.current}
                                >
                                    {plan.current ? "Current Plan" : plan.price === 0 ? "Downgrade" : "Upgrade"}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Billing History */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Billing History</h3>
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">Download All</button>
                </div>
                <div className="divide-y divide-gray-50">
                    {billingHistory.map((item) => (
                        <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl flex items-center justify-center">
                                    <Receipt className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{item.description}</p>
                                    <p className="text-sm text-gray-500">{item.id}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <p className="font-semibold text-gray-900">${item.amount}</p>
                                    <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
                                </div>
                                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                                    <Check className="w-3 h-3" />
                                    {item.status}
                                </span>
                                <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
