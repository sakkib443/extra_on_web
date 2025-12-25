"use client";
import { useState, useEffect } from "react";
import { Download, FileArchive, Clock, Search, FolderOpen, RefreshCw, ExternalLink, CheckCircle, Package } from "lucide-react";

export default function DownloadsPage() {
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState("all");

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

    // Create downloads from websites
    const downloads = websites.map(w => ({
        id: w.id,
        title: `${w.title.split(' ').slice(0, 3).join(' ')} v${(Math.random() * 3 + 1).toFixed(1)}.0`,
        product: w.title,
        author: w.author,
        size: `${(Math.random() * 40 + 10).toFixed(1)} MB`,
        date: w.lastUpdate,
        type: "zip",
        status: "ready",
        platform: w.platform
    }));

    const filteredDownloads = downloads.filter(d => {
        const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            d.product.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === "all" || d.type === filterType;
        return matchesSearch && matchesType;
    });

    const totalSize = downloads.reduce((sum, d) => sum + parseFloat(d.size), 0).toFixed(1);

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Downloads</h1>
                    <p className="text-gray-500 mt-1">Access and download your purchased files</p>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                    <Download className="w-4 h-4" />
                    Download All
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <FileArchive className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{downloads.length}</p>
                            <p className="text-sm text-gray-500">Total Files</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                            <Download className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{totalSize} MB</p>
                            <p className="text-sm text-gray-500">Total Size</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                            <FolderOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{downloads.filter(d => d.type === 'zip').length}</p>
                            <p className="text-sm text-gray-500">Themes</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{downloads.filter(d => d.status === 'ready').length}</p>
                            <p className="text-sm text-gray-500">Ready</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search downloads..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-gray-100/80 border-0 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="flex gap-2">
                        {["all", "zip", "pdf"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${filterType === type
                                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {type === "all" ? "All Files" : type.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Downloads List */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {filteredDownloads.map((item) => (
                        <div key={item.id} className="p-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors group">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.type === 'zip'
                                    ? 'bg-gradient-to-br from-violet-500 to-purple-600'
                                    : 'bg-gradient-to-br from-red-500 to-rose-600'
                                }`}>
                                <FileArchive className="w-7 h-7 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
                                <p className="text-sm text-gray-500">by {item.author} • {item.platform}</p>
                                <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                                    <span>{item.size}</span>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{new Date(item.date).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.status === 'ready'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {item.status === 'ready' ? 'Ready' : 'Processing'}
                                </span>
                                <button className="p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                                    <RefreshCw className="w-5 h-5" />
                                </button>
                                <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity opacity-0 group-hover:opacity-100 flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Help Box */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Need help with installation?</h4>
                        <p className="text-sm text-gray-600 mb-3">Check out our documentation and video tutorials for step-by-step installation guides.</p>
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                            View Documentation →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
