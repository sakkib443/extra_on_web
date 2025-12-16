"use client";
import React from "react";
import Image from "next/image";

export default function Testimonial() {
  const team = [
    {
      id: 1,
      name: "Cierra Wilkerson",
      role: "UI/UX Designer",
      image: "/team/team1.jpg",
    },
    {
      id: 2,
      name: "Celia Nocate",
      role: "Frontend Developer",
      image: "/team/team2.jpg",
    },
    {
      id: 3,
      name: "Sophie Chamberlain",
      role: "Backend Developer",
      image: "/team/team3.jpg",
    },
    {
      id: 4,
      name: "Jessica Daulere",
      role: "Product Manager",
      image: "/team/team4.jpg",
    },
    {
      id: 5,
      name: "Orlando Diggs",
      role: "Creative Director",
      image: "/team/team5.jpg",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50 font-outfit">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Header */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-3">
          Meet our beautiful team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 font-poppins">
          Our philosophy is simple. Hire great people and give them the resources
          and support to do their best work.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 border"
            >
              <div className="w-full h-44 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 font-poppins">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
