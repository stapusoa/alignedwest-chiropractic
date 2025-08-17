import { useEffect, useRef } from "react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const FRAME_COUNT = 24;
const maxScroll = 600; // adjust depending on how far down the page the animation should run

// Generate frame URLs
const frames = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `${BASE_URL}/frames/flower-${i + 1}.webp`
);

export function ScrollHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameImages = useRef<HTMLImageElement[]>([]);
  const currentFrame = useRef(0);

  // Preload all frames
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

    currentFrame.current += (targetFrame - currentFrame.current) * 0.2;

    const canvas = canvasRef.current;
    if (!canvas) return; // Guard: canvas might be null
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Guard: context might be null

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
    <div className="relative w-full h-[800px] overflow-hidden top-36">
      <canvas
        ref={canvasRef}
        width={1920} // adjust for your frames
        height={1080} // adjust for your frames
        className="w-full h-full object-cover"
      />
    </div>
  );
}