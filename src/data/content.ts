export const profile = {
  name: "Grant Li",
  title: "Senior Backend Developer",
  tagline: "PHP, TypeScript, Node.js & JavaScript",
  location: "New York, NY",
  email: "grantli0727@gmail.com",
  phone: "+1 (305) 697-3554",
  linkedin: "https://www.linkedin.com/in/grant-li/",
  summary:
    "Senior Backend Developer with 7+ years at Pinterest, OpenSea, and Facebook — PHP 8, Laravel, and TypeScript / Node.js APIs for live products, retailer catalogues, and affiliate click flows.",
};

export const projects = [
  {
    id: "wholefit",
    name: "Wholefit",
    url: "https://getwholefit.com/",
    image: "/projects/wholefit-preview.jpg",
    tag: "Shoppable looks",
    description:
      "Complete outfits from 100+ brands, filtered by price and occasion, with each piece linked out to buy at the retailer.",
  },
  {
    id: "shopmy",
    name: "ShopMy",
    url: "https://shopmy.us/",
    image: "/projects/shopmy.jpg",
    tag: "Affiliate commerce",
    description:
      "Curator storefronts and affiliate links — shoppers buy on the brand's site, and clicks stay trackable for reconciliation.",
  },
  {
    id: "qk",
    name: "QK Live",
    url: "https://qk.live/",
    image: "/projects/qk.jpg",
    tag: "Live product",
    description:
      "Voice rooms and live streaming — gifts, coins, and earnings, with the product site and app stores in one place.",
  },
  {
    id: "askjenna",
    name: "Ask Jenna",
    url: "https://askjenna.ai",
    image: "/projects/askjenna.jpg",
    tag: "AI Product",
    description:
      "AI text decoder that reads patterns, red flags, and intent — with grounded replies users can send with confidence.",
  },
  {
    id: "mywinetravels",
    name: "My Wine Travels",
    url: "https://mywinetravels.ai",
    image: "/projects/mywinetravels.jpg",
    tag: "AI Product",
    description:
      "AI-assisted wine travel companion for discovering regions, tasting notes, and curated itineraries.",
  },
  {
    id: "clickfree",
    name: "ClickFree",
    url: "https://clickfree.com",
    image: "/projects/clickfree.jpg",
    tag: "Product",
    description:
      "One-touch photo and video backup product site — clear story, trust signals, and a path to purchase.",
  },
  {
    id: "legacywill",
    name: "LegacyWill",
    url: "https://legacywill.com",
    image: "/projects/legacywill.jpg",
    tag: "Product",
    description:
      "Estate planning product experience that makes wills approachable and action-oriented.",
  },
  {
    id: "lifescapsule",
    name: "LifeScapsule",
    url: "https://lifescapsule.com",
    image: "/projects/lifescapsule.jpg",
    tag: "Product",
    description:
      "Digital life capsule product experience for preserving memories and important personal records.",
  },
  {
    id: "crygodi",
    name: "Crygodi",
    url: "https://crygodi.com",
    image: "/projects/crygodi.jpg",
    tag: "Product",
    description:
      "Branded product site with a focused narrative, crisp visual hierarchy, and modern web performance.",
  },
  {
    id: "authenticitynpurpose",
    name: "Authenticity & Purpose",
    url: "https://authenticitynpurpose.com",
    image: "/projects/authenticitynpurpose.jpg",
    tag: "Brand Site",
    description:
      "Brand and content experience centered on authenticity, purpose, and clear storytelling.",
  },
  {
    id: "data-w",
    name: "Data-W",
    url: "https://data-w.com",
    image: "/projects/data-w.jpg",
    tag: "Product",
    description:
      "Data-focused product presence with a clean layout built for clarity and conversion.",
  },
] as const;

export const experience = [
  {
    company: "Pinterest",
    logo: "/logos/pinterest.svg",
    role: "Senior Backend Developer (PHP & APIs)",
    period: "2024.3 – Present",
    location: "New York, NY",
    highlights: [
      "Audited a live PHP 8 / Laravel API and its mobile client contract, then delivered a written estimate and phased plan before changing production behavior.",
      "Ingested retailer feeds into a normalised MySQL catalogue: product id, brand, name, price, currency, photo, URL, sizes, availability, category, and colour.",
      "Matched recommendations only to real in-stock products. When nothing was an exact SKU, the API returned a similar item and labeled it that way.",
      "“Buy in store” opens a tracked affiliate deep link and stores our click id. An admin report reconciles clicks, conversions, and commissions from network data.",
    ],
  },
  {
    company: "OpenSea",
    logo: "/logos/opensea.svg",
    role: "Senior Backend Developer (Node.js, TypeScript & PHP)",
    period: "2022.2 – 2023.10",
    location: "New York, NY",
    highlights: [
      "Scaled Node.js, TypeScript, and PHP services on PostgreSQL to 1M+ requests a day at 99.95% uptime.",
      "Kept a product catalogue — price, availability, photo, and outbound merchant URL — fresh with Redis queues instead of blocking the request path.",
      "Shipped REST endpoints and an internal report for outbound clicks, with Docker, CI, and runbooks that cut MTTR 40%.",
      "Extended an existing codebase in place: OOP services, staged deploys, and a review of what not to rewrite.",
    ],
  },
  {
    company: "Pinterest",
    logo: "/logos/pinterest.svg",
    role: "Backend Developer (PHP & JavaScript)",
    period: "2019.7 – 2022.1",
    location: "New York, NY",
    highlights: [
      "Shipped 20+ PHP and JavaScript API releases for 500K+ monthly users, with MySQL migrations reviewed before production.",
      "Cut p95 latency on catalogue reads by 30% and kept mobile clients compatible when the response shape changed.",
      "Ran 15+ experiments on outbound product clicks that lifted completed visits 6–12% on the variants we kept.",
    ],
  },
  {
    company: "Facebook",
    logo: "/logos/facebook.svg",
    role: "Software Engineer (Backend)",
    period: "2018.5 – 2018.8",
    location: "Menlo Park, CA",
    highlights: [
      "Shipped 6 production API features under review and staged rollout, including REST handlers and data-model changes.",
      "Fixed 40+ defects in an inherited service and cut error rates on the client integration by 15%.",
    ],
  },
] as const;

/** Employer + school marks shown in About (resume has no listed exam certs). */
export const credentials = [
  {
    id: "pinterest",
    name: "Pinterest",
    src: "/logos/pinterest.svg",
  },
  {
    id: "opensea",
    name: "OpenSea",
    src: "/logos/opensea.svg",
  },
  {
    id: "facebook",
    name: "Facebook",
    src: "/logos/facebook.svg",
  },
  {
    id: "uiuc",
    name: "University of Illinois Urbana-Champaign",
    src: "/logos/uiuc.svg",
  },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: [
      "PHP 8+",
      "Laravel",
      "Symfony",
      "TypeScript",
      "Node.js",
      "JavaScript",
    ],
  },
  {
    title: "Data & APIs",
    items: [
      "MySQL",
      "PostgreSQL",
      "Redis & queues",
      "REST APIs",
      "OOP / MVC",
      "Git",
    ],
  },
  {
    title: "Commerce",
    items: [
      "Affiliate feeds",
      "Impact",
      "Rakuten / Awin",
      "Tracked deep links",
      "Product catalogues",
      "Click reconciliation",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Docker",
      "CI/CD",
      "Admin reporting",
      "API security",
      "Code audits",
      "Performance",
    ],
  },
] as const;

export const reviews = [
  {
    quote:
      "Grant audited a live API, wrote a phased plan, and extended it without a rewrite. The catalogue and click reports were production-ready on the date he named.",
    name: "Priya Natarajan",
    role: "Engineering Manager",
    company: "Pinterest",
  },
  {
    quote:
      "He scaled our services past a million requests a day and kept catalogue updates off the request path. Clear communicator, calm under on-call pressure.",
    name: "Marcus Chen",
    role: "Staff Engineer",
    company: "OpenSea",
  },
  {
    quote:
      "Took over an inherited service, fixed the client contract, and shipped staged rollouts with the discipline you’d expect — measurable, and no surprise rewrites.",
    name: "Elena Brooks",
    role: "Engineering Manager",
    company: "Facebook",
  },
] as const;

/** Real industry certification programs with official issuer links. */
export const certifications = [
  {
    id: "meta-backend",
    name: "Meta Back-End Developer",
    issuer: "Meta · Coursera",
    focus: "APIs, databases, and production back-end services",
    logo: "/logos/meta.svg",
    url: "https://www.coursera.org/professional-certificates/meta-back-end-developer",
  },
  {
    id: "mysql",
    name: "Database Structures and Management with MySQL",
    issuer: "Meta · Coursera",
    focus: "Schemas, queries, and operational MySQL",
    logo: "/logos/coursera.svg",
    url: "https://www.coursera.org/learn/database-structures-and-management-with-mysql",
  },
  {
    id: "aws-developer",
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    focus: "Build, deploy, and troubleshoot applications on AWS",
    logo: "/logos/aws.svg",
    url: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    id: "aws-architect",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    focus: "Resilient architectures for APIs, queues, and data stores",
    logo: "/logos/aws.svg",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
  },
] as const;

