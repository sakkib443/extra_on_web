"use client";
import { useState, useEffect } from "react";
import { Heart, ShoppingCart, Star, Trash2, Share2, Eye, Clock, Package } from "lucide-react";

export default function WishlistPage() {
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/websites.json");
                const data = await res.json();
                // Use last 4 items as wishlist
                setWebsites(data.slice(-4));
            } catch (error) {
                console.error("Error fetching websites:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(websites);
    }, [websites]);

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const totalValue = items.reduce((sum, item) => sum + (item.offerPrice || item.price), 0);
    const totalSavings = items.reduce((sum, item) => sum + (item.price - (item.offerPrice || item.price)), 0);

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Wishlist</h1>
                    <p className="text-gray-500 mt-1">Items you've saved for later</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Buy All (${totalValue})
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">{items.length}</p>
                            <p className="text-sm text-gray-500">Items Saved</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <ShoppingCart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-900">${totalValue}</p>
                            <p className="text-sm text-gray-500">Total Value</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-green-600">${totalSavings}</p>
                            <p className="text-sm text-gray-500">You'll Save</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {items.map((item) => (
                    <div key={item.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="relative">
                            <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                <div className="hidden items-center justify-center w-full h-full">
                                    <Package className="w-16 h-16 text-purple-400" />
                                </div>
                            </div>
                            <div className="absolute top-3 right-3 flex gap-2">
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="p-2 bg-white/90 backdrop-blur-sm rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-xl text-gray-400 hover:text-blue-500 hover:bg-blue-50 transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                            {item.offerPrice && (
                                <div className="absolute top-3 left-3">
                                    <span className="px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-lg">
                                        {Math.round((1 - item.offerPrice / item.price) * 100)}% OFF
                                    </span>
                                </div>
                            )}
                            <div className="absolute bottom-3 left-3">
                                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-lg">
                                    {item.platform}
                                </span>
                            </div>
                        </div>

                        <div className="p-5">
                            <h3 className="font-bold text-gray-900 text-lg mb-1 truncate">{item.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">by {item.author}</p>

                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                    <span className="font-medium text-gray-700">{item.rating}</span>
                                    <span>({item.reviews})</span>
                                </div>
                                <span>•</span>
                                <span>{item.sales}</span>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-gray-900">${item.offerPrice || item.price}</span>
                                    {item.offerPrice && (
                                        <span className="text-sm text-gray-400 line-through">${item.price}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                    <button className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {items.length === 0 && (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-500 mb-6">Start adding items you love!</p>
                    <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                        Browse Templates
                    </button>
                </div>
            )}
        </div>
    );
}
