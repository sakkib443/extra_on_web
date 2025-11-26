"use client";
import React, { useEffect, useState } from "react";
import WebsiteCard from "../../Components/Shared/Sections/WebsiteCard";

export default function WebsitesPage() {
  const [websites, setWebsites] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Filters
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("newest");

  // Fetch JSON
  useEffect(() => {
    fetch("/websites.json")
      .then((r) => r.json())
      .then((data) => {
        setWebsites(data);
        setFiltered(data);
      });
  }, []);

  // Filtering
  useEffect(() => {
    let result = [...websites];

    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }
    if (type !== "all") {
      result = result.filter((item) => item.type === type);
    }
    if (rating > 0) {
      result = result.filter((item) => item.rating >= rating);
    }

    // Sorting
    if (sort === "newest") {
      result = result.sort((a, b) => b.id - a.id);
    }
    if (sort === "oldest") {
      result = result.sort((a, b) => a.id - b.id);
    }
    if (sort === "rating") {
      result = result.sort((a, b) => b.rating - a.rating);
    }
    if (sort === "price_high") {
      result = result.sort((a, b) => b.price - a.price);
    }
    if (sort === "price_low") {
      result = result.sort((a, b) => a.price - b.price);
    }

    setFiltered(result);
  }, [category, type, rating, sort, websites]);

  return (
    <div className="flex p-6 gap-6 font-outfit  container mx-auto">
      {/* Left Sidebar */}
      <div className="w-64 p-6 bg-white shadow-lg rounded-xl h-fit space-y-6">
        <h3 className="text-xl font-semibold mb-2 border-b pb-2">Filters</h3>

        {/* Category Filter */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Category</h4>
          <div className="space-y-1 mt-2  overflow-y-auto">
            {[
              "All Categories",
              "Site Templates",
              "WordPress",
              "UI Templates",
              "Template Kits",
              "CMS Themes",
              "Muse Templates",
              "Marketing",
              "Jamstack",
              "eCommerce",
              "Blogging",
              "Courses",
            ].map((cat, idx) => (
              <label key={idx} className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-teal-500 border-gray-300 rounded" />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Website Type Filter */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Website Type</h4>
          <div className="space-y-1 mt-2">
            {["All", "Premium", "Free"].map((type, idx) => (
              <label key={idx} className="flex items-center space-x-2 text-gray-600 hover:text-teal-600 cursor-pointer">
                <input type="radio" name="websiteType" className="w-4 h-4 text-teal-500 border-gray-300" />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Price</h4>
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="number"
              placeholder="$ Min"
              className="w-1/2 p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
            <input
              type="number"
              placeholder="$ Max"
              className="w-1/2 p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        </div>

        {/* Rating Filter */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Minimum Rating</h4>
          <select className="w-full mt-2 p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500">
            <option value="0">All Ratings</option>
            <option value="3">3★ & above</option>
            <option value="4">4★ & above</option>
            <option value="5">5★</option>
          </select>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">

        {/* Top Sorting Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {filtered.length} Websites Found
          </h2>

          <select
            className="p-2 border rounded"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="rating">Top Rating</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <WebsiteCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
