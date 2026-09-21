import React from 'react';
import { Language } from '../types';
import { Feather, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onLanguageChange?: (lang: Language) => void;
  onNavigate?: (view: 'catalog' | 'hotel-guide' | 'sightings') => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
}) => {
  return (
    <footer id="main-footer" className="bg-[#041913] text-[#97caba] border-t border-[#123e32] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Col 1: Hotel & App Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-[#2ee59d] flex items-center justify-center text-[#041913] font-bold shadow-md">
                <Feather className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-lg text-white">
                Sonesta Posadas del Inca
              </span>
            </div>
            <p className="text-xs text-[#b8e2d4] leading-relaxed font-light max-w-lg">
              {lang === 'es'
                ? 'Catálogo biológico interactivo de la flora y fauna nativa del Lago Titicaca. Un santuario de alta montaña para la observación respetuosa de aves, mamíferos, peces y flora andina.'
                : 'Interactive biological catalog of Lake Titicaca native flora and wildlife. A high-altitude sanctuary for ethical observation of birds, mammals, fish, and Andean flora.'}
            </p>
          </div>

          {/* Col 2: Conservation & Ecological Note */}
          <div className="space-y-2 text-xs">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#2ee59d]" />
              <span>{lang === 'es' ? 'Conservación Andina' : 'Andean Conservation'}</span>
            </h4>
            <p className="text-[#b8e2d4] leading-relaxed font-light max-w-lg">
              {lang === 'es'
                ? 'El Lago Titicaca alberga especies emblemáticas como el Cuy Silvestre (Poronccoy), el Zambullidor no volador y la totora milenaria. Promovemos la protección del ecosistema lacustre.'
                : 'Lake Titicaca shelters iconic species such as the Wild Cavy (Poronccoy), the flightless grebe, and ancestral totora reeds. We support active lake ecosystem conservation.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
