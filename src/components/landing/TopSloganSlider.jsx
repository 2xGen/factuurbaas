import React from 'react';

const TopSloganSlider = ({ slogans }) => {
  if (!slogans || slogans.length === 0) return null;

  const sloganText = slogans.join("  •  ");

  return (
    <div className="absolute top-0 left-0 right-0 h-12 bg-deep-blue/80 backdrop-blur-md flex items-center justify-center overflow-hidden z-20 shadow-xl border-b border-sky-700/50">
      <span className="text-white text-base md:text-lg font-semibold tracking-wide px-6 py-2 text-center">
        {sloganText}
      </span>
    </div>
  );
};

export default TopSloganSlider;