import type { PageType } from "@/components/ui/navigation/types";
import {
  Hero,
  HeroContent,
  Feature,
} from "@/components/index";
import About from "@/components/about";
import bgImage from "@/assets/bg-home-hero.webp";
interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export default function Home({ onNavigate }: HomePageProps) {
  return (
    <div className="flex relative size-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-0 px-0 relative size-full">
          <Hero
            size="lg"
            variant="image"
            backgroundImage={bgImage}
            backgroundOpacity={0}
            className="relative size-full w-full h-full"
            onNavigate={(page) => console.log("Navigate to:", page)}
          >
            <HeroContent
              title={`Experience Healing,\nReimagined`}
              subtitle={`Personalized chiropractic care blending mind,\nbody, and soul for holistic wellness.`}
              onNavigate={(page) => console.log("Navigate to:", page)}
            />
          </Hero>
          <About />
          <Feature
            title="Title"
            description="" 
            onNavigate={onNavigate} />
          
        </div>
      </div>
    </div>
  );
}
