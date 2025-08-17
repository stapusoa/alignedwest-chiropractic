import type { PageType } from "./types";
import type { Socials } from "./types";

export const navitems: { text: string; page: PageType }[] = [
  { text: 'About', page: 'about' },
  { text: 'Services', page: 'services' },
  { text: 'Resources', page: 'resources' },
  { text: 'Clinic Info', page: 'clinic' },
];

export const CTA = "Book now";

export const defaultSocials: Socials[] = [
  { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
];

export const moreLinks: { text: string; page: PageType }[] = [
  { text: 'Privacy', page: 'privacy' },
  { text: 'Terms', page: 'terms' },
  { text: 'Policies', page: 'policies' },
];

export const companyName = "Aligned West Chiropractic";
export const copyrightYear = new Date().getFullYear();
