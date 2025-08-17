import { cn } from "@/lib/utils";
import { heroVariants } from "@/components/constants";
import type { HeroProps, HeroContentProps } from "@/components/types";
import { Button } from "@/components/ui/button";
import { ScrollHero } from "@/components/ui/spline";

export function Hero({
  children,
  className,
  size,
  variant,
  container,
  backgroundImage,
  backgroundOpacity = 20, // default 20% overlay
}: HeroProps) {
  const backgroundImageStyles = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section
      className={cn(
        "relative w-full min-h-120 overflow-hidden flex items-center",
        heroVariants({ size, variant, container }),
        className
      )}
      style={backgroundImageStyles}
    >
      {/* Gradient Overlay (20%) */}
      <div
  className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 opacity-30"
      />

      {/* ScrollHero Animation on the right */}
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 overflow-hidden">
        <ScrollHero />
      </div>

      {/* Text / content left-aligned */}
      <div className="relative z-20 w-full max-w-6xl px-8 text-left">
        {children}
      </div>
    </section>
  );
}

export function HeroContent({
  title,
  subtitle,
  children,
  className,
  onNavigate,
}: HeroContentProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <h1 className="text-8xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight whitespace-pre-line">
        {title}
      </h1>
      {subtitle && (
        <p className="text-3xl sm:text-xl lg:text-2xl text-white max-w-3xl whitespace-pre-line">
          {subtitle}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mt-4">
        {children}
        {onNavigate && (
          <Button
            size="lg"
            onClick={() => onNavigate("book")}
            className="bg-white/20 text-white hover:bg-white/30 text-base font-semibold px-8 py-4 rounded-lg backdrop-blur-sm shadow-md"
          >
            Book Now
          </Button>
        )}
      </div>
    </div>
  );
}