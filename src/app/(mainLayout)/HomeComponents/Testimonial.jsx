/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      testimonial: "ExtrainWeb transformed our online presence completely. Their templates are not just beautiful, they're highly functional and helped us increase our conversion rate by 40%. Outstanding service!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Creative Director",
      testimonial: "As a design professional, I'm very particular about quality. ExtrainWeb exceeded all my expectations. The attention to detail, clean code, and responsive design are simply exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, EcoLiving",
      testimonial: "We needed a website that reflected our brand values and ExtrainWeb delivered beyond our wildest dreams. The team was professional, responsive, and truly understood our vision.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Marketing Director",
      testimonial: "The quality of templates and the support team is incredible. We've been using ExtrainWeb for all our client projects. Highly recommend to any agency looking for premium solutions.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
  ];

  const goToSlide = (index, dir = 'next') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      goToSlide(nextIndex, 'next');
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    goToSlide(nextIndex, 'next');
  };

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    goToSlide(prevIndex, 'prev');
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-gray-50/30 to-white font-poppins relative overflow-hidden">
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
            <HiSparkles className="text-lg" />
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-gray-900 mb-6 leading-tight">
            What Our <span className="bg-gradient-to-r from-primary to-secendery bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what professionals and businesses say about their experience with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden min-h-[350px]">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <FaQuoteLeft className="text-8xl text-primary" />
            </div>

            {/* Gradient Border Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secendery to-primary"></div>

            {/* Content with Animation */}
            <div
              className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-500 ease-out ${isAnimating
                  ? `opacity-0 ${direction === 'next' ? 'translate-x-12' : '-translate-x-12'}`
                  : 'opacity-100 translate-x-0'
                }`}
            >
              {/* Image */}
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-primary to-secendery rounded-xl flex items-center justify-center shadow-lg">
                  <FaQuoteLeft className="text-white text-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`w-5 h-5 transition-all duration-300 ${index < testimonials[activeIndex].rating
                          ? 'text-yellow-400 scale-100'
                          : 'text-gray-300 scale-90'
                        }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[activeIndex].testimonial}"
                </blockquote>

                {/* Author */}
                <div>
                  <h4 className="font-outfit font-bold text-gray-900 text-xl">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 disabled:opacity-50 hover:scale-110"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index, index > activeIndex ? 'next' : 'prev')}
                  disabled={isAnimating}
                  className={`h-3 rounded-full transition-all duration-500 ${index === activeIndex
                      ? 'bg-gradient-to-r from-primary to-secendery w-10'
                      : 'bg-gray-200 hover:bg-gray-300 w-3'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 disabled:opacity-50 hover:scale-110"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              onClick={() => goToSlide(index, index > activeIndex ? 'next' : 'prev')}
              disabled={isAnimating}
              className={`p-4 rounded-2xl border transition-all duration-500 transform hover:scale-105 ${index === activeIndex
                  ? 'bg-gradient-to-r from-primary to-secendery text-white border-transparent shadow-lg scale-105'
                  : 'bg-white border-gray-100 hover:border-primary/30 hover:shadow-md'
                }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className={`w-10 h-10 rounded-full object-cover transition-all duration-300 ${index === activeIndex ? 'ring-2 ring-white/50' : ''
                    }`}
                />
                <div className="text-left">
                  <p className={`font-outfit font-bold text-sm transition-colors duration-300 ${index === activeIndex ? 'text-white' : 'text-gray-900'
                    }`}>
                    {t.name.split(' ')[0]}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-2.5 h-2.5 transition-colors duration-300 ${index === activeIndex ? 'text-white/80' : 'text-yellow-400'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;