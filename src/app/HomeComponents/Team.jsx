"use client";
import React from "react";
import { FaShareAlt } from "react-icons/fa";

const teamMembers = [{ name: "James Carter", role: "Economy Manager", img: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/472009300_557526777119280_533781909713140935_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFuG31ZWQoPC6d8NzTxmBe_S9_TzPPhT-1L39PM8-FP7ZEgwH7_DrdDtFnNwPmRky0zn9obwkUmwGZYU9wL8bXK&_nc_ohc=0Ls8wjO1t4cQ7kNvwH54LvE&_nc_oc=AdlLZYuceiZJocpCklgCKKaaRFTX-6zYW3zBIFoQj0u4ka84j3p4S5Tvukt2jWkE4YM&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=yoUVpRwBSSAhdqq_KBmrsg&oh=00_AfgJL-Oy383LrZwJWQbhlQd4Ey5pQ9yXJvqH9syFxOWZGw&oe=6922A0D1" },
{ name: "Dianne M. Mason", role: "Legal Officer", img: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/462171723_1711082513063454_3785324719559999837_n.jpg?stp=c0.163.1555.1555a_dst-jpg_s565x565_tt6&_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG3prYObOl7CQuOc5pNARFZSHiguHh-e6tIeKC4eH57q5UpqBM68DqYeMOaa1Uy8G33jbyemea-k118xGMf33Ad&_nc_ohc=DdeoZgt8kxwQ7kNvwEAnmrw&_nc_oc=Admv9L2BghwnjNB5p7A-00QUyCchIUTW42mxu90JKF2BthZj5ApNlIGczcSLUcoufm8&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=syD_4V4o65WFb0Vv8VWVSw&oh=00_AfhSJeP27ILo9IlLNNFYzVhLg6fgCBsnYMF6Zru0qAoutg&oe=69228351" },
{ name: "Michael Thomas", role: "CEO Themepure", img: "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/473089320_2037122763377874_208417740136396012_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFKSmXeqYSEtDBI6My7FqlAo9V99OKK8oCj1X304orygFygrKMvzr4tfQF1_730LjBr0qbXBpPc4W-QtfrVciq0&_nc_ohc=FIlCiSW5XYMQ7kNvwGZX_xc&_nc_oc=AdlYFIrwOQnoYc29gbd-WlCXIbaYdbtLpdRBoCigUT142OEMQcWKDBBAdZ65NV3Xpbs&_nc_zt=23&_nc_ht=scontent.fdac99-1.fna&_nc_gid=3iG-b3EKmhIx9HTip32gyQ&oh=00_AfimfqadMLkCF_oi71HBtjas2hMmmJ5O0os7X11lDOMeYg&oe=692270FF" },

{ name: "Daniel Kim", role: "HR Specialist", img: "/team/t4.png" },
{ name: "Robertson Crushe", role: "CEO Themepure", img: "/team/t5.png" },
];

const OurTeam = () => {
  return (
    <section className="w-full  bg-white  relative overflow-visible font-poppins">

      {/* Stroke Text */}
      <h1 className="stroke-text absolute left-10 top-16 select-none -z-10">
        OUR TEAM
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10 relative">

        {/* LEFT FIXED CONTENT (SECTION-BASED) */}
        <div className="relative col-span-2">
          <div className="sticky top-32 h-fit">
            <button className="px-5 py-2 bg-[#E3FFE9] text-[#0A3029] rounded-full text-sm font-semibold w-fit mb-5">
              What I Do
            </button>

            <h2 className="text-4xl font-outfit font-bold text-[#0A3029] leading-tight mb-4">
              Our Experts Team <br /> Is Always Ready To <br /> Help You
            </h2>

            <p className="text-gray-600 leading-relaxed text-[14px] mb-6 max-w-md">
              “Aleric delivered exactly what we needed — efficient, reliable,
              and results-driven solutions.”
            </p>

            <button className="px-6 py-3 bg-primary text-gray-100 font-semibold rounded-full shadow hover:shadow-lg transition-all w-fit">
              ➜ EXPLORE MORE
            </button>
          </div>
        </div>

        {/* RIGHT GRID — scrolls independently */}
        <div className="grid grid-cols-3 gap-6 pb-40 col-span-3">
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
