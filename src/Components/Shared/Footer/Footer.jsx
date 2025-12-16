import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-20 pb-10 border-t border-gray-100 font-poppins" style={{ fontFamily: 'var(--font-poppins)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* ✅ BIG COMPANY NAME - Extra Large & Spaced */}
        <div className="text-center mb-20">
          <h1 
            className="text-6xl md:text-[140px] font-outfit font-extrabold text-gray-700 uppercase leading-none"
          
          >
            Extra IN <span className="text-primary">Web</span>
          </h1>
        </div>

        {/* ✅ OFFICE LOCATIONS - Increased Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-widest ">NEXT UAE (HQ)</h3>
            <p className="text-gray-500   text-[15px]">
              Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-widest ">NEXT Malaysia</h3>
            <p className="text-gray-500   text-[15px]">
              Jalan P. Ramlee, Kuala Lumpur, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-widest ">NEXT Bangladesh</h3>
            <p className="text-gray-500   text-[15px]">
              6th & 8th Floor, Cha-90, The Pearl Trade Center, 3 Pragati Sarani, Dhaka 1212
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-widest ">NEXT VENTURES LANKA (PVT) LTD</h3>
            <p className="text-gray-500   text-[15px]">
              Level 24, East Tower, World Trade Center, Echelon Square, Colombo 1, Sri Lanka
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="font-bold text-gray-900 uppercase tracking-widest ">NEXT Cyprus</h3>
            <p className="text-gray-500   text-[15px]">
              26 Pittalou str. Agia Fyla, Limassol, 3118, Cyprus
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-gray-100 w-full mb-10" />

        {/* ✅ BOTTOM BAR: SOCIALS & LINKS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Icons */}
          <div className="flex items-center gap-8 text-xl text-black">
            <a href="#" className="hover:text-[#66B3FF] transition-all transform hover:scale-110"><FaYoutube /></a>
            <a href="#" className="hover:text-[#66B3FF] transition-all transform hover:scale-110"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-[#66B3FF] transition-all transform hover:scale-110"><FaInstagram /></a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-10 text-[14px] font-bold text-gray-900 uppercase tracking-tight">
            <Link href="#" className="hover:text-[#66B3FF] transition-colors">Life at EXTRA</Link>
            <Link href="#" className="hover:text-[#66B3FF] transition-colors">Career</Link>
            <Link href="#" className="hover:text-[#66B3FF] transition-colors">Contact us</Link>
            <Link href="#" className="hover:text-[#66B3FF] transition-colors">Join us</Link>
          </div>

          {/* Copyright */}
          <div className="text-[14px] text-gray-500 font-medium">
            2025 © <span className="text-black font-bold">EXTRA IN WEB Ltd.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;