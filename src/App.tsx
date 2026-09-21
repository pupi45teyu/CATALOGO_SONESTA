/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, GuestSighting, CustomUploadedPhoto } from './types';
import { FAUNA_DATA } from './data/faunaData';
import { Navbar } from './components/Navbar';
import { MainHeroView } from './components/MainHeroView';
import { SpeciesDetailView } from './components/SpeciesDetailView';
import { HotelSpottingGuide } from './components/HotelSpottingGuide';
import { GuestSightingsView } from './components/GuestSightingsView';
import { PhotoUploadModal } from './components/PhotoUploadModal';

const SIGHTINGS_STORAGE_KEY = 'sonesta_titicaca_sightings_v1';
const PHOTOS_STORAGE_KEY = 'sonesta_titicaca_photos_v1';
const LANG_STORAGE_KEY = 'sonesta_titicaca_lang_v1';

export default function App() {
  // Language state (defaulting to Spanish as requested, but with instant English toggle)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'en' || saved === 'es') return saved;
    } catch {
      // ignore
    }
    return 'es';
  });

  // Navigation View
  const [activeView, setActiveView] = useState<'catalog' | 'detail' | 'hotel-guide' | 'sightings'>('catalog');
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>('zambullidor-titicaca');
  const [activeCategoryModal, setActiveCategoryModal] = useState<'fauna' | 'flora' | null>(null);

  // Guest Sightings state
  const [sightings, setSightings] = useState<GuestSighting[]>(() => {
    try {
      const saved = localStorage.getItem(SIGHTINGS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Default initial demonstration sighting: Titicaca Grebe at Sonesta pier
    return [
      {
        id: 'sighting-initial-1',
        speciesId: 'zambullidor-titicaca',
        date: new Date().toISOString().split('T')[0],
        time: '07:15 AM',
        locationNotes: 'Muelle privado de Sonesta Posadas del Inca Puno',
        notes: 'Avistado buceando tranquilamente entre los totorales con el agua como un espejo al amanecer.',
      },
    ];
  });

  // Custom user-uploaded photos
  const [customPhotos, setCustomPhotos] = useState<CustomUploadedPhoto[]>(() => {
    try {
      const saved = localStorage.getItem(PHOTOS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  // Photo Upload Modal state
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [photoModalSpeciesId, setPhotoModalSpeciesId] = useState<string | undefined>();

  // Persist language and sync html tag
  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('translate', 'no');
    document.documentElement.classList.add('notranslate');
  }, [lang]);

  // Persist sightings
  useEffect(() => {
    try {
      localStorage.setItem(SIGHTINGS_STORAGE_KEY, JSON.stringify(sightings));
    } catch {
      // ignore
    }
  }, [sightings]);

  // Persist custom photos
  useEffect(() => {
    try {
      localStorage.setItem(PHOTOS_STORAGE_KEY, JSON.stringify(customPhotos));
    } catch {
      // ignore
    }
  }, [customPhotos]);

  // Scroll to top on navigation change
  const navigateTo = (view: 'catalog' | 'detail' | 'hotel-guide' | 'sightings') => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSpecies = (speciesId: string) => {
    const sp = FAUNA_DATA.find((s) => s.id === speciesId);
    if (sp?.category === 'flora') {
      setActiveCategoryModal('flora');
    } else {
      setActiveCategoryModal('fauna');
    }
    setSelectedSpeciesId(speciesId);
    navigateTo('detail');
  };

  const handleBackToFilter = () => {
    const sp = FAUNA_DATA.find((s) => s.id === selectedSpeciesId);
    if (sp?.category === 'flora') {
      setActiveCategoryModal('flora');
    } else {
      setActiveCategoryModal('fauna');
    }
    navigateTo('catalog');
  };

  // Sighting toggle
  const handleToggleSpotted = (speciesId: string) => {
    setSightings((prev) => {
      const exists = prev.some((s) => s.speciesId === speciesId);
      if (exists) {
        return prev.filter((s) => s.speciesId !== speciesId);
      } else {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateStr = now.toISOString().split('T')[0];
        return [
          ...prev,
          {
            id: `sighting-${Date.now()}`,
            speciesId,
            date: dateStr,
            time: timeStr,
            locationNotes: 'Sonesta Posadas del Inca Puno',
            notes: '',
          },
        ];
      }
    });
  };

  const handleUpdateSightingNote = (speciesId: string, note: string) => {
    setSightings((prev) =>
      prev.map((s) => (s.speciesId === speciesId ? { ...s, notes: note } : s))
    );
  };

  const handleOpenPhotoModal = (speciesId?: string) => {
    setPhotoModalSpeciesId(speciesId || selectedSpeciesId);
    setPhotoModalOpen(true);
  };

  const handleSaveCustomPhoto = (photoData: Omit<CustomUploadedPhoto, 'id' | 'dateAdded'>) => {
    const newPhoto: CustomUploadedPhoto = {
      ...photoData,
      id: `photo-${Date.now()}`,
      dateAdded: new Date().toISOString(),
    };
    setCustomPhotos((prev) => [newPhoto, ...prev]);
  };

  // Find currently selected species object
  const currentSpecies = FAUNA_DATA.find((s) => s.id === selectedSpeciesId) || FAUNA_DATA[0];

  const spottedSpeciesIds = sightings.map((s) => s.speciesId);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#061e18] text-white font-sans selection:bg-[#2ee59d] selection:text-[#061e18] notranslate"
      translate="no"
    >
      {/* Top Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        activeView={activeView}
        onNavigate={navigateTo}
        sightingsCount={sightings.length}
        onOpenPhotoModal={() => handleOpenPhotoModal()}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeView === 'catalog' && (
          <MainHeroView
            speciesList={FAUNA_DATA}
            lang={lang}
            onSelectSpecies={handleSelectSpecies}
            onHotelGuideClick={() => navigateTo('hotel-guide')}
            spottedIds={spottedSpeciesIds}
            onToggleSpotted={handleToggleSpotted}
            activeCategoryModal={activeCategoryModal}
            onCategoryModalChange={setActiveCategoryModal}
          />
        )}

        {activeView === 'detail' && (
          <SpeciesDetailView
            species={currentSpecies}
            lang={lang}
            onBack={handleBackToFilter}
            onSelectSpecies={handleSelectSpecies}
            allSpecies={FAUNA_DATA}
            isSpotted={spottedSpeciesIds.includes(currentSpecies.id)}
            onToggleSpotted={handleToggleSpotted}
            onOpenUploadPhoto={handleOpenPhotoModal}
            customPhotos={customPhotos}
          />
        )}

        {activeView === 'hotel-guide' && (
          <HotelSpottingGuide
            lang={lang}
            onExploreSpecies={() => navigateTo('catalog')}
          />
        )}

        {activeView === 'sightings' && (
          <GuestSightingsView
            speciesList={FAUNA_DATA}
            lang={lang}
            sightings={sightings}
            onToggleSpotted={handleToggleSpotted}
            onUpdateSightingNote={handleUpdateSightingNote}
            onSelectSpecies={handleSelectSpecies}
            onOpenUploadPhoto={handleOpenPhotoModal}
          />
        )}
      </main>

      {/* Upload/Add Custom Photo Modal */}
      <PhotoUploadModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        speciesList={FAUNA_DATA}
        preselectedSpeciesId={photoModalSpeciesId}
        lang={lang}
        onSavePhoto={handleSaveCustomPhoto}
      />
    </div>
  );
}
