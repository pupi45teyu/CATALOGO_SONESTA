export type Language = 'es' | 'en';

export type Category = 'all' | 'birds' | 'amphibians_fish' | 'mammals' | 'flora' | 'endemic' | 'threatened';

export type IUCNStatus = 'CR' | 'EN' | 'VU' | 'NT' | 'LC' | 'DD';

export interface BilingualText {
  es: string;
  en: string;
}

export interface SpeciesImage {
  url: string;
  caption: BilingualText;
  credit: string;
}

export interface QuickFacts {
  iucnStatus: IUCNStatus;
  iucnLabel: BilingualText;
  population: BilingualText;
  size: BilingualText;
  weight?: BilingualText;
  diet: BilingualText;
  habitat: BilingualText;
  altitude: string;
  lifespan?: BilingualText;
  bestTime: BilingualText;
}

export interface SonestaSpotting {
  location: BilingualText;
  spottingDifficulty: 'easy' | 'moderate' | 'rare' | 'very_rare';
  difficultyLabel: BilingualText;
  bestHour: BilingualText;
  hotelTips: BilingualText;
  recommendedGear: BilingualText;
}

export interface Species {
  id: string;
  slug: string;
  commonName: BilingualText;
  indigenousName?: string; // Quechua or Aymara
  scientificName: string;
  family: string;
  order?: string;
  category: 'birds' | 'amphibians_fish' | 'mammals' | 'flora';
  plantSection?: 'medicinales' | 'arboles' | 'cactaceas' | 'flores' | 'huerto' | 'acuaticas';
  botanicalCharacteristics?: BilingualText;
  traditionalUses?: BilingualText;
  isEndemic: boolean;
  featured: boolean;
  iucnStatus: IUCNStatus;
  images: SpeciesImage[];
  quickFacts: QuickFacts;
  overview: BilingualText;
  habitatDistribution: BilingualText;
  behaviorDiet: BilingualText;
  threatsConservation: BilingualText;
  sonestaSpotting: SonestaSpotting;
  callAudio?: {
    description: BilingualText;
    duration: string;
    audioFrequency: string;
  };
}

export interface GuestSighting {
  id: string;
  speciesId: string;
  date: string;
  time: string;
  locationNotes: string;
  userPhotoUrl?: string;
  notes?: string;
}

export interface CustomUploadedPhoto {
  id: string;
  speciesId: string;
  imageUrl: string;
  caption: string;
  photographerName: string;
  dateAdded: string;
}
