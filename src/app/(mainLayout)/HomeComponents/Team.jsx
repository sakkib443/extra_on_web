"use client";
import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

const teamMembers = [
  {
    name: "James Carter",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Sarah Johnson",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "David Wilson",
    role: "Marketing Lead",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
];

const OurTeam = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden font-poppins">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secendery/5 rounded-full blur-3xl"></div>

      {/* Stroke Text Background */}
      <h1
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-poppins font-extrabold select-none pointer-events-none uppercase whitespace-nowrap"
        style={{
          WebkitTextStroke: '1px rgba(0,0,0,0.03)',
          color: 'transparent',
          letterSpacing: '-0.05em'
        }}
      >
        OUR TEAM
      </h1>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* LEFT FIXED CONTENT */}
          <div className="lg:col-span-2 self-start">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
                <HiSparkles className="text-lg" />
                Meet Our Team
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-gray-900 leading-tight mb-6">
                Our Expert Team
                <span className="block mt-2 bg-gradient-to-r from-primary to-secendery bg-clip-text text-transparent">
                  Ready To Help
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-base mb-8 max-w-md">
                We're a passionate team of designers, developers, and digital enthusiasts committed to delivering exceptional products and experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-2xl font-outfit font-bold text-gray-900">15+</p>
                  <p className="text-xs text-gray-500">Team Members</p>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-2xl font-outfit font-bold text-gray-900">8+</p>
                  <p className="text-xs text-gray-500">Years Exp.</p>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <p className="text-2xl font-outfit font-bold text-gray-900">50+</p>
                  <p className="text-xs text-gray-500">Countries</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secendery text-white font-outfit font-bold rounded-xl shadow-lg shadow-primary/30 hover:opacity-90 transition-all group"
              >
                Join Our Team
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((person, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={person.img}
                      className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={person.name}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Social Links */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        <a
                          href={person.social.linkedin}
                          className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all"
                        >
                          <FaLinkedinIn className="text-sm" />
                        </a>
                        <a
                          href={person.social.twitter}
                          className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all"
                        >
                          <FaTwitter className="text-sm" />
                        </a>
                        <a
                          href={person.social.github}
                          className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all"
                        >
                          <FaGithub className="text-sm" />
                        </a>
                      </div>
                    </div>

                    {/* Gradient Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secendery transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">
                    <h3 className="font-outfit font-bold text-gray-900 text-lg mb-1">
                      {person.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
