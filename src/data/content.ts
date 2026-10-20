export const profile = {
  name: "Grant Li",
  title: "Senior Software Engineer",
  tagline: "AI / LLM Applications, Backend Systems & React / Next.js",
  location: "New York, NY",
  email: "grantli0727@gmail.com",
  phone: "+1 (305) 697-3554",
  linkedin: "https://linkedin.com/in/grant-li",
  summary:
    "Senior Software Engineer with 7+ years at Pinterest, OpenSea, and Facebook — shipping AI-powered products, scalable backends, and polished React / Next.js experiences.",
};

export const projects = [
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
    role: "Senior Software Engineer (AI & Full-Stack)",
    period: "2024.3 – Present",
    location: "New York, NY",
    highlights: [
      "Raised RAG answer accuracy from 72% to 94% on a 300-question eval set with pgvector + grounded citations.",
      "Cut fabricated answers by 90% with guardrails, fallbacks, and human approval for external actions.",
      "Shipped a Next.js AI assistant used by 2,000+ employees (4.6/5 satisfaction) with streaming and SSR.",
      "Reduced p95 API latency 42% and held LLM costs 60% below initial estimates.",
    ],
  },
  {
    company: "OpenSea",
    role: "Senior Software Engineer (Backend & Full-Stack)",
    period: "2022.2 – 2023.10",
    location: "New York, NY",
    highlights: [
      "Scaled Node.js / TypeScript / PostgreSQL marketplace APIs to 1M+ req/day at 99.95% uptime.",
      "Lifted completed listings 24% with a React / Next.js seller workflow and real-time validation.",
      "Improved Lighthouse from 58 → 92 and cut load time 45% via ISR, code splitting, and image optimization.",
      "Lowered AWS spend ~$15K/month and cut MTTR 40% with Terraform, Datadog, and runbooks.",
    ],
  },
  {
    company: "Pinterest",
    role: "Software Engineer (Full-Stack)",
    period: "2019.7 – 2022.1",
    location: "New York, NY",
    highlights: [
      "Delivered 20+ production React / Python releases for 500K+ monthly users.",
      "Improved page load 30% and key-workflow engagement 9% through performance work.",
      "Ran 15+ A/B experiments that drove 6–12% conversion gains on permanent rollouts.",
    ],
  },
  {
    company: "Facebook",
    role: "Software Engineer (Full-Stack)",
    period: "2018.5 – 2018.8",
    location: "Menlo Park, CA",
    highlights: [
      "Shipped 6 production React / GraphQL features under strict review and staged deployment.",
      "Resolved 40+ bugs and performance issues, cutting client-side error rates by 15%.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "AI & LLM",
    items: [
      "Claude / OpenAI",
      "RAG",
      "Agents & tool calling",
      "Prompt engineering",
      "pgvector",
      "Eval sets & guardrails",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python / FastAPI",
      "Node.js / Express",
      "TypeScript",
      "REST / GraphQL",
      "PostgreSQL / Redis",
      "Auth (OAuth, JWT)",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "SSR / ISR",
      "Tailwind CSS",
      "Zustand / Redux",
      "Accessible UI",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker / Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Datadog",
      "CI/CD",
    ],
  },
] as const;

