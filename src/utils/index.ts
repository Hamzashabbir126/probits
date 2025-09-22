/**
 * Navigation utility functions
 */
export const navigateToPage = (page: string): void => {
  if (typeof window !== 'undefined' && (window as any).goToPage) {
    (window as any).goToPage(page);
  }
};

/**
 * Common banner items for consistent use across pages
 */
export const DEFAULT_BANNER_ITEMS = [
  "Green the planet",
  "Cut carbon waste", 
  "Plan for resilience",
  "Value public outcomes",
  "Target net zero"
];

/**
 * Extended banner items for specific pages
 */
export const EXTENDED_BANNER_ITEMS = [
  ...DEFAULT_BANNER_ITEMS,
  "Embed climate thinking"
];

/**
 * Page route constants
 */
export const ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  BLOG: 'blog',
  BLOG_DETAIL: 'blogdetail',
  CONTACT: 'contact',
  CONSULTING: 'consulting',
  PLATFORM: 'inuse',
  WATER: 'water'
} as const;

/**
 * Asset URL constants
 */
export const ASSETS = {
  ICONS: {
    SEPARATOR: "https://c.animaapp.com/mezk8qhiRH69bc/img/fi-3127084.svg",
    ARROW_RIGHT: "https://c.animaapp.com/mevfv4lgJQJIM3/img/vuesax-linear-arrow-right.svg"
  },
  IMAGES: {
    HERO_BG: "https://c.animaapp.com/mezk8qhiRH69bc/img/23232-333604632-tiny-1.png",
    SECTION_DIVIDER: "https://c.animaapp.com/mezjxobfmTWCBj/img/section.svg"
  }
} as const;