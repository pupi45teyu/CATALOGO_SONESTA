import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Species, Language } from '../types';
import {
  X,
  Copy,
  Check,
  Share2,
  Download,
  Printer,
  ExternalLink,
  QrCode,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

interface SpeciesShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  species: Species;
  lang: Language;
}

export const SpeciesShareModal: React.FC<SpeciesShareModalProps> = ({
  isOpen,
  onClose,
  species,
  lang,
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const printableRef = useRef<HTMLDivElement>(null);

  // Compute the direct URL for this species
  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    return `${origin}${pathname}?species=${encodeURIComponent(species.id)}`;
  };

  const shareUrl = getShareUrl();

  // Generate QR code whenever species changes or modal opens
  useEffect(() => {
    if (!isOpen || !shareUrl) return;

    let isMounted = true;
    setIsGenerating(true);

    QRCode.toDataURL(shareUrl, {
      width: 480,
      margin: 2,
      color: {
        dark: '#061e18', // Deep forest Sonesta green
        light: '#ffffff',
      },
      errorCorrectionLevel: 'H',
    })
      .then((url) => {
        if (isMounted) {
          setQrDataUrl(url);
          setIsGenerating(false);
        }
      })
      .catch((err) => {
        console.error('Error generating QR code:', err);
        if (isMounted) setIsGenerating(false);
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen, shareUrl, species.id]);

  // Handle escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  // Download QR code as PNG image
  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `QR_Sonesta_${species.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Native share if supported
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${species.commonName[lang]} | Sonesta Posadas del Inca Puno`,
          text:
            lang === 'es'
              ? `Descubre la ficha de ${species.commonName.es} (${species.scientificName}) en el Catálogo de Flora y Fauna de Sonesta Posadas del Inca Puno.`
              : `Discover ${species.commonName.en} (${species.scientificName}) in the Sonesta Posadas del Inca Puno Wildlife & Flora Guide.`,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      handleCopyLink();
    }
  };

  // WhatsApp share
  const handleWhatsAppShare = () => {
    const message =
      lang === 'es'
        ? `🌿 *${species.commonName.es}* (_${species.scientificName}_)\nDescubre esta especie en la Guía de Flora y Fauna de Sonesta Posadas del Inca Puno:\n${shareUrl}`
        : `🌿 *${species.commonName.en}* (_${species.scientificName}_)\nExplore this species in the Sonesta Posadas del Inca Puno Wildlife & Flora Guide:\n${shareUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Print QR Card
  const handlePrintCard = () => {
    if (!qrDataUrl) return;
    const printWindow = window.open('', '_blank', 'width=600,height=750');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${species.commonName[lang]} - Código QR Sonesta</title>
          <style>
            @page {
              size: A5 portrait;
              margin: 15mm;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", serif;
              margin: 0;
              padding: 24px;
              color: #1c1917;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 90vh;
              background-color: #fafaf9;
            }
            .card {
              background: #ffffff;
              border: 2px solid #061e18;
              border-radius: 16px;
              padding: 32px 28px;
              text-align: center;
              max-width: 400px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.08);
            }
            .hotel-name {
              font-size: 11px;
              letter-spacing: 3px;
              text-transform: uppercase;
              color: #061e18;
              font-weight: 700;
              margin: 0 0 12px;
            }
            .category-tag {
              display: inline-block;
              font-size: 11px;
              font-weight: 600;
              padding: 3px 12px;
              border-radius: 9999px;
              background: #ecfdf5;
              color: #065f46;
              border: 1px solid #a7f3d0;
              margin-bottom: 12px;
            }
            .species-title {
              font-size: 24px;
              font-weight: 700;
              color: #061e18;
              margin: 0 0 4px;
            }
            .scientific {
              font-size: 15px;
              font-style: italic;
              color: #57534e;
              margin: 0 0 8px;
            }
            .indigenous {
              font-size: 12px;
              color: #b45309;
              font-weight: 500;
              margin: 0 0 20px;
            }
            .qr-container {
              background: #ffffff;
              padding: 12px;
              border-radius: 12px;
              border: 1px dashed #d6d3d1;
              display: inline-block;
              margin-bottom: 18px;
            }
            .qr-img {
              width: 230px;
              height: 230px;
              display: block;
            }
            .instructions {
              font-size: 12px;
              line-height: 1.5;
              color: #78716c;
              margin: 0 0 16px;
            }
            .url-text {
              font-size: 10px;
              color: #a8a29e;
              word-break: break-all;
            }
            @media print {
              body { background: transparent; padding: 0; }
              .card { box-shadow: none; border-color: #000; }
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="hotel-name">Sonesta Posadas del Inca Puno</div>
            <div class="category-tag">
              ${species.category === 'flora' ? 'Flora Altoandina' : 'Fauna del Lago Titicaca'}
            </div>
            <h1 class="species-title">${species.commonName[lang]}</h1>
            <div class="scientific">${species.scientificName}</div>
            ${species.indigenousName ? `<div class="indigenous">${species.indigenousName}</div>` : ''}
            
            <div class="qr-container">
              <img src="${qrDataUrl}" class="qr-img" alt="QR Code" />
            </div>

            <p class="instructions">
              ${
                lang === 'es'
                  ? 'Escanea este código QR con la cámara de tu smartphone para explorar la ficha botánica y ecológica completa.'
                  : 'Scan this QR code with your smartphone camera to explore the full botanical and ecological guide.'
              }
            </p>
            <div class="url-text">${shareUrl}</div>
          </div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#061e18] to-[#0f3d32] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-1">
            <QrCode className="w-4 h-4" />
            <span>
              {lang === 'es' ? 'Enlace Directo & Código QR' : 'Direct Link & QR Code'}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
            {species.commonName[lang]}
          </h2>
          <p className="text-sm font-serif italic text-emerald-200/90 mt-0.5">
            {species.scientificName}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* QR Code Presentation Box */}
          <div className="flex flex-col items-center justify-center bg-stone-50 rounded-xl p-5 border border-stone-200/80 shadow-inner">
            <div className="relative bg-white p-3.5 rounded-xl shadow-md border border-stone-200">
              {isGenerating || !qrDataUrl ? (
                <div className="w-52 h-52 flex items-center justify-center text-stone-400">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                </div>
              ) : (
                <img
                  src={qrDataUrl}
                  alt={`Código QR para ${species.commonName[lang]}`}
                  className="w-52 h-52 object-contain rounded-lg"
                />
              )}
            </div>

            <p className="text-xs text-stone-500 text-center mt-3 max-w-xs">
              {lang === 'es'
                ? 'Escanea con la cámara de cualquier teléfono para abrir directamente esta ficha.'
                : 'Scan with any phone camera to instantly open this species guide.'}
            </p>

            {/* QR Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 w-full">
              <button
                onClick={handleDownloadQR}
                disabled={!qrDataUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === 'es' ? 'Descargar QR (PNG)' : 'Download QR (PNG)'}</span>
              </button>

              <button
                onClick={handlePrintCard}
                disabled={!qrDataUrl}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5 text-stone-600" />
                <span>{lang === 'es' ? 'Imprimir Ficha' : 'Print Card'}</span>
              </button>
            </div>
          </div>

          {/* Copy Link Input Section */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block">
              {lang === 'es' ? 'Enlace único de la especie' : 'Unique species direct link'}
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  className="w-full text-xs sm:text-sm font-mono bg-stone-100 border border-stone-300 rounded-lg px-3 py-2 text-stone-800 select-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onClick={(e) => (e.target as HTMLInputElement).select()}
                />
              </div>
              <button
                onClick={handleCopyLink}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-emerald-200'
                    : 'bg-[#061e18] hover:bg-[#0b2f27] text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>{lang === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{lang === 'es' ? 'Copiar Enlace' : 'Copy Link'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Share Channels */}
          <div className="border-t border-stone-200 pt-4">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2.5">
              {lang === 'es' ? 'Compartir directamente' : 'Share directly'}
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={handleWhatsAppShare}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleNativeShare}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                <Share2 className="w-4 h-4 text-stone-600" />
                <span>
                  {typeof navigator !== 'undefined' && navigator.share
                    ? lang === 'es'
                      ? 'Más opciones'
                      : 'More options'
                    : lang === 'es'
                    ? 'Copiar y enviar'
                    : 'Copy & Send'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-5 sm:px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>Sonesta Posadas del Inca Puno</span>
          <button
            onClick={onClose}
            className="text-stone-600 hover:text-stone-900 font-semibold cursor-pointer"
          >
            {lang === 'es' ? 'Cerrar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
