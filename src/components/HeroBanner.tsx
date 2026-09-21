import React from 'react';
import { Language } from '../types';
import { Compass, Sparkles, MapPin, ShieldCheck, Waves } from 'lucide-react';

interface HeroBannerProps {
  lang: Language;
  onExploreClick: () => void;
  onHotelGuideClick: () => void;
  onSelectFeatured: (speciesId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  lang,
  onExploreClick,
  onHotelGuideClick,
  onSelectFeatured,
}) => {
  return (
    <div id="hero-banner" className="relative overflow-hidden bg-stone-950 text-stone-100 border-b border-stone-800">
      {/* Visual Background Layers (Inspired by Andean Lake Twilight) */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-700/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-72 bg-amber-600/20 rounded-full blur-3xl" />
      </div>

      {/* Decorative mountain silhouettes and Lake Titicaca Reed SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <svg
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
          viewBox="0 0 1440 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back mountains */}
          <path
            d="M0 280L140 210L320 270L540 180L760 250L980 160L1180 230L1340 190L1440 220V460H0V280Z"
            fill="#1E1B4B"
            fillOpacity="0.7"
          />
          {/* Front mountains */}
          <path
            d="M0 340L210 260L460 320L680 240L920 310L1140 250L1360 300L1440 280V460H0V340Z"
            fill="#0F172A"
            fillOpacity="0.9"
          />
          {/* Lake water surface line */}
          <path
            d="M0 385C240 380 480 395 720 388C960 382 1200 392 1440 385V460H0V385Z"
            fill="#0A101D"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-3xl">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700/80 text-amber-300 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {lang === 'es'
                ? 'Sonesta Posadas del Inca Puno • 3,812 msnm'
                : 'Sonesta Posadas del Inca Puno • 12,507 ft'}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-500"></span>
            <span className="text-stone-300">
              {lang === 'es' ? 'Lago Sagrado de los Incas' : 'Sacred Lake of the Incas'}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-5">
            {lang === 'es' ? (
              <>
                Fauna Silvestre del <span className="text-amber-400 italic">Lago Titicaca</span>
              </>
            ) : (
              <>
                Native Wildlife of <span className="text-amber-400 italic">Lake Titicaca</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-8 max-w-2xl">
            {lang === 'es'
              ? 'Guía de campo biológica y catálogo de conservación creado para los huéspedes de Sonesta Posadas del Inca Puno. Descubra aves acuáticas únicas en el mundo, peces ancestrales y mamíferos altoandinos que habitan en nuestros totorales y bahía privada.'
              : 'Comprehensive biological field guide and conservation catalog designed for guests of Sonesta Posadas del Inca Puno. Discover world-unique flightless grebes, ancient killifish, and high-Andean mammals dwelling along our private pier and totora reedbeds.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Compass className="w-4 h-4 text-stone-950" />
              <span>{lang === 'es' ? 'Explorar el Catálogo de Fauna' : 'Explore Species Catalog'}</span>
            </button>

            <button
              id="hero-hotel-guide-btn"
              onClick={onHotelGuideClick}
              className="px-5 py-3.5 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 border border-stone-700 font-semibold text-sm transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Waves className="w-4 h-4 text-amber-400" />
              <span>{lang === 'es' ? 'Guía de Avistamiento desde el Muelle' : 'Pier Spotting Guide'}</span>
            </button>
          </div>

          {/* Fast Featured Links */}
          <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-400">
            <span className="font-semibold text-stone-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'es' ? 'Especies emblemáticas:' : 'Key endemic species:'}
            </span>
            <button
              onClick={() => onSelectFeatured('zambullidor-titicaca')}
              className="hover:text-amber-300 underline decoration-stone-600 underline-offset-4 transition-colors"
            >
              {lang === 'es' ? 'Zambullidor (Kele)' : 'Titicaca Grebe'}
            </button>
            <span className="text-stone-700">•</span>
            <button
              onClick={() => onSelectFeatured('rana-gigante-titicaca')}
              className="hover:text-amber-300 underline decoration-stone-600 underline-offset-4 transition-colors"
            >
              {lang === 'es' ? 'Rana Gigante' : 'Giant Water Frog'}
            </button>
            <span className="text-stone-700">•</span>
            <button
              onClick={() => onSelectFeatured('parihuana-flamenco-andino')}
              className="hover:text-amber-300 underline decoration-stone-600 underline-offset-4 transition-colors"
            >
              {lang === 'es' ? 'Parihuana (Flamenco)' : 'Andean Flamingo'}
            </button>
            <span className="text-stone-700">•</span>
            <button
              onClick={() => onSelectFeatured('vizcacha-andina')}
              className="hover:text-amber-300 underline decoration-stone-600 underline-offset-4 transition-colors"
            >
              {lang === 'es' ? 'Vizcacha Andina' : 'Mountain Viscacha'}
            </button>
          </div>
        </div>

        {/* Floating Quick Stats Card (Desktop right side) */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:right-8 lg:top-14 lg:w-80 bg-stone-900/90 border border-stone-800 p-5 rounded-2xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-stone-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
              {lang === 'es' ? 'Santuario Ecológico' : 'Ecological Sanctuary'}
            </span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div>
              <div className="text-stone-400 font-medium">
                {lang === 'es' ? 'Ubicación de Observación' : 'Observation Vantage'}
              </div>
              <div className="text-sm font-bold text-amber-200">
                {lang === 'es' ? 'Muelle Privado Sonesta Puno' : 'Sonesta Puno Private Pier'}
              </div>
              <div className="text-[11px] text-stone-400 mt-0.5">
                {lang === 'es'
                  ? 'A orillas de la Bahía de Puno y Reserva de Totorales'
                  : 'On the waters of Puno Bay and Totora Reed Reserve'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800/80">
              <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800">
                <div className="text-[10px] uppercase text-stone-400 font-semibold">
                  {lang === 'es' ? 'Especies en lago' : 'Lake species'}
                </div>
                <div className="text-base font-bold text-white font-serif mt-0.5">60+</div>
                <div className="text-[10px] text-stone-400">
                  {lang === 'es' ? 'Aves & fauna' : 'Birds & fauna'}
                </div>
              </div>

              <div className="bg-stone-950/60 p-2.5 rounded-lg border border-stone-800">
                <div className="text-[10px] uppercase text-stone-400 font-semibold">
                  {lang === 'es' ? 'Endemismo' : 'Endemicity'}
                </div>
                <div className="text-base font-bold text-amber-400 font-serif mt-0.5">
                  {lang === 'es' ? 'Único' : 'Global'}
                </div>
                <div className="text-[10px] text-stone-400">
                  {lang === 'es' ? 'Evolución aislada' : 'Isolated evol.'}
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-stone-300/80 leading-relaxed italic bg-stone-800/40 p-2.5 rounded-lg border border-stone-800/60">
              {lang === 'es'
                ? '«El Titicaca es un mar interior sagrado a 3,812 metros; su fauna evolucionó en aislamiento milenario.»'
                : '“Titicaca is a sacred inland sea at 12,507 ft; its wildlife evolved in millennia of alpine isolation.”'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
