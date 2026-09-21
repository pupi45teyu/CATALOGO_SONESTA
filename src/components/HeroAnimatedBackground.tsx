import React, { useEffect, useRef, useState } from 'react';

// Frame configuration: 014.png to 099.png (86 frames in total)
const START_FRAME = 14;
const END_FRAME = 99;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1;

// Smooth, calm pacing: 140ms per frame transition with continuous 60fps cross-fade blending
const FRAME_DURATION_MS = 140;

export const HeroAnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  useEffect(() => {
    // Generate frame image paths
    const frameUrls: string[] = [];
    for (let i = START_FRAME; i <= END_FRAME; i++) {
      const paddedNum = i.toString().padStart(3, '0');
      frameUrls.push(`/animacion-fondo/${paddedNum}.png`);
    }

    // Preload all frames in memory
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        if (index === 0) {
          setFirstFrameLoaded(true);
        }
      };
      images.push(img);
    });

    let animationFrameId: number;
    let isCancelled = false;

    // Ping-pong state (bounces smoothly between frame 0 and frame 85 without abrupt jumps)
    let currentIdx = 0;
    let direction = 1; // 1 = forward, -1 = reverse
    let frameStartTime = performance.now();

    const drawCover = (
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement,
      cw: number,
      ch: number
    ) => {
      const iw = img.naturalWidth || 1920;
      const ih = img.naturalHeight || 1080;
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const cx = (cw - nw) / 2;
      const cy = (ch - nh) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, cx, cy, nw, nh);
    };

    const renderLoop = (now: number) => {
      if (isCancelled) return;

      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (canvas && container) {
        // Sync canvas size with container
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }

        const ctx = canvas.getContext('2d', { alpha: false });
        if (ctx) {
          // Calculate elapsed time within current transition
          const elapsed = now - frameStartTime;
          let progress = elapsed / FRAME_DURATION_MS;

          if (progress >= 1) {
            // Advance frame step
            const steps = Math.floor(progress);
            frameStartTime = now - (elapsed % FRAME_DURATION_MS);

            for (let s = 0; s < steps; s++) {
              if (direction === 1) {
                if (currentIdx >= TOTAL_FRAMES - 1) {
                  direction = -1;
                  currentIdx = TOTAL_FRAMES - 2;
                } else {
                  currentIdx++;
                }
              } else {
                if (currentIdx <= 0) {
                  direction = 1;
                  currentIdx = 1;
                } else {
                  currentIdx--;
                }
              }
            }
            progress = (elapsed % FRAME_DURATION_MS) / FRAME_DURATION_MS;
          }

          // Next target frame for cross-fade blending
          let nextIdx: number;
          if (direction === 1) {
            nextIdx = currentIdx < TOTAL_FRAMES - 1 ? currentIdx + 1 : currentIdx - 1;
          } else {
            nextIdx = currentIdx > 0 ? currentIdx - 1 : currentIdx + 1;
          }

          const currentImg = images[currentIdx];
          const nextImg = images[nextIdx];

          // 1. Draw base frame
          if (currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
            ctx.globalAlpha = 1.0;
            drawCover(ctx, currentImg, width, height);

            // 2. Dissolve next frame smoothly on top to eliminate all jerky vibration/shaking
            if (nextImg && nextImg.complete && nextImg.naturalWidth > 0 && progress > 0.02) {
              // Smooth easing function for optical comfort
              const smoothAlpha = progress * progress * (3 - 2 * progress);
              ctx.globalAlpha = Math.min(1.0, Math.max(0.0, smoothAlpha));
              drawCover(ctx, nextImg, width, height);
            }
          } else {
            // Fallback to any loaded frame while assets populate
            const fallback = images.find((im) => im.complete && im.naturalWidth > 0);
            if (fallback) {
              ctx.globalAlpha = 1.0;
              drawCover(ctx, fallback, width, height);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#07241d]"
    >
      {/* Canvas rendering the seamlessly cross-faded sequence */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover select-none"
      />

      {/* Sutil viñeta ligera para mantener la legibilidad de los textos sin oscurecer la animación */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20 pointer-events-none" />

      {/* Fotograma estático inicial mientras carga el primer frame */}
      {!firstFrameLoaded && (
        <img
          src="/animacion-fondo/014.png"
          alt="Lago Titicaca"
          className="absolute inset-0 w-full h-full object-cover opacity-95"
        />
      )}
    </div>
  );
};
