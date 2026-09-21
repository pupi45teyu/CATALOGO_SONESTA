import React from 'react';
import { IUCNStatus, Language } from '../types';
import { Info } from 'lucide-react';

interface IUCNMeterProps {
  currentStatus: IUCNStatus;
  lang: Language;
}

interface StatusDefinition {
  code: IUCNStatus;
  label: { es: string; en: string };
  short: string;
  colorClass: string;
  bgActive: string;
  borderActive: string;
  description: {
    es: string;
    en: string;
  };
}

const IUCN_LEVELS: StatusDefinition[] = [
  {
    code: 'LC',
    short: 'LC',
    label: { es: 'Preocupación Menor', en: 'Least Concern' },
    colorClass: 'bg-emerald-600 text-white',
    bgActive: 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400',
    borderActive: 'border-emerald-600',
    description: {
      es: 'Especie abundante y de amplia distribución, sin amenazas inmediatas que comprometan su supervivencia.',
      en: 'Abundant and widespread taxon evaluated as not qualifying for any other threat category.',
    },
  },
  {
    code: 'NT',
    short: 'NT',
    label: { es: 'Casi Amenazado', en: 'Near Threatened' },
    colorClass: 'bg-lime-600 text-white',
    bgActive: 'bg-lime-600 text-white shadow-md ring-2 ring-lime-400',
    borderActive: 'border-lime-600',
    description: {
      es: 'Cercano a calificar para una categoría de amenaza en el futuro cercano si no se toman medidas.',
      en: 'Close to qualifying for or likely to qualify for a threatened category in the near future.',
    },
  },
  {
    code: 'VU',
    short: 'VU',
    label: { es: 'Vulnerable', en: 'Vulnerable' },
    colorClass: 'bg-amber-500 text-white',
    bgActive: 'bg-amber-500 text-white shadow-md ring-2 ring-amber-300',
    borderActive: 'border-amber-500',
    description: {
      es: 'Enfrenta un riesgo alto de extinción en estado silvestre debido a pérdida de hábitat o reducción poblacional.',
      en: 'Faces a high risk of extinction in the wild due to habitat reduction or population decline.',
    },
  },
  {
    code: 'EN',
    short: 'EN',
    label: { es: 'En Peligro', en: 'Endangered' },
    colorClass: 'bg-orange-600 text-white',
    bgActive: 'bg-orange-600 text-white shadow-md ring-2 ring-orange-400',
    borderActive: 'border-orange-600',
    description: {
      es: 'Enfrenta un riesgo muy alto de extinción en estado silvestre; requiere protección urgente de sus hábitats clave.',
      en: 'Faces a very high risk of extinction in the wild; urgent habitat protection is required.',
    },
  },
  {
    code: 'CR',
    short: 'CR',
    label: { es: 'En Peligro Crítico', en: 'Critically Endangered' },
    colorClass: 'bg-red-700 text-white',
    bgActive: 'bg-red-700 text-white shadow-md ring-2 ring-red-400',
    borderActive: 'border-red-700',
    description: {
      es: 'Enfrenta un riesgo extremadamente elevado de extinción inmediata en estado silvestre.',
      en: 'Faces an extremely high risk of immediate extinction in the wild.',
    },
  },
];

export const IUCNMeter: React.FC<IUCNMeterProps> = ({ currentStatus, lang }) => {
  const activeDef = IUCN_LEVELS.find((l) => l.code === currentStatus) || IUCN_LEVELS[0];

  return (
    <div id="iucn-meter-card" className="bg-stone-50 border border-stone-200 rounded-xl p-4 md:p-5 my-4">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-wider uppercase text-stone-500">
            {lang === 'es' ? 'Estado de Conservación UICN' : 'IUCN Conservation Status'}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-200 text-stone-700 font-semibold">
            Red List
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-stone-600 font-medium">
          <Info className="w-3.5 h-3.5 text-stone-400" />
          <span>{lang === 'es' ? 'Escala Global' : 'Global Scale'}</span>
        </div>
      </div>

      {/* Meter Pills Track */}
      <div className="grid grid-cols-5 gap-1.5 md:gap-2 mb-3">
        {IUCN_LEVELS.map((level) => {
          const isActive = level.code === currentStatus;
          return (
            <div
              key={level.code}
              className={`text-center py-2 px-1 rounded-md transition-all flex flex-col items-center justify-center ${
                isActive
                  ? level.bgActive
                  : 'bg-stone-200/80 text-stone-500 opacity-60 hover:opacity-80'
              }`}
            >
              <span className={`text-sm md:text-base font-bold tracking-tight leading-none ${isActive ? 'scale-110' : ''}`}>
                {level.short}
              </span>
              <span className="text-[9px] md:text-[10px] uppercase font-semibold mt-1 truncate max-w-full px-0.5 leading-tight">
                {level.label[lang]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Active Description */}
      <div className="flex items-start gap-3 pt-2 border-t border-stone-200/80 text-xs md:text-sm text-stone-700">
        <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${activeDef.colorClass}`} />
        <div>
          <span className="font-bold text-stone-900 mr-1.5">
            {activeDef.label[lang]} ({activeDef.code}):
          </span>
          <span className="text-stone-600 leading-relaxed">
            {activeDef.description[lang]}
          </span>
        </div>
      </div>
    </div>
  );
};
