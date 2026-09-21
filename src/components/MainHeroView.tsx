import React, { useState, useEffect } from 'react';
import { Species, Language } from '../types';
import { HeroAnimatedBackground } from './HeroAnimatedBackground';
import {
  Bird,
  PawPrint,
  Fish,
  Flower2,
  ArrowRight,
  X,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Wind,
  Camera,
  TreePine,
  Sun,
  Sprout,
  Waves,
} from 'lucide-react';

interface MainHeroViewProps {
  speciesList: Species[];
  lang: Language;
  onSelectSpecies: (speciesId: string) => void;
  onHotelGuideClick: () => void;
  spottedIds: string[];
  onToggleSpotted: (speciesId: string) => void;
  activeCategoryModal?: 'fauna' | 'flora' | null;
  onCategoryModalChange?: (category: 'fauna' | 'flora' | null) => void;
}

export const MainHeroView: React.FC<MainHeroViewProps> = ({
  speciesList,
  lang,
  onSelectSpecies,
  onHotelGuideClick,
  spottedIds,
  onToggleSpotted,
  activeCategoryModal,
  onCategoryModalChange,
}) => {
  // State for active category modal/drawer ('fauna' | 'flora' | null)
  const [internalCategory, setInternalCategory] = useState<'fauna' | 'flora' | null>(activeCategoryModal ?? null);
  const [faunaSubfilter, setFaunaSubfilter] = useState<'all' | 'birds' | 'mammals' | 'amphibians_fish'>('all');
  const [floraSectionFilter, setFloraSectionFilter] = useState<'all' | 'medicinales' | 'arboles' | 'cactaceas' | 'flores' | 'huerto' | 'acuaticas'>('all');

  useEffect(() => {
    if (activeCategoryModal !== undefined) {
      setInternalCategory(activeCategoryModal);
    }
  }, [activeCategoryModal]);

  const selectedCategory = activeCategoryModal !== undefined ? activeCategoryModal : internalCategory;

  const setSelectedCategory = (cat: 'fauna' | 'flora' | null) => {
    setInternalCategory(cat);
    onCategoryModalChange?.(cat);
  };

  // Counts for each category
  const birdsCount = speciesList.filter((sp) => sp.category === 'birds').length;
  const mammalsCount = speciesList.filter((sp) => sp.category === 'mammals').length;
  const fishCount = speciesList.filter((sp) => sp.category === 'amphibians_fish').length;
  const faunaCount = birdsCount + mammalsCount + fishCount;
  const floraCount = speciesList.filter((sp) => sp.category === 'flora').length;

  // Counts for botanical flora sections
  const medicinalCount = speciesList.filter((sp) => sp.category === 'flora' && sp.plantSection === 'medicinales').length;
  const arbolesCount = speciesList.filter((sp) => sp.category === 'flora' && sp.plantSection === 'arboles').length;
  const cactaceasCount = speciesList.filter((sp) => sp.category === 'flora' && sp.plantSection === 'cactaceas').length;
  const floresCount = speciesList.filter((sp) => sp.category === 'flora' && sp.plantSection === 'flores').length;
  const huertoCount = speciesList.filter((sp) => sp.category === 'flora' && sp.plantSection === 'huerto').length;
  const acuaticasCount = speciesList.filter((sp) => sp.category === 'flora' && sp.plantSection === 'acuaticas').length;

  // Filter species strictly by selected category and subfilters
  const activeCategorySpecies = selectedCategory === 'flora'
    ? speciesList.filter((sp) => {
        if (sp.category !== 'flora') return false;
        if (floraSectionFilter !== 'all' && sp.plantSection !== floraSectionFilter) return false;
        return true;
      })
    : selectedCategory === 'fauna'
    ? speciesList.filter((sp) => {
        if (sp.category === 'flora') return false;
        if (faunaSubfilter !== 'all' && sp.category !== faunaSubfilter) return false;
        return true;
      })
    : [];

  return (
    <div id="main-inspired-hero" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-[#07241d] text-white select-none">
      {/* Cinematic Looping Frame-by-Frame Background (Frames 014 - 099) */}
      <HeroAnimatedBackground />

      {/* 
        ========================================================================
        MAIN FOREGROUND CONTENT (Styled precisely like image.png)
        - Crisp modern typography
        - "JOURNEY of the TITICACA" aesthetic
        - Vibrant mint / spring green button ("EXPLORE THE LAKE")
        - 2 MAIN ICON CARDS: FAUNA (Aves, Mamíferos, Peces) & FLORA
        - Bottom status bar with Lake Titicaca sanctuary info
        ========================================================================
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-6 pb-6 w-full flex-1 flex flex-col justify-between">
        {/* Top: Header Titles with high contrast and luxury typography */}
        <div className="pt-1 sm:pt-2 text-center">
          <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent to-amber-400"></span>
            <span className="font-bold tracking-widest">{lang === 'es' ? 'Sonesta Posadas del Inca Puno' : 'Sonesta Posadas del Inca Puno'}</span>
            <span className="w-8 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent to-amber-400"></span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-black text-white tracking-tight leading-none uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_6px_rgba(0,0,0,1)] text-center mt-1.5">
            TITICACA
          </h1>
          <div className="inline-flex items-center justify-center gap-2 mt-1.5 px-4 py-1 rounded-full bg-black/45 backdrop-blur-md border border-amber-400/30 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <p className="font-serif italic text-sm sm:text-lg text-amber-100 font-medium tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] text-center">
              {lang === 'es' ? 'Guía Oficial de Fauna Silvestre & Flora Sagrada' : 'Official Guide to Native Wildlife & Sacred Flora'}
            </p>
          </div>
        </div>

        {/* Bottom Elements: Distributed to the EXTREMES (Left & Right), keeping center open for background */}
        <div className="w-full flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6 mt-auto pt-6">
          {/* Left Extreme: Welcome / Sanctuary description with high-end glassmorphism & contrast */}
          <div className="w-full md:max-w-md lg:max-w-lg bg-black/60 hover:bg-black/70 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border-l-4 border-amber-400 border-y border-r border-white/20 shadow-2xl shadow-black/80 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                {lang === 'es' ? 'Santuario Ecológico Bahía de Puno' : 'Puno Bay Ecological Sanctuary'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#f5fbf8] leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] text-justify">
              {lang === 'es'
                ? 'Bienvenido al santuario natural de Sonesta Posadas del Inca a orillas de la Bahía de Puno. Una guía interactiva creada para explorar en detalle tanto nuestra fauna silvestre (aves emblemáticas, mamíferos y peces nativos) como la ancestral flora altoandina (árboles sagrados, plantas medicinales y totorales). Seleccione una categoría para iniciar su recorrido.'
                : 'Welcome to the natural sanctuary of Sonesta Posadas del Inca on the shores of Puno Bay. An interactive field guide created to explore in detail both our native wildlife (iconic waterbirds, mammals, and lake fish) and the ancestral high-Andean flora (sacred trees, medicinal herbs, and living totora reeds). Select a category to begin your journey.'}
            </p>
          </div>

          {/* Right Extreme: Category Selector card with warm sunset amber & emerald styling */}
          <div
            id="hero-filters-card"
            className="w-full md:w-[360px] lg:w-[390px] bg-black/60 hover:bg-black/70 border border-amber-400/40 hover:border-amber-400/80 rounded-2xl p-4 sm:p-4.5 backdrop-blur-xl shadow-2xl shadow-black/90 transition-all duration-300 ring-1 ring-white/20 text-left"
          >
            {/* Header: Clean status bar with pulse dot and species count */}
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/20">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-90"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                </span>
                <span className="text-[11px] uppercase font-bold tracking-widest text-amber-100 drop-shadow">
                  {lang === 'es' ? 'Seleccione para Explorar' : 'Select to Explore'}
                </span>
              </div>
              <span className="text-[10px] text-amber-200 font-bold bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                {faunaCount + floraCount} {lang === 'es' ? 'especies' : 'species'}
              </span>
            </div>

            {/* Modern Segmented Controller: Seamless tab switch */}
            <div className="p-1 bg-black/55 rounded-xl border border-white/20 grid grid-cols-2 gap-1.5 shadow-inner">
              {/* Fauna Tab */}
              <button
                type="button"
                id="filter-btn-fauna"
                onClick={() => {
                  if (selectedCategory === 'fauna') {
                    setSelectedCategory(null);
                  } else {
                    setSelectedCategory('fauna');
                    setFaunaSubfilter('all');
                  }
                }}
                className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedCategory === 'fauna'
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-black shadow-lg shadow-amber-500/35 scale-[1.02]'
                    : 'text-white/90 hover:bg-white/15 font-semibold'
                }`}
              >
                <PawPrint className={`w-4 h-4 ${selectedCategory === 'fauna' ? 'text-stone-950' : 'text-amber-400'}`} />
                <span className="text-xs uppercase font-bold tracking-wide">
                  {lang === 'es' ? 'Fauna' : 'Fauna'}
                </span>
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${
                  selectedCategory === 'fauna' ? 'bg-black/25 text-stone-950 font-black' : 'bg-white/20 text-amber-200'
                }`}>
                  {faunaCount}
                </span>
              </button>

              {/* Flora Tab */}
              <button
                type="button"
                id="filter-btn-flora"
                onClick={() => setSelectedCategory(selectedCategory === 'flora' ? null : 'flora')}
                className={`py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  selectedCategory === 'flora'
                    ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 text-stone-950 font-black shadow-lg shadow-emerald-500/35 scale-[1.02]'
                    : 'text-white/90 hover:bg-white/15 font-semibold'
                }`}
              >
                <Flower2 className={`w-4 h-4 ${selectedCategory === 'flora' ? 'text-stone-950' : 'text-emerald-400'}`} />
                <span className="text-xs uppercase font-bold tracking-wide">
                  {lang === 'es' ? 'Flora' : 'Flora'}
                </span>
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${
                  selectedCategory === 'flora' ? 'bg-black/25 text-stone-950 font-black' : 'bg-white/20 text-emerald-200'
                }`}>
                  {floraCount}
                </span>
              </button>
            </div>

            {/* Active selection helper / quick cue */}
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-amber-200/90">
              {selectedCategory ? (
                <>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{lang === 'es' ? 'Explorando:' : 'Exploring:'} <strong className="text-white uppercase font-bold">{selectedCategory}</strong></span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(null);
                      setFaunaSubfilter('all');
                    }}
                    className="text-amber-300 hover:text-white underline cursor-pointer text-[10px] font-semibold"
                  >
                    {lang === 'es' ? 'Cerrar catálogo' : 'Close catalog'}
                  </button>
                </>
              ) : (
                <span className="text-[10px] text-amber-200/90 italic flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{lang === 'es' ? 'Toque Fauna o Flora para desplegar el catálogo' : 'Click Fauna or Flora to open catalog'}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        FOCUSED CATEGORY DRAWER / MODAL
        - Displayed ONLY when an icon filter is active (Fauna / Flora)
        - Species are kept organized and uncluttered
        ========================================================================
      */}
      {selectedCategory && (
        <div
          id="category-animals-modal"
          onClick={() => setSelectedCategory(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#092b22] border border-[#1e614f] w-full max-w-5xl xl:max-w-6xl rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-white animate-in fade-in duration-200 cursor-default"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#184d3e] flex items-center justify-between bg-[#062019]/95">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2ee59d] text-[#07241d] flex items-center justify-center font-bold shadow-md">
                  {selectedCategory === 'fauna' && <PawPrint className="w-5 h-5" />}
                  {selectedCategory === 'flora' && <Flower2 className="w-5 h-5" />}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#a3e5ce] font-bold">
                    {lang === 'es' ? 'Filtro Activo' : 'Active Filter'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {selectedCategory === 'fauna' && (lang === 'es' ? 'Fauna Silvestre del Lago Titicaca' : 'Lake Titicaca Native Wildlife')}
                    {selectedCategory === 'flora' && (lang === 'es' ? 'Flora Nativa & Macrófitas Acuáticas' : 'Native Flora & Aquatic Plants')}
                  </h2>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 rounded-full text-[#99cfbd] hover:text-white hover:bg-[#114336] transition-colors cursor-pointer"
                title={lang === 'es' ? 'Cerrar' : 'Close'}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Animal Type Filter Bar (Fauna Subcategories) */}
            {selectedCategory === 'fauna' && (
              <div className="px-5 sm:px-6 py-3 border-b border-[#184d3e] bg-[#07241d]/90 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-[#8eccb7] mr-1 hidden sm:inline">
                  {lang === 'es' ? 'Tipo de animal:' : 'Animal type:'}
                </span>

                <button
                  type="button"
                  onClick={() => setFaunaSubfilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    faunaSubfilter === 'all'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <span>{lang === 'es' ? 'Todos' : 'All'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    faunaSubfilter === 'all' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {faunaCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFaunaSubfilter('birds')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    faunaSubfilter === 'birds'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <Bird className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Aves' : 'Birds'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    faunaSubfilter === 'birds' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {birdsCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFaunaSubfilter('amphibians_fish')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    faunaSubfilter === 'amphibians_fish'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <Fish className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Peces y Anfibios' : 'Fish & Amphibians'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    faunaSubfilter === 'amphibians_fish' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {fishCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFaunaSubfilter('mammals')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    faunaSubfilter === 'mammals'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <PawPrint className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Mamíferos' : 'Mammals'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    faunaSubfilter === 'mammals' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {mammalsCount}
                  </span>
                </button>
              </div>
            )}

            {/* Botanical Sections Filter Bar (Flora Subcategories) */}
            {selectedCategory === 'flora' && (
              <div className="px-5 sm:px-6 py-3 border-b border-[#184d3e] bg-[#07241d]/90 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-[#8eccb7] mr-1 hidden sm:inline">
                  {lang === 'es' ? 'Sección botánica:' : 'Botanical section:'}
                </span>

                <button
                  type="button"
                  onClick={() => setFloraSectionFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    floraSectionFilter === 'all'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <span>{lang === 'es' ? 'Todas' : 'All'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    floraSectionFilter === 'all' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {floraCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFloraSectionFilter('medicinales')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    floraSectionFilter === 'medicinales'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Medicinales & Aromáticas' : 'Medicinal & Aromatic'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    floraSectionFilter === 'medicinales' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {medicinalCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFloraSectionFilter('arboles')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    floraSectionFilter === 'arboles'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <TreePine className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Árboles & Arbustos' : 'Trees & Shrubs'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    floraSectionFilter === 'arboles' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {arbolesCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFloraSectionFilter('cactaceas')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    floraSectionFilter === 'cactaceas'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Cactáceas & Suculentas' : 'Cacti & Succulents'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    floraSectionFilter === 'cactaceas' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {cactaceasCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFloraSectionFilter('flores')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    floraSectionFilter === 'flores'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <Flower2 className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Flores & Ornamentales' : 'Flowers & Ornamentals'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    floraSectionFilter === 'flores' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {floresCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFloraSectionFilter('huerto')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    floraSectionFilter === 'huerto'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Alimenticias & Huerto' : 'Kitchen Garden & Food'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    floraSectionFilter === 'huerto' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {huertoCount}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFloraSectionFilter('acuaticas')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    floraSectionFilter === 'acuaticas'
                      ? 'bg-[#2ee59d] text-[#07241d] shadow-sm'
                      : 'bg-[#0e372c] text-[#a4ebd3] hover:bg-[#154c3e] hover:text-white border border-[#1d6350]'
                  }`}
                >
                  <Waves className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Acuáticas del Lago' : 'Lake Aquatic'}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    floraSectionFilter === 'acuaticas' ? 'bg-[#07241d]/15 text-[#07241d]' : 'bg-white/10 text-white'
                  }`}>
                    {acuaticasCount}
                  </span>
                </button>
              </div>
            )}

            {/* Species List for THIS Category Only */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategorySpecies.map((sp) => {
                  const isSpotted = spottedIds.includes(sp.id);
                  return (
                    <div
                      key={sp.id}
                      className="bg-[#0c352a]/90 border border-[#1b5a48] hover:border-[#2ee59d]/70 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#2ee59d]/10"
                    >
                      <div>
                        {/* Image & Badges */}
                        <div
                          onClick={() => {
                            onSelectSpecies(sp.id);
                          }}
                          className="relative aspect-16/9 rounded-xl overflow-hidden mb-3 bg-[#061e17] cursor-pointer"
                        >
                          <img
                            src={sp.images[0].url}
                            alt={sp.commonName[lang]}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85" />

                          {/* Multiple photos badge */}
                          {sp.images.length > 1 && (
                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-semibold backdrop-blur-xs flex items-center gap-1 pointer-events-none">
                              <Camera className="w-3 h-3 text-[#2ee59d]" />
                              <span>{sp.images.length} {lang === 'es' ? 'fotos' : 'photos'}</span>
                            </div>
                          )}

                          {/* Spotted Checkbox Button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleSpotted(sp.id);
                            }}
                            className={`absolute top-2 right-2 p-1.5 rounded-full transition-all ${
                              isSpotted
                                ? 'bg-[#2ee59d] text-[#07241d]'
                                : 'bg-black/50 text-white/70 hover:bg-black/80 hover:text-white'
                            }`}
                            title={isSpotted ? 'Avistado' : 'Marcar avistamiento'}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>

                          {/* Indigenous name at bottom of image */}
                          {sp.indigenousName && (
                            <div className="absolute bottom-2 left-2.5 text-xs text-[#d2f3e7] font-medium drop-shadow-sm">
                              {sp.indigenousName}
                            </div>
                          )}
                        </div>

                        {/* Text Details */}
                        <h4
                          onClick={() => {
                            onSelectSpecies(sp.id);
                          }}
                          className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#2ee59d] transition-colors cursor-pointer"
                        >
                          {sp.commonName[lang]}
                        </h4>

                        <div className="font-serif italic text-xs text-[#8eccb7] mt-0.5">
                          {sp.scientificName}
                        </div>

                        {/* Botanical badges for flora or category tag */}
                        {sp.category === 'flora' && (
                          <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                            {sp.family && (
                              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-[#13493b] text-[#7ee7c4] border border-[#1b5d4b]">
                                {sp.family}
                              </span>
                            )}
                            {sp.plantSection && (
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#0e3a2e] text-[#b8f0dc]">
                                {sp.plantSection === 'medicinales' && (lang === 'es' ? 'Medicinal & Aromática' : 'Medicinal & Aromatic')}
                                {sp.plantSection === 'arboles' && (lang === 'es' ? 'Árbol / Arbusto' : 'Tree / Shrub')}
                                {sp.plantSection === 'cactaceas' && (lang === 'es' ? 'Cactácea' : 'Cactus / Succulent')}
                                {sp.plantSection === 'flores' && (lang === 'es' ? 'Flor Ornamental' : 'Ornamental Flower')}
                                {sp.plantSection === 'huerto' && (lang === 'es' ? 'Huerto Andino' : 'Kitchen Garden')}
                                {sp.plantSection === 'acuaticas' && (lang === 'es' ? 'Acuática Titicaca' : 'Lake Aquatic')}
                              </span>
                            )}
                          </div>
                        )}

                        <p className="text-xs text-[#b8e5d4] line-clamp-2 mt-2 leading-relaxed">
                          {sp.overview[lang]}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-[#164839] flex items-center justify-between text-[11px] text-[#8eccb7]">
                          <span className="text-[#a4ebd3] font-medium">{sp.sonestaSpotting.location[lang]}</span>
                          <span>{sp.sonestaSpotting.difficultyLabel[lang]}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => {
                          onSelectSpecies(sp.id);
                        }}
                        className="mt-3 w-full py-2.5 px-3 rounded-xl bg-[#114234] group-hover:bg-[#2ee59d] group-hover:text-[#07241d] text-[#cbf4e5] font-bold text-xs transition-all flex items-center justify-between cursor-pointer"
                      >
                        <span>{lang === 'es' ? 'Ver Ficha de Especie' : 'View Species Profile'}</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
