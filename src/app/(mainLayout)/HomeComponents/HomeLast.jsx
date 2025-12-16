import React from 'react';

const HomeLast = () => {
    return (
        <section className="w-full bg-white font-poppins relative overflow-hidden py-20">

            {/* Background Elements */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#f1f1f1] rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e8e8e8] rounded-full blur-3xl opacity-40"></div>

            {/* Stroke Text Background */}
            <h1 className="stroke-text absolute right-10 top-16 select-none -z-10 text-right">
                STATS
            </h1>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <button className="px-6 py-2 bg-[#E3FFE9] text-[#0A3029] rounded-full text-sm font-semibold mb-6 hover:bg-[#d1f7d4] transition-colors">
                        Our Achievements
                    </button>

                    <h2 className="text-4xl lg:text-5xl font-outfit font-bold text-[#0A3029] mb-6 leading-tight">
                        Trusted by <span className="text-primary">Thousands</span> Worldwide
                    </h2>

                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Join our growing community of satisfied clients who have transformed their online presence
                        with our premium website templates and exceptional service.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#4a90e2] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <span className="text-2xl font-bold text-white">10K+</span>
                        </div>
                        <h3 className="text-2xl font-outfit font-bold text-[#0A3029] mb-2">10,000+</h3>
                        <p className="text-gray-600 text-sm">Happy Clients</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0A3029] to-[#1a4a39] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <span className="text-2xl font-bold text-white">500+</span>
                        </div>
                        <h3 className="text-2xl font-outfit font-bold text-[#0A3029] mb-2">500+</h3>
                        <p className="text-gray-600 text-sm">Templates</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#FF8B2E] to-[#ff6b0a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <span className="text-2xl font-bold text-white">99%</span>
                        </div>
                        <h3 className="text-2xl font-outfit font-bold text-[#0A3029] mb-2">99%</h3>
                        <p className="text-gray-600 text-sm">Satisfaction</p>
                    </div>

                    <div className="text-center group">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#A777E3] to-[#8b5cf6] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <span className="text-2xl font-bold text-white">24/7</span>
                        </div>
                        <h3 className="text-2xl font-outfit font-bold text-[#0A3029] mb-2">24/7</h3>
                        <p className="text-gray-600 text-sm">Support</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-[#0A3029] to-[#1a4a39] rounded-3xl p-12 text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-3xl lg:text-4xl font-outfit font-bold mb-4">
                            Ready to Join Our Happy Clients?
                        </h3>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Start building your professional website today with our premium templates
                            and join thousands of satisfied customers worldwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-primary text-white font-outfit font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-600">
                                Get Started Now
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-outfit font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                View Templates
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeLast;