"use client";
import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaArrowUp, FaHeart } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const offices = [
    { name: "UAE (HQ)", address: "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E." },
    { name: "Malaysia", address: "Jalan P. Ramlee, Kuala Lumpur, 50250 Kuala Lumpur, Malaysia" },
    { name: "Bangladesh", address: "6th Floor, The Pearl Trade Center, 3 Pragati Sarani, Dhaka 1212" },
    { name: "Sri Lanka", address: "Level 24, East Tower, World Trade Center, Colombo 1, Sri Lanka" },
    { name: "Cyprus", address: "26 Pittalou str. Agia Fyla, Limassol, 3118, Cyprus" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Websites", href: "/websites" },
    { name: "Software", href: "/softwere" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secendery/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        {/* Big Company Name */}
        <div className="text-center mb-16 relative">
          {/* Floating Animated Elements */}
          <div className="absolute -top-8 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-0 right-1/3 w-3 h-3 bg-secendery/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
          <div className="absolute -bottom-4 left-1/3 w-5 h-5 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -left-4 w-3 h-3 bg-secendery/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute top-1/2 -right-4 w-4 h-4 bg-primary/25 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
          <div className="absolute -top-4 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/5 w-2 h-2 bg-secendery/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

          <h1 className="text-7xl md:text-[140px] lg:text-[180px] font-poppins font-extrabold leading-none tracking-tight select-none uppercase relative">
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '2px #9ca3af' }}
            >EXTRA</span>
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '2px #6b7280' }}
            >IN</span>
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '2px #66B3FF' }}
            >WEB</span>
          </h1>
          <p className="mt-6 text-gray-500 font-poppins text-lg max-w-xl mx-auto">
            Premium Website Templates & Digital Products
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {offices.map((office, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-secendery rounded-full"></div>
                <h3 className="font-outfit font-bold text-gray-900 text-sm uppercase tracking-wider">
                  {office.name}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {office.address}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-10">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gradient-to-r hover:from-primary hover:to-secendery hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <social.icon className="text-sm" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm font-bold text-gray-700 uppercase tracking-wider hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gradient-to-r hover:from-primary hover:to-secendery hover:text-white hover:border-transparent transition-all duration-300"
          >
            <span className="text-sm font-medium">Top</span>
            <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 <span className="font-bold text-gray-900">ExtrainWeb Ltd.</span> All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Made with <FaHeart className="text-red-500" /> in Bangladesh
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;