"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar, FaDownload, FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import Link from "next/link";

export default function WebsiteDetails() {
  const { websiteid } = useParams();
  // Initial state null rakha bhalo jate loading state handle kora jay
  const [website, setWebsite] = useState(null); 
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/websites.json");
        const data = await res.json();
        // ID string ba number hote pare, tai double equal (==) thik ache
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
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1AA59B]"></div>
        <p className="ml-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  // Jodi website na pawa jay
  if (!website) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Website not found!</h2>
        <Link href="/websites" className="text-[#1AA59B] underline mt-4 inline-block">
          Go back to list
        </Link>
      </div>
    );
  }

  const favoriteClass = isFavorite
    ? 'flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-medium transition-all border bg-red-100 text-red-600 border-red-200'
    : 'flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-medium transition-all border bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200';

  const favoriteText = isFavorite ? 'Favorited' : 'Add to Favorites';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/websites" className="inline-flex items-center gap-2 mb-6 text-[#1AA59B] hover:text-[#0e8a7f] transition-colors font-medium text-lg">
          ← Back to Websites
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ✅ LEFT SECTION */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md overflow-hidden">
              <Image
                src={website.image}
                alt={website.title}
                width={900}
                height={500}
                className="rounded-xl w-full object-cover hover:scale-[1.02] transition-transform duration-300"
                priority // Loading speed-er jonno
              />
            </div>

            {/* ✅ STATS BAR */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-white border border-gray-200 rounded-xl p-5 shadow-md">
              <div className="p-2 border-r border-gray-100 last:border-0">
                <FaHeart className="mx-auto text-[#1AA59B] mb-1" />
                <p className="font-semibold text-gray-800">2</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Likes</p>
              </div>
              <div className="p-2 border-r border-gray-100 last:border-0">
                <FaDownload className="mx-auto text-[#1AA59B] mb-1" />
                <p className="font-semibold text-gray-800">{website.sales}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Sales</p>
              </div>
              <div className="p-2 border-r border-gray-100 last:border-0">
                <FaStar className="mx-auto text-[#1AA59B] mb-1" />
                <p className="font-semibold text-gray-800">{website.rating}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Rating</p>
              </div>
              <div className="p-2">
                <FaShoppingCart className="mx-auto text-[#1AA59B] mb-1" />
                <p className="font-semibold text-gray-800">{website.reviews}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Reviews</p>
              </div>
            </div>

            {/* ✅ DESCRIPTION */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Description</h2>
              <p className="text-gray-600 text-base leading-relaxed">{website.description}</p>
            </div>
          </div>

          {/* ✅ RIGHT SIDE CARD */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-6 shadow-lg">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#1AA59B] text-white">
                  {website.category}
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                  {website.projectType}
                </span>
              </div>

              <h1 className="text-2xl font-extrabold text-gray-900 mb-1">{website.title}</h1>
              <p className="text-sm text-gray-500 mb-6">by <span className="font-semibold text-[#1AA59B]">{website.author}</span></p>

              <div className="border-2 border-[#1AA59B]/20 rounded-xl p-4 bg-[#1AA59B]/5 mb-6">
                <p className="text-xs text-gray-500 font-bold uppercase mb-1">Price Plan</p>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-4xl font-black text-[#1AA59B]">${website.offerPrice}</h2>
                  <p className="line-through text-gray-400 text-lg">${website.price}</p>
                </div>
              </div>

              <button className="w-full bg-[#1AA59B] hover:bg-[#158f86] text-white py-4 rounded-xl font-bold text-lg shadow-lg transform active:scale-95 transition-all mb-4">
                Buy Now
              </button>

              <div className="flex gap-3 mb-6">
                <button onClick={() => setIsFavorite(!isFavorite)} className={favoriteClass}>
                  <FaHeart /> {favoriteText}
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-medium bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 transition-all">
                  <FaShare /> Share
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                {/* Meta Info */}
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <p><span className="text-gray-500">Platform:</span> <span className="font-medium text-gray-800">{website.platform}</span></p>
                  <p><span className="text-gray-500">Access:</span> <span className="font-medium text-gray-800">{website.accessType}</span></p>
                </div>

                {/* Features - Safe Map */}
                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2">Key Features</h3>
                  <ul className="grid grid-cols-1 gap-1 text-sm text-gray-600 list-inside list-disc">
                    {website.features?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies - Safe Map */}
                <div>
                  <h3 className="font-bold text-sm text-gray-800 mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {website.technologies?.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200">
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