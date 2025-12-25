"use client";
import React from 'react';
import { FaRocket, FaUsers, FaDownload, FaHeadset, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import Link from 'next/link';

const HomeLast = () => {
    const stats = [
        { icon: FaUsers, value: "50K+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
        { icon: FaDownload, value: "100K+", label: "Downloads", color: "from-purple-500 to-pink-500" },
        { icon: FaRocket, value: "500+", label: "Templates", color: "from-orange-500 to-red-500" },
        { icon: FaHeadset, value: "24/7", label: "Support", color: "from-green-500 to-teal-500" },
    ];

    const features = [
        "Premium Quality Products",
        "Lifetime Free Updates",
        "24/7 Dedicated Support",
        "100% Money Back Guarantee"
    ];

    return (
        <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 font-poppins relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secendery/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
                        <HiSparkles className="text-lg" />
                        Our Achievements
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-gray-900 mb-6 leading-tight">
                        Trusted by <span className="bg-gradient-to-r from-primary to-secendery bg-clip-text text-transparent">Thousands</span> Worldwide
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Join our growing community of satisfied clients who have transformed their online presence with our premium products.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                <stat.icon className="text-2xl text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-1">{stat.value}</h3>
                            <p className="text-gray-500 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }}></div>
                    </div>

                    {/* Gradient Orbs */}
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secendery/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 p-8 md:p-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <h3 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-6">
                                    Ready to Build Your
                                    <span className="block mt-2 bg-gradient-to-r from-primary to-secendery bg-clip-text text-transparent">
                                        Dream Project?
                                    </span>
                                </h3>
                                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                                    Start building your professional website today with our premium templates and join thousands of satisfied customers worldwide.
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <FaCheckCircle className="text-green-400" />
                                            <span className="text-white/80 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/websites"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secendery text-white font-outfit font-bold rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all group"
                                    >
                                        Get Started Now
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-outfit font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>

                            {/* Right Content - Stats Card */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <div className="text-center mb-6">
                                    <p className="text-white/60 text-sm mb-2">Join our community of</p>
                                    <h4 className="text-5xl md:text-6xl font-outfit font-bold text-white">50,000+</h4>
                                    <p className="text-white/60 text-lg mt-2">Happy Customers</p>
                                </div>

                                <div className="h-px bg-white/10 my-6"></div>

                                {/* Mini Stats */}
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <p className="text-2xl font-outfit font-bold text-white">4.9</p>
                                        <p className="text-white/50 text-xs">Rating</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-outfit font-bold text-white">120+</p>
                                        <p className="text-white/50 text-xs">Countries</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-outfit font-bold text-white">99%</p>
                                        <p className="text-white/50 text-xs">Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLast;