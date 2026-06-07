// Verified Unsplash photo IDs (architecture / exterior photography).
// Helper builds an optimized, cropped URL.
export const img = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}${
    h ? `&h=${h}` : ""
  }`;

export const PHOTOS = {
  heroHouse: "photo-1512917774080-9991f1c4c750",
  modernHome: "photo-1600585154340-be6161a56a0c",
  estate: "photo-1600596542815-ffad4c1539a9",
  facade: "photo-1564013799919-ab600027ffc6",
  poolHome: "photo-1605276374104-dee2a0ed3cd6",
  roofline: "photo-1600607687939-ce8a6c25118c",
  driveway: "photo-1600210492493-0946911123ea",
  patio: "photo-1558036117-15d82a90b9b1",
  deck: "photo-1523217582562-09d0def993a6",
  commercial: "photo-1416331108676-a22ccb276e35",
  building: "photo-1518780664697-55e3ad937233",
  concrete: "photo-1600573472550-8090b5e0745e",
  garden: "photo-1600566753086-00f18fb6b3ea",
  craftsman: "photo-1600047509807-ba8f99d2cdde",
  villa: "photo-1600210491369-e753d80a41f3",
  porch: "photo-1570129477492-45c003edd2be",
} as const;

export type Service = {
  index: string;
  title: string;
  blurb: string;
  detail: string;
  photo: string;
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "House Washing",
    blurb: "Soft-wash exterior restoration",
    detail:
      "A gentle, low-pressure soft-wash system that lifts years of organic growth, pollen and grime from siding, render and brick — without ever risking your finishes.",
    photo: PHOTOS.modernHome,
  },
  {
    index: "02",
    title: "Driveway Cleaning",
    blurb: "Surface-level deep clean",
    detail:
      "Surface-cleaner technology delivers a uniform, streak-free finish across concrete, pavers and natural stone, followed by a precision detail of every edge and joint.",
    photo: PHOTOS.driveway,
  },
  {
    index: "03",
    title: "Roof Cleaning",
    blurb: "Algae & moss treatment",
    detail:
      "A no-pressure biocide treatment that eliminates black streaks, lichen and moss at the root — extending the life of your roof and restoring its original tone.",
    photo: PHOTOS.roofline,
  },
  {
    index: "04",
    title: "Concrete Cleaning",
    blurb: "Walkways, patios & pool decks",
    detail:
      "From oil-stained garage floors to expansive pool decks, we lift embedded grime and re-establish a clean, even surface ready for sealing.",
    photo: PHOTOS.concrete,
  },
  {
    index: "05",
    title: "Commercial Washing",
    blurb: "Storefronts & facilities",
    detail:
      "Scheduled exterior maintenance for storefronts, offices and multi-unit properties — protecting your brand's first impression with discreet, off-hours service.",
    photo: PHOTOS.commercial,
  },
  {
    index: "06",
    title: "Deck & Fence Restoration",
    blurb: "Wood revival & prep",
    detail:
      "Careful wood-safe cleaning that strips greying and mildew to reveal the natural grain — the ideal foundation before staining or sealing.",
    photo: PHOTOS.deck,
  },
];

export type Project = {
  title: string;
  location: string;
  service: string;
  outcome: string;
  photo: string;
};

export const PROJECTS: Project[] = [
  {
    title: "The Hillcrest Residence",
    location: "Bel Terra Heights",
    service: "Full Exterior & Roof Soft-Wash",
    outcome: "Listed nine days later — above asking.",
    photo: PHOTOS.poolHome,
  },
  {
    title: "Maison Laurier",
    location: "Old Town Quarter",
    service: "Stone Facade & Limewash Detail",
    outcome: "Restored a 1920s facade to its original warmth.",
    photo: PHOTOS.facade,
  },
  {
    title: "Cedar & Vine Estate",
    location: "Northridge",
    service: "Driveway, Patio & Deck Restoration",
    outcome: "Two seasons of buildup removed in a single visit.",
    photo: PHOTOS.estate,
  },
  {
    title: "Meridian Commercial Plaza",
    location: "Riverfront District",
    service: "Commercial Storefront Program",
    outcome: "Quarterly maintenance contract secured.",
    photo: PHOTOS.building,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I've used three different companies over the years. Apex is simply on another level. They treated our home like it was their own — and the result genuinely looked like a renovation.",
    name: "Eleanor V.",
    role: "Bel Terra Heights",
  },
  {
    quote:
      "They arrived exactly when they said they would, protected every plant and fixture, and left the property immaculate. Worth every dollar, and then some.",
    name: "Marcus & Priya D.",
    role: "Northridge Estate",
  },
  {
    quote:
      "Our storefront has never looked better. Clients noticed within a week. Apex understands that presentation is everything in our business.",
    name: "Daniel R.",
    role: "Meridian Plaza",
  },
];

export const STATS = [
  { value: 14, suffix: "+", label: "Years in business" },
  { value: 4200, suffix: "+", label: "Properties serviced" },
  { value: 5.0, suffix: "★", label: "Average client rating", decimals: 1 },
  { value: 100, suffix: "%", label: "Fully insured & bonded" },
];

export const SERVICE_OPTIONS = [
  "House Washing",
  "Driveway Cleaning",
  "Roof Cleaning",
  "Concrete Cleaning",
  "Commercial Pressure Washing",
  "Deck & Fence Restoration",
];
