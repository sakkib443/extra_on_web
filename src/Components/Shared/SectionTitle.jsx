import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  tag, 
  align = 'center', 
  className = '' 
}) => {
  
  // Alignment Logic
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col mb-6  max-w-[700px] ${alignmentClasses[align]} ${className}`}>
      
      {/* Optional Tag/Badge (Above Title) */}
      {tag && (
        <span className="inline-block py-1  px-3 rounded-sm bg-blue-50 text-primary text-xs font-bold tracking-wider uppercase mb-1 border border-blue-100">
          {tag}
        </span>
      )}

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-bold font-outfit text-gray-900 leading-tight">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className={`mt-1 text-gray-600 font-poppins text-[14px] leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      
     
    </div>
  );
};

export default SectionTitle;