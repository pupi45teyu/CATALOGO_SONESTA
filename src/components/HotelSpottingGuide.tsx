import React from 'react';
import { Language } from '../types';
import { HOTEL_INFO } from '../data/faunaData';
import {
  Hotel,
  Compass,
  MapPin,
  Sunrise,
  Sun,
  Sunset,
  Moon,
  Eye,
  Anchor,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles,
  Coffee,
} from 'lucide-react';

interface HotelSpottingGuideProps {
  lang: Language;
  onExploreSpecies: () => void;
}

export const HotelSpottingGuide: React.FC<HotelSpottingGuideProps> = ({
  lang,
  onExploreSpecies,
}) => {
  return (
    <div id="hotel-spotting-guide-page" className="bg-stone-100 min-h-screen pb-20">
      {/* Top Banner */}
      <div className="bg-stone-900 text-stone-100 py-12 md:py-16 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/30">
              <Hotel className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Guía para Huéspedes' : 'Guest Field Guide'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
              {lang === 'es'
                ? 'Avistamiento de Fauna en Sonesta Posadas del Inca'
                : 'Wildlife Spotting at Sonesta Posadas del Inca'}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-6">
              {lang === 'es'
                ? 'Nuestro hotel en Puno goza de una ubicación inigualable directamente a orillas del Lago Titicaca, con muelle de embarque privado, jardines nativos y acceso inmediato a los totorales vírgenes de la Bahía de Puno.'
                : 'Our Puno hotel enjoys an unmatched location directly on the shores of Lake Titicaca, featuring a private wooden pier, native botanical grounds, and immediate access to pristine totora reedbeds of Puno Bay.'}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Km 5 Carretera a Chucuito, Puno - Perú</span>
              </div>
              <span className="text-stone-600">•</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>3,812 msnm / 12,507 ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
        {/* 4 Observation Zones at the Hotel */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              {lang === 'es' ? 'Puntos Estratégicos del Hotel' : 'Hotel Observation Zones'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              {lang === 'es'
                ? 'Los 4 Puntos Clave de Observación dentro de la Propiedad'
                : 'The 4 Prime Wildlife Vantage Points on the Property'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zone 1 */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                  <Anchor className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {lang === 'es' ? 'Zona 1' : 'Zone 1'}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                  {lang === 'es' ? 'El Muelle Privado de Madera' : 'The Private Wooden Pier'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {lang === 'es'
                    ? 'Se adentra 40 metros sobre las aguas del lago. Es el mejor lugar de todo Puno para avistar al mítico Zambullidor del Titicaca (Kele), patos puna y cardúmenes de carachis dorados bajo la superficie.'
                    : 'Extending 40 meters into tranquil lake waters. The premier location in all of Puno to observe the flightless Titicaca Grebe (Kele), puna teals, and schools of golden killifish.'}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
                <strong className="text-stone-800">{lang === 'es' ? 'Especies frecuentes:' : 'Common species:'}</strong>{' '}
                {lang === 'es' ? 'Kele, Pato Puna, Yanavico, Carachi Amarillo' : 'Titicaca Grebe, Puna Teal, Ibis, Killifish'}
              </div>
            </div>

            {/* Zone 2 */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {lang === 'es' ? 'Zona 2' : 'Zone 2'}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                  {lang === 'es' ? 'Jardines Lacustres & Césped Ribereño' : 'Lakeshore Gardens & Lawns'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {lang === 'es'
                    ? 'Los amplios jardines verdes del hotel lindan con el lago. Aquí pastan pacíficamente parejas de Huallatas (gansos andinos) y colibríes cordilleranos visitan las flores de cantuta nativa.'
                    : 'The expansive landscaped lawns flanking the shoreline. Monogamous pairs of Andean Geese (Huallatas) graze peacefully here, alongside hummingbirds visiting native cantuta blossoms.'}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
                <strong className="text-stone-800">{lang === 'es' ? 'Especies frecuentes:' : 'Common species:'}</strong>{' '}
                {lang === 'es' ? 'Huallata, Colibrí Andino, Churrete común' : 'Andean Goose, Hummingbirds, Ground Tyrants'}
              </div>
            </div>

            {/* Zone 3 */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-900 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-orange-800">
                  {lang === 'es' ? 'Zona 3' : 'Zone 3'}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                  {lang === 'es' ? 'Farallones Rocosos Traseros' : 'Upper Rocky Bluffs'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {lang === 'es'
                    ? 'El promontorio rocoso natural que resguarda la parte posterior de la propiedad. Por las mañanas, las simpáticas vizcachas andinas salen a posarse inmóviles sobre las rocas para tomar el sol.'
                    : 'The rugged geological bluffs shielding the rear boundary. In the early morning, delightful mountain viscachas perch motionless on sun-drenched limestone ledges.'}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
                <strong className="text-stone-800">{lang === 'es' ? 'Especies frecuentes:' : 'Common species:'}</strong>{' '}
                {lang === 'es' ? 'Vizcacha Andina, Zorro Culpeo (crepúsculo)' : 'Mountain Viscacha, Andean Fox (twilight)'}
              </div>
            </div>

            {/* Zone 4 */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  {lang === 'es' ? 'Zona 4' : 'Zone 4'}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                  {lang === 'es' ? 'Borde de los Totorales Vírgenes' : 'Protected Totora Reed Margin'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {lang === 'es'
                    ? 'La densa franja de totora (Schoenoplectus californicus) que conecta con la Reserva Nacional. Actúa como guardería de alevines, nido de aves y santuario del Yanavico y la rana gigante.'
                    : 'The dense totora reed belt buffering the Titicaca National Reserve. Acts as a vital nursery for native fry, nesting sanctuary for waterbirds, and haven for the Puna Ibis.'}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
                <strong className="text-stone-800">{lang === 'es' ? 'Especies frecuentes:' : 'Common species:'}</strong>{' '}
                {lang === 'es' ? 'Yanavico, Parihuana (en bajamar), Rana Gigante' : 'Puna Ibis, Andean Flamingo, Water Frog'}
              </div>
            </div>
          </div>
        </div>

        {/* Daily Spotting Timeline Schedule */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              {lang === 'es' ? 'Horarios Recomendados' : 'Recommended Timing'}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
              {lang === 'es' ? 'El Reloj Natural del Titicaca' : 'The Natural Rhythm of Titicaca'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Dawn */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                <Sunrise className="w-4 h-4 text-amber-600" />
                <span>06:00 - 08:30 AM</span>
              </div>
              <div className="text-xs font-bold text-stone-900 mb-1">
                {lang === 'es' ? 'Amanecer de Cristal' : 'Crystal Dawn'}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'es'
                  ? 'El agua es un espejo sin viento. Momento estelar para observar al Zambullidor y tomar fotografías nítidas desde el muelle.'
                  : 'Glass-still waters before morning breeze picks up. Prime window to spot diving grebes and photograph reflective horizons.'}
              </p>
            </div>

            {/* Midday */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="flex items-center gap-2 text-stone-800 font-bold text-sm mb-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>11:00 AM - 02:00 PM</span>
              </div>
              <div className="text-xs font-bold text-stone-900 mb-1">
                {lang === 'es' ? 'Luz Cenital Profunda' : 'Overhead Sun'}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'es'
                  ? 'La luz directa penetra el agua. Ideal para observar peces nativos y cardúmenes nadando entre los pilotes de madera.'
                  : 'Direct sun pierces through lake depths. Ideal for viewing native killifish schools swimming around the dock pilings.'}
              </p>
            </div>

            {/* Sunset */}
            <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200">
              <div className="flex items-center gap-2 text-purple-900 font-bold text-sm mb-2">
                <Sunset className="w-4 h-4 text-purple-600" />
                <span>04:30 - 06:15 PM</span>
              </div>
              <div className="text-xs font-bold text-stone-900 mb-1">
                {lang === 'es' ? 'Crepúsculo Dorado' : 'Golden Twilight'}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {lang === 'es'
                  ? 'Las parihuanas (flamencos) vuelan en formación sobre el lago encendido de púrpura y carmesí. Vista perfecta desde el Inkafe.'
                  : 'Flamingo flocks soar in formation across crimson skies. Spectacular vantage from the hotel terrace and Inkafe dining room.'}
              </p>
            </div>

            {/* Night */}
            <div className="p-4 rounded-xl bg-stone-900 text-stone-200 border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                <Moon className="w-4 h-4" />
                <span>07:00 PM+</span>
              </div>
              <div className="text-xs font-bold text-white mb-1">
                {lang === 'es' ? 'Cielo Estrellado del Altiplano' : 'Altiplano Stargazing'}
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                {lang === 'es'
                  ? 'A 3,812 m el cielo no tiene contaminación lumínica. Con suerte se escucha el eco lejano del zorro andino en los cerros.'
                  : 'Zero light pollution over the sacred lake. Listen closely to the quiet lap of waves and distant cries of the Andean fox.'}
              </p>
            </div>
          </div>
        </div>

        {/* Hotel Amenities & Services for Birders */}
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              {lang === 'es' ? 'Servicios del Hotel' : 'Sonesta Guest Amenities'}
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">
              {lang === 'es'
                ? 'Facilidades para Amantes de la Naturaleza'
                : 'Facilities for Wildlife & Nature Enthusiasts'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOTEL_INFO.amenitiesForWildlife.map((item, idx) => (
              <div key={idx} className="bg-stone-800/80 p-5 rounded-xl border border-stone-700/80">
                <h4 className="font-serif font-bold text-sm text-amber-200 mb-1.5">
                  {item.title[lang]}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-stone-300">
              <Coffee className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                {lang === 'es'
                  ? 'Té de coca caliente y mantas andinas disponibles en recepción antes de su caminata matutina.'
                  : 'Complimentary hot coca tea and Andean alpaca blankets available at front desk for dawn walks.'}
              </span>
            </div>

            <button
              onClick={onExploreSpecies}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs tracking-wide transition-colors shrink-0"
            >
              {lang === 'es' ? 'Ver Catálogo de Especies' : 'View Species Catalog'}
            </button>
          </div>
        </div>

        {/* Responsible Wildlife Viewing Code */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'es' ? 'Código de Conducta Ético' : 'Ethical Wildlife Code'}</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">
            {lang === 'es'
              ? 'Reglas para una Observación Respetuosa en el Lago'
              : 'Guidelines for Respectful Lake Observation'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-stone-700">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {lang === 'es'
                  ? 'Mantenga silencio al caminar sobre las tablas de madera del muelle para no alertar a los zambullidores.'
                  : 'Walk lightly on the wooden pier to avoid acoustic vibrations that cause grebes to dive away.'}
              </span>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {lang === 'es'
                  ? 'No use drones sobre los totorales; causan pánico severo en las colonias de aves nidificantes.'
                  : 'Do not fly drones over totora reedbeds; they cause severe distress to nesting waterbird colonies.'}
              </span>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {lang === 'es'
                  ? 'No arroje ningún tipo de residuo al agua; ayude a mantener la pureza del lago sagrado.'
                  : 'Zero waste into the water; help us protect the legendary purity of the sacred Inca lake.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
