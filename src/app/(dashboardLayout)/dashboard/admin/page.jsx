"use client";
import { useState, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import {
    Package,
    Users,
    DollarSign,
    Star,
    ArrowUpRight,
    ArrowDownRight,
} from "lucide-react";

// Sample data for charts
const revenueData = [
    { name: "Jan", revenue: 4000, sales: 24 },
    { name: "Feb", revenue: 3000, sales: 18 },
    { name: "Mar", revenue: 5000, sales: 32 },
    { name: "Apr", revenue: 4500, sales: 28 },
    { name: "May", revenue: 6000, sales: 40 },
    { name: "Jun", revenue: 5500, sales: 35 },
    { name: "Jul", revenue: 7000, sales: 45 },
    { name: "Aug", revenue: 6500, sales: 42 },
    { name: "Sep", revenue: 8000, sales: 52 },
    { name: "Oct", revenue: 7500, sales: 48 },
    { name: "Nov", revenue: 9000, sales: 58 },
    { name: "Dec", revenue: 8500, sales: 55 },
];

const platformData = [
    { name: "WordPress", value: 45, color: "#66B3FF" },
    { name: "React", value: 25, color: "#A777E3" },
    { name: "MERN", value: 15, color: "#10B981" },
    { name: "PHP", value: 15, color: "#F59E0B" },
];

const recentSales = [
    { id: 1, website: "Avada Theme", buyer: "John Doe", amount: 49, date: "2025-12-24", status: "Completed" },
    { id: 2, website: "WoodMart Theme", buyer: "Jane Smith", amount: 39, date: "2025-12-23", status: "Completed" },
    { id: 3, website: "ReactPro Dashboard", buyer: "Mike Johnson", amount: 25, date: "2025-12-23", status: "Pending" },
    { id: 4, website: "NextCommerce", buyer: "Sarah Wilson", amount: 59, date: "2025-12-22", status: "Completed" },
    { id: 5, website: "EduMax LMS", buyer: "David Brown", amount: 45, date: "2025-12-22", status: "Completed" },
];

const topWebsites = [
    { id: 1, title: "Avada Theme", sales: 1039000, rating: 4.8, price: 49 },
    { id: 2, title: "MagPlus Theme", sales: 434800, rating: 4.6, price: 45 },
    { id: 3, title: "WoodMart Theme", sales: 103200, rating: 4.9, price: 39 },
    { id: 4, title: "GeneralPress", sales: 98500, rating: 4.8, price: 40 },
    { id: 5, title: "EduMax LMS", sales: 72300, rating: 4.7, price: 45 },
];

// Stats Card Component
function StatsCard({ title, value, icon: Icon, trend, trendValue, color }) {
    const isPositive = trend === "up";
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1 font-poppins">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 font-outfit">{value}</h3>
                    <div className={`flex items-center mt-2 text-sm font-poppins ${isPositive ? "text-green-600" : "text-red-600"}`}>
                        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        <span className="font-medium">{trendValue}</span>
                        <span className="text-gray-500 ml-1">vs last month</span>
                    </div>
                </div>
                <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );
}

export default function AdminDashboard() {
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/websites.json");
                const data = await res.json();
                setWebsites(data);
            } catch (error) {
                console.error("Error fetching websites:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Calculate stats
    const totalWebsites = websites.length;
    const totalRevenue = websites.reduce((acc, w) => acc + (w.offerPrice || w.price), 0);
    const avgRating = websites.length > 0
        ? (websites.reduce((acc, w) => acc + w.rating, 0) / websites.length).toFixed(1)
        : 0;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">Dashboard Overview</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Welcome back! Here's what's happening with your store.</p>
                </div>
                <div className="flex items-center gap-3">
                    <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium font-poppins focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                        <option>This year</option>
                    </select>
                    <button className="px-4 py-2 bg-gradient-to-r from-primary to-secendery text-white rounded-xl text-sm font-medium font-outfit hover:opacity-90 transition-opacity">
                        Download Report
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <StatsCard
                    title="Total Websites"
                    value={totalWebsites}
                    icon={Package}
                    trend="up"
                    trendValue="12%"
                    color="bg-gradient-to-br from-primary to-primary/80"
                />
                <StatsCard
                    title="Total Revenue"
                    value={`$${(totalRevenue * 100).toLocaleString()}`}
                    icon={DollarSign}
                    trend="up"
                    trendValue="23%"
                    color="bg-gradient-to-br from-green-500 to-emerald-600"
                />
                <StatsCard
                    title="Active Users"
                    value="2,847"
                    icon={Users}
                    trend="up"
                    trendValue="8%"
                    color="bg-gradient-to-br from-secendery to-purple-600"
                />
                <StatsCard
                    title="Avg. Rating"
                    value={avgRating}
                    icon={Star}
                    trend="up"
                    trendValue="4%"
                    color="bg-gradient-to-br from-amber-500 to-orange-600"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-outfit">Revenue Overview</h3>
                            <p className="text-sm text-gray-500 font-poppins">Monthly revenue and sales</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm font-poppins">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary"></div>
                                <span className="text-gray-600">Revenue</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-secendery"></div>
                                <span className="text-gray-600">Sales</span>
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={280}>
                        <AreaChart data={revenueData}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#66B3FF" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#66B3FF" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#A777E3" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#A777E3" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                            <YAxis stroke="#9CA3AF" fontSize={12} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #E5E7EB",
                                    borderRadius: "12px",
                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#66B3FF"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorRevenue)"
                            />
                            <Area
                                type="monotone"
                                dataKey="sales"
                                stroke="#A777E3"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorSales)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Platform Distribution */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-outfit">Platform Distribution</h3>
                    <p className="text-sm text-gray-500 mb-4 font-poppins">Websites by platform</p>
                    <ResponsiveContainer width="100%" height={180}>
                        <PieChart>
                            <Pie
                                data={platformData}
                                cx="50%"
                                cy="50%"
                                innerRadius={45}
                                outerRadius={70}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {platformData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                        {platformData.map((platform) => (
                            <div key={platform.name} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: platform.color }}></div>
                                <span className="text-sm text-gray-600 truncate font-poppins">{platform.name}</span>
                                <span className="text-sm font-medium text-gray-900 ml-auto font-outfit">{platform.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                {/* Recent Sales */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-outfit">Recent Sales</h3>
                            <p className="text-sm text-gray-500 font-poppins">Latest transactions</p>
                        </div>
                        <button className="text-sm text-primary hover:text-secendery font-medium font-outfit">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-sm text-gray-500 border-b border-gray-100">
                                    <th className="pb-3 font-medium">Website</th>
                                    <th className="pb-3 font-medium">Buyer</th>
                                    <th className="pb-3 font-medium">Amount</th>
                                    <th className="pb-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {recentSales.map((sale) => (
                                    <tr key={sale.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="py-3 font-medium text-gray-900">{sale.website}</td>
                                        <td className="py-3 text-gray-600">{sale.buyer}</td>
                                        <td className="py-3 font-medium text-gray-900">${sale.amount}</td>
                                        <td className="py-3">
                                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${sale.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}>
                                                {sale.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Websites */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-outfit">Top Websites</h3>
                            <p className="text-sm text-gray-500 font-poppins">Best performing templates</p>
                        </div>
                        <button className="text-sm text-primary hover:text-secendery font-medium font-outfit">View All</button>
                    </div>
                    <div className="space-y-3">
                        {topWebsites.map((website, index) => (
                            <div key={website.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm flex-shrink-0 ${index === 0 ? "bg-gradient-to-br from-yellow-400 to-yellow-500" :
                                    index === 1 ? "bg-gradient-to-br from-gray-400 to-gray-500" :
                                        index === 2 ? "bg-gradient-to-br from-amber-600 to-amber-700" :
                                            "bg-gradient-to-br from-gray-300 to-gray-400"
                                    }`}>
                                    {index + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-gray-900 truncate font-outfit">{website.title}</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 font-poppins">
                                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                        <span>{website.rating}</span>
                                        <span>•</span>
                                        <span>{(website.sales / 1000).toFixed(1)}K sales</span>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="font-bold text-gray-900 font-outfit">${website.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary via-secendery to-purple-500 rounded-2xl p-6 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold font-outfit">Need to add a new website?</h3>
                        <p className="text-white/80 mt-1 font-poppins">Upload new templates and start selling right away.</p>
                    </div>
                    <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-medium font-outfit hover:bg-gray-100 transition-colors whitespace-nowrap">
                        Add New Website
                    </button>
                </div>
            </div>
        </div>
    );
}
