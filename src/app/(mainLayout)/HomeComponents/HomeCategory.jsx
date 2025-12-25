"use client";
import React from 'react';
import { FaCode, FaPalette, FaRocket, FaUsers, FaDownload, FaStar, FaGlobe, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { HiTemplate, HiCube, HiSparkles, HiLightningBolt } from 'react-icons/hi';
import Link from 'next/link';

const HomeCategory = () => {
  const categories = [
    {
      icon: HiTemplate,
      title: "Website Templates",
      description: "Premium HTML, React & Next.js templates",
      count: "500+",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      link: "/websites"
    },
    {
      icon: FaCode,
      title: "Software & Apps",
      description: "Desktop & mobile applications",
      count: "200+",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      link: "/softwere"
    },
    {
      icon: HiCube,
      title: "UI Kits",
      description: "Figma, Sketch & XD components",
      count: "150+",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      link: "/products"
    },
    {
      icon: FaPalette,
      title: "Graphics & Icons",
      description: "Illustrations, icons & graphics",
      count: "1000+",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      link: "/products"
    },
  ];

  const stats = [
    { icon: FaDownload, value: "100K+", label: "Downloads", color: "text-blue-500" },
    { icon: FaUsers, value: "50K+", label: "Happy Customers", color: "text-purple-500" },
    { icon: FaStar, value: "4.9", label: "Average Rating", color: "text-yellow-500" },
    { icon: FaGlobe, value: "120+", label: "Countries", color: "text-green-500" },
  ];

  const features = [
    { icon: HiLightningBolt, title: "Fast & Optimized", description: "All products are speed optimized" },
    { icon: FaShieldAlt, title: "Secure & Safe", description: "100% malware-free guaranteed" },
    { icon: HiSparkles, title: "Regular Updates", description: "Lifetime free updates included" },
    { icon: FaRocket, title: "Premium Support", description: "24/7 dedicated support team" },
  ];

  return (
    <section className=" bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secendery/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Explore Categories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-gray-900 mb-4">
            Browse Our <span className="bg-gradient-to-r from-primary to-secendery bg-clip-text text-transparent">Premium</span> Collection
          </h2>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto text-lg">
            Discover thousands of high-quality digital products to boost your projects
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.link}
              className="group relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`w-16 h-16 ${cat.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon className={`text-3xl bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-outfit font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm font-poppins mb-4">
                {cat.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 bg-gradient-to-r ${cat.color} text-white text-sm font-bold rounded-full`}>
                  {cat.count}
                </span>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default HomeCategory;