import React from 'react';
import { FaUsers, FaGlobe, FaAward, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secendery text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Extrainweb</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Empowering creators and businesses by providing a premier platform for buying and selling high-quality websites.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Extrainweb is a leading marketplace dedicated to connecting talented developers, designers, and entrepreneurs with businesses seeking premium websites. Our platform offers a curated selection of websites across various industries, ensuring quality, innovation, and reliability.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded with the vision to democratize web ownership, we provide tools and resources to help our community thrive in the digital economy.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaAward className="text-primary mr-3" />
                  <span className="text-gray-700">Quality & Innovation</span>
                </li>
                <li className="flex items-center">
                  <FaHandshake className="text-primary mr-3" />
                  <span className="text-gray-700">Trust & Transparency</span>
                </li>
                <li className="flex items-center">
                  <FaUsers className="text-primary mr-3" />
                  <span className="text-gray-700">Community First</span>
                </li>
                <li className="flex items-center">
                  <FaGlobe className="text-primary mr-3" />
                  <span className="text-gray-700">Global Reach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Websites Listed</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">10,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Categories</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">99%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To create a seamless, trustworthy marketplace where innovation meets opportunity. We strive to empower creators to monetize their work and help businesses find the perfect digital solutions to drive their success.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or need support? We&apos;re here to help.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">support@extrainweb.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">123 Web Street, Digital City, DC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;