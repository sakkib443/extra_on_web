/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaQuoteLeft, FaStar, FaShareAlt } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      testimonial: "ExtraWeb transformed our online presence completely. Their templates are not just beautiful, they're highly functional and helped us increase our conversion rate by 40%. Outstanding service and support!",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Creative Director",
      testimonial: "As a design professional, I'm very particular about quality. ExtraWeb exceeded all my expectations. The attention to detail, the clean code, and the responsive design are simply exceptional.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, EcoLiving",
      testimonial: "We needed a website that reflected our brand values and ExtraWeb delivered beyond our wildest dreams. The team was professional, responsive, and truly understood our vision.",
      rating: 5,
      avatar: "ER"
    },
   
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-white font-poppins relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#f1f1f1] rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e8e8e8] rounded-full blur-3xl opacity-40"></div>

      {/* Stroke Text Background */}
      <h1 className="stroke-text absolute right-10 top-16 select-none -z-10 text-right">
        TESTIMONIALS
      </h1>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <button className="px-6 py-2 bg-[#E3FFE9] text-[#0A3029] rounded-full text-sm font-semibold mb-6 hover:bg-[#d1f7d4] transition-colors">
            Client Reviews
          </button>

          <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-[#0A3029] mb-6 leading-tight">
            What Our <span className="text-primary">Clients Say</span> About Us
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry professionals and businesses
            have to say about their experience with ExtraWeb templates and services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative group"
            >

              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <FaQuoteLeft className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-500 leading-relaxed mb-8  font-medium">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-[#4a90e2] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-md mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-[#0A3029] text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>

                {/* Share Button */}
                <button className="w-10 h-10 bg-gray-100 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <FaShareAlt className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#0A3029]/5 to-transparent rounded-tr-full"></div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default Testimonial;