"use client";
import WebsiteCard from "@/Components/Shared/Sections/WebsiteCard";
import SectionTitle from "@/Components/Shared/SectionTitle";

import React, { useEffect, useState } from "react";

export default function PopularWebsite() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("/websites.json");
            const data = await res.json();

            // 🔥 Convert sales string → number
            const formatted = data.map(item => {
                const numericSales = parseFloat(
                    item.sales.replace(/[^0-9.]/g, "") // remove texts like "K", "M"
                );

                let finalSales = numericSales;

                // K = Thousand, M = Million
                if (item.sales.includes("K")) finalSales = numericSales * 1000;
                if (item.sales.includes("M")) finalSales = numericSales * 1000000;

                return { ...item, saleValue: finalSales };
            });

            // 🔥 Top 8 highest sales filter
            const top8 = formatted
                .sort((a, b) => b.saleValue - a.saleValue)
                .slice(0, 8);

            setItems(top8);
        };

        loadData();
    }, []);

    return (
        <section className="w-full font-outfit">
            <div className="max-w-7xl mx-auto px-4">

                {/* Title + Button */}
                <div className="flex items-center justify-between mb-10">
                    <SectionTitle
                        tag="Feature Website"
                        title="Feature Website"
                        align="left"
                        subtitle="Discover thousands of easy to customize themes, templates & CMS products."
                    />

                    <button className="bg-primary text-white px-6 py-2.5 rounded-sm hover:bg-primary/90 transition">
                        View all
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {items.map((item) => (
                        <WebsiteCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}
