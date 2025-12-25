"use client";
import { useState, useEffect } from "react";
import { Star, Edit, Trash2, Plus, ThumbsUp, Clock, Filter, Package } from "lucide-react";

export default function ReviewsPage() {
    const [websites, setWebsites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterRating, setFilterRating] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/websites.json");
                const data = await res.json();
                setWebsites(data.slice(0, 5)); // First 5 as reviewed items
            } catch (error) {
                console.error("Error fetching websites:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Create reviews from websites
    const userReviews = websites.map((w, i) => ({
        id: w.id,
        product: w.title,
        author: w.author,
        image: w.image,
        rating: Math.floor(w.rating),
        title: ["Excellent theme!", "Great for development!", "Clean and modern design", "Perfect solution", "Highly recommended!"][i],
        content: `This is an amazing ${w.platform} template. ${w.description} The support is fantastic and updates are regular.`,
        date: w.lastUpdate,
        helpful: Math.floor(Math.random() * 30) + 5
    }));

    const filteredReviews = filterRating === "all"
        ? userReviews
        : userReviews.filter(r => r.rating === parseInt(filterRating));

    const avgRating = userReviews.length > 0
        ? (userReviews.reduce((sum, r) => sum + r.rating, 0) / userReviews.length).toFixed(1)
        : 0;

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
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Reviews</h1>
                    <p className="text-gray-500 mt-1">Reviews you've written for purchased products</p>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" />
                    Write a Review
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-3">
                            <Star className="w-8 h-8 text-white fill-white" />
                        </div>
                        <p className="text-4xl font-bold text-gray-900">{avgRating}</p>
                        <p className="text-sm text-gray-500 mt-1">Average Rating</p>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-3">
                            <Edit className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-4xl font-bold text-gray-900">{userReviews.length}</p>
                        <p className="text-sm text-gray-500 mt-1">Total Reviews</p>
                    </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-3">
                            <ThumbsUp className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-4xl font-bold text-gray-900">{userReviews.reduce((sum, r) => sum + r.helpful, 0)}</p>
                        <p className="text-sm text-gray-500 mt-1">Helpful Votes</p>
                    </div>
                </div>
            </div>

            {/* Filter */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg shadow-gray-200/50 border border-gray-100/50">
                <div className="flex items-center gap-4">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Filter by rating:</span>
                    <div className="flex gap-2">
                        {["all", "5", "4", "3", "2", "1"].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => setFilterRating(rating)}
                                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-1 ${filterRating === rating
                                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {rating !== "all" && <Star className="w-3 h-3 fill-current" />}
                                {rating === "all" ? "All" : rating}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
                {filteredReviews.map((review) => (
                    <div key={review.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-48 h-40 md:h-auto bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
                                {review.image ? (
                                    <img
                                        src={review.image}
                                        alt={review.product}
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
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{review.title}</h3>
                                        <p className="text-sm text-gray-500">{review.product}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm font-medium text-gray-700">{review.rating}/5</span>
                                </div>

                                <p className="text-gray-600 mb-4">{review.content}</p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{new Date(review.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <ThumbsUp className="w-4 h-4" />
                                            <span>{review.helpful} found helpful</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredReviews.length === 0 && (
                <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100/50">
                    <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No reviews found</h3>
                    <p className="text-gray-500">You haven't written any reviews yet.</p>
                </div>
            )}
        </div>
    );
}
