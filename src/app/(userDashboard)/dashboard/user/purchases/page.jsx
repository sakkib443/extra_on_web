"use client";
import { useState, useEffect } from "react";
import { Download, Star, Clock, Search, Eye, RefreshCw, Package } from "lucide-react";

export default function PurchasesPage() {
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("recent");

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

    const filteredPurchases = websites
        .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === "recent") return new Date(b.lastUpdate) - new Date(a.lastUpdate);
            if (sortBy === "price") return (b.offerPrice || b.price) - (a.offerPrice || a.price);
            return 0;
        });

    const totalSpent = websites.reduce((sum, p) => sum + (p.offerPrice || p.price), 0);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Purchases</h1>
                    <p className="text-gray-500 mt-1">Manage and download your purchased templates</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium">
                        Total: ${totalSpent}
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <p className="text-3xl font-bold text-gray-900">{websites.length}</p>
                    <p className="text-sm text-gray-500">Total Items</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <p className="text-3xl font-bold text-gray-900">${totalSpent}</p>
                    <p className="text-sm text-gray-500">Total Spent</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <p className="text-3xl font-bold text-gray-900">{websites.length * 3}</p>
                    <p className="text-sm text-gray-500">Downloads</p>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search purchases..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-100/80 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-3 bg-gray-100/80 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="recent">Most Recent</option>
                        <option value="price">Highest Price</option>
                    </select>
                </div>
            </div>

            {/* Purchases List */}
            <div className="space-y-4">
                {filteredPurchases.map((item) => (
                    <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-56 h-40 md:h-auto bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className="hidden items-center justify-center w-full h-full">
                                    <Package className="w-12 h-12 text-purple-400" />
                                </div>
                            </div>
                            <div className="flex-1 p-5">
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">Licensed</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3">by {item.author}</p>

                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                <span>{item.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>Updated {new Date(item.lastUpdate).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <RefreshCw className="w-4 h-4" />
                                                <span>{item.platform}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Download className="w-4 h-4" />
                                                <span>{item.sales}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl font-bold text-gray-900">${item.offerPrice || item.price}</span>
                                        <div className="flex gap-2">
                                            <button className="p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                                                <Download className="w-4 h-4" />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
