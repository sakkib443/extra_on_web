"use client";
import React from "react";
import { FaStar, FaCheckCircle, FaRocket, FaUsers, FaDownload, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import Link from "next/link";

const HomeAbout = () => {
  const features = [
    { icon: HiSparkles, text: "Premium Quality Products" },
    { icon: HiLightningBolt, text: "Fast & Optimized Code" },
    { icon: FaRocket, text: "Regular Updates" },
    { icon: FaUsers, text: "24/7 Support" },
  ];

  return (
    <section className="w-full py-20 font-poppins relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secendery/5 rounded-full blur-3xl"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT - Big Number */}
          <div className="relative">
            {/* Main Number */}
            <div className="relative">
              <h1
                className="text-[150px] md:text-[200px] lg:text-[250px] font-poppins font-black leading-none select-none text-transparent"
                style={{ WebkitTextStroke: '3px #e5e7eb' }}
              >
                15+
              </h1>

              {/* Floating Tags */}
              <span className="absolute top-8 left-4 md:left-16 px-4 py-2 bg-gradient-to-r from-primary to-secendery text-white rounded-full text-sm shadow-lg font-medium animate-bounce" style={{ animationDuration: '3s' }}>
                ✨ Premium Quality
              </span>

              <span className="absolute top-1/2 -translate-y-1/2 right-0 md:right-10 px-4 py-2 bg-white text-gray-800 rounded-full text-sm shadow-xl border border-gray-100 font-medium">
                🚀 Fast Delivery
              </span>

              <span className="absolute bottom-16 left-1/4 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm shadow-lg font-medium animate-pulse">
                ✓ Verified Products
              </span>

              {/* Floating Dots */}
              <div className="absolute top-4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
              <div className="absolute bottom-1/3 left-8 w-4 h-4 bg-secendery/20 rounded-full animate-bounce" style={{ animationDuration: '4s' }}></div>
            </div>

            {/* Mini Stats */}
            <div className="flex gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-outfit font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl font-outfit font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div className="text-center">
                <p className="text-3xl font-outfit font-bold text-gray-900">4.9</p>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full w-fit mb-6">
              <HiSparkles className="text-lg" />
              About ExtrainWeb
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-gray-900 mb-6 leading-tight">
              We're Your Digital
              <span className="block mt-2 bg-gradient-to-r from-primary to-secendery bg-clip-text text-transparent">
                Products Partner
              </span>
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 p-4 bg-white rounded-2xl shadow-lg border border-gray-100 w-fit">
              <div className="flex text-yellow-500 text-lg gap-1">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div>
                <span className="font-outfit font-bold text-gray-900 text-xl">4.9</span>
                <span className="text-gray-500 text-sm ml-2">(2.4k reviews)</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-secendery/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-primary" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <FaQuoteLeft className="text-5xl text-white" />
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4 relative z-10">
                "ExtrainWeb delivered exactly what we needed — premium quality, efficient solutions, and outstanding support. Highly recommended!"
              </p>
              <div className="flex items-center gap-3 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                  alt="CEO"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-outfit font-bold text-sm">John Carter</p>
                  <p className="text-white/60 text-xs">CEO, TechCorp</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secendery text-white font-outfit font-bold rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all w-fit group"
            >
              Learn More About Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
