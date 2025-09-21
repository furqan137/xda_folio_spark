export const SITE_CONFIG = {
  name: 'Elara Vance',
  title: 'Elara Vance - Designer, Artist, Creator',
  description: 'Digital artist crafting unique visual identities and immersive experiences that connect and resonate.',
  url: 'https://elaravance.com',
  author: 'Elara Vance',
  location: 'Paris, France',
  email: 'hello@elaravance.com',
  social: {
    dribbble: 'https://dribbble.com/elaravance',
    behance: 'https://behance.net/elaravance',
    instagram: 'https://instagram.com/elaravance',
    gmail: 'mailto:hello@elaravance.com'
  }
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Works', path: '/works' },
  { name: 'Playground', path: '/playground' },
  { name: 'About', path: '/about' },
];

export const PROJECT_CATEGORIES = {
  ALL: 'all',
  DIGITAL_ART: 'digital_art',
  BRANDING: 'branding',
  UI_UX: 'ui/ux',
  ABSTRACT: 'abstract'
} as const;

export const PLAYGROUND_CATEGORIES = {
  EXPERIMENTAL: 'experimental',
  UNCONVENTIONAL: 'unconventional',
  WEIRD: 'weird'
} as const;