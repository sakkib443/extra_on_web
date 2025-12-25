"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
    Search,
    Star,
    Download,
    Monitor,
    Smartphone,
    Globe,
    ExternalLink,
    Package,
    Filter,
    X
} from "lucide-react";

export default function SoftwarePage() {
    const [software, setSoftware] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [platform, setPlatform] = useState("all");
    const [license, setLicense] = useState("all");
    const [sort, setSort] = useState("popular");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/software.json");
                const data = await res.json();
                setSoftware(data);
            } catch (error) {
                console.error("Error fetching software:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const categories = [...new Set(software.map(s => s.category))];
    const platforms = ["Windows", "macOS", "Linux", "iOS", "Android", "Web"];
    const licenses = ["Free", "Freemium", "Subscription"];

    const filtered = useMemo(() => {
        let result = [...software];

        // Category Filter
        if (category !== "all") {
            result = result.filter(s => s.category === category);
        }

        // Platform Filter
        if (platform !== "all") {
            result = result.filter(s => s.platform.includes(platform));
        }

        // License Filter
        if (license !== "all") {
            result = result.filter(s => s.license === license);
        }

        // Search Filter
        if (search.trim()) {
            const searchLower = search.toLowerCase();
            result = result.filter(s =>
                s.name.toLowerCase().includes(searchLower) ||
                s.developer.toLowerCase().includes(searchLower) ||
                s.category.toLowerCase().includes(searchLower)
            );
        }

        // Sorting
        if (sort === "popular") result.sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads));
        else if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
        else if (sort === "newest") result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        else if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));

        return result;
    }, [software, category, platform, license, search, sort]);

    const getPlatformIcon = (plat) => {
        if (plat.includes("Windows") || plat.includes("Linux")) return <Monitor className="w-3.5 h-3.5" />;
        if (plat.includes("macOS") || plat.includes("iOS")) return <Smartphone className="w-3.5 h-3.5" />;
        if (plat.includes("Android")) return <Smartphone className="w-3.5 h-3.5" />;
        if (plat.includes("Web")) return <Globe className="w-3.5 h-3.5" />;
        return <Monitor className="w-3.5 h-3.5" />;
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#66B3FF] border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="font-outfit container mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Search Bar */}
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold mb-6">Explore Premium Software</h1>
                <div className="max-w-xl mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search software by name, developer..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#66B3FF] focus:border-transparent transition-all"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* SIDEBAR FILTER */}
                <aside className="w-full lg:w-72 p-6 bg-white shadow-sm border border-gray-100 rounded-md h-fit space-y-8 sticky top-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold">Filters</h3>
                        <button
                            onClick={() => { setCategory("all"); setPlatform("all"); setLicense("all"); setSearch(""); }}
                            className="text-xs text-[#66B3FF] font-medium hover:underline"
                        >
                            Reset All
                        </button>
                    </div>

                    {/* Category */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Category</h4>
                        <div className="space-y-2 overflow-y-auto pr-2">
                            <label className="flex items-center gap-3 text-sm cursor-pointer group">
                                <input type="radio" name="cat" checked={category === "all"} onChange={() => setCategory("all")} className="accent-[#66B3FF]" />
                                <span className={category === "all" ? "text-[#66B3FF] font-bold" : "text-gray-600 group-hover:text-gray-900"}>All Categories</span>
                            </label>
                            {categories.map((cat) => (
                                <label key={cat} className="flex items-center gap-3 text-sm cursor-pointer group">
                                    <input type="radio" name="cat" checked={category === cat} onChange={() => setCategory(cat)} className="accent-[#66B3FF]" />
                                    <span className={category === cat ? "text-[#66B3FF] font-bold" : "text-gray-600 group-hover:text-gray-900"}>{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Platform</h4>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 text-sm cursor-pointer group">
                                <input type="radio" name="plat" checked={platform === "all"} onChange={() => setPlatform("all")} className="accent-[#66B3FF]" />
                                <span className={platform === "all" ? "text-[#66B3FF] font-bold" : "text-gray-600"}>All Platforms</span>
                            </label>
                            {platforms.map((plat) => (
                                <label key={plat} className="flex items-center gap-3 text-sm cursor-pointer group">
                                    <input type="radio" name="plat" checked={platform === plat} onChange={() => setPlatform(plat)} className="accent-[#66B3FF]" />
                                    <span className={platform === plat ? "text-[#66B3FF] font-bold" : "text-gray-600"}>{plat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* License */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">License Type</h4>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 text-sm cursor-pointer group">
                                <input type="radio" name="lic" checked={license === "all"} onChange={() => setLicense("all")} className="accent-[#66B3FF]" />
                                <span className={license === "all" ? "text-[#66B3FF] font-bold" : "text-gray-600"}>All Types</span>
                            </label>
                            {licenses.map((lic) => (
                                <label key={lic} className="flex items-center gap-3 text-sm cursor-pointer group">
                                    <input type="radio" name="lic" checked={license === lic} onChange={() => setLicense(lic)} className="accent-[#66B3FF]" />
                                    <span className={license === lic ? "text-[#66B3FF] font-bold" : "text-gray-600"}>{lic}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                        <h2 className="text-lg font-bold text-gray-800">
                            Showing <span className="text-[#66B3FF]">{filtered.length}</span> Results
                        </h2>

                        <select
                            className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium shadow-sm outline-none focus:ring-2 focus:ring-[#66B3FF]"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="popular">Most Popular</option>
                            <option value="rating">Top Rated</option>
                            <option value="newest">Newest First</option>
                            <option value="name">Name A-Z</option>
                        </select>
                    </div>

                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filtered.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/softwere/${item.slug}`}
                                    className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Image */}
                                    <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => e.target.style.display = 'none'}
                                        />

                                        {/* License Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${item.license === "Free" ? "bg-green-500 text-white" :
                                                    item.license === "Freemium" ? "bg-blue-500 text-white" :
                                                        "bg-amber-500 text-white"
                                                }`}>
                                                {item.license}
                                            </span>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                            <span className="text-white text-sm font-medium flex items-center gap-1">
                                                View Details <ExternalLink className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <div>
                                                <span className="text-xs text-[#66B3FF] font-medium">{item.category}</span>
                                                <h3 className="font-bold text-gray-900 text-lg mt-0.5">{item.name}</h3>
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-500 mb-3">by {item.developer}</p>

                                        {/* Rating & Downloads */}
                                        <div className="flex items-center gap-4 mb-4 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                <span className="font-semibold text-gray-900">{item.rating}</span>
                                                <span className="text-gray-400">({item.reviews})</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-500">
                                                <Download className="w-4 h-4" />
                                                <span>{item.downloads}</span>
                                            </div>
                                        </div>

                                        {/* Platforms */}
                                        <div className="flex items-center gap-2 mb-4">
                                            {item.platform.slice(0, 3).map((plat, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                                    title={plat}
                                                >
                                                    {getPlatformIcon(plat)}
                                                    <span className="hidden sm:inline">{plat}</span>
                                                </span>
                                            ))}
                                            {item.platform.length > 3 && (
                                                <span className="text-xs text-gray-400">+{item.platform.length - 3}</span>
                                            )}
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <span className="text-lg font-bold text-gray-900">
                                                {item.price === 0 ? "Free" : `$${item.price}/mo`}
                                            </span>
                                            <span className="text-xs text-gray-400">v{item.version}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 font-medium">No software matches your filters.</p>
                            <button
                                onClick={() => { setCategory("all"); setPlatform("all"); setLicense("all"); setSearch(""); }}
                                className="mt-4 text-[#66B3FF] font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
