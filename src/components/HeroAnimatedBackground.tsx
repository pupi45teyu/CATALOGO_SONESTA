import React from 'react';

export const HeroAnimatedBackground: React.FC = () => {
  return (
    <div
      id="hero-background-container"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#071913]"
    >
      {/* High-Resolution Sunset Image of Sonesta Posadas del Inca */}
      <img
        src="/assets/hotel-sonesta-sunset.jpg"
        alt="Sonesta Posadas del Inca Puno al atardecer"
        className="w-full h-full object-cover object-center scale-100 select-none"
        style={{
          filter: 'brightness(0.92) contrast(1.06) saturate(1.08)',
        }}
      />

      {/* Layer 1: Top Vignette for crisp, high-contrast title & subtitle legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/85 pointer-events-none" />

      {/* Layer 2: Subtle warm sunset & emerald ambient overlay matching the hotel glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#041d16]/80 via-transparent to-amber-950/30 mix-blend-multiply pointer-events-none" />

      {/* Layer 3: Bottom Grounding Vignette for the explorer cards */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#03130e] via-[#051e16]/80 to-transparent pointer-events-none" />

      {/* Layer 4: Radial focus vignette for luxury editorial depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
    </div>
  );
};

