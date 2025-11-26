"use client";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function WebsiteCard({ item }) {
    return (
        <div className="bg-white font-poppins rounded-sm border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            
            {/* Thumbnail */}
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-[165px] object-cover"
            />

            {/* Content */}
            <div className="p-5">
                {/* Author */}
                <p className="text-sm text-gray-500 mb-1 italic">{item.author}</p>

                {/* Title */}
                <h3 className="font-semibold text-gray-700 text-base mb-1 leading-snug">
                    {item.title.length > 48 ? item.title.slice(0, 48) + "..." : item.title}
                </h3>

                {/* Rating + Sales */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                            <FaStar size={15} />
                            <span className="text-gray-700 text-sm">{item.rating}</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">{item.sales}</p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-2">
                        {item.oldPrice && (
                            <span className="text-gray-400 line-through font-medium">
                                $ {item.oldPrice}
                            </span>
                        )}
                        <span className="text-xl font-bold text-gray-600">$ {item.price}</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button className="p-2 border border-gray-300 rounded-sm hover:bg-gray-100 transition">
                        <IoCartOutline size={20} className="text-gray-500 cursor-pointer" />
                    </button>

                    <button className="flex-1 bg-white border border-primary
                     text-primary font-medium px-4 cursor-pointer py-2 rounded-sm hover:bg-primary hover:text-white transition">
                        Live Preview
                    </button>
                </div>
            </div>
        </div>
    );
}
