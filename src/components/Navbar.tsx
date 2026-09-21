import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeView?: 'catalog' | 'detail' | 'hotel-guide' | 'sightings';
  onNavigate?: (view: 'catalog' | 'hotel-guide' | 'sightings') => void;
  sightingsCount?: number;
  onOpenPhotoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onNavigate,
}) => {
  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#062019]/95 backdrop-blur-md border-b border-[#164b3c] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div
            id="brand-logo-button"
            onClick={() => onNavigate?.('catalog')}
            className="flex items-center gap-3.5 cursor-pointer group select-none py-1.5"
          >
            <img
              src="/assets/logo-sonesta-white.png"
              alt="Sonesta Hotels & Resorts - Posadas del Inca Puno"
              className="h-10 sm:h-12 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-sm"
            />
          </div>

          {/* Right Controls: Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div id="language-switcher" className="flex items-center bg-[#0a2f24] p-1 rounded-lg border border-[#1b5b48]">
              <Globe className="w-3.5 h-3.5 text-[#2ee59d] ml-1.5 mr-1 hidden sm:block" />
              <button
                id="lang-btn-es"
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 text-xs font-bold rounded transition-all cursor-pointer ${
                  lang === 'es'
                    ? 'bg-[#2ee59d] text-[#062019] shadow-sm'
                    : 'text-[#8dc9b6] hover:text-white'
                }`}
                title="Cambiar a Español"
              >
                ES
              </button>
              <button
                id="lang-btn-en"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#2ee59d] text-[#062019] shadow-sm'
                    : 'text-[#8dc9b6] hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
