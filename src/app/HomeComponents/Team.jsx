"use client";
import React from "react";
import { FaShareAlt } from "react-icons/fa";

const teamMembers = [
  { name: "Dianne M. Mason", role: "Legal Officer", img: "/team/t1.png" },
  { name: "Michael Thomas", role: "CEO Themepure", img: "/team/t2.png" },
  { name: "James Carter", role: "Economy Manager", img: "/team/t3.png" },
  { name: "Daniel Kim", role: "HR Specialist", img: "/team/t4.png" },
  { name: "Robertson Crushe", role: "CEO Themepure", img: "/team/t5.png" },
];

const OurTeam = () => {
  return (
    <section className="w-full  bg-white py-28 relative overflow-visible font-poppins">

      {/* Stroke Text */}
      <h1 className="stroke-text absolute left-10 top-16 select-none -z-10">
        OUR TEAM
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 relative">

        {/* LEFT FIXED CONTENT (SECTION-BASED) */}
        <div className="relative">
          <div className="sticky top-32 h-fit">
            <button className="px-5 py-2 bg-[#E3FFE9] text-[#0A3029] rounded-full text-sm font-semibold w-fit mb-5">
              What I Do
            </button>

            <h2 className="text-5xl font-outfit font-bold text-[#0A3029] leading-tight mb-4">
              Our Experts Team <br /> Is Always Ready To <br /> Help You
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              “Aleric delivered exactly what we needed — efficient, reliable,
              and results-driven solutions.”
            </p>

            <button className="px-6 py-3 bg-primary text-gray-100 font-semibold rounded-full shadow hover:shadow-lg transition-all w-fit">
              ➜ EXPLORE MORE
            </button>
          </div>
        </div>

        {/* RIGHT GRID — scrolls independently */}
        <div className="grid grid-cols-2 gap-6 pb-40">
          {teamMembers.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img
                  src={person.img}
                  className="rounded-xl w-full h-[220px] object-cover"
                  alt={person.name}
                />
                <span className="absolute left-4 bottom-4 bg-[#0A3029] text-white p-2 rounded-full shadow">
                  <FaShareAlt size={14} />
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#0A3029] mt-4">
                {person.name}
              </h3>
              <p className="text-gray-500 text-sm">{person.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
