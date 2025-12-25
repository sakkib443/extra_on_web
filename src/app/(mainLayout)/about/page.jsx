"use client";
import React from 'react';
import { FaUsers, FaGlobe, FaAward, FaHandshake, FaRocket, FaCode, FaLaptopCode, FaCheckCircle, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import Link from 'next/link';

const About = () => {
  const stats = [
    { icon: FaGlobe, value: "500+", label: "Websites Listed", color: "from-blue-500 to-cyan-500" },
    { icon: FaUsers, value: "50K+", label: "Happy Customers", color: "from-purple-500 to-pink-500" },
    { icon: FaAward, value: "100+", label: "Categories", color: "from-orange-500 to-red-500" },
    { icon: FaHandshake, value: "99%", label: "Satisfaction Rate", color: "from-green-500 to-teal-500" },
  ];

  const values = [
    { icon: HiSparkles, title: "Quality First", description: "Every product is hand-picked and verified for quality" },
    { icon: FaHandshake, title: "Trust & Transparency", description: "Clear pricing, no hidden fees, honest reviews" },
    { icon: FaUsers, title: "Community Driven", description: "Built by developers, for developers" },
    { icon: HiLightningBolt, title: "Fast Support", description: "24/7 dedicated support team at your service" },
  ];

  const team = [
    { name: "John Smith", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" },
    { name: "Sarah Johnson", role: "Head of Design", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" },
    { name: "Mike Chen", role: "Lead Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
    { name: "Emily Davis", role: "Customer Success", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secendery/20 via-purple-400/10 to-transparent rounded-full blur-3xl"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-[10%] text-primary/15 animate-bounce hidden md:block" style={{ animationDuration: '3s' }}>
          <FaCode className="text-4xl" />
        </div>
        <div className="absolute top-32 right-[15%] text-secendery/15 animate-bounce hidden md:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <FaLaptopCode className="text-5xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-gray-900 mb-6">
            Building the Future of
            <span className="block mt-2 bg-gradient-to-r from-primary via-blue-500 to-secendery bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-poppins max-w-3xl mx-auto leading-relaxed">
            Empowering creators and businesses with premium digital solutions. We connect talented developers with companies seeking exceptional websites and software.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 font-poppins text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secendery/10 text-secendery font-semibold text-sm rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-6">
                ExtrainWeb is a leading marketplace dedicated to connecting talented developers, designers, and entrepreneurs with businesses seeking premium digital products.
              </p>
              <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-8">
                Founded with the vision to democratize digital ownership, we provide tools and resources to help our community thrive in the digital economy. Every product on our platform goes through rigorous quality checks.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full">
                  <FaCheckCircle />
                  <span className="font-medium text-sm">Verified Products</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                  <FaCheckCircle />
                  <span className="font-medium text-sm">Secure Transactions</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                  <FaCheckCircle />
                  <span className="font-medium text-sm">Lifetime Updates</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
                <FaQuoteLeft className="text-4xl text-primary/20 mb-4" />
                <p className="text-gray-700 font-poppins text-lg leading-relaxed mb-6">
                  "Our mission is to create a seamless, trustworthy marketplace where innovation meets opportunity. We empower creators to monetize their work."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secendery rounded-full flex items-center justify-center">
                    <FaRocket className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-outfit font-bold text-gray-900">ExtrainWeb Team</p>
                    <p className="text-gray-500 text-sm">Founded 2020</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-secendery/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secendery/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-2xl text-primary" />
                </div>
                <h3 className="font-outfit font-bold text-gray-900 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 font-poppins text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secendery/10 text-secendery font-semibold text-sm rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-4">
              Meet the Experts
            </h2>
            <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
              Passionate individuals dedicated to delivering the best digital products and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secendery/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-outfit font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-gray-500 font-poppins text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secendery rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 font-poppins text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of creators and businesses on our platform. Start exploring premium digital products today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/websites" className="px-8 py-4 bg-white text-primary font-outfit font-bold rounded-xl hover:shadow-lg transition-all">
                  Browse Products
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-outfit font-bold rounded-xl hover:bg-white/20 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;