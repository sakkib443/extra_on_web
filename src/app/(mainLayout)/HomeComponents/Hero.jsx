"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import bgImage from '../../../images/grid-bg.png';
import mainImg from "../../../images/banner_img02.png";
import side1 from "../../../images/image.webp";
import side2 from "../../../images/image1.webp";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [searchTerm, setSearchTerm] = useState("");
  const [particles, setParticles] = useState([]);
  const router = useRouter();

  const categories = ["All Services", "Web Design", "Graphic Design", "SEO", "Marketing"];

  // Generate elegant floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.2,
          color: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'][Math.floor(Math.random() * 4)]
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // Animate particles smoothly
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    };

    const interval = setInterval(animateParticles, 150);
    return () => clearInterval(interval);
  }, []);

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/websites?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const parallaxStyle = (intensity) => ({
    transform: `translate3d(${mousePos.x * intensity}px, ${mousePos.y * intensity}px, 0)`,
    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  });

  return (
    <div
      style={{ backgroundImage: `url(${bgImage.src})` }}
      className="w-full bg-white h-[90vh] flex flex-col items-center justify-center text-center relative overflow-hidden px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 via-blue-400/15 to-cyan-400/15 animate-gradient-elegant"></div>

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float-elegant"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 0.3}s`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}30`
          }}
        />
      ))}

      {/* Elegant Geometric Shapes */}
      <div className="absolute top-20 left-20 w-24 h-24 border-2 border-purple-300/20 rounded-full animate-spin-elegant"></div>
      <div className="absolute top-40 right-32 w-20 h-20 bg-cyan-200/15 rounded-lg animate-bounce-elegant"></div>
      <div className="absolute bottom-32 left-40 w-16 h-16 bg-yellow-200/15 transform rotate-45 animate-pulse-elegant"></div>
      <div className="absolute bottom-40 right-20 w-28 h-28 border-2 border-green-300/20 rounded-full animate-rotate-elegant"></div>

      {/* Smooth Morphing Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full opacity-50 blur-3xl animate-morph-elegant-1" style={{ zIndex: 0 }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full opacity-50 blur-3xl animate-morph-elegant-2" style={{ zIndex: 0 }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/15 to-yellow-400/15 rounded-full opacity-40 blur-2xl animate-morph-elegant-3" style={{ zIndex: 0 }}></div>

      {/* Elegant Wave Animations */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/85 to-transparent">
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="fill-white animate-wave-elegant-1" points="2560 0 2560 100 0 100"></polygon>
        </svg>
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="fill-white/65 animate-wave-elegant-2" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>

      {/* Subtle Glowing Orbs */}
      <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-purple-500 rounded-full animate-glow-elegant-1 shadow-lg shadow-purple-500/30"></div>
      <div className="absolute top-2/3 right-1/6 w-5 h-5 bg-cyan-500 rounded-full animate-glow-elegant-2 shadow-lg shadow-cyan-500/30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-glow-elegant-3 shadow-lg shadow-yellow-500/30"></div>

      {/* Text */}
      <div className="relative z-10">
        <h1 className="text-3xl font-outfit md:text-5xl lg:text-5xl font-bold text-black leading-tight">
          <span className="text-primary">Professional</span> <span className="">Themes & </span><br /> Website Templates for your project
        </h1>
        <p className="mt-4 font-poppins text-gray-600 text-[14px] max-w-3xl text-center mx-auto">
          The best solution to build Digital Agency & Portfolio website to showcase your portfolio
        </p>
      </div>

      {/* Search Bar with Category */}
      <div className="relative z-10 mt-8 w-full max-w-xl">
        <form onSubmit={handleSearch} className="flex items-center bg-white border border-gray-300 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">

          {/* Category Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center px-4 py-3 text-gray-700 font-medium focus:outline-none"
            >
              {selectedCategory}
              <span className="ml-2">&#9662;</span>
            </button>
            {categoryOpen && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-20">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setCategoryOpen(false); }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <IoSearch size={24} className="text-gray-500 ml-2" />
          <input
            type="text"
            placeholder="Search your services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 py-3 px-4 text-gray-700 text-base focus:outline-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-4 py-2 cursor-pointer rounded-full mr-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Search
          </button>
        </form>
      </div>

      {/* Images Container */}
      <div className="relative w-full max-w-6xl mt-12 flex justify-center items-center z-10">
        <div className="relative z-20" style={parallaxStyle(5)}>
          <div className="w-72 md:w-96 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105">
            <Image src={mainImg} alt="Main" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute left-2 md:left-30 top-8 md:top-12 opacity-80" style={parallaxStyle(20)}>
          <div className="w-56 md:w-72 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:-rotate-3 hover:-translate-y-2 hover:scale-105">
            <Image src={side1} alt="Side 1" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute right-2 md:right-30 top-8 md:top-12 opacity-80" style={parallaxStyle(20)}>
          <div className="w-56 md:w-72 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:rotate-3 hover:-translate-y-2 hover:scale-105">
            <Image src={side2} alt="Side 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-40 md:h-60 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
    </div>
  );
}
