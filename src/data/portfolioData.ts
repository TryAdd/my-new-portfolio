export interface Project {
  id: string;
  title: string;
  year: string;
  type: string;
  category: "Mobile" | "Web & System" | "Design & UI";
  summary: string;
  description: string;
  featuredImage: string;
  technologies: string[];
  role: string;
  timeline: string;
  platform: string;
  metrics?: { label: string; value: string }[];
  highlights?: string[];
  links?: { label: string; url: string; icon?: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  iconName: string;
  skills: {
    name: string;
    level: "Core Expert" | "Production" | "Advanced";
    highlight?: boolean;
    years?: string;
    description?: string;
  }[];
}

export interface DesignLabItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  previewUrl: string;
  aspectRatio?: string;
  tags: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    role: string;
    secondaryRole: string;
    location: string;
    country: string;
    timezone: string;
    currentStatus: string;
    statusType: "available" | "busy" | "selective";
    copyrightYear: string;
    shortBio: string;
    editorialQuote: string;
    aboutBioParagraphs: string[];
    specializations: string[];
    interests: string[];
    avatarImage: string;
    contactEmail: string;
    phone?: string;
    socials: {
      platform: string;
      handle: string;
      url: string;
      icon: string;
    }[];
  };
  folders: {
    id: string;
    number: string;
    name: string;
    sublabel: string;
    fileType: string;
    itemCount: string;
    updated: string;
    accentColor: string;
    description: string;
  }[];
  projects: Project[];
  experiences: Experience[];
  skills: SkillCategory[];
  designLab: DesignLabItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ahmed Hisham",
    monogram: "AH",
    role: "Mobile Developer & Designer",
    secondaryRole: "Creative Technologist & UI Engineer",
    location: "Manama, Bahrain",
    country: "Bahrain",
    timezone: "Asia/Bahrain",
    currentStatus: "Available for Q3/Q4 2026 Projects",
    statusType: "available",
    copyrightYear: "©2026",
    shortBio: "Creative developer building digital experiences, visual systems, and playful ideas for the real world.",
    editorialQuote: "Bridging the tactile intuition of physical design with the precision of mobile architecture and interactive engineering.",
    aboutBioParagraphs: [
      "I am Ahmed Hisham, a Mobile Developer and Designer based in the Kingdom of Bahrain. I specialize in building fluid, native-feeling mobile applications, multi-platform design systems, and responsive digital products.",
      "With a cross-disciplinary background spanning iOS/Android engineering, interactive design, and product strategy, I approach development as an editorial craft — where micro-interactions, layout physics, and seamless performance define the user experience.",
      "Over the past 5+ years, I have architected high-performance mobile apps across fintech, healthtech, and spatial productivity, collaborating with ambitious startups and global teams to transform complex workflows into effortless interfaces."
    ],
    specializations: [
      "Cross-Platform & Native Mobile Architecture (Flutter, React Native)",
      "Design Systems & Token Architecture (Figma, Tailwind, Stitches)",
      "Micro-interactions & Physics-based Animation (Framer Motion, Reanimated)",
      "Full-stack Edge Integrations (Supabase, PostgreSQL, Firebase)",
      "High-fidelity Prototyping & Spatial UI Design"
    ],
    interests: [
      "Tactile Digital Objects & Skeuomorphic Nostalgia",
      "Typography & Editorial Grid Systems",
      "Generative Shaders & Canvas Experiments",
      "Audio-visual Micro-interactions",
      "Specialty Coffee & Industrial Design"
    ],
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    contactEmail: "ahmed.hisham.dev@gmail.com",
    phone: "+973 3900 0000",
    socials: [
      {
        platform: "GitHub",
        handle: "github.com/ahmedhisham",
        url: "https://github.com",
        icon: "Github"
      },
      {
        platform: "LinkedIn",
        handle: "linkedin.com/in/ahmed-hisham",
        url: "https://linkedin.com",
        icon: "Linkedin"
      },
      {
        platform: "X / Twitter",
        handle: "@ahmedhisham_dev",
        url: "https://twitter.com",
        icon: "Twitter"
      },
      {
        platform: "Dribbble",
        handle: "dribbble.com/ahmedhisham",
        url: "https://dribbble.com",
        icon: "Dribbble"
      },
      {
        platform: "Figma",
        handle: "@ahmedhisham",
        url: "https://figma.com",
        icon: "Figma"
      }
    ]
  },

  folders: [
    {
      id: "about",
      number: "01",
      name: "ABOUT ME",
      sublabel: "IDENTITY & DOSSIER",
      fileType: "Document Archive",
      itemCount: "4 Sections",
      updated: "2026",
      accentColor: "rgba(168, 85, 247, 0.4)",
      description: "Personal statement, background, philosophy, and creative direction."
    },
    {
      id: "projects",
      number: "02",
      name: "PROJECTS",
      sublabel: "SELECTED WORKS",
      fileType: "Directory / Apps",
      itemCount: "6 Case Studies",
      updated: "2026",
      accentColor: "rgba(129, 140, 248, 0.4)",
      description: "Interactive mobile applications, design systems, and digital products."
    },
    {
      id: "experience",
      number: "03",
      name: "EXPERIENCE",
      sublabel: "CAREER TIMELINE",
      fileType: "Work Logs",
      itemCount: "4 Roles",
      updated: "2026",
      accentColor: "rgba(192, 132, 252, 0.4)",
      description: "Chronological engineering records, leadership impact, and achievements."
    },
    {
      id: "skills",
      number: "04",
      name: "SKILLS",
      sublabel: "TECH STACK & TOOLS",
      fileType: "System Manifest",
      itemCount: "24 Technologies",
      updated: "2026",
      accentColor: "rgba(147, 51, 234, 0.4)",
      description: "Engineering proficiencies, frameworks, design toolchains, and infrastructure."
    },
    {
      id: "design-lab",
      number: "05",
      name: "DESIGN & LAB",
      sublabel: "EXPERIMENTS & ARTIFACTS",
      fileType: "Visual Gallery",
      itemCount: "6 Explorations",
      updated: "2026",
      accentColor: "rgba(168, 85, 247, 0.35)",
      description: "Visual systems, spatial prototypes, micro-interactions, and design studies."
    },
    {
      id: "contact",
      number: "06",
      name: "CONTACT",
      sublabel: "INITIATE SESSION",
      fileType: "Encrypted Comms",
      itemCount: "Direct Channels",
      updated: "2026",
      accentColor: "rgba(216, 180, 254, 0.4)",
      description: "Direct email inquiry, messaging channels, social networks, and timezone."
    }
  ],

  projects: [
    {
      id: "portfolio-os",
      title: "Portfolio OS",
      year: "2026",
      type: "Interactive File System Portfolio",
      category: "Web & System",
      summary: "A tactile desktop archive that reimagines personal websites through physical folder physics, spring animations, and frosted glass editorial art direction.",
      description: "Portfolio OS turns web navigation into an engaging physical-digital desktop workstation. Built with Next.js, Framer Motion, and Tailwind CSS, it features organic stacked folders, contextual cursors, live timezone telemetry from Bahrain, and zero-latency layout transitions.",
      featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
      role: "Lead Designer & Frontend Architect",
      timeline: "3 Weeks / 2026",
      platform: "Web & Mobile Adaptive",
      metrics: [
        { label: "Lighthouse Score", value: "99/100" },
        { label: "Frame Rate", value: "60 FPS Springs" },
        { label: "Interaction Latency", value: "<16ms" }
      ],
      highlights: [
        "Spring-physics folder stacking engine with dynamic z-index management and layoutId expansion.",
        "Synthesized Web Audio API sound feedback for tactile paper slide and click responses.",
        "Dynamic custom cursor with context-aware labels (OPEN, VIEW, CLOSE).",
        "Clean headless TypeScript data layer for instant portfolio customization."
      ],
      links: [
        { label: "Source Code", url: "https://github.com", icon: "Github" },
        { label: "Live Deployment", url: "#", icon: "ExternalLink" }
      ]
    },
    {
      id: "aura-health",
      title: "Aura Health AI",
      year: "2025",
      type: "Mobile Health Companion",
      category: "Mobile",
      summary: "Next-generation biometric telemetry and AI health companion app with fluid Apple HealthKit & Google Fit integration.",
      description: "Aura Health provides personalized daily biometric insight dashboards, sleep rhythm optimization, and AI-driven recovery scoring. Built with Flutter and Supabase, it processes over 20+ sensory data points into elegant dark-mode circular visualizations.",
      featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Flutter", "Dart", "Supabase", "HealthKit", "Figma", "Riverpod"],
      role: "Lead Mobile Developer",
      timeline: "5 Months / 2025",
      platform: "iOS & Android",
      metrics: [
        { label: "Active Users", value: "45,000+" },
        { label: "App Store Rating", value: "4.9 ★" },
        { label: "Sync Latency", value: "0.2s" }
      ],
      highlights: [
        "Constructed custom GPU-accelerated canvas charts for real-time heart rate variability (HRV) rendering.",
        "Integrated on-device biometrics and secure local storage with AES-256 encryption.",
        "Built seamless dark/light theme switching with custom OLED pitch-black colorways.",
        "Architected offline-first local cache synchronization using SQLite and Supabase Realtime."
      ],
      links: [
        { label: "App Store", url: "https://apple.com", icon: "Smartphone" },
        { label: "Case Study", url: "#", icon: "FileText" }
      ]
    },
    {
      id: "kinetix-mobility",
      title: "Kinetix Mobility",
      year: "2025",
      type: "On-Demand Transit & Fleet App",
      category: "Mobile",
      summary: "Modern ride-hailing and micro-mobility booking app with real-time vector map rendering and zero-latency driver tracking.",
      description: "Kinetix redefines urban commuting in the GCC with multi-modal transport dispatching (e-scooters, electric taxis, metro tickets). Featuring React Native, Mapbox GL, and WebSockets, the app delivers ultra-smooth 60fps route previews and instant Apple Pay checkout.",
      featuredImage: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React Native", "TypeScript", "Mapbox GL", "WebSockets", "Node.js", "Redux Toolkit"],
      role: "Senior Mobile Engineer",
      timeline: "6 Months / 2025",
      platform: "Cross-Platform iOS & Android",
      metrics: [
        { label: "Daily Rides", value: "18,000+" },
        { label: "Booking Time", value: "3.2 Secs" },
        { label: "Crash-Free Rate", value: "99.94%" }
      ],
      highlights: [
        "Implemented custom Mapbox camera interpolation for cinematic ride tracking.",
        "Designed one-tap biometric payment flow with localized Arabic and English typography.",
        "Reduced initial app launch time by 42% via Hermes engine bytecode optimization."
      ],
      links: [
        { label: "Product Demo", url: "#", icon: "Play" },
        { label: "GitHub Overview", url: "https://github.com", icon: "Github" }
      ]
    },
    {
      id: "zenith-design-system",
      title: "Zenith Design System",
      year: "2024",
      type: "Multi-Platform Component Library",
      category: "Design & UI",
      summary: "An enterprise design system and tokenized component architecture unified across Figma, React Native, and Web.",
      description: "Zenith is an accessible, tokenized UI system used across 4 mobile products and 2 web platforms. It provides 80+ audited accessible components, dark-first color semantics, motion tokens, and automated Storybook documentation.",
      featuredImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Figma", "Design Tokens", "React Native", "Tailwind CSS", "Storybook", "TypeScript"],
      role: "Design Systems Lead",
      timeline: "4 Months / 2024",
      platform: "Universal Design Framework",
      metrics: [
        { label: "Components", value: "84 Atoms & Molecules" },
        { label: "Dev Velocity Boost", value: "+35%" },
        { label: "WCAG Compliance", value: "AAA Level" }
      ],
      highlights: [
        "Engineered automated Figma-to-Code token pipeline exporting to JSON, TypeScript, and CSS variables.",
        "Crafted comprehensive motion guidelines with unified spring presets across Flutter and React.",
        "Authored interactive component documentation and playground in Storybook."
      ],
      links: [
        { label: "Figma Community", url: "https://figma.com", icon: "Figma" },
        { label: "Documentation", url: "#", icon: "FileCode" }
      ]
    },
    {
      id: "oasis-fintech",
      title: "Oasis Pay & Wealth",
      year: "2024",
      type: "Neobank & Investment Mobile App",
      category: "Mobile",
      summary: "High-security digital banking app featuring real-time multi-currency wallets, virtual cards, and automated savings vaults.",
      description: "Oasis Pay brings bespoke private banking aesthetics to consumer fintech. Built with Flutter, Supabase, and custom biometric security layers, users can manage virtual Visa cards, trade GCC indices, and split bills with QR contacts.",
      featuredImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Flutter", "Dart", "Supabase", "Bloc Architecture", "Secure Enclave"],
      role: "Mobile App Architect",
      timeline: "7 Months / 2024",
      platform: "iOS & Android",
      metrics: [
        { label: "Monthly Volume", value: "$4.2M" },
        { label: "Security Audit", value: "Zero Vulnerabilities" },
        { label: "NPS Score", value: "78" }
      ],
      highlights: [
        "Crafted interactive 3D virtual card with gyro tilt response using accelerometer sensory inputs.",
        "Built instant peer-to-peer money transfers with haptic feedback confirmation loops.",
        "Architected strict state management utilizing BLoC and immutable data models."
      ],
      links: [
        { label: "Case Study", url: "#", icon: "ExternalLink" }
      ]
    },
    {
      id: "lumina-spatial",
      title: "Lumina Spatial Notes",
      year: "2023",
      type: "Spatial Productivity & Canvas Workspace",
      category: "Web & System",
      summary: "An infinite 3D spatial canvas for organizing thoughts, moodboards, and engineering schematics in an infinite room.",
      description: "Lumina blends 2D note-taking with 3D spatial positioning. Created using Three.js, React, and Framer Motion, it allows users to pin thoughts onto virtual floating cards, connect nodes with glowing bezier lines, and collaborate in real-time.",
      featuredImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      technologies: ["React", "Three.js", "WebGL", "TypeScript", "Tailwind CSS"],
      role: "Creative Developer & UI Engineer",
      timeline: "3 Months / 2023",
      platform: "Web Desktop Application",
      metrics: [
        { label: "Render Target", value: "10,000 Nodes" },
        { label: "FPS", value: "Solid 60 FPS" }
      ],
      highlights: [
        "Engineered quad-tree spatial indexing for smooth infinite panning and zooming.",
        "Created custom GLSL glow shaders for reactive node connections.",
        "Designed keyboard-first command palette (`Cmd + K`) for instant navigation."
      ],
      links: [
        { label: "Live Prototype", url: "#", icon: "Play" },
        { label: "GitHub", url: "https://github.com", icon: "Github" }
      ]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Senior Mobile Engineer & UI Designer",
      company: "Apex Digital Studios",
      companyUrl: "https://example.com",
      period: "2024 — Present",
      location: "Manama, Bahrain / Hybrid",
      type: "Full-Time Leadership",
      summary: "Directing mobile application architecture and design engineering for high-growth enterprise clients across the GCC.",
      responsibilities: [
        "Lead a cross-functional team of 6 engineers and designers across Flutter, React Native, and Design Systems.",
        "Define mobile performance benchmarks, CI/CD automated release pipelines, and architectural standards.",
        "Partner closely with executive stakeholders and product managers to ideate, prototype, and ship high-impact features."
      ],
      achievements: [
        "Spearheaded the redesign and rewrite of the flagship fintech client app, boosting monthly active users by 64%.",
        "Established company-wide Mobile Design System reducing feature development cycle time by 30%.",
        "Maintained 99.9% crash-free sessions across 100k+ deployed production devices."
      ],
      technologies: ["Flutter", "React Native", "TypeScript", "Supabase", "Figma", "CI/CD Fastlane"]
    },
    {
      id: "exp-2",
      role: "Mobile App Developer & UI/UX Consultant",
      company: "Nexus Labs Interactive",
      companyUrl: "https://example.com",
      period: "2022 — 2024",
      location: "Bahrain & Remote",
      type: "Contract & Consulting",
      summary: "Delivered bespoke mobile products, healthtech telemetry apps, and interactive web tools for international startups.",
      responsibilities: [
        "Architected native and cross-platform client applications from scratch with offline-first caching.",
        "Created high-fidelity Figma prototypes with interactive micro-animations and user testing protocols.",
        "Integrated complex third-party APIs including Stripe, Apple HealthKit, Mapbox, and Firebase Auth."
      ],
      achievements: [
        "Shipped 8 production mobile apps to the Apple App Store and Google Play Store with an average 4.8-star rating.",
        "Developed custom Bluetooth LE communication protocol for connected IoT wellness devices.",
        "Reduced app bundle size by 38% through tree-shaking and dynamic asset loading."
      ],
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "GraphQL", "Figma"]
    },
    {
      id: "exp-3",
      role: "Frontend & Mobile Developer",
      company: "Vanguard Tech Solutions",
      companyUrl: "https://example.com",
      period: "2021 — 2022",
      location: "Bahrain",
      type: "Full-Time",
      summary: "Built modern responsive web applications and cross-platform mobile interfaces for regional enterprise clients.",
      responsibilities: [
        "Developed modular UI components using React, Next.js, and React Native.",
        "Collaborated with backend teams to integrate RESTful endpoints and PostgreSQL databases.",
        "Conducted accessibility audits and improved cross-browser compatibility across mobile browsers."
      ],
      achievements: [
        "Engineered an interactive e-commerce dashboard processing over 5,000 daily orders.",
        "Migrated legacy codebase to TypeScript, reducing production runtime errors by 45%."
      ],
      technologies: ["React", "React Native", "TypeScript", "Tailwind CSS", "REST APIs", "Git"]
    },
    {
      id: "exp-4",
      role: "UI/UX & Creative Tech Intern",
      company: "Creative Matrix Studio",
      companyUrl: "https://example.com",
      period: "2020 — 2021",
      location: "Bahrain",
      type: "Apprenticeship",
      summary: "Studied design systems, user research, wireframing, and interactive web prototyping under senior design directors.",
      responsibilities: [
        "Designed wireframes, user flow diagrams, and interactive web prototypes in Figma.",
        "Coded interactive promotional landing pages and animation experiments using HTML5/CSS3 and JavaScript."
      ],
      achievements: [
        "Won internal studio sprint for best interactive micro-site prototype.",
        "Authored visual guidelines adopted by 3 client brand launches."
      ],
      technologies: ["Figma", "JavaScript", "HTML/CSS", "Wireframing", "User Research"]
    }
  ],

  skills: [
    {
      id: "mobile",
      title: "Mobile & Application Engineering",
      code: "MODULE // 01",
      iconName: "Smartphone",
      skills: [
        { name: "Flutter & Dart", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "State management (BLoC/Riverpod), Custom Painters, Method Channels" },
        { name: "React Native", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "Reanimated 3, TurboModules, Expo, Native Bridging" },
        { name: "iOS / Swift (Interop)", level: "Production", years: "3 Yrs", description: "SwiftUI basics, HealthKit, Push Notifications, App Store Release" },
        { name: "Android / Kotlin (Interop)", level: "Production", years: "3 Yrs", description: "Jetpack Compose basics, Gradle config, Play Console" },
        { name: "Cross-Platform Architecture", level: "Core Expert", highlight: true, years: "5 Yrs", description: "Offline-first sync, SQLite caching, Clean Architecture" },
        { name: "Mobile Security & Biometrics", level: "Production", years: "3 Yrs", description: "Keychain/Keystore, Enclave token auth, Biometric prompt" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Architecture & Motion",
      code: "MODULE // 02",
      iconName: "Code2",
      skills: [
        { name: "React & Next.js (App Router)", level: "Core Expert", highlight: true, years: "5 Yrs", description: "Server Components, Server Actions, Edge runtime" },
        { name: "TypeScript", level: "Core Expert", highlight: true, years: "5 Yrs", description: "Strict type safety, Generics, Token types" },
        { name: "Framer Motion", level: "Core Expert", highlight: true, years: "4 Yrs", description: "Physics-based spring curves, layoutId morphs, gestures" },
        { name: "Tailwind CSS", level: "Core Expert", years: "4 Yrs", description: "Arbitrary values, custom plugin architecture, dark mode" },
        { name: "Web Audio & Canvas API", level: "Production", years: "2 Yrs", description: "Synthesized audio feedback, 2D particle simulation" },
        { name: "Performance & CWV", level: "Core Expert", years: "4 Yrs", description: "LCP/INP optimization, 60fps animations, asset pipelining" }
      ]
    },
    {
      id: "backend",
      title: "Backend, Database & Cloud",
      code: "MODULE // 03",
      iconName: "Database",
      skills: [
        { name: "Supabase & PostgreSQL", level: "Core Expert", highlight: true, years: "3 Yrs", description: "Row Level Security (RLS), Realtime subscriptions, Edge Functions" },
        { name: "Node.js & Express", level: "Production", years: "4 Yrs", description: "RESTful services, JWT auth, WebSockets" },
        { name: "Firebase Suite", level: "Production", years: "4 Yrs", description: "Firestore, Cloud Messaging (FCM), Auth, Cloud Functions" },
        { name: "GraphQL & REST APIs", level: "Core Expert", years: "5 Yrs", description: "Schema design, caching strategies, optimistic mutations" },
        { name: "SQL & Relational Schema", level: "Production", years: "4 Yrs", description: "Indexing, foreign keys, migrations, query tuning" },
        { name: "Docker & Container Basics", level: "Advanced", years: "2 Yrs", description: "Local development containers, compose orchestration" }
      ]
    },
    {
      id: "design",
      title: "Design Systems & Creative Tools",
      code: "MODULE // 04",
      iconName: "Palette",
      skills: [
        { name: "Figma (Advanced Auto-Layout & Variables)", level: "Core Expert", highlight: true, years: "5 Yrs", description: "Component variants, multi-mode variables, prototyping" },
        { name: "Design Token Architecture", level: "Core Expert", highlight: true, years: "3 Yrs", description: "Semantic color schemes, typography scales, token sync" },
        { name: "UI/UX & User Flows", level: "Core Expert", years: "5 Yrs", description: "Wireframing, information architecture, usability testing" },
        { name: "Adobe Creative Cloud", level: "Production", years: "5 Yrs", description: "Photoshop, Illustrator, After Effects asset creation" },
        { name: "Micro-interactions & Haptics", level: "Core Expert", years: "4 Yrs", description: "Tactile haptic triggers, physical ease curves" },
        { name: "Editorial Typography & Grids", level: "Core Expert", years: "4 Yrs", description: "Swiss grids, serif hierarchy, responsive text systems" }
      ]
    }
  ],

  designLab: [
    {
      id: "lab-1",
      title: "Spatial Dynamic HUD",
      category: "VisionOS / Spatial UI",
      year: "2026",
      description: "Glassmorphism spatial control center with responsive depth layers and dynamic lighting cues.",
      previewUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      tags: ["Spatial UI", "Glassmorphism", "VisionOS"]
    },
    {
      id: "lab-2",
      title: "Tactile Audio Equalizer",
      category: "Audio-Visual Interface",
      year: "2025",
      description: "Analog-inspired rotary dials, vu-meters, and real-time frequency spectrum visualizer.",
      previewUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      tags: ["Web Audio", "Skeuomorphism", "Canvas"]
    },
    {
      id: "lab-3",
      title: "Neobank Card Micro-Interactions",
      category: "Mobile UI Physics",
      year: "2025",
      description: "Fluid gyroscope-tilt responsive metallic credit card with holographic sheen reflections.",
      previewUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      tags: ["Mobile Physics", "Hologram", "3D Tilt"]
    },
    {
      id: "lab-4",
      title: "Monochrome Editorial Magazine Grid",
      category: "Typography System",
      year: "2024",
      description: "Editorial layout with high-contrast serif headlines, asymmetric column offsets, and fine hairline borders.",
      previewUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      tags: ["Editorial", "Typography", "Grid Systems"]
    },
    {
      id: "lab-5",
      title: "Generative Perlin Flow Field",
      category: "Creative Coding",
      year: "2024",
      description: "Interactive particle swarm calculating vector angles across mathematical vector fields.",
      previewUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["WebGL", "Particles", "Generative"]
    },
    {
      id: "lab-6",
      title: "Terminal Command Palette OS",
      category: "System Utility UI",
      year: "2024",
      description: "Keyboard-driven interactive command launcher with fuzzy query filtering and quick actions.",
      previewUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      tags: ["CLI / OS", "Keyboard First", "Command Palette"]
    }
  ]
};
