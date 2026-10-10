// Single source of truth for portfolio copy.
// Every fact and number here comes from Hassan's resume (Oct 2026) and career notes.
// Do not add metrics that are not in those sources.

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://muhammadhassanshahzad.netlify.app",
  name: "Hassan Shahzad",
  role: "Software Engineer",
  title: "Hassan Shahzad, Software Engineer",
  description:
    "Software engineer building AI products end to end: RAG systems, voice, payments, integrations and production backends. Founding and forward-deployed roles.",
  location: "Lahore, Pakistan",
  email: "hassanshahzad3513@gmail.com",
  links: {
    github: "https://github.com/Hassanshahzad-x",
    linkedin: "https://www.linkedin.com/in/hassanshahzad-x",
    resume: "/hassan-shahzad-resume.pdf",
  },
} as const;

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  context: string;
  period?: string;
  url?: string;
  image?: string;
  summary: string;
  metrics: Metric[];
  stack: string[];
  problem: string;
  solution: string;
  contribution: string[];
  // System design snapshot: tiers left to right, from client to external systems.
  system: { tier: string; nodes: string[] }[];
  systemNote?: string;
  challenges: { title: string; body: string }[];
  results: string[];
};

export const projects: Project[] = [
  {
    slug: "folklore",
    name: "Folklore",
    kind: "AI memory and legacy platform",
    context: "Founding Software Engineer, contract",
    period: "Oct 2025 - May 2026",
    url: "https://folklore.la/",
    image: "/work/folklore.png",
    summary:
      "Turns a person's stories, voice and personality into a digital Heirloom that family can talk to. I built the platform and its RAG and voice stack.",
    metrics: [
      { value: "60+", label: "live AI personas" },
      { value: "−70%", label: "hallucinations vs general-purpose AI" },
      { value: "<120ms", label: "retrieval latency" },
      { value: "$7K+", label: "ARR across 4 tiers" },
    ],
    stack: ["Next.js 15", "TypeScript", "Supabase", "FastAPI", "Qdrant", "Gemini", "ElevenLabs", "Stripe", "Docker"],
    problem:
      "Interview transcripts hold a person's stories, but a general-purpose model talking about them invents details. For a product about memory, every invented detail breaks trust.",
    solution:
      "A grounded pipeline: transcripts are chunked and indexed, each question retrieves the person's own words, and responses stream back as text or as their configured voice.",
    contribution: [
      "Led full-stack development: architecture, auth, conversations, voice, admin workflows and billing.",
      "Sole architect of the standalone FastAPI RAG microservice.",
      "Built the multi-step persona pipeline: transcript processing, AI-generated stress-test questions, retrieval indexing, voice configuration and activation.",
      "Containerized and deployed the AI services with health monitoring, structured logging and auto-recovery.",
    ],
    system: [
      { tier: "Client", nodes: ["Next.js 15 app", "Admin workflows"] },
      { tier: "Platform", nodes: ["Supabase auth", "PostgreSQL", "Stripe billing + token quota"] },
      { tier: "AI service", nodes: ["FastAPI RAG microservice", "Persona pipeline", "Docker on Railway"] },
      { tier: "Retrieval + generation", nodes: ["SentenceTransformers", "Qdrant, cosine + MMR", "Google Gemini"] },
      { tier: "Voice", nodes: ["Speech-to-text", "ElevenLabs TTS", "AES-256-GCM audio cache"] },
    ],
    systemNote: "Observability: Sentry and PostHog. Stripe webhooks drive subscription state.",
    challenges: [
      {
        title: "Grounding without losing personality",
        body: "Persona-aware prompts on top of MMR re-ranked retrieval kept answers in the person's own material while still sounding like them. Hallucinations fell 70% compared to general-purpose responses.",
      },
      {
        title: "Voice that answers quickly and cheaply",
        body: "Encrypted audio caching (AES-256-GCM) means repeated audio is not synthesized twice. Voice response latency dropped 65% and TTS infrastructure cost dropped 45%.",
      },
      {
        title: "Throughput on modest instances",
        body: "Retrieval runs under 120ms, time-to-first-token improved 40%, and one instance serves 150+ concurrent requests.",
      },
      {
        title: "Shipping lighter containers",
        body: "The AI service image went from 8.2 GB to 3.7 GB, deployed on Railway with health monitoring, structured logging and auto-recovery.",
      },
    ],
    results: [
      "20+ active users across 5+ client families, 60+ live personas",
      "$7K+ ARR across 4 subscription tiers with automated webhook processing",
      "Persona QA and onboarding cut from 6 hours to under 90 minutes",
    ],
  },
  {
    slug: "outersuite",
    name: "Outersuite",
    kind: "Construction proposals and cost estimation",
    context: "Softpers, Forward Deployed Engineer",
    url: "https://outersuite.vercel.app/",
    image: "/work/outersuite.png",
    summary:
      "A full-stack SaaS for commercial exterior-services work: aerial measurement, takeoffs, cost estimation, bids and subcontractor RFIs in one place.",
    metrics: [
      { value: "7", label: "external systems integrated" },
      { value: "4", label: "production Claude features" },
      { value: "$0", label: "per-use cost for building tracing" },
    ],
    stack: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Leaflet", "OpenLayers", "TanStack Query", "Zustand", "Claude"],
    problem:
      "One bid touches Salesforce, aerial imagery, property measurements, cost data and subcontractor RFIs, and building tracing depended on a paid Nearmap AI add-on.",
    solution:
      "One workflow from opportunity to bid: properties come in from Salesforce, buildings are traced on the map, quantities flow into a deterministic cost engine, and Claude handles the document-heavy steps.",
    contribution: [
      "Built the platform across a TypeScript and React frontend and a FastAPI and PostgreSQL backend.",
      "Integrated Salesforce, Nearmap, Monday, Google Drive, RSMeans and OpenStreetMap among 7 external systems.",
      "Built the geospatial pipeline and the interactive takeoff tools on top of it.",
      "Shipped 4 Claude-powered features and added Sentry monitoring.",
    ],
    system: [
      { tier: "Client", nodes: ["React + TypeScript", "Leaflet + OpenLayers takeoffs", "TanStack Query + Zustand"] },
      { tier: "API", nodes: ["FastAPI", "Decimal cost engine", "PostgreSQL"] },
      { tier: "Geospatial", nodes: ["OSM building footprints", "USGS 3DEP LiDAR", "Tracing + height extraction"] },
      { tier: "AI", nodes: ["Claude SSE assistant", "PDF-to-JSON parser", "Bid summaries", "Batched cost classification"] },
      { tier: "Integrations", nodes: ["Salesforce", "Nearmap", "Monday", "Google Drive", "RSMeans"] },
    ],
    systemNote: "Error monitoring: Sentry.",
    challenges: [
      {
        title: "Replacing a paid AI dependency",
        body: "Building outlines and heights came from Nearmap AI at a cost per use. OSM footprints plus USGS 3DEP LiDAR gave automated tracing and height extraction at zero cost.",
      },
      {
        title: "Money that always adds up",
        body: "The cost engine uses Decimal arithmetic and reconciles labor, fees, freight, markup and tax, so a bid total matches its line items every time.",
      },
      {
        title: "AI where documents are messy",
        body: "Claude parses supplier PDFs into JSON, summarizes bids, classifies costs in batches, and powers an assistant that streams over SSE.",
      },
    ],
    results: [
      "7 external systems connected into one estimating workflow",
      "Paid building-tracing dependency replaced with a zero-cost pipeline",
      "4 Claude features running in production with Sentry monitoring",
    ],
  },
  {
    slug: "voyajur",
    name: "Voyajur",
    kind: "Vacation rental and property management",
    context: "Softpers, Forward Deployed Engineer",
    url: "https://voyajur.com/",
    image: "/work/voyajur.png",
    summary:
      "A booking and property management platform. I architected the reservation domain, payments and the channel-manager integrations.",
    metrics: [
      { value: "4", label: "channel managers synced" },
      { value: "Stripe", label: "payments, refunds, reconciliation" },
    ],
    stack: ["Next.js", "Express", "GraphQL", "PostgreSQL", "Prisma", "Redis", "Stripe"],
    problem:
      "Hosts list the same property on several channels. Bookings, payments and messages have to stay consistent across all of them.",
    solution:
      "A reservation domain that owns bookings, payments, messaging, reviews and PMS integrations, with Redis-backed queues keeping external channels in sync.",
    contribution: [
      "Architected the platform on Next.js, Express, GraphQL, PostgreSQL and Prisma.",
      "Designed the reservation domain covering bookings, payments, messaging, reviews and operations.",
      "Implemented JWT authentication, RBAC and real-time authorization.",
      "Built Stripe payments with webhooks, refunds and reconciliation.",
    ],
    system: [
      { tier: "Client", nodes: ["Next.js guest + host app"] },
      { tier: "API", nodes: ["GraphQL on Express", "JWT auth + RBAC"] },
      { tier: "Reservation domain", nodes: ["Bookings", "Payments", "Messaging", "Reviews", "Operations"] },
      { tier: "Data + async", nodes: ["PostgreSQL + Prisma", "Redis queues", "Real-time communication"] },
      { tier: "External", nodes: ["Stripe: webhooks, refunds", "Smily", "Guesty", "Hostaway", "iCal"] },
    ],
    challenges: [
      {
        title: "Keeping channels consistent",
        body: "Integrations with Smily, Guesty, Hostaway and iCal run through Redis-backed queues alongside real-time communication.",
      },
      {
        title: "Payments you can audit",
        body: "Stripe payment processing with webhooks, refunds and reconciliation, inside the same reservation domain as bookings.",
      },
    ],
    results: [
      "Bookings, payments, messaging and reviews unified in one domain",
      "Integrations with Smily, Guesty, Hostaway and iCal",
    ],
  },
  {
    slug: "vynsite",
    name: "Vynsite",
    kind: "Automotive dealership SaaS",
    context: "Softpers, Forward Deployed Engineer",
    url: "https://vynsite.com/",
    image: "/work/vynsite.png",
    summary:
      "A multi-tenant platform for dealership operations, loyalty, referrals, inventory and leads, with AI-driven customer insights.",
    metrics: [
      { value: "Multi-tenant", label: "RBAC, 2FA, audit logging" },
      { value: "OpenAI", label: "insights and recommendations" },
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "OpenAI API"],
    problem:
      "Dealerships share one platform but must never see each other's customers, and every sensitive action needs a trail.",
    solution:
      "A domain-driven NestJS backend with tenant isolation, role-based access, two-factor auth and audit logging, plus integrations for inventory, VIN decoding, fuel economy and geolocation.",
    contribution: [
      "Architected the multi-tenant backend on NestJS, TypeScript, PostgreSQL and Prisma.",
      "Designed RBAC, 2FA, audit logging and secure multi-tenant access controls.",
      "Built AI customer insights and vehicle recommendations with the OpenAI API.",
      "Integrated inventory, VIN decoding, fuel economy and geolocation providers.",
    ],
    system: [
      { tier: "Client", nodes: ["Dealership portal"] },
      { tier: "API", nodes: ["NestJS, domain-driven", "RBAC + 2FA", "Audit logging", "Tenant isolation"] },
      { tier: "Modules", nodes: ["Dealership operations", "Loyalty", "Referrals", "Inventory", "Leads"] },
      { tier: "Data + AI", nodes: ["PostgreSQL + Prisma", "OpenAI insights + recommendations"] },
      { tier: "Providers", nodes: ["Inventory", "VIN decoding", "Fuel economy", "Geolocation"] },
    ],
    challenges: [
      {
        title: "Isolation by default",
        body: "A domain-driven design with RBAC, 2FA, audit logging and secure multi-tenant access controls across dealership operations, loyalty, referrals, inventory and leads.",
      },
    ],
    results: [
      "Dealership operations, loyalty, referrals, inventory and leads on one backend",
      "AI customer insights and vehicle recommendations with the OpenAI API",
    ],
  },
];

// Smaller builds. Facts are limited to the resume, so these case studies are shorter on purpose.
export const moreProjects: Project[] = [
  {
    slug: "hilo-atos",
    name: "Hilo ATOS",
    kind: "Aviation training and operations platform",
    context: "Softpers, Forward Deployed Engineer",
    summary:
      "A multi-tenant platform for aviation training and operations, with Claude-assisted scheduling and documents.",
    metrics: [
      { value: "Multi-tenant", label: "training and operations" },
      { value: "Claude", label: "scheduling and document assistance" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe Connect", "AWS S3", "SendGrid", "Google Calendar", "Claude"],
    problem:
      "Training operations span scheduling, payments, documents, email and FAA data, for several organizations on one platform, in whichever hosting environment they run.",
    solution:
      "A multi-tenant Next.js and PostgreSQL platform with a portable backend, integrations for payments, storage, email, calendars and FAA data, and Claude for scheduling and document assistance.",
    contribution: [
      "Architected the multi-tenant platform on Next.js, TypeScript and PostgreSQL.",
      "Built a portable backend that runs in both serverless and traditional environments.",
      "Integrated Stripe Connect, AWS S3, SendGrid, Google Calendar and FAA data sources.",
      "Delivered AI-powered scheduling and document assistance with Anthropic Claude.",
    ],
    system: [
      { tier: "Client", nodes: ["Next.js + TypeScript", "Multi-tenant"] },
      { tier: "Backend", nodes: ["Portable backend", "Serverless or traditional"] },
      { tier: "Data + AI", nodes: ["PostgreSQL", "Claude: scheduling + documents"] },
      { tier: "Integrations", nodes: ["Stripe Connect", "AWS S3", "SendGrid", "Google Calendar", "FAA data"] },
    ],
    challenges: [
      {
        title: "One backend, two hosting models",
        body: "The backend is portable: the same code runs in serverless and traditional environments.",
      },
    ],
    results: [
      "Payments, storage, email, calendars and FAA data integrated into one platform",
      "AI scheduling and document assistance with Anthropic Claude",
    ],
  },
  {
    slug: "wordley",
    name: "Wordley.ai",
    kind: "AI NLP analyzer",
    context: "Personal project",
    url: "https://wordleyai.netlify.app/",
    image: "/work/wordley.png",
    summary: "NLP analyzer for sentiment, tone, emotion, summaries and entities. 120+ users in its first month.",
    metrics: [{ value: "120+", label: "users in the first month" }],
    stack: ["React", "FastAPI", "Hugging Face", "Open-source LLMs"],
    problem:
      "Sentiment, tone, emotion, a summary and named entities are five separate analyses. Running them one by one is slow.",
    solution:
      "One React interface over a FastAPI backend that runs Hugging Face and open-source models for all five.",
    contribution: [
      "Built the React frontend and the FastAPI backend.",
      "Wired Hugging Face and open-source LLMs for sentiment, tone, emotion, summarization and entity extraction.",
    ],
    system: [
      { tier: "Client", nodes: ["React app"] },
      { tier: "API", nodes: ["FastAPI"] },
      { tier: "Models", nodes: ["Hugging Face", "Open-source LLMs"] },
      { tier: "Output", nodes: ["Sentiment", "Tone", "Emotion", "Summary", "Entities"] },
    ],
    challenges: [],
    results: ["120+ users in the first month"],
  },
  {
    slug: "recaller",
    name: "Recaller",
    kind: "AI knowledge base",
    context: "Personal project",
    url: "https://recallerai.netlify.app/",
    image: "/work/recaller.png",
    summary: "AI knowledge base with contextual Q&A and summaries over uploaded documents.",
    metrics: [],
    stack: ["React", "Flask", "Vector embeddings", "Similarity search", "DeepSeek"],
    problem: "Answers buried in uploaded documents are slow to find by reading.",
    solution:
      "Documents are embedded as vectors. A question retrieves the most similar passages, and DeepSeek answers or summarizes from them.",
    contribution: [
      "Built the React frontend and the Flask backend.",
      "Implemented vector embeddings and similarity search over uploaded documents.",
      "Used DeepSeek for contextual Q&A and summarization.",
    ],
    system: [
      { tier: "Client", nodes: ["React app", "Document upload"] },
      { tier: "API", nodes: ["Flask"] },
      { tier: "Retrieval", nodes: ["Vector embeddings", "Similarity search"] },
      { tier: "Generation", nodes: ["DeepSeek"] },
      { tier: "Output", nodes: ["Contextual Q&A", "Summaries"] },
    ],
    challenges: [],
    results: ["Contextual Q&A and summarization over uploaded documents"],
  },
  {
    slug: "safelinks",
    name: "Safelinks",
    kind: "Temporary-link microservice",
    context: "Personal project",
    url: "https://safelinks.netlify.app/",
    image: "/work/safelinks.png",
    summary: "Temporary-link microservice with token-based access and automatic expiry.",
    metrics: [],
    stack: ["Node.js", "Express", "Redis", "Firestore", "Docker", "Cloud Run"],
    problem: "A shared link should only work for people holding its token, and should stop working on its own.",
    solution:
      "An Express service issues token-protected links that expire automatically, backed by Redis and Firestore and deployed on Google Cloud Run.",
    contribution: [
      "Built the Node.js and Express service.",
      "Implemented token-based access and automatic expiration.",
      "Containerized it with Docker and deployed it on Google Cloud Run.",
    ],
    system: [
      { tier: "Client", nodes: ["Web app"] },
      { tier: "Service", nodes: ["Node.js + Express", "Token-based access", "Automatic expiry"] },
      { tier: "Data", nodes: ["Redis", "Firestore"] },
      { tier: "Runtime", nodes: ["Docker", "Google Cloud Run"] },
    ],
    challenges: [],
    results: ["Secure temporary links with automatic expiration, live on Google Cloud Run"],
  },
  {
    slug: "respoon",
    name: "Respoon",
    kind: "Community food-sharing platform",
    context: "Personal project",
    url: "https://respoon.netlify.app/",
    image: "/work/respoon.png",
    summary: "Food-sharing platform with location-based discovery and real-time chat.",
    metrics: [],
    stack: ["React", "Flask", "PostgreSQL", "Socket.IO"],
    problem: "Food that someone wants to share is only useful to people nearby who hear about it in time.",
    solution:
      "Geolocation-based discovery shows what is shared nearby, and real-time chat over Socket.IO connects the people involved.",
    contribution: [
      "Built the React frontend and the Flask and PostgreSQL backend.",
      "Implemented geolocation-based discovery with filtering and pagination.",
      "Built real-time chat with Socket.IO.",
    ],
    system: [
      { tier: "Client", nodes: ["React app", "Geolocation discovery", "Filters + pagination"] },
      { tier: "API", nodes: ["Flask API", "Socket.IO chat"] },
      { tier: "Data", nodes: ["PostgreSQL"] },
    ],
    challenges: [],
    results: ["Geolocation discovery, real-time chat, filtering and pagination"],
  },
];

export const allProjects = [...projects, ...moreProjects];

export const capabilities = [
  {
    name: "AI engineering",
    thesis: "Retrieval first, generation second. A model answers from your data or it does not answer.",
    proof: "RAG with chunking, embeddings, MMR re-ranking and persona-aware prompts. Claude, Gemini and OpenAI features in production, streamed over SSE.",
    tools: ["Qdrant", "SentenceTransformers", "Claude", "Gemini", "OpenAI"],
  },
  {
    name: "Backend and systems",
    thesis: "Push slow work to queues, keep money in Decimal, and let webhooks drive state.",
    proof: "FastAPI, NestJS and Express services. Redis queues, Pub/Sub pipelines, webhooks, RBAC, 2FA and multi-tenant isolation.",
    tools: ["FastAPI", "NestJS", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    name: "Product engineering",
    thesis: "Own the whole path from schema to billing, because that is where products break.",
    proof: "Shipped auth, admin, Stripe subscriptions and metered quotas, and 7-system integrations for startups.",
    tools: ["Next.js", "Supabase", "Stripe", "Salesforce"],
  },
  {
    name: "Frontend",
    thesis: "Interfaces for real work: maps, takeoffs, streaming chat and voice.",
    proof: "Interactive geospatial takeoffs on Leaflet and OpenLayers, streaming assistants, real-time apps.",
    tools: ["React", "TypeScript", "TanStack Query", "Zustand"],
  },
  {
    name: "Cloud and infrastructure",
    thesis: "Small images, structured logs, health checks. Production should tell you what is wrong.",
    proof: "Docker on Railway and Cloud Run, GCP Cloud Functions and Pub/Sub, Sentry and PostHog.",
    tools: ["Docker", "GCP", "Railway", "Vercel", "Sentry"],
  },
] as const;

export const experience = [
  {
    company: "Softpers",
    url: "https://softpers.com/",
    logo: "/logos/softpers.svg",
    role: "Software Engineer, Forward Deployed Engineer",
    period: "Sep 2025 - Present",
    type: "Full-time",
    summary:
      "Embedded with client teams to architect and ship SaaS platforms: Outersuite, Vynsite, Voyajur and Hilo ATOS.",
    impact: [
      "Replaced a paid Nearmap AI dependency with a zero-cost OSM and LiDAR pipeline",
      "4 Claude features in production on Outersuite",
      "Stripe Connect, AWS S3, SendGrid, Google Calendar and FAA data on Hilo ATOS",
    ],
  },
  {
    company: "Folklore",
    url: "https://folklore.la/",
    logo: "/logos/folklore.png",
    role: "Founding Software Engineer",
    period: "Oct 2025 - May 2026",
    type: "Contract",
    summary: "Built the AI persona platform as its founding engineer: app, RAG service, voice and billing.",
    impact: [
      "−65% voice latency and −45% TTS cost",
      "Docker image cut from 8.2 GB to 3.7 GB",
      "Persona onboarding from 6 hours to under 90 minutes",
    ],
  },
  {
    company: "Arrivy",
    url: "https://www.arrivy.com/",
    logo: "/logos/arrivy.png",
    role: "Software Development Engineer I",
    period: "Feb 2025 - Aug 2025",
    type: "Full-time",
    summary:
      "Python and Node microservices for a field-service platform, plus Cloud Functions and Pub/Sub pipelines for real-time crew attendance.",
    impact: [
      "−60% user-facing latency on PDF processing with Redis queues and caching",
      "−80% PDF size with a Puppeteer and Ghostscript pipeline",
      "HubSpot, Workday and Easybook integrations",
    ],
  },
  {
    company: "Educative",
    url: "https://www.educative.io/",
    logo: "/logos/educative.png",
    role: "Technical Content Engineer",
    period: "Jul 2023 - Jan 2025",
    type: "Full-time",
    summary:
      "React and Node.js courses and projects, AI mock interviewers, and LLM mentorship inside coding widgets.",
    impact: [
      "Docker browser environments for thousands of concurrent learners",
      "+25% engagement from GenAI mentorship in coding widgets",
    ],
  },
] as const;
