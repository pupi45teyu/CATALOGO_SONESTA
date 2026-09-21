import React, { useState, useRef } from 'react';
import { Species, Language, CustomUploadedPhoto } from '../types';
import { X, Upload, Camera, Image, CheckCircle, AlertCircle, Link } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  speciesList: Species[];
  preselectedSpeciesId?: string;
  lang: Language;
  onSavePhoto: (photo: Omit<CustomUploadedPhoto, 'id' | 'dateAdded'>) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  speciesList,
  preselectedSpeciesId,
  lang,
  onSavePhoto,
}) => {
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>(
    preselectedSpeciesId || (speciesList[0] ? speciesList[0].id : '')
  );
  const [photoSource, setPhotoSource] = useState<'upload' | 'url'>('upload');
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [photographerName, setPhotographerName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg(lang === 'es' ? 'Por favor seleccione un archivo de imagen válido (JPG, PNG, WebP).' : 'Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result as string);
      setErrorMsg('');
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
        setErrorMsg('');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) {
      setErrorMsg(lang === 'es' ? 'Por favor cargue una imagen o ingrese una URL válida.' : 'Please upload an image or provide a valid URL.');
      return;
    }

    onSavePhoto({
      speciesId: selectedSpeciesId,
      imageUrl,
      caption: caption.trim() || (lang === 'es' ? 'Fotografía de fauna en Sonesta Posadas del Inca' : 'Wildlife photograph at Sonesta Posadas del Inca'),
      photographerName: photographerName.trim() || (lang === 'es' ? 'Huésped del Hotel' : 'Hotel Guest'),
    });

    // Reset and close
    setImageUrl('');
    setCaption('');
    setPhotographerName('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-stone-200 max-w-lg w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
            <Camera className="w-4 h-4" />
          </div>
          <h3 className="font-serif font-bold text-xl text-stone-900">
            {lang === 'es' ? 'Incluir Fotografía en el Catálogo' : 'Add Photography to Catalog'}
          </h3>
        </div>

        <p className="text-xs text-stone-500 mb-5 leading-relaxed">
          {lang === 'es'
            ? 'Adjunte sus fotografías de aves o fauna del Titicaca para enriquecer la galería y fichas del hotel.'
            : 'Upload your wildlife photographs to enrich the species profiles and guest gallery.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Species Selector */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              {lang === 'es' ? 'Especie Asociada:' : 'Associated Species:'}
            </label>
            <select
              value={selectedSpeciesId}
              onChange={(e) => setSelectedSpeciesId(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-stone-800 focus:outline-hidden focus:border-amber-500"
            >
              {speciesList.map((sp) => (
                <option key={sp.id} value={sp.id}>
                  {sp.commonName[lang]} ({sp.scientificName})
                </option>
              ))}
            </select>
          </div>

          {/* Photo Source Switcher (File Upload vs URL) */}
          <div className="flex items-center gap-2 text-xs font-medium border-b border-stone-200 pb-2">
            <button
              type="button"
              onClick={() => setPhotoSource('upload')}
              className={`pb-1 border-b-2 font-bold transition-all flex items-center gap-1 ${
                photoSource === 'upload'
                  ? 'border-amber-600 text-amber-900'
                  : 'border-transparent text-stone-400 hover:text-stone-700'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Subir archivo (JPG/PNG)' : 'Upload File (JPG/PNG)'}</span>
            </button>

            <button
              type="button"
              onClick={() => setPhotoSource('url')}
              className={`pb-1 border-b-2 font-bold transition-all flex items-center gap-1 ${
                photoSource === 'url'
                  ? 'border-amber-600 text-amber-900'
                  : 'border-transparent text-stone-400 hover:text-stone-700'
              }`}
            >
              <Link className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Pegar URL de Imagen' : 'Image URL'}</span>
            </button>
          </div>

          {/* Upload Area */}
          {photoSource === 'upload' ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                dragActive
                  ? 'border-amber-500 bg-amber-50'
                  : imageUrl
                  ? 'border-emerald-400 bg-emerald-50/20'
                  : 'border-stone-300 hover:border-amber-500 bg-stone-50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {imageUrl ? (
                <div className="flex flex-col items-center">
                  <img
                    src={imageUrl}
                    alt="Vista previa"
                    referrerPolicy="no-referrer"
                    className="max-h-36 rounded-lg object-contain mb-2 shadow-sm"
                  />
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Imagen cargada con éxito. Clic para cambiar.' : 'Image loaded successfully. Click to replace.'}</span>
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-stone-500">
                  <Image className="w-8 h-8 text-stone-400 mb-2" />
                  <p className="text-xs font-semibold text-stone-700">
                    {lang === 'es'
                      ? 'Arrastre su fotografía aquí o haga clic para explorar'
                      : 'Drag and drop your photo here or click to browse'}
                  </p>
                  <span className="text-[10px] text-stone-400 mt-1">JPG, PNG, WebP (hasta 10MB)</span>
                </div>
              )}
            </div>
          ) : (
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {lang === 'es' ? 'URL pública de la imagen:' : 'Public Image URL:'}
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-amber-500"
              />
              {imageUrl && (
                <div className="mt-2 text-center">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    referrerPolicy="no-referrer"
                    className="max-h-32 mx-auto rounded-lg object-contain shadow-xs"
                    onError={() => setErrorMsg(lang === 'es' ? 'No se pudo cargar la imagen desde la URL.' : 'Could not load image from provided URL.')}
                  />
                </div>
              )}
            </div>
          )}

          {/* Caption */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              {lang === 'es' ? 'Descripción o Leyenda de la Foto:' : 'Photo Caption:'}
            </label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder={
                lang === 'es'
                  ? 'Ej: Parihuana alimentándose frente al muelle al atardecer'
                  : 'E.g., Andean flamingo foraging near the jetty at sunset'
              }
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-amber-500"
            />
          </div>

          {/* Photographer Credit */}
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              {lang === 'es' ? 'Autor / Fotógrafo:' : 'Photographer Credit:'}
            </label>
            <input
              type="text"
              value={photographerName}
              onChange={(e) => setPhotographerName(e.target.value)}
              placeholder={lang === 'es' ? 'Su nombre o huésped' : 'Your name or guest alias'}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-900 focus:outline-hidden focus:border-amber-500"
            />
          </div>

          {errorMsg && (
            <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-stone-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-stone-600 hover:bg-stone-100 transition-colors"
            >
              {lang === 'es' ? 'Cancelar' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-sm transition-all"
            >
              {lang === 'es' ? 'Guardar en el Catálogo' : 'Save to Catalog'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
