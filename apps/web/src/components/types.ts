import { type VariantProps } from "class-variance-authority"
import { bentoGridVariants, bentoItemVariants, ctaVariants, featureVariants, heroVariants, statsVariants, testimonialsVariants } from "./constants"
import type { PageType } from "@/components/ui/navigation/types";


export interface BentoGridProps extends VariantProps<typeof bentoGridVariants> {
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
  onNavigate?: (page: PageType) => void; // 👈 Add this
}

export interface BentoItemProps extends VariantProps<typeof bentoItemVariants> {
  children: React.ReactNode
  className?: string
}

export interface CTAProps extends VariantProps<typeof ctaVariants> {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
  onNavigate?: (page: PageType) => void; // 👈 Add this
}

export interface FeatureProps extends VariantProps<typeof featureVariants> {
  title: string
  subtitle?: string
  description: string
  image?: string
  imageAlt?: string
  children?: React.ReactNode
  className?: string
  onNavigate?: (page: PageType) => void; // 👈 Add this
}

export interface HeroProps extends VariantProps<typeof heroVariants> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dark" | "image" | "minimal";
  container?: boolean;
  backgroundImage?: string;
  backgroundOpacity?: number;
  onNavigate?: (page: PageType) => void; // 👈 Add this
}

export interface HeroContentProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  onNavigate?: (page: PageType) => void; // 👈 Add this
}

export interface Stat {
  value: string
  label: string
  description?: string
}

export interface StatsProps extends VariantProps<typeof statsVariants> {
  title?: string
  subtitle?: string
  stats: Stat[]
  className?: string
  onNavigate?: (page: PageType) => void; // 👈 Add this
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
  onNavigate?: (page: PageType) => void; // 👈 Add this
}

export interface TestimonialsProps extends VariantProps<typeof testimonialsVariants> {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  className?: string
  onNavigate?: (page: PageType) => void; // 👈 Add this
}
