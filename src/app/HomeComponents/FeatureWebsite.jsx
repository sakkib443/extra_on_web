"use client";
import SectionTitle from "@/Components/Shared/SectionTitle";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function PopularWebsite() {
    const items = [
        {
            id: 1,
            title: "Avada | Website Builder For WordPress & WooCommerce",
            author: "ThemeFusion",
            category: "Business",
            price: 69.00,
            oldPrice: null,
            rating: 4.8,
            reviews: "26.5K",
            sales: "1.039M Sales",
            // Link 1
            image: "https://market-resized.envatousercontent.com/previews/files/657947298/screenshots/00-Preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=7615d531a8d575e62ec24950d3ba77d351990788a64b3742ae0800336cb42b81",
        },
        {
            id: 2,
            title: "WoodMart - Multipurpose WooCommerce Theme",
            author: "xtemos",
            category: "WooCommerce",
            price: 59.00,
            oldPrice: null,
            rating: 4.9,
            reviews: "3.4K",
            sales: "103.2K Sales",
            // Link 2
            image: "https://market-resized.envatousercontent.com/previews/files/656419867/01_theme-preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=ff02b0df44b8ca908b32030e5158f1d2b8cccd8b44965b052fe1ce30be0c5116",
        },
        {
            id: 3,
            title: "Impreza - WordPress Website and WooCommerce Builder",
            author: "UpSolution",
            category: "Creative",
            price: 39.00,
            oldPrice: 59.00,
            rating: 4.9,
            reviews: "2.6K",
            sales: "116.9K Sales",
            // Link 3
            image: "https://market-resized.envatousercontent.com/previews/files/643134349/01_intro-the7-x1-light.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=7951a1c9fead4b9eb1a38323e33cef2e0a617bba64f79eac98881ae5063c0ee0",
        },
        {
            id: 4,
            title: "The7 — Ultimate WordPress & WooCommerce Theme",
            author: "Dream-Theme",
            category: "Business",
            price: 39.00,
            oldPrice: null,
            rating: 4.7,
            reviews: "9.2K",
            sales: "329.8K Sales",
            // Link 4
            image: "https://market-resized.envatousercontent.com/previews/files/632763436/Artistic+-+590X300+Banner+without+price.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a4b0e8195303bec8d61d48885a118e4e97af8bdad874e1814b0d405dec492fac",
        }
    ];

    return (
        <section className="w-full py-14 font-outfit">
            <div className="max-w-7xl mx-auto px-4">
                
                <div className="flex items-center justify-between mb-10">
                    <SectionTitle tag={"Feature Website"} title={"Feature Website"} align="left" subtitle={"Discover thousands of easy to customize themes, templates & CMS products."}></SectionTitle>
                {/* Header */}
                    <button className="bg-primary text-white px-6 py-2.5 rounded-sm shadow-sm hover:bg-primary/90 transition font-medium">
                        View all
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Thumbnail */}
                            <img
                                src={item.image}
                                alt=""
                                className="w-full h-[165px] object-cover"
                            />

                            {/* Content */}
                            <div className="p-5">
                                  {/* Author */}
                                <p className="text-sm text-gray-500 mb-1">
                                     <span className="italic">{item.author}</span>
                                </p>

                                {/* Title */}
                                <h3 className="font-semibold text-gray-700 text-base mb-1 leading-snug font-poppins">
                                    {item.title.length > 48
                                        ? item.title.slice(0, 48) + "..."
                                        : item.title}
                                </h3>

                              



                                <div className="flex items-center justify-between">
                                    <div>
                                        {/* Rating */}
                                        <div className="flex items-center gap-1 text-yellow-500 mb-1">
                                            <FaStar size={15} />
                                            <span className="text-gray-700 text-sm">{item.rating}</span>
                                        </div>

                                        {/* Sales */}
                                        <p className="text-gray-500 text-sm mb-4">{item.sales}</p>
                                    </div>
                                    {/* Price */}
                                    <div className="flex items-center gap-2 mb-2">
                                        {item.oldPrice && (
                                            <span className="text-gray-400 line-through font-medium">
                                                $ {item.oldPrice}
                                            </span>
                                        )}
                                        <span className="text-xl font-bold text-gray-600">
                                            $ {item.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-3">
                                    <button className="p-2.5 border border-gray-300 rounded-sm hover:bg-gray-100 transition">
                                        <IoCartOutline size={20} className="text-gray-500 cursor-pointer" />
                                    </button>

                                    <button className="flex-1 bg-white border border-primary text-primary font-medium px-4 cursor-pointer py-2.5 rounded-sm hover:bg-primary hover:text-white transition">
                                        Live Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
