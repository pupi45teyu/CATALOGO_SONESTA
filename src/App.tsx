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

// Helper to extract species ID from URL query parameters (?species=... or ?especie=... or ?id=...)
const getSpeciesFromQuery = (): string | null => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const target = params.get('species') || params.get('especie') || params.get('id');
  if (!target) return null;
  const found = FAUNA_DATA.find(
    (s) => s.id.toLowerCase() === target.toLowerCase() || s.slug?.toLowerCase() === target.toLowerCase()
  );
  return found ? found.id : null;
};

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

  const initialSpeciesFromUrl = getSpeciesFromQuery();

  // Navigation View (deep linking: opens directly to detail view if URL has ?species=...)
  const [activeView, setActiveView] = useState<'catalog' | 'detail' | 'hotel-guide' | 'sightings'>(() => {
    return initialSpeciesFromUrl ? 'detail' : 'catalog';
  });
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>(() => {
    return initialSpeciesFromUrl || 'zambullidor-titicaca';
  });
  const [activeCategoryModal, setActiveCategoryModal] = useState<'fauna' | 'flora' | null>(() => {
    if (initialSpeciesFromUrl) {
      const sp = FAUNA_DATA.find((s) => s.id === initialSpeciesFromUrl);
      return sp?.category === 'flora' ? 'flora' : 'fauna';
    }
    return null;
  });

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

  // Listen to browser navigation (back / forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const targetId = getSpeciesFromQuery();
      if (targetId) {
        const sp = FAUNA_DATA.find((s) => s.id === targetId);
        if (sp) {
          setSelectedSpeciesId(sp.id);
          setActiveCategoryModal(sp.category === 'flora' ? 'flora' : 'fauna');
          setActiveView('detail');
          return;
        }
      }
      // If back to root without species query param
      setActiveView((prev) => (prev === 'detail' ? 'catalog' : prev));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on navigation change and manage URL query parameter
  const navigateTo = (view: 'catalog' | 'detail' | 'hotel-guide' | 'sightings') => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (view !== 'detail') {
      try {
        const url = new URL(window.location.href);
        if (url.searchParams.has('species') || url.searchParams.has('especie') || url.searchParams.has('id')) {
          url.searchParams.delete('species');
          url.searchParams.delete('especie');
          url.searchParams.delete('id');
          window.history.pushState({}, '', url.pathname + (url.search ? url.search : ''));
        }
      } catch {
        // ignore
      }
    }
  };

  const handleSelectSpecies = (speciesId: string) => {
    const sp = FAUNA_DATA.find((s) => s.id === speciesId);
    if (sp?.category === 'flora') {
      setActiveCategoryModal('flora');
    } else {
      setActiveCategoryModal('fauna');
    }
    setSelectedSpeciesId(speciesId);
    setActiveView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser URL so it can be directly copied or shared
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('species', speciesId);
      url.searchParams.delete('especie');
      url.searchParams.delete('id');
      window.history.pushState({ speciesId }, '', url.toString());
    } catch {
      // ignore
    }
  };

  const handleBackToFilter = () => {
    const sp = FAUNA_DATA.find((s) => s.id === selectedSpeciesId);
    if (sp?.category === 'flora') {
      setActiveCategoryModal('flora');
    } else {
      setActiveCategoryModal('fauna');
    }
    setActiveView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clean URL query param when returning to catalog
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('species');
      url.searchParams.delete('especie');
      url.searchParams.delete('id');
      window.history.pushState({}, '', url.pathname + (url.search ? url.search : ''));
    } catch {
      // ignore
    }
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
