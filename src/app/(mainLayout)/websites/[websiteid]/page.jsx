"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar, FaDownload, FaShoppingCart, FaHeart, FaShare, FaEye, FaCode, FaPalette, FaRocket, FaCheck, FaArrowLeft, FaGlobe, FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

export default function WebsiteDetails() {
  const { websiteid } = useParams();
  const [website, setWebsite] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/websites.json");
        const data = await res.json();
        const singleData = data.find((item) => item.id == websiteid);
        setWebsite(singleData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (websiteid) {
      fetchData();
    }
  }, [websiteid]);

  // Loading state handling
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 font-poppins font-medium">Loading website details...</p>
        </div>
      </div>
    );
  }

  // Jodi website na pawa jay
  if (!website) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCode className="text-red-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-outfit font-bold text-gray-800 mb-2">Website not found!</h2>
          <p className="text-gray-600 font-poppins mb-6">The website you're looking for doesn't exist.</p>
          <Link href="/websites" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-poppins font-medium hover:bg-secendery transition-all duration-300 shadow-lg hover:shadow-xl">
            <FaArrowLeft /> Go back to websites
          </Link>
        </div>
      </div>
    );
  }

  const favoriteClass = isFavorite
    ? 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-poppins font-medium transition-all border bg-red-50 text-red-600 border-red-200 shadow-sm'
    : 'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-poppins font-medium transition-all border bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:shadow-sm';

  const favoriteText = isFavorite ? 'Favorited' : 'Add to Favorites';

  // Mock gallery images (you can replace with actual gallery data)
  const galleryImages = [website.image, website.image, website.image, website.image];

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/websites" className="inline-flex items-center gap-3 text-primary hover:text-blue-700 transition-all duration-300 font-poppins font-medium text-lg group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <FaArrowLeft className="text-sm" />
            </div>
            Back to Websites
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SECTION - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative">
                <Image
                  src={galleryImages[activeImage]}
                  alt={website.title}
                  width={900}
                  height={500}
                  className="w-full h-[400px] object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-primary text-sm font-bold rounded-full shadow-lg">
                    {website.category}
                  </span>
                  <span className="px-4 py-2 bg-black/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {website.projectType}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300">
                    <FaHeart className="text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 border-t border-gray-100">
                <div className="flex gap-3 overflow-x-auto">
                  {galleryImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === index ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image src={img} alt={`View ${index + 1}`} width={80} height={80} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: FaHeart, value: '2.1K', label: 'Likes', color: 'text-red-500' },
                { icon: FaDownload, value: website.sales, label: 'Downloads', color: 'text-blue-500' },
                { icon: FaStar, value: website.rating, label: 'Rating', color: 'text-yellow-500' },
                { icon: FaEye, value: '15.2K', label: 'Views', color: 'text-green-500' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`text-2xl ${stat.color} group-hover:scale-110 transition-transform`} />
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <p className="text-2xl font-outfit font-bold text-gray-800 mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-poppins font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Enhanced Description */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FaCode className="text-primary text-lg" />
                  </div>
                  <h2 className="text-2xl font-outfit font-bold text-gray-800">About This Template</h2>
                </div>
                <p className="text-gray-600 font-poppins text-lg leading-relaxed mb-6">{website.description}</p>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <FaRocket className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-outfit font-semibold text-gray-800 mb-1">Performance Optimized</h3>
                      <p className="text-sm text-gray-600 font-poppins">Built with modern technologies for lightning-fast loading</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <FaMobileAlt className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-outfit font-semibold text-gray-800 mb-1">Fully Responsive</h3>
                      <p className="text-sm text-gray-600 font-poppins">Perfect display on all devices and screen sizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARD - Purchase Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 sticky top-6 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <FaGlobe className="text-white text-lg" />
                  </div>
                  <div>
                    <h1 className="text-xl font-outfit font-bold text-gray-900 leading-tight">{website.title}</h1>
                    <p className="text-sm text-gray-500 font-poppins">by <span className="font-semibold text-primary">{website.author}</span></p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-sm ${i < Math.floor(website.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{website.rating} ({website.reviews} reviews)</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="p-6 bg-primary/5">
                <div className="text-center">
                  <p className="text-sm text-gray-500 font-poppins font-bold uppercase mb-2">Special Offer</p>
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <h2 className="text-5xl font-outfit font-black text-primary">${website.offerPrice}</h2>
                    <p className="line-through text-gray-400 text-xl font-poppins">${website.price}</p>
                  </div>
                  <p className="text-sm text-green-600 font-poppins font-medium">Save ${(website.price - website.offerPrice).toFixed(2)}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 space-y-4">
                <button className="w-full bg-primary hover:bg-secendery text-white py-4 rounded-xl font-outfit font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300">
                  <FaShoppingCart className="inline mr-2" />
                  Buy Now
                </button>

                <div className="flex gap-3">
                  <button onClick={() => setIsFavorite(!isFavorite)} className={favoriteClass}>
                    <FaHeart className="text-sm" /> {favoriteText}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-poppins font-medium bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                    <FaShare className="text-sm" /> Share
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="px-6 pb-6 space-y-6">
                {/* Meta Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-500 font-poppins font-medium mb-1">Platform</p>
                    <p className="font-outfit font-semibold text-gray-800">{website.platform}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-gray-500 font-poppins font-medium mb-1">Access</p>
                    <p className="font-outfit font-semibold text-gray-800">{website.accessType}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="font-outfit font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {website.features?.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-600 font-poppins">
                        <FaCheck className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-outfit font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCode className="text-primary" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {website.technologies?.map((tech, index) => (
                      <span key={index} className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-poppins font-medium border border-primary/20 hover:shadow-sm transition-shadow">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}