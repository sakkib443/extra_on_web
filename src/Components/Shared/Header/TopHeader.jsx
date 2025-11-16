import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function TopHeader() {
    return (
        <div className=" bg-primary ">
            <div className="w-full font-outfit container mx-auto  text-gray-100 text-sm py-2 md:px-24  flex items-center justify-center md:justify-between">
                {/* Left Side */}
                <div className="">
                    <div className="flex items-center gap-6 ">
                        <div className="flex items-center gap-1">
                            <FiPhone />
                            <span>+880 1753 924093</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaWhatsapp />
                            <span>+880 1753 924093</span>
                        </div>
                    </div>
                </div>

                {/* Middle Text */}
                <div className="hidden md:block">
                    <div className="flex items-center gap-1 ">
                        <CiLocationOn className="font-bold text-white text-xl" />
                        <p className="hidden md:block">M-25, West Merul, Badda, Dhaka, Bangladesh</p>
                    </div>
                </div>


                {/* Right Side */}
                {/* <div className="flex items-center gap-6">
        <button className="hover:text-black">Help?</button>
        <button className="hover:text-black">Track Order?</button>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <span>English</span>
         
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <span>Dollar</span>
     
        </div>
      </div> */}
            </div>
        </div>
    );
}