import React, { useState } from 'react';
import { Species, Language, GuestSighting } from '../types';
import {
  BookmarkCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Trash2,
  Printer,
  ChevronRight,
  Sparkles,
  Camera,
  Plus,
} from 'lucide-react';

interface GuestSightingsViewProps {
  speciesList: Species[];
  lang: Language;
  sightings: GuestSighting[];
  onToggleSpotted: (speciesId: string) => void;
  onUpdateSightingNote: (speciesId: string, note: string) => void;
  onSelectSpecies: (speciesId: string) => void;
  onOpenUploadPhoto: (speciesId: string) => void;
}

export const GuestSightingsView: React.FC<GuestSightingsViewProps> = ({
  speciesList,
  lang,
  sightings,
  onToggleSpotted,
  onUpdateSightingNote,
  onSelectSpecies,
  onOpenUploadPhoto,
}) => {
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [tempNote, setTempNote] = useState('');

  const spottedSpeciesIds = sightings.map((s) => s.speciesId);
  const spottedCount = spottedSpeciesIds.length;
  const progressPercent = Math.round((spottedCount / speciesList.length) * 100);

  const handleStartEditNote = (sighting: GuestSighting) => {
    setEditingNoteId(sighting.speciesId);
    setTempNote(sighting.notes || '');
  };

  const handleSaveNote = (speciesId: string) => {
    onUpdateSightingNote(speciesId, tempNote);
    setEditingNoteId(null);
  };

  return (
    <div id="guest-sightings-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-1">
            <BookmarkCheck className="w-4 h-4" />
            <span>{lang === 'es' ? 'Bitácora del Huésped' : 'Guest Field Journal'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            {lang === 'es' ? 'Mis Avistamientos en el Lago' : 'My Wildlife Sightings'}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            {lang === 'es'
              ? 'Registre y lleve el seguimiento de las especies de fauna que ha observado desde el muelle o jardines de Sonesta Posadas del Inca Puno.'
              : 'Record and track the native wildlife species you have encountered from the private pier and grounds of Sonesta Posadas del Inca Puno.'}
          </p>
        </div>

        {/* Action Button: Print Checklist */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'Imprimir Cuaderno' : 'Print Journal'}</span>
          </button>
        </div>
      </div>

      {/* Progress Bar Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <div className="text-sm font-serif font-bold text-stone-900">
              {lang === 'es' ? 'Progreso de Observación' : 'Observation Progress'}
            </div>
            <div className="text-xs text-stone-500">
              {lang === 'es'
                ? `Has avistado ${spottedCount} de ${speciesList.length} especies nativas (${progressPercent}%)`
                : `You have spotted ${spottedCount} of ${speciesList.length} native species (${progressPercent}%)`}
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {spottedCount === 0
                ? lang === 'es' ? 'Comience su observación' : 'Start your spotting'
                : spottedCount >= 5
                ? lang === 'es' ? '¡Gran Naturalista del Titicaca!' : 'Master Altiplano Naturalist!'
                : lang === 'es' ? '¡Buen comienzo en el muelle!' : 'Great start at the pier!'}
            </span>
          </div>
        </div>

        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${Math.max(5, progressPercent)}%` }}
          />
        </div>
      </div>

      {/* Species Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {speciesList.map((sp) => {
          const sighting = sightings.find((s) => s.speciesId === sp.id);
          const isSpotted = !!sighting;
          const isEditingThisNote = editingNoteId === sp.id;

          return (
            <div
              key={sp.id}
              className={`rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                isSpotted
                  ? 'bg-emerald-50/40 border-emerald-200 shadow-xs'
                  : 'bg-white border-stone-200 opacity-90'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={sp.images[0].url}
                      alt={sp.commonName[lang]}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-xl object-cover shrink-0 bg-stone-900 border border-stone-200"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-serif font-bold text-base text-stone-900 leading-snug">
                          {sp.commonName[lang]}
                        </h3>
                        {sp.isEndemic && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-200 text-amber-900">
                            {lang === 'es' ? 'Endémica' : 'Endemic'}
                          </span>
                        )}
                      </div>
                      <p className="font-serif italic text-xs text-stone-500">
                        {sp.scientificName}
                      </p>
                      <span className="text-[11px] text-amber-800 font-medium mt-0.5 block">
                        {sp.sonestaSpotting.location[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => onToggleSpotted(sp.id)}
                    className={`p-2 rounded-xl transition-all ${
                      isSpotted
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-stone-100 text-stone-400 hover:text-stone-700'
                    }`}
                    title={isSpotted ? 'Remover avistamiento' : 'Marcar como avistado'}
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Sighting Details if spotted */}
                {isSpotted && sighting && (
                  <div className="mt-3 pt-3 border-t border-emerald-200/60 text-xs">
                    <div className="flex items-center gap-3 text-stone-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-emerald-700" />
                        <span>{sighting.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-700" />
                        <span>{sighting.time}</span>
                      </span>
                    </div>

                    {isEditingThisNote ? (
                      <div className="space-y-2 mt-2">
                        <textarea
                          value={tempNote}
                          onChange={(e) => setTempNote(e.target.value)}
                          placeholder={
                            lang === 'es'
                              ? 'Escriba notas sobre su avistamiento (luz, comportamiento, lugar exacto)...'
                              : 'Add personal sighting notes (lighting, behavior, exact spot)...'
                          }
                          className="w-full p-2.5 rounded-lg border border-emerald-300 text-xs text-stone-800 bg-white focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                          rows={2}
                        />
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSaveNote(sp.id)}
                            className="px-3 py-1 bg-emerald-600 text-white font-bold rounded text-xs"
                          >
                            {lang === 'es' ? 'Guardar' : 'Save'}
                          </button>
                          <button
                            onClick={() => setEditingNoteId(null)}
                            className="px-3 py-1 bg-stone-200 text-stone-700 rounded text-xs"
                          >
                            {lang === 'es' ? 'Cancelar' : 'Cancel'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-emerald-100/40 p-2.5 rounded-lg text-stone-700 italic flex items-start justify-between gap-2">
                        <p className="text-[11px] leading-relaxed">
                          {sighting.notes || (lang === 'es' ? 'Sin notas adicionales aún.' : 'No notes added yet.')}
                        </p>
                        <button
                          onClick={() => handleStartEditNote(sighting)}
                          className="text-[10px] text-emerald-800 font-bold hover:underline shrink-0 not-italic"
                        >
                          {lang === 'es' ? 'Editar nota' : 'Edit note'}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => onSelectSpecies(sp.id)}
                  className="text-amber-800 hover:text-amber-950 font-semibold flex items-center gap-1"
                >
                  <span>{lang === 'es' ? 'Ver Ficha de Especie' : 'View Species Profile'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenUploadPhoto(sp.id)}
                  className="text-stone-500 hover:text-stone-800 flex items-center gap-1"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{lang === 'es' ? 'Adjuntar foto' : 'Attach photo'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
