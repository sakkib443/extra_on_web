"use client";
import React, { useEffect, useMemo, useState } from "react";
import WebsiteCard from "../../Components/Shared/Sections/WebsiteCard";

export default function WebsitesPage() {
  const [websites, setWebsites] = useState([]);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  // Filters
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [rating, setRating] = useState(0);
  const [sort, setSort] = useState("newest");

  // ✅ Fetch Websites
  useEffect(() => {
    fetch("/websites.json")
      .then((r) => r.json())
      .then(setWebsites);
  }, []);

  // ✅ Fetch Category
  useEffect(() => {
    fetch("/category.json")
      .then((r) => r.json())
      .then(setCategories);
  }, []);

  // ✅ Fetch Platform
  useEffect(() => {
    fetch("/platform.json")
      .then((r) => r.json())
      .then(setPlatforms);
  }, []);

  // ✅ Filter + Sort
  const filtered = useMemo(() => {
    let result = [...websites];

    // Category Filter
    if (category !== "all") {
      result = result.filter(
        (item) => item.category && item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Platform Filter
    if (type !== "all") {
      result = result.filter(
        (item) => item.platform && item.platform.toLowerCase() === type.toLowerCase()
      );
    }

    // Rating Filter
    if (rating > 0) {
      result = result.filter((item) => item.rating >= rating);
    }

    // Sort
    if (sort === "newest") result.sort((a, b) => b.id - a.id);
    else if (sort === "oldest") result.sort((a, b) => a.id - b.id);
    else if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sort === "price_high") result.sort((a, b) => b.price - a.price);
    else if (sort === "price_low") result.sort((a, b) => a.price - b.price);

    return result;
  }, [websites, category, type, rating, sort]);

  return (
    <div className="flex p-6 gap-6 font-outfit container mx-auto">

      {/* LEFT FILTER */}
      <div className="w-64 p-6 bg-white shadow-lg rounded-xl h-fit space-y-6">
        <h3 className="text-xl font-semibold border-b pb-2">Filters</h3>

        {/* CATEGORY */}
        <div>
          <h4 className="font-medium text-gray-700">Category</h4>
          <div className="space-y-1 mt-2 overflow-y-auto">
            <label className="flex items-center gap-2 text-[14px] cursor-pointer">
              <input
                type="radio"
                name="category"
                value="all"
                checked={category === "all"}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span>All</span>
            </label>

            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-2 text-[14px] cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={cat.name}
                  checked={category === cat.name}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <span>{cat.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* PLATFORM */}
        <div>
          <h4 className="font-medium text-gray-700">Platform</h4>
          <label className="flex items-center gap-2 text-[14px] cursor-pointer">
            <input
              type="radio"
              name="platform"
              value="all"
              checked={type === "all"}
              onChange={(e) => setType(e.target.value)}
            />
            <span>All</span>
          </label>

          {platforms.map((p) => (
            <label key={p.id} className="flex items-center gap-2 text-[14px] cursor-pointer">
              <input
                type="radio"
                name="platform"
                value={p.name}
                checked={type === p.name}
                onChange={(e) => setType(e.target.value)}
              />
              <span>{p.name}</span>
            </label>
          ))}
        </div>

        {/* RATING */}
        <div>
          <h4 className="font-medium text-gray-700">Minimum Rating</h4>
          <select
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="0">All</option>
            <option value="3">3★ & above</option>
            <option value="4">4★ & above</option>
            <option value="5">5★</option>
          </select>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{filtered.length} Websites Found</h2>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <WebsiteCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
