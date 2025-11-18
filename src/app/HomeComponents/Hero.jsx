"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

// Make sure these image paths are correct for your project
import mainImg from "../../images/banner_img02.png";
import side1 from "../../images/image.webp";
import side2 from "../../images/image1.webp"; // Changed back to 'image1.webp'

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;
    const x = (clientX / offsetWidth) - 0.5;
    const y = (clientY / offsetHeight) - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const parallaxStyle = (intensity) => ({
    transform: `translate3d(${mousePos.x * intensity}px, ${mousePos.y * intensity}px, 0)`,
    // This transition is for the parallax movement
    transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
  });


  return (
    <div
      className="w-full bg-white h-[90vh] flex flex-col items-center justify-center text-center relative overflow-hidden px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* --- Background Animation Blobs --- */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-100 rounded-full opacity-50 blur-3xl animate-pulse"
        style={{ animationDuration: '6s', zIndex: 0 }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full opacity-50 blur-3xl animate-pulse"
        style={{ animationDuration: '8s', animationDelay: '2s', zIndex: 0 }}
      ></div>

      {/* Text Content Container (No Parallax) */}
      <div className="relative z-10">
        <h1 className="text-3xl font-outfit md:text-5xl lg:text-5xl font-bold text-black leading-tight">
         Professional Themes & <br />  Website Templates for your project
        </h1>
        <p className="mt-4 font-poppins text-gray-600 text-[14px] max-w-3xl text-center mx-auto">
          The best solution to build Digital Agency & Portfolio website to showcase your portfolio
        </p>
      </div>

      {/* Search Bar Container (No Parallax) */}
      <div className="relative z-10 mt-8 w-full max-w-xl ">
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <IoSearch size={24} className="text-gray-500 ml-4" />
          <input
            type="text"
            placeholder="Search your services..."
            className="flex-1 py-3 px-4 text-gray-700 text-base focus:outline-none bg-transparent"
          />
          <button className="bg-primary text-white font-semibold px-4 py-2 cursor-pointer rounded-full mr-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            Search
          </button>
        </div>
      </div>


      {/* --- ⭐️ Images Container (CHANGED SECTION) ⭐️ --- */}
      <div className="relative w-full max-w-6xl mt-12 flex justify-center items-center z-10">
        
        {/* Center Image */}
        {/* MOVED: style={parallaxStyle(5)} to this new outer wrapper div */}
        <div
          className="relative z-20"
          style={parallaxStyle(5)}
        >
          {/* This inner div now handles all hover animations & transitions */}
          <div className="w-72 md:w-96 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105">
            <Image src={mainImg} alt="Main" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Left Image */}
        {/* MOVED: style={parallaxStyle(20)} and positioning to this new outer wrapper div */}
        <div
          className="absolute left-2 md:left-30 top-8 md:top-12 opacity-80"
          style={parallaxStyle(20)}
        >
          {/* This inner div handles hover animations. ADDED: hover:scale-105 */}
          <div className="w-56 md:w-72 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:-rotate-3 hover:-translate-y-2 hover:scale-105">
            <Image src={side1} alt="Side 1" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right Image */}
        {/* MOVED: style={parallaxStyle(20)} and positioning to this new outer wrapper div */}
        <div
          className="absolute right-2 md:right-30 top-8 md:top-12 opacity-80"
          style={parallaxStyle(20)}
        >
          {/* This inner div handles hover animations. ADDED: hover:scale-105 */}
          <div className="w-56 md:w-72 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:rotate-3 hover:-translate-y-2 hover:scale-105">
            <Image src={side2} alt="Side 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* --- ⭐️ End of Changed Section ⭐️ --- */}


      {/* Optional Bottom Decoration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-40 md:h-60 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
}