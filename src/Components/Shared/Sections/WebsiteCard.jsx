"use client";
import Link from "next/link";
import { FaStar, FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

export default function WebsiteCard({ item }) {
    return (
        <div className="group bg-white/80 backdrop-blur-sm rounded-md  shadow-lg shadow-gray-200/50 border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secendery/10 overflow-hidden">
                <Link href={`/websites/${item.id}`}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </Link>


                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex gap-2">
                            <Link
                                href={`/websites/${item.id}`}
                                className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-gray-600 hover:text-primary hover:bg-white transition-colors"
                            >
                                <FaEye className="w-4 h-4" />
                            </Link>
                            <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-md text-gray-600 hover:text-red-500 hover:bg-white transition-colors">
                                <FaHeart className="w-4 h-4" />
                            </button>
                            <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-md text-gray-600 hover:text-green-600 hover:bg-white transition-colors">
                                <FaShoppingCart className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-lg shadow-sm font-poppins">
                        {item.platform}
                    </span>
                </div>

                {/* Discount Badge */}
                {item.offerPrice && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm">
                        {Math.round((1 - item.offerPrice / item.price) * 100)}% OFF
                    </span>
                )}
            </div>


            {/* Content */}
            <div className="p-5">
                {/* <div className="flex flex-wrap gap-1.5 ">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md font-poppins">
                        {item.category}
                    </span>
                    {item.projectType && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md font-poppins">
                            {item.projectType}
                        </span>
                    )}
                </div> */}

                <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex-1 min-w-0">
                        <Link href={`/websites/${item.id}`}>
                            <h3 className="font-bold text-gray-900 truncate font-outfit text-lg hover:text-primary transition-colors cursor-pointer">
                                {item.title}
                            </h3>
                        </Link>
                        <p className="text-sm text-gray-500 font-poppins">by {item.author}</p>
                    </div>
                </div>

                {/* Rating & Sales */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                        <FaStar className="w-4 h-4 text-amber-500" />
                        <span className="font-semibold text-gray-900 font-outfit">{item.rating}</span>
                        <span className="text-gray-400 font-poppins">({item.reviews})</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 font-poppins">{item.sales}</span>
                </div>

                {/* Category Tags */}

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900 font-outfit">
                            ${item.offerPrice || item.price}
                        </span>
                        {item.offerPrice && (
                            <span className="text-sm text-gray-400 line-through font-poppins">
                                ${item.price}
                            </span>
                        )}
                    </div>
                    <Link
                        href={`/websites/${item.id}`}
                        className="px-4 py-2 bg-gradient-to-r from-primary to-primary text-white text-sm font-medium rounded-md hover:opacity-90 transition-opacity font-outfit"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
