import React from 'react';

export const HeroAnimatedBackground: React.FC = () => {
  return (
    <div
      id="hero-background-container"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a1813]"
    >
      {/* High-Resolution Sunset Image framed to show the FULL hotel infrastructure and gardens */}
      <img
        src="/assets/hotel-sonesta-sunset.jpg"
        alt="Sonesta Posadas del Inca Puno al atardecer"
        className="w-full h-full object-cover object-[center_85%] sm:object-[center_80%] md:object-[center_76%] select-none transition-all duration-700"
        style={{
          filter: 'brightness(0.98) contrast(1.04) saturate(1.05)',
        }}
      />

      {/* Top Sky Vignette: Only covers the upper sky for text legibility, leaving the hotel building clear */}
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Soft Bottom Lawn Tint: Only at the very bottom edge to softly ground the floating cards without covering the hotel */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />
    </div>
  );
};


