"use client";
import { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    Legend
} from "recharts";
import { TrendingUp, TrendingDown, Users, DollarSign, Eye, ShoppingCart, Calendar } from "lucide-react";

const visitorsData = [
    { name: "Mon", visitors: 4000, pageViews: 8000 },
    { name: "Tue", visitors: 3000, pageViews: 6200 },
    { name: "Wed", visitors: 5000, pageViews: 9400 },
    { name: "Thu", visitors: 4500, pageViews: 8800 },
    { name: "Fri", visitors: 6000, pageViews: 11200 },
    { name: "Sat", visitors: 5500, pageViews: 10000 },
    { name: "Sun", visitors: 3500, pageViews: 7000 },
];

const salesData = [
    { name: "Jan", sales: 4000, revenue: 8000 },
    { name: "Feb", sales: 3000, revenue: 6000 },
    { name: "Mar", sales: 5000, revenue: 10000 },
    { name: "Apr", sales: 4500, revenue: 9000 },
    { name: "May", sales: 6000, revenue: 12000 },
    { name: "Jun", sales: 5500, revenue: 11000 },
];

const deviceData = [
    { name: "Desktop", value: 55, color: "#3B82F6" },
    { name: "Mobile", value: 35, color: "#8B5CF6" },
    { name: "Tablet", value: 10, color: "#10B981" },
];

const countryData = [
    { name: "United States", visitors: 35000, percentage: 40 },
    { name: "United Kingdom", visitors: 15000, percentage: 17 },
    { name: "Germany", visitors: 12000, percentage: 14 },
    { name: "France", visitors: 8000, percentage: 9 },
    { name: "Canada", visitors: 7000, percentage: 8 },
    { name: "Others", visitors: 10000, percentage: 12 },
];

export default function AnalyticsPage() {
    const [timeRange, setTimeRange] = useState("7days");

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Analytics</h1>
                    <p className="text-gray-500 mt-1">Track your website performance</p>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="7days">Last 7 days</option>
                        <option value="30days">Last 30 days</option>
                        <option value="90days">Last 90 days</option>
                        <option value="year">This year</option>
                    </select>
                    <button className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                        Export Data
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Total Visitors</p>
                            <p className="text-2xl font-bold text-gray-900">87,234</p>
                            <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>+12.5%</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Page Views</p>
                            <p className="text-2xl font-bold text-gray-900">245,890</p>
                            <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>+8.3%</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Eye className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Conversions</p>
                            <p className="text-2xl font-bold text-gray-900">3,456</p>
                            <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                                <TrendingDown className="w-4 h-4" />
                                <span>-2.1%</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <ShoppingCart className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Revenue</p>
                            <p className="text-2xl font-bold text-gray-900">$156,789</p>
                            <div className="flex items-center gap-1 mt-1 text-green-600 text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>+15.8%</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-amber-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Visitors Chart */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Visitors & Page Views</h3>
                    <ResponsiveContainer width="100%" height={280}>
                        <AreaChart data={visitorsData}>
                            <defs>
                                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                            <YAxis stroke="#9CA3AF" fontSize={12} />
                            <Tooltip />
                            <Area type="monotone" dataKey="visitors" stroke="#3B82F6" fillOpacity={1} fill="url(#colorVisitors)" />
                            <Area type="monotone" dataKey="pageViews" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorPageViews)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Sales Chart */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Sales & Revenue</h3>
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                            <YAxis stroke="#9CA3AF" fontSize={12} />
                            <Tooltip />
                            <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Device Breakdown */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Device Breakdown</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={deviceData}
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {deviceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center gap-4 mt-2">
                        {deviceData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span className="text-sm text-gray-600">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Countries */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Top Countries</h3>
                    <div className="space-y-4">
                        {countryData.map((country, index) => (
                            <div key={country.name} className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-500 w-4">{index + 1}</span>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-medium text-gray-900">{country.name}</span>
                                        <span className="text-sm text-gray-500">{country.visitors.toLocaleString()} visitors</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                                            style={{ width: `${country.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-gray-900 w-12 text-right">{country.percentage}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
