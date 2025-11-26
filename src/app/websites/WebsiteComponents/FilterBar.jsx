"use client";
import React from "react";

export default function FilterBar({ filters, setFilters }) {
    return (
        <div className="flex flex-wrap gap-4 mb-6 items-center">
            {/* Category */}
            <select
                value={filters.category}
                onChange={e => setFilters({ ...filters, category: e.target.value })}
                className="border p-2 rounded"
            >
                <option value="All">All Categories</option>
                <option value="Business">Business</option>
                <option value="WooCommerce">WooCommerce</option>
                <option value="Blog">Blog</option>
                <option value="LMS">LMS</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Dashboard">Dashboard</option>
                <option value="Ecommerce">Ecommerce</option>
                <option value="Portfolio">Portfolio</option>
            </select>

            {/* Type */}
            <select
                value={filters.type}
                onChange={e => setFilters({ ...filters, type: e.target.value })}
                className="border p-2 rounded"
            >
                <option value="All">All Types</option>
                <option value="WordPress">WordPress</option>
                <option value="React">React</option>
                <option value="MERN">MERN</option>
                <option value="PHP">PHP</option>
            </select>

            {/* Price */}
            <input
                type="number"
                placeholder="Min Price"
                value={filters.priceRange[0]}
                onChange={e =>
                    setFilters({ ...filters, priceRange: [Number(e.target.value), filters.priceRange[1]] })
                }
                className="border p-2 rounded w-20"
            />
            <input
                type="number"
                placeholder="Max Price"
                value={filters.priceRange[1]}
                onChange={e =>
                    setFilters({ ...filters, priceRange: [filters.priceRange[0], Number(e.target.value)] })
                }
                className="border p-2 rounded w-20"
            />

            {/* Rating */}
            <select
                value={filters.rating}
                onChange={e => setFilters({ ...filters, rating: Number(e.target.value) })}
                className="border p-2 rounded"
            >
                <option value={0}>All Ratings</option>
                <option value={4}>4+</option>
                <option value={4.5}>4.5+</option>
                <option value={5}>5</option>
            </select>

            {/* Sort */}
            <select
                value={filters.sortBy}
                onChange={e => setFilters({ ...filters, sortBy: e.target.value })}
                className="border p-2 rounded"
            >
                <option value="date">Sort by Newest</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
            </select>
        </div>
    );
}
