"use client";
import WebsiteCard from "@/Components/Shared/Sections/WebsiteCard";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function WebsitesPage() {
  const searchParams = useSearchParams();
  const [websites, setWebsites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  // ✅ Filters State
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [maxPrice, setMaxPrice] = useState(1000); // Max range barano hoyeche data thakle subidha hobe
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("newest");

  // ✅ Fetch All Data
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [webRes, catRes, platRes] = await Promise.all([
          fetch("/websites.json"),
          fetch("/category.json"),
          fetch("/platform.json")
        ]);
        
        const webData = await webRes.json();
        const catData = await catRes.json();
        const platData = await platRes.json();

        setWebsites(webData);
        setCategories(catData);
        setPlatforms(platData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    fetchAllData();
  }, []);

  // ✅ Filter + Sort Logic
  const filtered = useMemo(() => {
    let result = [...websites];

    // Category Filter
    if (category !== "all") {
      result = result.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      );
    }

    // Platform Filter
    if (type !== "all") {
      result = result.filter(
        (item) => item.platform?.toLowerCase() === type.toLowerCase()
      );
    }

    // Price Range Filter
    result = result.filter(
      (item) => (item.offerPrice || item.price) >= 0 && (item.offerPrice || item.price) <= maxPrice
    );

    // Rating Filter
    if (rating > 0) {
      result = result.filter((item) => item.rating >= rating);
    }

    // Search Filter
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(searchLower) ||
          item.description?.toLowerCase().includes(searchLower) ||
          item.author?.toLowerCase().includes(searchLower) ||
          item.technologies?.some(tech => tech.toLowerCase().includes(searchLower))
      );
    }

    // Sorting
    if (sort === "newest") result.sort((a, b) => b.id - a.id);
    else if (sort === "oldest") result.sort((a, b) => a.id - b.id);
    else if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sort === "price_high") result.sort((a, b) => (b.offerPrice || b.price) - (a.offerPrice || a.price));
    else if (sort === "price_low") result.sort((a, b) => (a.offerPrice || a.price) - (b.offerPrice || b.price));

    return result;
  }, [websites, category, type, maxPrice, rating, search, sort]);

  return (
    <div className="font-outfit container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* ✅ Search Bar */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Explore Premium Websites</h1>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search by title, tech, or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-md  shadow-sm focus:outline-none focus:ring-2 focus:ring-[#66B3FF] focus:border-transparent transition-all"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* ✅ SIDEBAR FILTER */}
        <aside className="w-full lg:w-72 p-6 bg-white shadow-sm border border-gray-100 rounded-md  h-fit space-y-8 sticky top-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Filters</h3>
            <button 
                onClick={() => {setCategory("all"); setType("all"); setMaxPrice(1000); setRating(0)}}
                className="text-xs text-primery font-medium hover:underline"
            >
                Reset All
            </button>
          </div>

          {/* Category */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Category</h4>
            <div className="space-y-2  overflow-y-auto pr-2 custom-scrollbar">
              <label className="flex items-center gap-3 text-sm cursor-pointer group">
                <input type="radio" name="cat" checked={category === "all"} onChange={() => setCategory("all")} className="accent-[#66B3FF]" />
                <span className={category === "all" ? "text-primery font-bold" : "text-gray-600 group-hover:text-gray-900"}>All Categories</span>
              </label>
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-3 text-sm cursor-pointer group">
                  <input type="radio" name="cat" checked={category === cat.name} onChange={() => setCategory(cat.name)} className="accent-[#66B3FF]" />
                  <span className={category === cat.name ? "text-primery font-bold" : "text-gray-600 group-hover:text-gray-900"}>{cat.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Platform</h4>
            <div className="space-y-2">
                {["all", ...platforms.map(p => p.name)].map((pName) => (
                    <label key={pName} className="flex items-center gap-3 text-sm cursor-pointer group">
                        <input type="radio" name="plat" checked={type === pName} onChange={() => setType(pName)} className="accent-[#66B3FF]" />
                        <span className="capitalize">{pName}</span>
                    </label>
                ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Price Range</h4>
            <div className="flex justify-between text-xs font-bold text-primery mb-4">
              <span>$0</span>
              <span>${maxPrice}</span>
            </div>
            <input type="range" min="0" max="1000" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full h-1 bg-gray-200 rounded-md appearance-none cursor-pointer accent-[#66B3FF]" />
          </div>

          {/* Rating */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Minimum Rating</h4>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setRating(0)} 
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${rating === 0 ? 'bg-[#66B3FF] text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              >
                Show All Ratings
              </button>
              <button 
                onClick={() => setRating(3)} 
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${rating === 3 ? 'bg-[#66B3FF] text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              >
                <div className="flex">
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                & above
              </button>
              <button 
                onClick={() => setRating(4)} 
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${rating === 4 ? 'bg-[#66B3FF] text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              >
                <div className="flex">
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                & above
              </button>
              <button 
                onClick={() => setRating(5)} 
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${rating === 5 ? 'bg-[#66B3FF] text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
              >
                <div className="flex">
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                Only
              </button>
            </div>
          </div>
        </aside>

        {/* ✅ MAIN CONTENT */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-lg font-bold text-gray-800">
              Showing <span className="text-primery">{filtered.length}</span> Results
            </h2>

            <select
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium shadow-sm outline-none focus:ring-2 focus:ring-[#66B3FF]"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="rating">Top Rated</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <WebsiteCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
              <p className="text-gray-500 font-medium">No websites match your filters.</p>
              <button onClick={() => {setCategory("all"); setType("all"); setSearch("")}} className="mt-4 text-primery font-bold hover:underline">Clear all filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}