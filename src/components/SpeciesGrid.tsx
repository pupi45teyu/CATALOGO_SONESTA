import React, { useState, useMemo } from 'react';
import { Species, Language, Category, IUCNStatus } from '../types';
import {
  Search,
  Filter,
  CheckCircle2,
  BookmarkCheck,
  ChevronRight,
  Sparkles,
  LayoutGrid,
  List,
  SlidersHorizontal,
  X,
} from 'lucide-react';

interface SpeciesGridProps {
  speciesList: Species[];
  lang: Language;
  onSelectSpecies: (speciesId: string) => void;
  spottedIds: string[];
  onToggleSpotted: (speciesId: string) => void;
}

export const SpeciesGrid: React.FC<SpeciesGridProps> = ({
  speciesList,
  lang,
  onSelectSpecies,
  spottedIds,
  onToggleSpotted,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedIUCN, setSelectedIUCN] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [onlyEndemic, setOnlyEndemic] = useState(false);

  // Filter logic
  const filteredSpecies = useMemo(() => {
    return speciesList.filter((sp) => {
      // Category filter
      if (selectedCategory === 'birds' && sp.category !== 'birds') return false;
      if (selectedCategory === 'amphibians_fish' && sp.category !== 'amphibians_fish') return false;
      if (selectedCategory === 'mammals' && sp.category !== 'mammals') return false;
      if (selectedCategory === 'endemic' && !sp.isEndemic) return false;
      if (selectedCategory === 'threatened' && !['CR', 'EN', 'VU'].includes(sp.iucnStatus)) return false;

      // Endemic checkbox
      if (onlyEndemic && !sp.isEndemic) return false;

      // IUCN filter
      if (selectedIUCN !== 'all' && sp.iucnStatus !== selectedIUCN) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchEs = sp.commonName.es.toLowerCase().includes(query);
        const matchEn = sp.commonName.en.toLowerCase().includes(query);
        const matchSci = sp.scientificName.toLowerCase().includes(query);
        const matchInd = sp.indigenousName ? sp.indigenousName.toLowerCase().includes(query) : false;
        const matchFamily = sp.family.toLowerCase().includes(query);

        if (!matchEs && !matchEn && !matchSci && !matchInd && !matchFamily) {
          return false;
        }
      }

      return true;
    });
  }, [speciesList, selectedCategory, selectedIUCN, onlyEndemic, searchQuery]);

  return (
    <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'Fauna Silvestre del Altiplano' : 'Altiplano Native Wildlife'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            {lang === 'es' ? 'Catálogo de Especies Nativas' : 'Native Species Catalog'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-2xl">
            {lang === 'es'
              ? 'Guía ornitológica, ictiológica y de mastozoología del Lago Titicaca para huéspedes de Sonesta Posadas del Inca Puno. Seleccione una especie para acceder a su ficha científica completa.'
              : 'Ornithological, ichthyological, and mammalogy guide to Lake Titicaca for Sonesta Posadas del Inca guests. Select any species for full scientific and spotting profiles.'}
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2 self-start md:self-auto bg-stone-200/80 p-1 rounded-xl border border-stone-300">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-stone-900 shadow-2xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
            title="Vista de cuadrícula"
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'es' ? 'Cuadrícula' : 'Grid'}</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'list'
                ? 'bg-white text-stone-900 shadow-2xs font-bold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
            title="Vista de lista"
          >
            <List className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'es' ? 'Lista' : 'List'}</span>
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-xs mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'es'
                  ? 'Buscar por nombre común, científico (ej. Rollandia, Orestias) o quechua...'
                  : 'Search by common name, scientific name (e.g. Rollandia, Orestias), or indigenous name...'
              }
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 text-sm focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* IUCN status filter dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-stone-600 shrink-0 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
              <span>{lang === 'es' ? 'Estado UICN:' : 'IUCN Status:'}</span>
            </label>
            <select
              value={selectedIUCN}
              onChange={(e) => setSelectedIUCN(e.target.value)}
              className="py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-xs font-medium focus:outline-hidden focus:border-amber-500"
            >
              <option value="all">{lang === 'es' ? 'Todos los estados' : 'All statuses'}</option>
              <option value="CR">CR - {lang === 'es' ? 'En Peligro Crítico' : 'Critically Endangered'}</option>
              <option value="EN">EN - {lang === 'es' ? 'En Peligro' : 'Endangered'}</option>
              <option value="VU">VU - {lang === 'es' ? 'Vulnerable' : 'Vulnerable'}</option>
              <option value="NT">NT - {lang === 'es' ? 'Casi Amenazado' : 'Near Threatened'}</option>
              <option value="LC">LC - {lang === 'es' ? 'Preocupación Menor' : 'Least Concern'}</option>
            </select>
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100">
          <span className="text-xs font-semibold text-stone-500 mr-1 hidden sm:inline">
            {lang === 'es' ? 'Categoría:' : 'Category:'}
          </span>

          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {lang === 'es' ? 'Todas las Especies' : 'All Species'} ({speciesList.length})
          </button>

          <button
            onClick={() => setSelectedCategory('birds')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'birds'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {lang === 'es' ? 'Aves Acuáticas & Terrestres' : 'Birds'}
          </button>

          <button
            onClick={() => setSelectedCategory('amphibians_fish')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'amphibians_fish'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {lang === 'es' ? 'Anfibios & Peces Nativos' : 'Amphibians & Native Fish'}
          </button>

          <button
            onClick={() => setSelectedCategory('mammals')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'mammals'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {lang === 'es' ? 'Mamíferos Altoandinos' : 'Mammals'}
          </button>

          <button
            onClick={() => setSelectedCategory('endemic')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'endemic'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {lang === 'es' ? '✦ Endémicas del Titicaca' : '✦ Lake Endemics'}
          </button>

          <button
            onClick={() => setSelectedCategory('threatened')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'threatened'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {lang === 'es' ? 'En Peligro (CR/EN/VU)' : 'Threatened (CR/EN/VU)'}
          </button>
        </div>
      </div>

      {/* Results Count and Active filters indicator */}
      <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
        <span>
          {lang === 'es'
            ? `Mostrando ${filteredSpecies.length} de ${speciesList.length} especies registradas`
            : `Showing ${filteredSpecies.length} of ${speciesList.length} registered species`}
        </span>

        {spottedIds.length > 0 && (
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>
              {lang === 'es'
                ? `${spottedIds.length} avistadas por usted`
                : `${spottedIds.length} spotted by you`}
            </span>
          </span>
        )}
      </div>

      {/* Empty State */}
      {filteredSpecies.length === 0 && (
        <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-lg mx-auto">
          <p className="text-stone-700 font-medium mb-3">
            {lang === 'es'
              ? 'No se encontraron especies que coincidan con su búsqueda.'
              : 'No species found matching your filter criteria.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedIUCN('all');
            }}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors"
          >
            {lang === 'es' ? 'Restablecer filtros' : 'Reset filters'}
          </button>
        </div>
      )}

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredSpecies.map((sp) => {
            const isSpotted = spottedIds.includes(sp.id);
            return (
              <div
                key={sp.id}
                id={`species-card-${sp.id}`}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div
                    onClick={() => onSelectSpecies(sp.id)}
                    className="relative aspect-16/10 bg-stone-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={sp.images[0].url}
                      alt={sp.commonName[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold shadow-xs text-white ${
                            sp.iucnStatus === 'CR'
                              ? 'bg-red-700'
                              : sp.iucnStatus === 'EN'
                              ? 'bg-orange-600'
                              : sp.iucnStatus === 'VU'
                              ? 'bg-amber-600'
                              : sp.iucnStatus === 'NT'
                              ? 'bg-lime-700'
                              : 'bg-emerald-700'
                          }`}
                        >
                          {sp.iucnStatus}
                        </span>

                        {sp.isEndemic && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-stone-950 uppercase tracking-wide shadow-xs">
                            {lang === 'es' ? 'Endémica' : 'Endemic'}
                          </span>
                        )}
                      </div>

                      {/* Spotted bookmark button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSpotted(sp.id);
                        }}
                        className={`p-1.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                          isSpotted
                            ? 'bg-emerald-600 text-white'
                            : 'bg-black/40 text-white/80 hover:bg-black/70 hover:text-white'
                        }`}
                        title={
                          isSpotted
                            ? lang === 'es' ? 'Avistamiento registrado' : 'Sighting recorded'
                            : lang === 'es' ? 'Marcar como avistado en hotel' : 'Mark as spotted at hotel'
                        }
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Indigenous name badge if present */}
                    {sp.indigenousName && (
                      <div className="absolute bottom-2.5 left-3 text-white/90 text-xs font-medium drop-shadow-sm">
                        {sp.indigenousName}
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-800">
                        {sp.category === 'birds'
                          ? lang === 'es' ? 'Ave Acuática' : 'Water Bird'
                          : sp.category === 'amphibians_fish'
                          ? lang === 'es' ? 'Fauna Acuática' : 'Aquatic Fauna'
                          : lang === 'es' ? 'Mamífero' : 'Mammal'}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectSpecies(sp.id)}
                      className="font-serif font-bold text-lg text-stone-950 group-hover:text-amber-700 transition-colors cursor-pointer leading-snug"
                    >
                      {sp.commonName[lang]}
                    </h3>

                    <p className="font-serif italic text-xs text-stone-500 mt-0.5">
                      {sp.scientificName}
                    </p>

                    <p className="text-xs text-stone-600 line-clamp-2 mt-2.5 leading-relaxed">
                      {sp.overview[lang]}
                    </p>

                    {/* Quick Specs Snippet */}
                    <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-stone-400 block">{lang === 'es' ? 'Horario óptimo:' : 'Best time:'}</span>
                        <span className="font-semibold text-stone-800 truncate block">
                          {sp.quickFacts.bestTime[lang].split('(')[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-stone-400 block">{lang === 'es' ? 'Desde Sonesta:' : 'At Sonesta:'}</span>
                        <span className="font-semibold text-amber-900 truncate block">
                          {sp.sonestaSpotting.difficultyLabel[lang]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectSpecies(sp.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-100 group-hover:bg-amber-600 group-hover:text-white text-stone-800 font-semibold text-xs tracking-wide transition-all flex items-center justify-between"
                  >
                    <span>{lang === 'es' ? 'Ver Ficha de Especie' : 'View Species Profile'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* LIST VIEW */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filteredSpecies.map((sp) => {
            const isSpotted = spottedIds.includes(sp.id);
            return (
              <div
                key={sp.id}
                onClick={() => onSelectSpecies(sp.id)}
                className="group bg-white rounded-2xl border border-stone-200 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-stone-900 relative">
                    <img
                      src={sp.images[0].url}
                      alt={sp.commonName[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span
                      className={`absolute top-1 left-1 px-1.5 py-0.2 rounded text-[9px] font-bold text-white ${
                        sp.iucnStatus === 'CR'
                          ? 'bg-red-700'
                          : sp.iucnStatus === 'EN'
                          ? 'bg-orange-600'
                          : sp.iucnStatus === 'VU'
                          ? 'bg-amber-600'
                          : 'bg-emerald-700'
                      }`}
                    >
                      {sp.iucnStatus}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-stone-950 group-hover:text-amber-700 transition-colors">
                        {sp.commonName[lang]}
                      </h3>
                      {sp.isEndemic && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-200 text-amber-900 uppercase">
                          {lang === 'es' ? 'Endémica' : 'Endemic'}
                        </span>
                      )}
                    </div>
                    <p className="font-serif italic text-xs text-stone-500">
                      {sp.scientificName} {sp.indigenousName ? `• ${sp.indigenousName}` : ''}
                    </p>
                    <p className="text-xs text-stone-600 line-clamp-1 mt-1">
                      {sp.overview[lang]}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-[11px] text-stone-500">
                      <span>{sp.quickFacts.iucnLabel[lang]}</span>
                      <span>•</span>
                      <span className="text-amber-900 font-medium">{sp.sonestaSpotting.location[lang]}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSpotted(sp.id);
                    }}
                    className={`p-2 rounded-xl border transition-all ${
                      isSpotted
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                        : 'bg-stone-50 border-stone-200 text-stone-400 hover:text-stone-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>

                  <button className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center gap-1">
                    <span>{lang === 'es' ? 'Ver Ficha' : 'View'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
