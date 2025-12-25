"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Plus, Edit, Trash2, FolderOpen, Tag, Eye, Package } from "lucide-react";

const categoryColors = [
    "from-primary to-primary/80",
    "from-secendery to-purple-600",
    "from-green-500 to-emerald-600",
    "from-amber-500 to-orange-600",
    "from-pink-500 to-rose-600",
    "from-cyan-500 to-teal-600",
];

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catRes, webRes] = await Promise.all([
                    fetch("/category.json"),
                    fetch("/websites.json")
                ]);
                const catData = await catRes.json();
                const webData = await webRes.json();
                setCategories(catData);
                setWebsites(webData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const getCategoryCount = (categoryName) => {
        return websites.filter(w => w.category === categoryName).length;
    };

    const filteredCategories = categories.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalWebsites = websites.length;
    const activeCategories = categories.filter(c => getCategoryCount(c.name) > 0).length;

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-outfit">All Categories</h1>
                    <p className="text-gray-500 mt-1 font-poppins">Manage and organize website categories</p>
                </div>
                <Link
                    href="/dashboard/admin/categories/create"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-secendery text-white rounded-2xl text-sm font-medium font-outfit hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                    <Plus className="w-5 h-5" />
                    Create Category
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                            <FolderOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{categories.length}</p>
                            <p className="text-sm text-gray-500 font-poppins">Total Categories</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Tag className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900 font-outfit">{activeCategories}</p>
                            <p className="text-sm text-gray-500 font-poppins">Active Categories</p>
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
                        placeholder="Search categories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-100/80 border-0 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 font-poppins">
                    Showing <span className="font-semibold text-gray-900">{filteredCategories.length}</span> of{" "}
                    <span className="font-semibold text-gray-900">{categories.length}</span> categories
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredCategories.map((category, index) => (
                    <div
                        key={category.id}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${categoryColors[index % categoryColors.length]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <FolderOpen className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-colors">
                                    <Eye className="w-4 h-4" />
                                </button>
                                <Link
                                    href={`/dashboard/admin/categories/${category.id}/edit`}
                                    className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors"
                                >
                                    <Edit className="w-4 h-4" />
                                </Link>
                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <h3 className="font-bold text-gray-900 mb-1 font-outfit text-lg">{category.name}</h3>
                        <p className="text-sm text-gray-500 mb-4 font-poppins line-clamp-2">{category.description || "No description available"}</p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-1.5 text-sm text-gray-500 font-poppins">
                                <Package className="w-4 h-4" />
                                <span>{getCategoryCount(category.name)} websites</span>
                            </div>
                            <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryCount(category.name) > 0 ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                                }`}>
                                {getCategoryCount(category.name) > 0 ? "Active" : "Empty"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredCategories.length === 0 && (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-outfit">No categories found</h3>
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
