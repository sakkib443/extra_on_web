"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaCode, FaLaptopCode, FaMobileAlt, FaRocket, FaCheckCircle, FaStar, FaUsers, FaDownload } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import mainImg from "../../../images/banner_img02.png";
import side1 from "../../../images/image.webp";
import side2 from "../../../images/image1.webp";

export default function HeroSection() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const categories = ["All Services", "Web Template", "Software", "UI Kit", "WordPress"];

  // Carousel slides
  const slides = [
    { id: 1, image: mainImg, title: "Agency Template", price: "$49", badge: "Best Seller" },
    { id: 2, image: side1, title: "E-commerce Theme", price: "$59", badge: "Popular" },
    { id: 3, image: side2, title: "Portfolio Design", price: "$39", badge: "New" },
    { id: 4, image: mainImg, title: "SaaS Dashboard", price: "$79", badge: "Featured" },
    { id: 5, image: side1, title: "Blog Template", price: "$29", badge: "Trending" },
    { id: 6, image: side2, title: "Landing Page", price: "$35", badge: "Hot" },
    { id: 7, image: mainImg, title: "Admin Panel", price: "$69", badge: "Premium" },
    { id: 8, image: side1, title: "App Landing", price: "$45", badge: "Top" },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/websites?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const getSlidePosition = (index) => {
    const total = slides.length;
    let diff = index - currentIndex;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  const stats = [
    { icon: FaUsers, value: "50K+", label: "Happy Users" },
    { icon: FaDownload, value: "100K+", label: "Downloads" },
    { icon: FaStar, value: "4.9", label: "Rating" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 flex flex-col items-center justify-center text-center relative overflow-hidden px-4 py-16">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secendery/20 via-purple-400/10 to-transparent rounded-full blur-3xl"></div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-[10%] text-primary/20 animate-bounce hidden md:block" style={{ animationDuration: '3s' }}>
        <FaCode className="text-4xl" />
      </div>
      <div className="absolute top-32 right-[15%] text-secendery/20 animate-bounce hidden md:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <FaLaptopCode className="text-5xl" />
      </div>
      <div className="absolute bottom-40 left-[15%] text-blue-400/20 animate-bounce hidden md:block" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <FaMobileAlt className="text-3xl" />
      </div>
      <div className="absolute bottom-32 right-[10%] text-green-400/20 animate-bounce hidden md:block" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
        <FaRocket className="text-4xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-lg mb-6">
          <HiOutlineSparkles className="text-primary text-lg" />
          <span className="text-sm font-medium text-gray-700">Premium Digital Products</span>
          <span className="px-2 py-0.5 bg-gradient-to-r from-primary to-secendery text-white text-xs font-bold rounded-full">NEW</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-gray-900 leading-tight mb-6">
          Build Your Dream
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secendery bg-clip-text text-transparent">
              Website & Software
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 font-poppins max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover premium website templates, software, and digital products
          crafted by top developers. Launch your project in minutes.
        </p>

        {/* Features Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Premium Quality", "Lifetime Updates", "24/7 Support", "Easy Customization"].map((feature, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm">
              <FaCheckCircle className="text-green-500 text-sm" />
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex items-center bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/30">
            <div className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex items-center px-5 py-4 text-gray-700 font-medium focus:outline-none border-r border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {selectedCategory}
                <span className="ml-2 text-gray-400">▾</span>
              </button>
              {categoryOpen && (
                <ul className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-xl mt-2 shadow-xl z-20 overflow-hidden">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setCategoryOpen(false); }}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 font-medium transition-colors"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex-1 flex items-center px-4">
              <IoSearch size={22} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search templates, software, themes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 py-4 px-3 text-gray-700 text-base focus:outline-none bg-transparent font-poppins"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secendery text-white font-bold px-8 py-4 cursor-pointer transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            >
              Search
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secendery/10 rounded-xl flex items-center justify-center">
                <stat.icon className="text-primary text-xl" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-outfit font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 font-poppins">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Carousel */}
      <div className="relative w-full mt-8 z-10 overflow-hidden">
        <div className="relative h-[280px] md:h-[350px] flex items-center justify-center">
          {slides.map((slide, index) => {
            const position = getSlidePosition(index);
            const isCenter = position === 0;
            const isVisible = Math.abs(position) <= 3;

            if (!isVisible) return null;

            const translateX = position * 180;
            const scale = isCenter ? 1.2 : Math.max(0.7 - Math.abs(position) * 0.08, 0.5);
            const opacity = isCenter ? 1 : Math.max(0.5 - Math.abs(position) * 0.1, 0.2);
            const zIndex = isCenter ? 30 : 20 - Math.abs(position);

            return (
              <div
                key={slide.id}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group ${isCenter ? 'w-56 md:w-72' : 'w-44 md:w-56'}`}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-44 md:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Badge - Only on center */}
                  {isCenter && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ {slide.badge}
                    </div>
                  )}

                  {/* Title & Price */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm md:text-base mb-1">{slide.title}</h3>
                    <span className="text-primary font-bold text-lg">{slide.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-primary to-secendery'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-5"></div>
    </div>
  );
}
