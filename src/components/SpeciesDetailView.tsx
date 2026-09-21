import React, { useState, useEffect } from 'react';
import { Species, Language, CustomUploadedPhoto } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Sparkles,
  Camera,
  Layers,
  Maximize2,
  X,
  Compass,
  Flower2,
  PawPrint,
  Leaf,
  HeartPulse,
} from 'lucide-react';

interface SpeciesDetailViewProps {
  species: Species;
  lang: Language;
  onBack: () => void;
  onSelectSpecies: (speciesId: string) => void;
  allSpecies: Species[];
  isSpotted: boolean;
  onToggleSpotted: (speciesId: string) => void;
  onOpenUploadPhoto: (speciesId: string) => void;
  customPhotos: CustomUploadedPhoto[];
}

export const SpeciesDetailView: React.FC<SpeciesDetailViewProps> = ({
  species,
  lang,
  onBack,
  onSelectSpecies,
  allSpecies,
  isSpotted,
  onToggleSpotted,
  onOpenUploadPhoto,
  customPhotos,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'habitat' | 'behavior'>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Reset image when species changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [species.id]);

  // Combine standard images with user-uploaded custom photos
  const speciesCustomPhotos = customPhotos.filter((p) => p.speciesId === species.id);
  const allImages = [
    ...species.images,
    ...speciesCustomPhotos.map((cp) => ({
      url: cp.imageUrl,
      caption: { es: cp.caption, en: cp.caption },
      credit: `${cp.photographerName} (Huésped / Guest)`,
    })),
  ];

  const currentImg = allImages[currentImageIndex] || species.images[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <article id="species-detail-page" className="bg-stone-100 text-stone-900 pb-20 min-h-screen">
      {/* Editorial Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBack}
            id="species-detail-back-button"
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors border shadow-xs cursor-pointer ${
              species.category === 'flora'
                ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border-emerald-300'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-800 hover:text-stone-950 border-stone-200'
            }`}
          >
            <ChevronLeft className={`w-4 h-4 ${species.category === 'flora' ? 'text-emerald-700' : 'text-stone-600'}`} />
            <span>
              {species.category === 'flora'
                ? (lang === 'es' ? 'Volver a Flora' : 'Back to Flora')
                : (lang === 'es' ? 'Volver a Fauna' : 'Back to Fauna')}
            </span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors"
              title="Compartir ficha"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedShare ? (lang === 'es' ? '¡Enlace copiado!' : 'Copied!') : (lang === 'es' ? 'Compartir' : 'Share')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-4">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-950 tracking-tight">
            {species.commonName[lang]}
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-stone-600 mt-1">
            {species.scientificName}
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-3.5">
            {species.category === 'flora' ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
                <Flower2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'es' ? 'Flora Altoandina de Puno' : 'High Andean Flora of Puno'}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300">
                <PawPrint className="w-3.5 h-3.5 text-amber-700" />
                <span>{lang === 'es' ? 'Fauna Silvestre del Titicaca' : 'Lake Titicaca Wildlife'}</span>
              </span>
            )}

            {species.family && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-800 border border-stone-300">
                {lang === 'es' ? `Familia: ${species.family}` : `Family: ${species.family}`}
              </span>
            )}

            {species.plantSection && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-900 border border-teal-300">
                {species.plantSection === 'medicinales' && (lang === 'es' ? 'Medicinal & Aromática' : 'Medicinal & Aromatic')}
                {species.plantSection === 'arboles' && (lang === 'es' ? 'Árbol / Arbusto Andino' : 'Andean Tree / Shrub')}
                {species.plantSection === 'cactaceas' && (lang === 'es' ? 'Cactácea Altoandina' : 'High Andean Cactus')}
                {species.plantSection === 'flores' && (lang === 'es' ? 'Flor Ornamental' : 'Ornamental Flower')}
                {species.plantSection === 'huerto' && (lang === 'es' ? 'Huerto Tradicional' : 'Traditional Garden')}
                {species.plantSection === 'acuaticas' && (lang === 'es' ? 'Acuática del Titicaca' : 'Lake Titicaca Aquatic')}
              </span>
            )}

            {species.indigenousName && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                {species.indigenousName}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area: Left Images & Right Descriptions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Media Showcase (Images & Thumbnails) */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Photography Showcase */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 bg-stone-900 group">
                <img
                  src={currentImg.url}
                  alt={species.commonName[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Photo indicator badge when multiple photos */}
                {allImages.length > 1 && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm shadow-xs pointer-events-none">
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {lang === 'es'
                        ? `Foto ${currentImageIndex + 1} de ${allImages.length}`
                        : `Photo ${currentImageIndex + 1} of ${allImages.length}`}
                    </span>
                  </div>
                )}

                {/* Lightbox zoom button */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition-all cursor-pointer"
                  title="Ampliar imagen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Navigation arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white transition-all backdrop-blur-xs cursor-pointer hover:scale-105"
                      title={lang === 'es' ? 'Foto anterior' : 'Previous photo'}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white transition-all backdrop-blur-xs cursor-pointer hover:scale-105"
                      title={lang === 'es' ? 'Siguiente foto' : 'Next photo'}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Image Caption & Credits */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium leading-snug drop-shadow-sm">
                    {currentImg.caption[lang]}
                  </p>
                  <p className="text-xs text-stone-300/90 font-light mt-1 flex items-center gap-1.5">
                    <Camera className="w-3 h-3 text-amber-400" />
                    <span>{currentImg.credit}</span>
                  </p>
                </div>
              </div>

              {/* Thumbnails Row */}
              {allImages.length > 1 && (
                <div className="p-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 overflow-x-auto">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                          idx === currentImageIndex
                            ? 'border-amber-600 ring-2 ring-amber-400/40 shadow-xs'
                            : 'border-transparent opacity-65 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img.url}
                          alt=""
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-0.5 right-0.5 px-1 py-0.2 rounded bg-black/70 text-[10px] text-white font-mono leading-none">
                          {idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-stone-500 shrink-0">
                    {lang === 'es' ? '2 fotos en alta calidad' : '2 HD photos'}
                  </span>
                </div>
              )}
            </div>

            {/* User Uploaded Photos Showcase for this species */}
            {speciesCustomPhotos.length > 0 && (
              <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-amber-600" />
                    <h3 className="font-serif font-bold text-base text-stone-900">
                      {lang === 'es' ? 'Fotografías de Huéspedes' : 'Guest Photography'}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-stone-500">
                    {speciesCustomPhotos.length} {lang === 'es' ? 'foto(s)' : 'photo(s)'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {speciesCustomPhotos.map((cp) => (
                    <div key={cp.id} className="relative rounded-xl overflow-hidden aspect-4/3 group bg-stone-950">
                      <img
                        src={cp.imageUrl}
                        alt={cp.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end text-white text-[11px]">
                        <p className="font-semibold truncate">{cp.caption}</p>
                        <p className="text-stone-300 text-[10px]">Por: {cp.photographerName}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Description and Tabbed Content */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6">

            {/* Editorial Content Navigation Tabs (Inspired by Galapagos Conservation Trust layout) */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="flex border-b border-stone-200 overflow-x-auto bg-stone-50/70 scrollbar-none">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all ${
                    activeTab === 'overview'
                      ? 'border-amber-600 text-amber-900 bg-white shadow-2xs'
                      : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                  }`}
                >
                  {species.category === 'flora'
                    ? (lang === 'es' ? '1. Descripción y Botánica' : '1. Botanical Description')
                    : (lang === 'es' ? '1. Descripción General' : '1. Overview')}
                </button>

                <button
                  onClick={() => setActiveTab('habitat')}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all ${
                    activeTab === 'habitat'
                      ? 'border-amber-600 text-amber-900 bg-white shadow-2xs'
                      : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                  }`}
                >
                  {species.category === 'flora'
                    ? (lang === 'es' ? '2. Hábitat y Ecología' : '2. Habitat & Ecology')
                    : (lang === 'es' ? '2. Hábitat y Distribución' : '2. Habitat & Range')}
                </button>

                <button
                  onClick={() => setActiveTab('behavior')}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all ${
                    activeTab === 'behavior'
                      ? 'border-amber-600 text-amber-900 bg-white shadow-2xs'
                      : 'border-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
                  }`}
                >
                  {species.category === 'flora'
                    ? (lang === 'es' ? '3. Usos Tradicionales' : '3. Traditional Uses')
                    : (lang === 'es' ? '3. Comportamiento y Dieta' : '3. Behavior & Diet')}
                </button>
              </div>

              {/* Tab Panels */}
              <div className="p-6 sm:p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {species.category === 'flora' ? (
                      <>
                        <div>
                          <h3 className="text-xl font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
                            <Leaf className="w-5 h-5 text-emerald-700" />
                            <span>{lang === 'es' ? 'Descripción y Características Botánicas' : 'Botanical Characteristics & Morphology'}</span>
                          </h3>
                          <p className="text-stone-700 leading-relaxed text-base">
                            {species.botanicalCharacteristics ? species.botanicalCharacteristics[lang] : species.overview[lang]}
                          </p>
                        </div>

                        {species.botanicalCharacteristics && species.overview && (
                          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                            <div className="text-xs uppercase font-bold text-stone-500 mb-1.5">
                              {lang === 'es' ? 'Aspectos Ecológicos y Generales' : 'Ecological & General Context'}
                            </div>
                            <p className="text-sm text-stone-700 leading-relaxed">
                              {species.overview[lang]}
                            </p>
                          </div>
                        )}

                        <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-5">
                          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1">
                            <Sparkles className="w-4 h-4 text-emerald-600" />
                            <span>{lang === 'es' ? 'Clasificación y Adaptación de Altura' : 'Classification & High-Altitude Adaptation'}</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs">
                            <div className="p-2.5 rounded-lg bg-white/80 border border-emerald-200">
                              <span className="font-bold text-emerald-950 block">{lang === 'es' ? 'Familia Botánica:' : 'Botanical Family:'}</span>
                              <span className="text-stone-700">{species.family}</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/80 border border-emerald-200">
                              <span className="font-bold text-emerald-950 block">{lang === 'es' ? 'Orden Botánico:' : 'Botanical Order:'}</span>
                              <span className="text-stone-700">{species.order}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
                            {lang === 'es' ? 'Descripción y Biología' : 'Description & Biology'}
                          </h3>
                          <p className="text-stone-700 leading-relaxed text-base">
                            {species.overview[lang]}
                          </p>
                        </div>

                        <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-5">
                          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                            <Sparkles className="w-4 h-4 text-amber-600" />
                            <span>{lang === 'es' ? 'Dato Curioso del Altiplano' : 'Altiplano Natural Wonder'}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                            {species.category === 'birds'
                              ? lang === 'es'
                                ? 'A 3,812 msnm, las aves del Titicaca poseen adaptaciones hematológicas especiales como mayor concentración de hemoglobina para volar y bucear en aire con menor presión de oxígeno.'
                                : 'At 12,507 feet, Lake Titicaca birds have specialized blood adaptations including higher hemoglobin concentration to dive and fly in thin atmospheric oxygen.'
                              : lang === 'es'
                              ? 'El aislamiento geográfico de la cuenca endorreica del Titicaca durante el Pleistoceno generó un laboratorio evolutivo similar al de las Islas Galápagos.'
                              : 'The closed geological isolation of the Lake Titicaca endorheic basin created an evolutionary laboratory rivaling the Galapagos Islands.'}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {activeTab === 'habitat' && (
                  <div className="space-y-5">
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      {species.category === 'flora'
                        ? (lang === 'es' ? 'Hábitat y Ecología Altiplánica' : 'Altiplano Habitat & Ecology')
                        : (lang === 'es' ? 'Hábitat y Distribución Geográfica' : 'Habitat & Geographical Range')}
                    </h3>
                    <p className="text-stone-700 leading-relaxed text-base">
                      {species.habitatDistribution[lang]}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <div className="text-xs uppercase font-bold text-stone-500 mb-1">
                          {lang === 'es' ? 'Rango Altitudinal' : 'Altitudinal Range'}
                        </div>
                        <div className="text-lg font-serif font-bold text-stone-900">
                          {species.quickFacts.altitude}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <div className="text-xs uppercase font-bold text-stone-500 mb-1">
                          {lang === 'es' ? 'Microhábitat Clave' : 'Key Microhabitat'}
                        </div>
                        <div className="text-sm font-semibold text-stone-800">
                          {species.quickFacts.habitat[lang]}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'behavior' && (
                  <div className="space-y-5">
                    {species.category === 'flora' ? (
                      <>
                        <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
                          <HeartPulse className="w-5 h-5 text-emerald-700" />
                          <span>{lang === 'es' ? 'Usos Tradicionales, Medicina Andina y Propiedades' : 'Traditional Uses, Andean Medicine & Properties'}</span>
                        </h3>
                        <p className="text-stone-700 leading-relaxed text-base">
                          {species.traditionalUses ? species.traditionalUses[lang] : species.behaviorDiet[lang]}
                        </p>

                        <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                          <div className="text-xs uppercase font-bold text-emerald-900 mb-1">
                            {lang === 'es' ? 'Conocimiento Etnobotánico Altiplánico' : 'High-Andean Ethnobotanical Wisdom'}
                          </div>
                          <p className="text-sm font-medium text-stone-800 leading-relaxed">
                            {species.quickFacts.diet[lang]}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-xl font-serif font-bold text-stone-900">
                          {lang === 'es' ? 'Comportamiento, Reproducción y Dieta' : 'Behavior, Breeding & Diet'}
                        </h3>
                        <p className="text-stone-700 leading-relaxed text-base">
                          {species.behaviorDiet[lang]}
                        </p>

                        <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                          <div className="text-xs uppercase font-bold text-stone-500 mb-1">
                            {lang === 'es' ? 'Alimentación Principal' : 'Primary Diet'}
                          </div>
                          <p className="text-sm font-medium text-stone-800 leading-relaxed">
                            {species.quickFacts.diet[lang]}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 select-none">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-all cursor-pointer z-10"
            title="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer z-10 hover:scale-110"
                title={lang === 'es' ? 'Foto anterior' : 'Previous photo'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer z-10 hover:scale-110"
                title={lang === 'es' ? 'Siguiente foto' : 'Next photo'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={currentImg.url}
              alt={species.commonName[lang]}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center px-4 max-w-2xl">
              {allImages.length > 1 && (
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-stone-300 text-xs font-semibold mb-2">
                  {lang === 'es'
                    ? `Fotografía ${currentImageIndex + 1} de ${allImages.length}`
                    : `Photograph ${currentImageIndex + 1} of ${allImages.length}`}
                </div>
              )}
              <p className="text-white text-sm sm:text-base font-medium">
                {currentImg.caption[lang]}
              </p>
              <p className="text-stone-400 text-xs mt-1">
                {currentImg.credit}
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
