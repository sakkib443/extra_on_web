"use client";
import { useState } from "react";
import { FileText, Download, Calendar, TrendingUp, DollarSign, Users, Package, Filter, Eye } from "lucide-react";

const reportsData = [
    { id: 1, name: "Monthly Sales Report", type: "Sales", date: "2025-12-01", status: "Ready", size: "2.4 MB" },
    { id: 2, name: "User Analytics - Q4", type: "Analytics", date: "2025-12-15", status: "Ready", size: "1.8 MB" },
    { id: 3, name: "Revenue Summary 2025", type: "Financial", date: "2025-12-20", status: "Processing", size: "-" },
    { id: 4, name: "Website Performance", type: "Technical", date: "2025-12-22", status: "Ready", size: "3.2 MB" },
    { id: 5, name: "Customer Feedback Analysis", type: "Analytics", date: "2025-12-23", status: "Ready", size: "900 KB" },
];

const quickReports = [
    { id: 1, title: "Sales Report", description: "Sales performance overview", icon: TrendingUp, color: "from-blue-500 to-blue-600" },
    { id: 2, title: "Revenue Report", description: "Financial summary", icon: DollarSign, color: "from-green-500 to-green-600" },
    { id: 3, title: "User Report", description: "User activity analytics", icon: Users, color: "from-purple-500 to-purple-600" },
    { id: 4, title: "Product Report", description: "Inventory and products", icon: Package, color: "from-amber-500 to-amber-600" },
];

const typeColors = {
    Sales: "bg-blue-100 text-blue-700",
    Analytics: "bg-purple-100 text-purple-700",
    Financial: "bg-green-100 text-green-700",
    Technical: "bg-amber-100 text-amber-700"
};

const statusColors = {
    Ready: "bg-green-100 text-green-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700"
};

export default function ReportsPage() {
    const [reports] = useState(reportsData);
    const [selectedType, setSelectedType] = useState("all");

    const filteredReports = selectedType === "all"
        ? reports
        : reports.filter(r => r.type === selectedType);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Reports</h1>
                    <p className="text-gray-500 mt-1">Generate and download reports</p>
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                    <FileText className="w-4 h-4" />
                    Generate Report
                </button>
            </div>

            {/* Quick Reports */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickReports.map((report) => (
                    <div
                        key={report.id}
                        className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${report.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <report.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{report.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{report.description}</p>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                            Generate
                            <TrendingUp className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Filter */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Filter by type:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["all", "Sales", "Analytics", "Financial", "Technical"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${selectedType === type
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {type === "all" ? "All Reports" : type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reports Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Report Name</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Type</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Date</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Size</th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredReports.map((report) => (
                                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <FileText className="w-5 h-5 text-gray-500" />
                                            </div>
                                            <span className="font-medium text-gray-900">{report.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${typeColors[report.type]}`}>
                                            {report.type}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">{new Date(report.date).toLocaleDateString()}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${statusColors[report.status]}`}>
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-gray-600">{report.size}</td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                className={`p-2 rounded-lg transition-colors ${report.status === "Ready"
                                                        ? "text-gray-400 hover:text-green-600 hover:bg-green-50"
                                                        : "text-gray-300 cursor-not-allowed"
                                                    }`}
                                                disabled={report.status !== "Ready"}
                                            >
                                                <Download className="w-4 h-4" />
                                            </button>
                                        </div>
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
