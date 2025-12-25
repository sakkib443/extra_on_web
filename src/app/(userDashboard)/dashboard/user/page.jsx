"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Heart, Download, Star, TrendingUp, Clock, ArrowRight, Package, CreditCard } from "lucide-react";

export default function UserDashboardPage() {
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

    // Get recent purchases (first 3 from websites)
    const recentPurchases = websites.slice(0, 3);
    // Get wishlist items (2 more from websites)
    const wishlistItems = websites.slice(3, 5);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Welcome Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary via-secendery to-purple-500 rounded-3xl p-8 text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-morph-elegant-1"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-morph-elegant-2"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-2 font-outfit">Welcome back, John! 👋</h1>
                    <p className="text-white/80 text-lg mb-6 font-poppins">Here's what's happening with your account today.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/websites" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary rounded-xl font-medium hover:bg-white/90 transition-colors font-outfit">
                            Browse Templates
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/dashboard/user/purchases" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl font-medium hover:bg-white/30 transition-colors font-outfit">
                            View Purchases
                        </Link>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secendery rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+2 this month</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 font-outfit">{websites.length}</p>
                    <p className="text-sm text-gray-500 mt-1 font-poppins">Total Purchases</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 font-outfit">8</p>
                    <p className="text-sm text-gray-500 mt-1 font-poppins">Wishlist Items</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Download className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 font-outfit">24</p>
                    <p className="text-sm text-gray-500 mt-1 font-poppins">Downloads</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 font-outfit">5</p>
                    <p className="text-sm text-gray-500 mt-1 font-poppins">Reviews Given</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Purchases */}
                <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-outfit">Recent Purchases</h3>
                            <p className="text-sm text-gray-500 font-poppins">Your latest template purchases</p>
                        </div>
                        <Link href="/dashboard/user/purchases" className="text-sm text-primary hover:text-secendery font-medium flex items-center gap-1 font-outfit">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {recentPurchases.map((item) => (
                            <div key={item.id} className="p-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors">
                                <div className="w-20 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secendery/20 flex items-center justify-center flex-shrink-0">
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
                                        <Package className="w-6 h-6 text-primary/50" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-gray-900 truncate font-outfit">{item.title}</h4>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 font-poppins">
                                        <Clock className="w-3 h-3" />
                                        by {item.author}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-900 font-outfit">${item.offerPrice || item.price}</p>
                                    <button className="text-xs text-primary hover:text-secendery font-medium flex items-center gap-1 font-outfit">
                                        <Download className="w-3 h-3" /> Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Wishlist */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 font-outfit">Wishlist</h3>
                            <p className="text-sm text-gray-500 font-poppins">Items you've saved</p>
                        </div>
                        <Link href="/dashboard/user/wishlist" className="text-sm text-primary hover:text-secendery font-medium font-outfit">
                            View All
                        </Link>
                    </div>
                    <div className="p-4 space-y-4">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="bg-gradient-to-r from-gray-50 to-primary/5 rounded-xl p-3 hover:shadow-md transition-all">
                                <div className="w-full h-28 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secendery/20 flex items-center justify-center mb-3">
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
                                        <Package className="w-8 h-8 text-primary/50" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-900 text-sm truncate font-outfit">{item.title}</h4>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="font-bold text-primary font-outfit">${item.offerPrice || item.price}</p>
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <Star className="w-3 h-3 fill-amber-500" />
                                        <span className="text-xs font-medium font-poppins">{item.rating}</span>
                                    </div>
                                </div>
                                <button className="w-full mt-3 py-2 bg-gradient-to-r from-primary to-secendery text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity font-outfit">
                                    Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Membership Card */}
            <div className="bg-gradient-to-r from-slate-900 via-secendery/80 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold rounded-full font-outfit">PREMIUM</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 font-outfit">Your Premium Membership</h3>
                        <p className="text-white/70 font-poppins">Enjoy unlimited downloads and exclusive templates</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-white/70 text-sm mb-1 font-poppins">Valid until</p>
                        <p className="text-xl font-bold font-outfit">December 31, 2026</p>
                        <button className="mt-3 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors font-outfit">
                            Manage Subscription
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/websites" className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secendery rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Package className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 font-outfit">Browse Templates</h4>
                    <p className="text-xs text-gray-500 mt-1 font-poppins">Discover new themes</p>
                </Link>

                <Link href="/dashboard/user/downloads" className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Download className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 font-outfit">My Downloads</h4>
                    <p className="text-xs text-gray-500 mt-1 font-poppins">Access your files</p>
                </Link>

                <Link href="/dashboard/user/billing" className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 font-outfit">Billing</h4>
                    <p className="text-xs text-gray-500 mt-1 font-poppins">Manage payments</p>
                </Link>

                <Link href="/dashboard/user/support" className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-gray-200/50 border border-gray-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 font-outfit">Get Support</h4>
                    <p className="text-xs text-gray-500 mt-1 font-poppins">Need help?</p>
                </Link>
            </div>
        </div>
    );
}
