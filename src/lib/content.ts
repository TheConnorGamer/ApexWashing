export const SITE = {
  name: "Clean & Green",
  fullName: "Clean & Green Services",
  tagline: "Windows clean and grass looking green",
  phone: "204-899-3566",
  phoneTel: "+12048993566",
  location: "Winnipeg, MB",
  instagram: "https://www.instagram.com/cleanandgreen.wpg",
  instagramHandle: "@cleanandgreen.wpg",
  owners: "Idan & Tristin",
  est: "2023",
} as const;

export const img = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}${
    h ? `&h=${h}` : ""
  }`;

// All IDs verified via GET — broken links cause empty before/after sliders.
export const PHOTOS = {
  heroLawn: "photo-1600585152915-d208bec867a1",
  lushLawn: "photo-1600585154340-be6161a56a0c",
  windows: "photo-1560518883-ce09059eeffa",
  garden: "photo-1560185007-cde436f6a4d0",
  lawnCare: "photo-1625246333195-78d9c38ad449",
  suburban: "photo-1564013799919-ab600027ffc6",
  yard: "photo-1600566753086-00f18fb6b3ea",
  porch: "photo-1570129477492-45c003edd2be",
  spring: "photo-1416879595882-3373a0480b5b",
  windowClose: "photo-1581578731548-c64695cc6952",
  mulch: "photo-1585320806297-9794b3e4eeae",
  home: "photo-1600596542815-ffad4c1539a9",
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
    title: "Window Cleaning",
    blurb: "Streak-free exterior glass",
    detail:
      "Professional exterior window cleaning for homes and small businesses. We remove dirt, pollen, and hard-water spots so your windows look crystal clear — inside and out.",
    photo: PHOTOS.windows,
  },
  {
    index: "02",
    title: "Lawn Mowing & Edging",
    blurb: "Crisp lines, healthy grass",
    detail:
      "Regular mowing and precision edging to keep your lawn looking sharp week after week. We treat every yard like our own — neat, even, and ready for the season.",
    photo: PHOTOS.lawnCare,
  },
  {
    index: "03",
    title: "Hand Weeding",
    blurb: "Garden beds & walkways",
    detail:
      "Careful hand-weeding for garden beds, walkways, and tight spots where machines can't reach. We pull weeds at the root so your landscaping stays clean longer.",
    photo: PHOTOS.garden,
  },
  {
    index: "04",
    title: "Weed Spray Applications",
    blurb: "Targeted lawn treatment",
    detail:
      "Selective weed spray applications to tackle stubborn growth in your lawn and along edges. Safe, targeted treatments that help your grass thrive.",
    photo: PHOTOS.yard,
  },
  {
    index: "05",
    title: "Fertilizer & Seeding",
    blurb: "Thicker, greener turf",
    detail:
      "Fertilizer and overseeding services to fill in bare patches and give your lawn that deep, healthy green colour Winnipeg summers are made for.",
    photo: PHOTOS.lushLawn,
  },
  {
    index: "06",
    title: "Spring Cleanups",
    blurb: "Raking, debris & aeration",
    detail:
      "Full spring cleanups including raking, debris removal, aeration, and more. Get your property ready for the season — ask about our limited-time spring special.",
    photo: PHOTOS.spring,
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
    title: "River Heights Home",
    location: "River Heights",
    service: "Exterior Window Cleaning",
    outcome: "Every pane streak-free — the homeowner booked us for the full season.",
    photo: PHOTOS.suburban,
  },
  {
    title: "St. Vital Property",
    location: "St. Vital",
    service: "Lawn Mow, Edge & Trim",
    outcome: "Overgrown lawn transformed in a single visit.",
    photo: PHOTOS.heroLawn,
  },
  {
    title: "Charleswood Garden",
    location: "Charleswood",
    service: "Hand Weeding & Mulch Refresh",
    outcome: "Weeds cleared and beds looking fresh for spring.",
    photo: PHOTOS.mulch,
  },
  {
    title: "Tuxedo Yard",
    location: "Tuxedo",
    service: "Spring Cleanup Package",
    outcome: "Full yard reset — raking, debris removal, and aeration done.",
    photo: PHOTOS.home,
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
      "Idan and Tristin are incredibly reliable. They show up when they say they will, work hard, and our windows have never looked better. Highly recommend to anyone in Winnipeg.",
    name: "Sarah M.",
    role: "River Heights",
  },
  {
    quote:
      "We hired them for lawn mowing and edging all summer. Always respectful of our property, always detailed. Our neighbours keep asking who does our yard.",
    name: "Mike & Jen K.",
    role: "St. Vital",
  },
  {
    quote:
      "The spring cleanup was worth every penny. They raked, cleared debris, and aerated — our lawn came back greener than it has in years.",
    name: "David L.",
    role: "Charleswood",
  },
];

export const STATS = [
  { value: 3, suffix: "+", label: "Years serving Winnipeg" },
  { value: 5, suffix: "★", label: "Star-rated service", decimals: 0 },
  { value: 100, suffix: "%", label: "Satisfaction rate" },
  { value: 7, suffix: "", label: "Services offered", decimals: 0 },
];

export const SERVICE_OPTIONS = [
  "Window Cleaning",
  "Lawn Mowing & Edging",
  "Hand Weeding",
  "Weed Spray Applications",
  "Fertilizer & Seeding",
  "Aeration Services",
  "Spring Cleanup",
];

export const WHY_US = [
  {
    n: "01",
    title: "Reliable & on time",
    body: "We commit to a window and we keep it. You get a confirmed appointment and a heads-up when we're on our way.",
  },
  {
    n: "02",
    title: "Locally owned since 2023",
    body: "Run by Idan and Tristin — two hardworking Winnipeg teens who started this business to help neighbours keep their properties looking great.",
  },
  {
    n: "03",
    title: "Respectful of your property",
    body: "We treat your home and yard with care. Clean work areas, careful foot traffic, and zero shortcuts.",
  },
  {
    n: "04",
    title: "Free estimates",
    body: "Message us anytime for a free quote. We can come by, walk the property with you, and give you a clear price before we start.",
  },
  {
    n: "05",
    title: "Detailed, careful work",
    body: "Known for being thorough — whether it's streak-free windows or crisp lawn edges, we take pride in every job.",
  },
  {
    n: "06",
    title: "100% satisfaction",
    body: "If something isn't right, we'll make it right. Your approval is how we measure a job well done.",
  },
];

export type ResultCase = {
  /** After / clean image */
  after: string;
  /** Before / dirty image — omit to use CSS grime filter on `after` */
  before?: string;
  alt: string;
  title: string;
  location: string;
  note: string;
  variant: "window" | "garden";
};

export const RESULTS: ResultCase[] = [
  {
    before: "/results/window-before.png",
    after: "/results/window-after.png",
    alt: "Exterior window cleaning",
    title: "Exterior Window Cleaning",
    location: "Winnipeg, MB",
    note: "Hard-water film and grime removed — streak-free glass in one visit.",
    variant: "window",
  },
  {
    before: "/results/garden-before.png",
    after: "/results/garden-after.png",
    alt: "Garden bed restoration",
    title: "Garden Bed Restoration",
    location: "Winnipeg, MB",
    note: "Weeds cleared, beds edged, and fresh mulch laid.",
    variant: "garden",
  },
];
