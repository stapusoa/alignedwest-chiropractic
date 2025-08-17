import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const frames = Array.from({ length: 24 }, (_, i) =>
  `${BASE_URL}/frames/flower-${i + 1}.webp`
);

export function ScrollHero() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 1000; // height where animation ends
      const index = Math.min(
  frames.length - 1,
  Math.round((scrollTop / maxScroll) * frames.length)
);
      setFrame(index);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex top-36 w-full h-[800px] overflow-hidden">
      <img
        src={frames[frame]}
        alt="Scroll animation"
        className="w-full h-full object-cover"
      />
    </div>
  );
}