"use client";
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt, HiChat, HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: FaPhone, title: "Phone", lines: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM EST"] },
    { icon: FaEnvelope, title: "Email", lines: ["support@extrainweb.com", "sales@extrainweb.com"] },
    { icon: FaMapMarkerAlt, title: "Office", lines: ["123 Web Street", "Digital City, DC 12345"] },
    { icon: FaClock, title: "Business Hours", lines: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"] },
  ];

  const features = [
    { icon: HiLightningBolt, text: "Fast Response Time" },
    { icon: HiChat, text: "24/7 Support Available" },
    { icon: HiSparkles, text: "Expert Team" },
    { icon: HiMail, text: "Secure & Confidential" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secendery/20 via-purple-400/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-gray-900 mb-6">
            Get in
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secendery bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-poppins max-w-2xl mx-auto leading-relaxed">
            Have questions or need support? We're here to help you with any questions about our products and services.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-outfit font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-500 font-poppins mb-8">Fill out the form below and we'll get back to you shortly.</p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <p className="text-green-700 font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secendery text-white py-4 px-6 rounded-xl font-outfit font-bold transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-outfit font-bold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-500 font-poppins">Choose the most convenient way to reach us.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secendery/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="text-xl text-primary" />
                    </div>
                    <h3 className="font-outfit font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-gray-500 font-poppins text-sm">{line}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                <h3 className="font-outfit font-bold text-white text-lg mb-4 relative z-10">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="text-primary text-sm" />
                      </div>
                      <span className="text-white/90 font-poppins text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-outfit font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-4 overflow-hidden">
            <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secendery/5 flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-6xl text-primary/30 mx-auto mb-4" />
                <p className="text-gray-500 font-poppins">Map would be integrated here</p>
                <p className="text-gray-400 font-poppins text-sm">123 Web Street, Digital City, DC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-secendery/10 text-secendery font-semibold text-sm rounded-full mb-4">
            Have Questions?
          </span>
          <h2 className="text-2xl md:text-3xl font-outfit font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 font-poppins mb-8">
            Can't find what you're looking for? Feel free to send us a message above.
          </p>
          <div className="grid gap-4 text-left">
            {[
              { q: "What is the average response time?", a: "We typically respond to all inquiries within 24 hours during business days." },
              { q: "Do you offer phone support?", a: "Yes! Our phone support is available Monday to Friday, 9AM to 6PM EST." },
              { q: "Can I schedule a demo?", a: "Absolutely! Contact us and we'll schedule a personalized demo for you." },
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-outfit font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 font-poppins text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;