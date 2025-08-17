import { useEffect, useRef } from "react";

const FRAME_COUNT = 24; // adjust based on how many frames you exported
const maxScroll = 800; // total scroll distance for animation

// Use environment variable, fallback to local backend
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

// Generate frame URLs
const frames = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `${BASE_URL}/frames/flower-${i + 1}.webp`
);

export function ScrollHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameImages = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);

  // Preload frames
  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
      frameImages.current.push(img);
    });
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      const scrollTop = window.scrollY;
      const targetFrame = Math.min(
        FRAME_COUNT - 1,
        (scrollTop / maxScroll) * (FRAME_COUNT - 1)
      );

      // Smooth lerp transition
      currentFrame.current += (targetFrame - currentFrame.current) * 0.2;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = frameImages.current[Math.floor(currentFrame.current)];
      if (img) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full h-150">
      <canvas
        ref={canvasRef}
        width={1920} // match your frame resolution
        height={1080} // match your frame resolution
        className="w-full h-auto object-cover"
      />
    </div>
  );
}