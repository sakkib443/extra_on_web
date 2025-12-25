"use client";
import { useState } from "react";
import { CreditCard, Download, Receipt, Plus, Check, Clock, AlertCircle, ArrowUpRight } from "lucide-react";

const invoices = [
    { id: "INV-001", date: "2025-12-01", amount: 49, status: "Paid", plan: "Pro Plan" },
    { id: "INV-002", date: "2025-11-01", amount: 49, status: "Paid", plan: "Pro Plan" },
    { id: "INV-003", date: "2025-10-01", amount: 49, status: "Paid", plan: "Pro Plan" },
    { id: "INV-004", date: "2025-09-01", amount: 29, status: "Paid", plan: "Basic Plan" },
    { id: "INV-005", date: "2025-08-01", amount: 29, status: "Paid", plan: "Basic Plan" },
];

const plans = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: ["Up to 10 websites", "Basic analytics", "Email support", "5GB storage"],
        current: false
    },
    {
        name: "Pro",
        price: 49,
        period: "month",
        features: ["Unlimited websites", "Advanced analytics", "Priority support", "50GB storage", "API access"],
        current: true,
        popular: true
    },
    {
        name: "Enterprise",
        price: 99,
        period: "month",
        features: ["Everything in Pro", "Custom integrations", "Dedicated support", "Unlimited storage", "SLA guarantee"],
        current: false
    }
];

export default function BillingPage() {
    const [selectedPlan, setSelectedPlan] = useState("Pro");

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Billing</h1>
                    <p className="text-gray-500 mt-1">Manage your subscription and payments</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" />
                    Add Payment Method
                </button>
            </div>

            {/* Current Plan */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <p className="text-white/70 text-sm">Current Plan</p>
                        <h2 className="text-3xl font-bold mt-1">Pro Plan</h2>
                        <p className="text-white/80 mt-2">Your next billing date is January 1, 2026</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold">$49</span>
                            <span className="text-white/70">/month</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
                            Change Plan
                        </button>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                            <p className="text-sm text-gray-500">Expires 12/2026</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Default</span>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                </div>
            </div>

            {/* Plans */}
            <div>
                <h3 className="font-semibold text-gray-900 mb-4">Available Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative bg-white rounded-2xl p-6 shadow-sm border-2 transition-all ${plan.current ? "border-blue-500" : "border-gray-100 hover:border-gray-200"
                                }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full">
                                    Most Popular
                                </span>
                            )}
                            <div className="text-center mb-6">
                                <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                                    <span className="text-gray-500">/{plan.period}</span>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full py-3 rounded-xl text-sm font-medium transition-colors ${plan.current
                                        ? "bg-gray-100 text-gray-500 cursor-default"
                                        : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
                                    }`}
                                disabled={plan.current}
                            >
                                {plan.current ? "Current Plan" : "Upgrade"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Billing History */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Billing History</h3>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            Download All
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Invoice</th>
                                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Date</th>
                                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Plan</th>
                                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Amount</th>
                                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                                <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <Receipt className="w-4 h-4 text-gray-400" />
                                            <span className="font-medium text-gray-900">{invoice.id}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-600">
                                        {new Date(invoice.date).toLocaleDateString()}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-600">{invoice.plan}</td>
                                    <td className="py-4 px-6 font-medium text-gray-900">${invoice.amount}</td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                            <Check className="w-3 h-3" />
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
