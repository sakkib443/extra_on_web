"use client";
import React from "react";
import { FaStar, FaProjectDiagram, FaBuilding, FaUserTie, FaSmile } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <section className="w-full font-poppins relative overflow-hidden">

      {/* Soft background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#f1f1f1] rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#e8e8e8] rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative flex items-center justify-center">

          <h1 className="text-[180px] lg:text-[220px] font-outfit font-black text-[#0A3029] leading-none select-none">
            15+
          </h1>

          {/* Tag 1 */}
          <span className="absolute top-16 left-20 bg-[#FF8B2E] text-white px-4 py-1 rounded-full text-sm shadow-md font-medium animate-pulse">
            Optimization
          </span>

          {/* Tag 2 */}
          <span className="absolute top-[55%] left-[28%] bg-[#C9FFCF] text-[#0A3029] px-4 py-1 rounded-full text-sm shadow-md font-medium">
            Evaluation
          </span>

          {/* Tag 3 */}
          <span className="absolute top-[64%] left-[52%] bg-[#ececeb] text-[#0A3029] px-4 py-1 rounded-full text-sm shadow-md font-medium">
            Consultation
          </span>

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex flex-col justify-center">

          <button className="px-6 py-2 bg-white border rounded-full shadow-md w-[150px] text-sm mb-6 font-semibold hover:shadow-lg transition-all">
            What I Do
          </button>

          <h2 className="text-4xl font-outfit font-bold text-[#0A3029] mb-6 leading-tight">
            We’re Aleric IT <br /> Solutions Agency
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-5">
            <h3 className="text-4xl font-outfit font-bold text-[#0A3029]">4.9</h3>
            <p className="text-gray-600">( 24 review )</p>

            <div className="flex text-yellow-500 text-lg">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>

            <span className="text-gray-700 text-sm">Average Rating</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6 text-[14px] font-poppins">
            “Aleric delivered exactly what we needed — efficient, reliable, and 
            results-driven solutions. We’ve seen measurable improvements since 
            partnering with them. We bring ideas to life with creativity, precision, 
            and real business impact.”
          </p>

          {/* Author */}
          <div>
            <h4 className="font-bold text-[#0A3029] text-xl font-outfit">John Doe</h4>
            <p className="text-gray-600">CEO, InnovateTech</p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM STATS ================= */}
    
    </section>
  );
};

export default HomeAbout;
