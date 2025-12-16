import React from 'react';
import { FaBuilding, FaProjectDiagram, FaSmile, FaUserTie } from 'react-icons/fa';

const HomeCategory = () => {
    return (
        <div>
              <div className="max-w-6xl mx-auto px-6 -mt-34  grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">

        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-3">
            <FaProjectDiagram size={28} className="text-[#0A3029]" />
          </div>
          <h3 className="text-3xl font-bold text-[#0A3029] font-outfit">34K</h3>
          <p className="text-gray-600 text-sm">Project Completed</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-3">
            <FaBuilding size={28} className="text-[#0A3029]" />
          </div>
          <h3 className="text-3xl font-bold text-[#0A3029] font-outfit">16K</h3>
          <p className="text-gray-600 text-sm">Country Office</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-3">
            <FaUserTie size={28} className="text-[#0A3029]" />
          </div>
          <h3 className="text-3xl font-bold text-[#0A3029] font-outfit">12+</h3>
          <p className="text-gray-600 text-sm">Year of Experience</p>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white shadow-md rounded-2xl flex items-center justify-center mb-3">
            <FaSmile size={28} className="text-[#0A3029]" />
          </div>
          <h3 className="text-3xl font-bold text-[#0A3029] font-outfit">98%</h3>
          <p className="text-gray-600 text-sm">Happy Customer</p>
        </div>
      </div>

        </div>
    );
};

export default HomeCategory;