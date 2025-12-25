"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Plus, Edit, Trash2, Globe, Monitor, Code, Star, Package, Eye, TrendingUp } from "lucide-react";

const platformIcons = {
    WordPress: Globe,
    React: Code,
    MERN: Monitor,
    PHP: Code,
    default: Globe
};

const platformColors = {
    WordPress: "from-primary to-primary/80",
    React: "from-cyan-500 to-teal-600",
    MERN: "from-green-500 to-emerald-600",
    PHP: "from-secendery to-purple-600",
    default: "from-gray-500 to-gray-600"
};

export default function PlatformsPage() {
    const [platforms, setPlatforms] = useState([]);
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [platRes, webRes] = await Promise.all([
                    fetch("/platform.json"),
                    fetch("/websites.json")
                ]);
                const platData = await platRes.json();
                const webData = await webRes.json();
                setPlatforms(platData);
                setWebsites(webData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const getPlatformStats = (platformName) => {
        const platformWebsites = websites.filter(w => w.platform === platformName);
        return {
            count: platformWebsites.length,
            totalSales: platformWebsites.reduce((acc, w) => {
                const salesNum = parseInt(w.sales?.replace(/[^0-9]/g, '')) || 0;
                return acc + salesNum;
            }, 0),
            avgRating: platformWebsites.length > 0
                ? (platformWebsites.reduce((acc, w) => acc + w.rating, 0) / platformWebsites.length).toFixed(1)
                : 0
        };
    };

    const filteredPlatforms = platforms.filter((plat) =>
        plat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPlatforms = platforms.length;
    const activePlatforms = platforms.filter(p => getPlatformStats(p.name).count > 0).length;
    const totalWebsites = websites.length;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">All Platforms</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Manage development platforms and frameworks</p>
                </div>
                <Link
                    href="/dashboard/admin/platforms/create"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secendery text-white rounded-2xl text-sm font-medium font-outfit hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                    <Plus className="w-5 h-5" />
                    Create Platform
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                            <Globe className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{totalPlatforms}</p>
                            <p className="text-sm text-gray-500 font-poppins">Total Platforms</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{activePlatforms}</p>
                            <p className="text-sm text-gray-500 font-poppins">Active Platforms</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-secendery to-purple-600 rounded-xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{totalWebsites}</p>
                            <p className="text-sm text-gray-500 font-poppins">Total Websites</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                <div className="relative max-w-lg">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search platforms..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 font-poppins">
                    Showing <span className="font-semibold text-gray-900">{filteredPlatforms.length}</span> of{" "}
                    <span className="font-semibold text-gray-900">{platforms.length}</span> platforms
                </p>
            </div>

            {/* Platforms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlatforms.map((platform) => {
                    const stats = getPlatformStats(platform.name);
                    const IconComponent = platformIcons[platform.name] || platformIcons.default;
                    const colorClass = platformColors[platform.name] || platformColors.default;

                    return (
                        <div
                            key={platform.id}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Card Header */}
                            <div className={`bg-gradient-to-r ${colorClass} p-6`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-xl font-outfit">{platform.name}</h3>
                                            <p className="text-white/70 text-sm font-poppins">{platform.description || "Platform"}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-xl transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <Link
                                            href={`/dashboard/admin/platforms/${platform.id}/edit`}
                                            className="p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-xl transition-colors"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </Link>
                                        <button className="p-2 text-white/70 hover:text-white hover:bg-white/20 rounded-xl transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="p-3 bg-gray-50 rounded-xl">
                                        <p className="text-2xl font-bold text-gray-900 font-outfit">{stats.count}</p>
                                        <p className="text-xs text-gray-500 mt-1 font-poppins">Websites</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-xl">
                                        <div className="flex items-center justify-center gap-1">
                                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                            <p className="text-2xl font-bold text-gray-900 font-outfit">{stats.avgRating}</p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 font-poppins">Avg Rating</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-xl">
                                        <p className="text-2xl font-bold text-gray-900 font-outfit">{(stats.totalSales / 1000).toFixed(0)}K</p>
                                        <p className="text-xs text-gray-500 mt-1 font-poppins">Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Empty State */}
            {filteredPlatforms.length === 0 && (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <Globe className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">No platforms found</h3>
                    <p className="text-gray-500 mb-6 font-poppins">Try a different search term</p>
                    <button
                        onClick={() => setSearchQuery("")}
                        className="px-6 py-3 bg-gradient-to-r from-primary to-secendery text-white rounded-xl font-medium hover:opacity-90 transition-opacity font-outfit"
                    >
                        Clear Search
                    </button>
                </div>
            )}
        </div>
    );
}
