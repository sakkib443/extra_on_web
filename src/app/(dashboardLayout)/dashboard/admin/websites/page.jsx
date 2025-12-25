"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Plus, Edit, Trash2, Eye, Star, Grid3X3, List, Filter, SlidersHorizontal, TrendingUp, Package, DollarSign, Download } from "lucide-react";

export default function WebsitesPage() {
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("newest");
    const [viewMode, setViewMode] = useState("grid");

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

    const filteredWebsites = websites
        .filter((website) => {
            const matchesSearch = website.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                website.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPlatform = selectedPlatform === "all" || website.platform === selectedPlatform;
            const matchesCategory = selectedCategory === "all" || website.category === selectedCategory;
            return matchesSearch && matchesPlatform && matchesCategory;
        })
        .sort((a, b) => {
            if (sortBy === "newest") return new Date(b.lastUpdate) - new Date(a.lastUpdate);
            if (sortBy === "price-low") return (a.offerPrice || a.price) - (b.offerPrice || b.price);
            if (sortBy === "price-high") return (b.offerPrice || b.price) - (a.offerPrice || a.price);
            if (sortBy === "rating") return b.rating - a.rating;
            return 0;
        });

    const platforms = [...new Set(websites.map(w => w.platform))];
    const categories = [...new Set(websites.map(w => w.category))];

    // Stats calculations
    const totalRevenue = websites.reduce((acc, w) => acc + (w.offerPrice || w.price), 0);
    const avgRating = websites.length > 0 ? (websites.reduce((acc, w) => acc + w.rating, 0) / websites.length).toFixed(1) : 0;

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">Websites Management</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Manage all your website templates and themes</p>
                </div>
                <Link
                    href="/dashboard/admin/websites/create"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secendery text-white rounded-2xl text-sm font-medium font-outfit hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                    <Plus className="w-5 h-5" />
                    Add New Website
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{websites.length}</p>
                            <p className="text-sm text-gray-500 font-poppins">Total Websites</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">${totalRevenue}</p>
                            <p className="text-sm text-gray-500 font-poppins">Portfolio Value</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{avgRating}</p>
                            <p className="text-sm text-gray-500 font-poppins">Avg Rating</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-secendery to-purple-600 rounded-xl flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{platforms.length}</p>
                            <p className="text-sm text-gray-500 font-poppins">Platforms</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Filters */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search websites by name, author..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                        />
                    </div>

                    {/* Platform Filter */}
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <select
                            value={selectedPlatform}
                            onChange={(e) => setSelectedPlatform(e.target.value)}
                            className="px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="all">All Platforms</option>
                            {platforms.map(platform => (
                                <option key={platform} value={platform}>{platform}</option>
                            ))}
                        </select>
                    </div>

                    {/* Category Filter */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="all">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="newest">Newest First</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center bg-gray-100/80 rounded-xl p-1.5">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow text-primary" : "text-gray-400 hover:text-gray-600"}`}
                        >
                            <Grid3X3 className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2.5 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow text-primary" : "text-gray-400 hover:text-gray-600"}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Active Filters */}
                {(selectedPlatform !== "all" || selectedCategory !== "all" || searchQuery) && (
                    <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500 font-poppins">Active filters:</span>
                        {searchQuery && (
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                "{searchQuery}"
                                <button onClick={() => setSearchQuery("")} className="hover:text-primary/70">×</button>
                            </span>
                        )}
                        {selectedPlatform !== "all" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-secendery/10 text-secendery text-xs font-medium rounded-full">
                                {selectedPlatform}
                                <button onClick={() => setSelectedPlatform("all")} className="hover:text-secendery/70">×</button>
                            </span>
                        )}
                        {selectedCategory !== "all" && (
                            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                {selectedCategory}
                                <button onClick={() => setSelectedCategory("all")} className="hover:text-green-600">×</button>
                            </span>
                        )}
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedPlatform("all"); setSelectedCategory("all"); }}
                            className="text-xs text-gray-500 hover:text-gray-700 underline font-poppins"
                        >
                            Clear all
                        </button>
                    </div>
                )}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 font-poppins">
                    Showing <span className="font-semibold text-gray-900">{filteredWebsites.length}</span> of{" "}
                    <span className="font-semibold text-gray-900">{websites.length}</span> websites
                </p>
            </div>

            {/* Website Cards Grid */}
            <div className={viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }>
                {filteredWebsites.map((website) => (
                    viewMode === "grid" ? (
                        // Card View
                        <div key={website.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            {/* Image Container */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secendery/10 overflow-hidden">
                                <img
                                    src={website.image}
                                    alt={website.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-gray-600 hover:text-primary hover:bg-white transition-colors">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-gray-600 hover:text-green-600 hover:bg-white transition-colors">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-gray-600 hover:text-red-600 hover:bg-white transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-lg shadow-sm font-poppins">
                                        {website.platform}
                                    </span>
                                </div>

                                {/* Discount Badge */}
                                {website.offerPrice && (
                                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm">
                                        {Math.round((1 - website.offerPrice / website.price) * 100)}% OFF
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-900 truncate font-outfit text-lg">{website.title}</h3>
                                        <p className="text-sm text-gray-500 font-poppins">by {website.author}</p>
                                    </div>
                                </div>

                                {/* Rating & Sales */}
                                <div className="flex items-center gap-4 mb-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                        <span className="font-semibold text-gray-900 font-outfit">{website.rating}</span>
                                        <span className="text-gray-400 font-poppins">({website.reviews})</span>
                                    </div>
                                    <span className="text-gray-300">•</span>
                                    <span className="text-gray-500 font-poppins">{website.sales}</span>
                                </div>

                                {/* Category Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md font-poppins">
                                        {website.category}
                                    </span>
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md font-poppins">
                                        {website.projectType}
                                    </span>
                                </div>

                                {/* Price & Action */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-bold text-gray-900 font-outfit">${website.offerPrice || website.price}</span>
                                        {website.offerPrice && (
                                            <span className="text-sm text-gray-400 line-through font-poppins">${website.price}</span>
                                        )}
                                    </div>
                                    <button className="px-4 py-2 bg-gradient-to-r from-primary to-secendery text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity font-outfit">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // List View
                        <div key={website.id} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-56 h-40 md:h-auto bg-gradient-to-br from-primary/10 to-secendery/10 overflow-hidden relative">
                                    <img
                                        src={website.image}
                                        alt={website.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {website.offerPrice && (
                                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-lg">
                                            {Math.round((1 - website.offerPrice / website.price) * 100)}% OFF
                                        </span>
                                    )}
                                </div>
                                <div className="flex-1 p-5 flex flex-col md:flex-row md:items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded font-poppins">{website.platform}</span>
                                            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded font-poppins">{website.category}</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 font-outfit text-lg">{website.title}</h3>
                                        <p className="text-sm text-gray-500 font-poppins">by {website.author}</p>
                                        <div className="flex items-center gap-4 mt-2 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                <span className="font-semibold font-outfit">{website.rating}</span>
                                            </div>
                                            <span className="text-gray-400">{website.reviews}</span>
                                            <span className="text-gray-400">{website.sales}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <span className="text-2xl font-bold text-gray-900 font-outfit">${website.offerPrice || website.price}</span>
                                            {website.offerPrice && (
                                                <p className="text-sm text-gray-400 line-through">${website.price}</p>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2.5 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button className="p-2.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors">
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* Empty State */}
            {filteredWebsites.length === 0 && (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">No websites found</h3>
                    <p className="text-gray-500 mb-6 font-poppins">Try adjusting your search or filter criteria</p>
                    <button
                        onClick={() => { setSearchQuery(""); setSelectedPlatform("all"); setSelectedCategory("all"); }}
                        className="px-6 py-3 bg-gradient-to-r from-primary to-secendery text-white rounded-xl font-medium hover:opacity-90 transition-opacity font-outfit"
                    >
                        Clear Filters
                    </button>
                </div>
            )}

            {/* Pagination */}
            {filteredWebsites.length > 0 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                    <button className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors font-poppins">
                        Previous
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="w-10 h-10 text-sm font-medium bg-gradient-to-r from-primary to-secendery text-white rounded-xl font-outfit">
                            1
                        </button>
                        <button className="w-10 h-10 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors font-outfit">
                            2
                        </button>
                        <button className="w-10 h-10 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors font-outfit">
                            3
                        </button>
                    </div>
                    <button className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors font-poppins">
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
