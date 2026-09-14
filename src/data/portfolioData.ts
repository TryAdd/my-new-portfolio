export interface Project {
  id: string;
  title: string;
  year: string;
  type: string;
  category: "Enterprise ERP & HR" | "Real Estate & Billing" | "Supply Chain & ERP" | "InsurTech" | "FinTech & Wealth" | "Enterprise Asset Ops" | "Backend & Full-Stack";
  summary: string;
  description: string;
  featuredImage: string;
  technologies: string[];
  role: string;
  timeline: string;
  platform: string;
  metrics?: { label: string; value: string }[];
  highlights?: string[];
  endpoints?: string[];
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

export interface Certification {
  title: string;
  issuer: string;
  category: string;
}

export interface EducationItem {
  program: string;
  institution: string;
  date: string;
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
    keyAchievements: string[];
    specializations: string[];
    interests: string[];
    avatarImage: string;
    contactEmail: string;
    phone: string;
    certifications: Certification[];
    education: EducationItem[];
    community: string[];
    reference: {
      name: string;
      title: string;
      company: string;
      phone: string;
    };
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
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ahmed Hisham",
    monogram: "AH",
    role: "Software Integration Engineer • Middleware & API Developer",
    secondaryRole: "Enterprise Systems Specialist",
    location: "Kingdom of Bahrain",
    country: "Bahrain",
    timezone: "Asia/Bahrain",
    currentStatus: "Software Integration & Applications Developer @ Global ITS Group",
    statusType: "available",
    copyrightYear: "©2026",
    shortBio: "Software Integration and Middleware Engineer with 5+ years of hands-on experience architecting resilient enterprise APIs, data synchronizers, and distributed middleware layers.",
    editorialQuote: "Specialized in Microsoft Dynamics 365 (D365) REST integrations, custom ETL pipelines, message orchestration, and offline-to-online bi-directional synchronization engines using ObjectBox, Node.js, and Firebase.",
    aboutBioParagraphs: [
      "I am a Software Integration and Middleware Engineer with 5+ years of hands-on experience architecting resilient enterprise APIs, data synchronizers, and distributed middleware layers. I have a proven track record bridging front-facing platforms with enterprise ERP cores, specialized in Microsoft Dynamics 365 (D365) REST integrations, custom ETL pipelines, message orchestration, and offline-to-online bi-directional synchronization engines using ObjectBox, Node.js, and Firebase.",
      "Adept in implementing high-throughput RESTful services, secure token-based authentication (OAuth2/JWT), third-party financial and payment gateway webhooks, and automated data transformation pipelines across HR, Property Management, Insurance, FinTech, and Field Logistics domains.",
      "Currently engineering mission-critical middleware layers and integration pipelines at Global ITS Group, interfacing client software with enterprise Microsoft Dynamics 365 environments and automating data flows with Power Automate."
    ],
    keyAchievements: [
      "Architected and implemented enterprise middleware and API integration pipelines connecting client solutions to Microsoft Dynamics 365 (D365) ERP backends across the GCC.",
      "Engineered custom offline synchronization engines and bi-directional replication middleware using ObjectBox and Firebase, guaranteeing data integrity, conflict resolution, and zero data loss.",
      "Integrated external third-party services including payment gateways, geocoding/mapping engines, biometric/identity verifications, and automated document generation webhooks.",
      "Built high-performance API endpoints and data adaptation layers in Node.js/Express, Python (Django), and Firebase Cloud Functions handling concurrent transactions with sub-second latency.",
      "Established automated data extraction, transformation, and validation routines with Power Automate and RESTful webhooks, eliminating manual reconciliations between legacy and modern systems."
    ],
    specializations: [
      "Microsoft Dynamics 365 (D365) REST / OData ERP Integrations",
      "Offline-First Distributed Sync & ObjectBox Replication Middleware",
      "High-Throughput RESTful API Architecture & Webhooks",
      "OAuth2, JWT Token Lifecycle & RBAC Enterprise Security",
      "Power Automate, Cloud Functions & Event-Driven Workflows",
      "Cross-Platform Client Engineering (Flutter, Dart, Swift, React Native)"
    ],
    interests: [
      "Distributed Systems & Data Replication Consistency",
      "Enterprise ERP Schema Orchestration & ETL Pipelines",
      "High-Performance Local Caching (ObjectBox / Redis)",
      "Automated Workflow Orchestration (Power Automate)",
      "AI-Assisted Architecture (GitHub Copilot / Cursor)"
    ],
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    contactEmail: "Ahd5his@gmail.com",
    phone: "+973 33880024",
    certifications: [
      { title: "Microsoft Certified: Dynamics 365 Fundamentals (ERP - MB-920)", issuer: "Microsoft", category: "Enterprise & Middleware" },
      { title: "Microsoft Certified: Power Platform Fundamentals (PL-900)", issuer: "Microsoft", category: "Enterprise & Middleware" },
      { title: "AWS Certified Cloud Practitioner (CLF-C02)", issuer: "Amazon Web Services", category: "Enterprise & Middleware" },
      { title: "Software Engineering Immersive Certification", issuer: "General Assembly", category: "Backend, APIs & Databases" },
      { title: "Node.js & Express API Development Specialization", issuer: "OpenJS Foundation / Coursera", category: "Backend, APIs & Databases" },
      { title: "PostgreSQL & Database Design Certification", issuer: "University of Michigan / Coursera", category: "Backend, APIs & Databases" },
      { title: "GitHub Copilot & AI-Assisted Software Development", issuer: "GitHub / Microsoft Learn", category: "Software Architecture & AI" },
      { title: "Google UX Design Professional Certificate (Figma & Interface Logic)", issuer: "Google", category: "Software Architecture & AI" },
      { title: "Google Flutter Certification", issuer: "Google (Online)", category: "Client Engineering" },
      { title: "Swift iOS App Development Certification", issuer: "Bahrain Polytechnic", category: "Client Engineering" }
    ],
    education: [
      { program: "Software Engineering Immersive Program", institution: "General Assembly", date: "April 2023" },
      { program: "Swift Development Program", institution: "Bahrain Polytechnic", date: "June 2023" },
      { program: "High School Diploma", institution: "Ahmed Al-Omran School", date: "June 2020" }
    ],
    community: [
      "Charity Leadership Member: Ras Ruman (Since 2018)",
      "Community Religious Instructor: Ras Ruman (Since 2016)",
      "Pandemic Volunteer: Ministry of Health – Bahrain (May 2020)",
      "Blood Donation Support: Ibn Sina Health Center"
    ],
    reference: {
      name: "Hashim Abdulaziz",
      title: "Manager, Development & ISV",
      company: "Global ITS Group",
      phone: "+973 36882440"
    },
    socials: [
      {
        platform: "LinkedIn",
        handle: "linkedin.com/in/ahmed-hisham",
        url: "https://linkedin.com/in/ahmed-hisham",
        icon: "Linkedin"
      },
      {
        platform: "GitHub",
        handle: "github.com/ahmedhisham",
        url: "https://github.com/ahmedhisham",
        icon: "Github"
      },
      {
        platform: "Email",
        handle: "Ahd5his@gmail.com",
        url: "mailto:Ahd5his@gmail.com",
        icon: "Mail"
      }
    ]
  },

  folders: [
    {
      id: "about",
      number: "01",
      name: "ABOUT ME",
      sublabel: "IDENTITY & EXECUTIVE SUMMARY",
      fileType: "Executive Dossier",
      itemCount: "5 Sections",
      updated: "2026",
      accentColor: "rgba(59, 130, 246, 0.45)",
      description: "Executive summary, core achievements, certifications, education, and credentials."
    },
    {
      id: "projects",
      number: "02",
      name: "PROJECTS",
      sublabel: "ENTERPRISE DELIVERABLES",
      fileType: "Integration Catalog",
      itemCount: "8 Deliverables",
      updated: "2026",
      accentColor: "rgba(16, 185, 129, 0.45)",
      description: "Enterprise ERP integrations, offline sync engines, middleware pipelines, and API services."
    },
    {
      id: "experience",
      number: "03",
      name: "EXPERIENCE",
      sublabel: "CAREER RECORDS",
      fileType: "Work Logs",
      itemCount: "Global ITS Group",
      updated: "Present",
      accentColor: "rgba(245, 158, 11, 0.45)",
      description: "Software Integration & Applications Developer role details, ERP middleware & deliverables."
    },
    {
      id: "skills",
      number: "04",
      name: "SKILLS",
      sublabel: "CORE TECHNOLOGIES",
      fileType: "System Manifest",
      itemCount: "6 Domains",
      updated: "2026",
      accentColor: "rgba(139, 92, 246, 0.45)",
      description: "Integrations, ERP systems, backend APIs, databases, caching, and cross-platform stacks."
    },
    {
      id: "design-lab",
      number: "05",
      name: "CERTIFICATIONS",
      sublabel: "CREDENTIALS & HONORS",
      fileType: "Accreditations",
      itemCount: "10 Credentials",
      updated: "2026",
      accentColor: "rgba(244, 63, 94, 0.45)",
      description: "Microsoft D365, Power Platform, AWS Cloud, PostgreSQL, and Software Engineering certifications."
    },
    {
      id: "contact",
      number: "06",
      name: "CONTACT",
      sublabel: "DIRECT CHANNELS",
      fileType: "Direct Transmission",
      itemCount: "Bahrain (GMT+3)",
      updated: "2026",
      accentColor: "rgba(14, 165, 233, 0.5)",
      description: "Direct contact info (+973 33880024), Ahd5his@gmail.com, LinkedIn, and reference details."
    }
  ],

  projects: [
    {
      id: "employee-self-service",
      title: "Employee Self Service (ESS)",
      year: "2024 — Present",
      type: "Middleware & Client Integration",
      category: "Enterprise ERP & HR",
      summary: "Architected the integration layer connecting 1,000+ staff clients with Microsoft Dynamics 365 ERP backend.",
      description: "Built bi-directional middleware for leaves, loans, overtime, expense claims, and manager approval hierarchies. Implemented an offline request queue using ObjectBox that automatically validates and synchronizes records upon reconnection with zero data loss.",
      featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Microsoft Dynamics 365 (D365) REST APIs", "ObjectBox", "Firebase", "Flutter", "OData Web Services", "Power Automate"],
      role: "Lead Integration Engineer & Middleware Developer",
      timeline: "Ongoing Enterprise Production",
      platform: "Enterprise Mobile & Web Client",
      metrics: [
        { label: "Active Enterprise Staff", value: "1,000+ Users" },
        { label: "Sync Latency", value: "<0.4s" },
        { label: "Offline Resilience", value: "100% Zero Data Loss" }
      ],
      highlights: [
        "Architected bi-directional replication pipeline interfacing mobile clients with Microsoft Dynamics 365 HR cores.",
        "Built automated offline request queue with local schema mappings in ObjectBox NoSQL store.",
        "Integrated secure attachment upload pipelines and automated FCM push notification triggers on manager approval actions."
      ],
      endpoints: [
        "D365 OData endpoints",
        "Attachment upload pipeline",
        "FCM notification triggers"
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/ahmedhisham", icon: "Github" }
      ]
    },
    {
      id: "property-management",
      title: "Property Management Integration",
      year: "2024",
      type: "Platform & Payment Middleware",
      category: "Real Estate & Billing",
      summary: "Engineered middleware integrating property databases with dynamic lease generation engines and secure payment gateway webhooks.",
      description: "Developed automated rent payment webhook listeners, reconciliation APIs, and ticket dispatch webhooks for maintenance personnel. Provides automated reconciliation between financial ledgers and tenant portals.",
      featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      technologies: ["REST Webhooks", "Firebase", "ObjectBox", "Flutter", "Payment Gateways", "PDF Generation"],
      role: "Software Integration Developer",
      timeline: "Enterprise Release",
      platform: "Cross-Platform Real Estate Suite",
      metrics: [
        { label: "Payment Reconciliation", value: "Automated Instant" },
        { label: "Contract Generation", value: "<1.2s PDF Engine" }
      ],
      highlights: [
        "Engineered automated rent payment webhook listeners with idempotency guards and reconciliation routines.",
        "Constructed programmatic PDF lease agreement compilation engine connected to central property databases.",
        "Automated maintenance ticket dispatch webhooks routing directly to field personnel queues."
      ],
      endpoints: [
        "Payment Gateway Webhooks",
        "PDF Contract Gen API",
        "Ticket Dispatch Webhooks"
      ],
      links: [
        { label: "LinkedIn Overview", url: "https://linkedin.com/in/ahmed-hisham", icon: "Linkedin" }
      ]
    },
    {
      id: "van-sales-sync",
      title: "Van Sales Offline-to-Cloud Sync",
      year: "2023 — 2024",
      type: "Field POS & ERP Middleware",
      category: "Supply Chain & ERP",
      summary: "Engineered an offline-first transactional middleware engine for van drivers operating in low-connectivity areas.",
      description: "Developed local data-store synchronization algorithms that capture offline sales, generate receipts, and batch-upload daily transaction journals into the core ERP with automated conflict resolution.",
      featuredImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      technologies: ["ObjectBox Sync", "RESTful APIs", "Firebase", "ERP OData", "Flutter", "SQLite"],
      role: "Middleware & Sync Engine Architect",
      timeline: "Production Deployment across GCC",
      platform: "Rugged Mobile POS Terminals",
      metrics: [
        { label: "Daily Journal Transactions", value: "10,000+ Batched" },
        { label: "Conflict Resolution Rate", value: "99.98% Automated" }
      ],
      highlights: [
        "Engineered high-throughput embedded ObjectBox local database engine on mobile POS hardware.",
        "Created custom mathematical diffing and timestamp conflict resolution algorithms for batch ERP uploads.",
        "Eliminated inventory discrepancy and manual re-entry errors across remote logistics routes."
      ],
      endpoints: [
        "Batch ERP Sync Endpoints",
        "POS Transaction APIs",
        "Inventory Reconciliation"
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/ahmedhisham", icon: "Github" }
      ]
    },
    {
      id: "insurance-claims-middleware",
      title: "Insurance Claims & Policy Middleware",
      year: "2023",
      type: "InsurTech Middleware & APIs",
      category: "InsurTech",
      summary: "Constructed API integration middleware handling instant premium quotations, motor/medical policy renewals, and multi-part claim filings.",
      description: "Built media-upload pipelines for incident reports and real-time status callbacks between legacy underwriting systems and customer apps, drastically reducing claims turnaround time.",
      featuredImage: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
      technologies: ["RESTful APIs", "Firebase Cloud Functions", "ObjectBox", "JSON/XML Serializers", "Webhooks"],
      role: "Backend & API Integration Engineer",
      timeline: "Enterprise InsurTech Project",
      platform: "Mobile & Web Portal Middleware",
      metrics: [
        { label: "Quotation Speed", value: "Sub-Second Engine" },
        { label: "Claim Filing Media", value: "Multi-part Uploads" }
      ],
      highlights: [
        "Constructed rating engine API connectors mapping legacy actuarial tables to modern JSON schemas.",
        "Built resilient multipart claim document and photo ingestion pipelines with validation checks.",
        "Created webhook callback mechanisms broadcasting policy renewal status changes in real time."
      ],
      endpoints: [
        "Rating Engine APIs",
        "Multipart Claim Uploads",
        "Underwriting Callback Webhooks"
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/ahmedhisham", icon: "Github" }
      ]
    },
    {
      id: "wealth-investment-api",
      title: "Wealth & Investment Portfolio API",
      year: "2023",
      type: "FinTech & Data Abstraction Middleware",
      category: "FinTech & Wealth",
      summary: "Developed data abstraction layers aggregating real-time investment returns, scheme allocations, and historical asset yields.",
      description: "Integrated secure investor onboarding flows with data validation middleware ensuring regulatory compliance before transmitting client portfolios to central asset management databases.",
      featuredImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Node.js", "Firebase", "ObjectBox", "REST APIs", "OAuth2 / JWT", "PostgreSQL"],
      role: "API Integration Developer",
      timeline: "FinTech Deployment",
      platform: "Financial Dashboard Services",
      metrics: [
        { label: "Data Abstraction Yield", value: "Real-time Aggregation" },
        { label: "Security Protocol", value: "OAuth2 & JWT Token Lifecycles" }
      ],
      highlights: [
        "Developed financial yield calculation aggregators with caching layers for fast portfolio rendering.",
        "Implemented strict data validation middleware enforcing regional compliance standards.",
        "Integrated OAuth2 token lifecycle management and encrypted session tokens."
      ],
      endpoints: [
        "Financial Yield Aggregators",
        "Portfolio Allocation Endpoints",
        "Secure Auth APIs"
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/ahmedhisham", icon: "Github" }
      ]
    },
    {
      id: "fixed-assets-gps",
      title: "Fixed Assets Tracking & GPS Validator",
      year: "2023",
      type: "Logistics & ERP Asset Ops",
      category: "Enterprise Asset Ops",
      summary: "Implemented barcode/QR-reading ingestion services combined with GPS location validation APIs.",
      description: "Engineered middleware to cross-reference scanned assets against central ERP registry databases, updating asset lifecycle states and logging discrepancy alerts automatically.",
      featuredImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Geolocation APIs", "Barcode Scanners", "ObjectBox", "Firebase", "REST APIs"],
      role: "Systems Integration Developer",
      timeline: "Logistics Operations Suite",
      platform: "Enterprise Field Hardware",
      metrics: [
        { label: "Scanned Asset Accuracy", value: "100% Cross-Referenced" },
        { label: "Discrepancy Logging", value: "Automated Instant" }
      ],
      highlights: [
        "Constructed barcode & QR-reading ingestion endpoints with GPS geofence verification.",
        "Engineered real-time ERP asset registry updater logging depreciation and transfer states.",
        "Integrated discrepancy alert dispatchers notifying asset managers of anomalous scans."
      ],
      endpoints: [
        "Asset Registry REST APIs",
        "Geolocation Validation Services",
        "Discrepancy Logs"
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/ahmedhisham", icon: "Github" }
      ]
    },
    {
      id: "lakum-marketplace",
      title: "Lakum Marketplace Platform",
      year: "2022 — 2023",
      type: "Consumer Portal & GIS Integration",
      category: "Real Estate & Billing",
      summary: "Integrated Google Maps Geocoding and Places APIs with property backend listings.",
      description: "Developed automated scheduling API integrations for client consultations and webhook processing for instant transaction receipts and digital agreement distribution.",
      featuredImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Google Maps APIs", "Payment Gateway", "Firebase", "REST APIs", "Node.js"],
      role: "Backend & API Integration Engineer",
      timeline: "Consumer Portal Launch",
      platform: "Web & Mobile Portal",
      metrics: [
        { label: "GIS Integration", value: "Google Maps & Places APIs" },
        { label: "Webhook Processing", value: "Instant Receipts" }
      ],
      highlights: [
        "Integrated Google Maps Geocoding endpoints for dynamic property proximity mapping.",
        "Developed appointment booking scheduling webhooks syncing client calendars.",
        "Connected payment gateway webhooks for instant digital receipt delivery."
      ],
      endpoints: [
        "Spatial Query Endpoints",
        "Payment Callback Webhooks",
        "Consultation APIs"
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/ahmedhisham", icon: "Github" }
      ]
    },
    {
      id: "crafty-creation-fullstack",
      title: "Full-Stack & Backend Web Services",
      year: "2022",
      type: "Backend & Full-Stack Platform",
      category: "Backend & Full-Stack",
      summary: "Engineered RESTful backend services using Python (Django) and Node.js/Express for course catalog platforms (CraftyCreation).",
      description: "Implemented relational database schemas (SQL/PostgreSQL), secure user session handling, and programmatic CRUD interfaces with clean architectural patterns.",
      featuredImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      technologies: ["Python (Django)", "Node.js", "Express.js", "SQL", "PostgreSQL", "REST APIs"],
      role: "Backend Developer",
      timeline: "Web Services Architecture",
      platform: "Web API Services",
      metrics: [
        { label: "Database Layer", value: "PostgreSQL Relational Schema" },
        { label: "Authentication", value: "Secure Session & JWT" }
      ],
      highlights: [
        "Engineered normalized relational database models with optimized SQL query indexing.",
        "Constructed programmatic CRUD endpoints for course registrations and catalog queries.",
        "Built robust session authentication and role validation filters."
      ],
      endpoints: [
        "Course Registration Endpoints",
        "Session Auth",
        "SQL Data Model"
      ],
      links: [
        { label: "GitHub Profile", url: "https://github.com/ahmedhisham", icon: "Github" }
      ]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Software Integration & Applications Developer",
      company: "Global ITS Group",
      companyUrl: "https://globalitsgroup.com",
      period: "June 2023 — Present",
      location: "Kingdom of Bahrain",
      type: "Full-Time Enterprise",
      summary: "Design, engineer, and maintain robust middleware layers and integration pipelines interfacing client software with Microsoft Dynamics 365 (D365) ERP environments across the GCC.",
      responsibilities: [
        "Design, engineer, and maintain robust middleware layers and integration pipelines interfacing client software with Microsoft Dynamics 365 (D365) ERP environments.",
        "Developed resilient offline-first caching and distributed synchronization middleware using ObjectBox, automating schema mappings, request queueing, and conflict resolution during offline transactions.",
        "Implemented secure API architectures, embedding OAuth2, JWT token lifecycle management, role-based authorization protocols (RBAC), and SSL payload encryption across all endpoints.",
        "Constructed event-driven micro-integrations and automated workflow routines utilizing Firebase Cloud Functions, REST APIs, and Power Automate to process business data in real time.",
        "Engineered third-party integrations including payment gateway processors, invoice dispatchers, PDF document generators, and automated push notification middleware."
      ],
      achievements: [
        "Delivered enterprise integration middleware connecting 1,000+ staff to Microsoft Dynamics 365 ERP.",
        "Constructed offline replication engines in ObjectBox ensuring 100% zero data loss in field logistics.",
        "Automated reconciliation workflows with Power Automate, eliminating manual reconciliations."
      ],
      technologies: [
        "Microsoft Dynamics 365 (D365)",
        "RESTful API Architecture",
        "ObjectBox NoSQL",
        "Firebase Cloud Functions",
        "Power Automate",
        "Node.js",
        "OAuth2 / JWT",
        "Flutter",
        "SQL (PostgreSQL / MySQL)"
      ]
    }
  ],

  skills: [
    {
      id: "integrations",
      title: "Integrations & Middleware",
      code: "MODULE // 01",
      iconName: "Layers",
      skills: [
        { name: "RESTful API Architecture", level: "Core Expert", highlight: true, years: "5+ Yrs", description: "High-throughput endpoint design, rate limiting, and contract versioning" },
        { name: "Middleware Design", level: "Core Expert", highlight: true, years: "5+ Yrs", description: "Distributed data abstraction layers, request interceptors, and transformations" },
        { name: "Webhooks & Event Pipelines", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "Idempotent event listeners, signature validation, and retry queues" },
        { name: "Bi-directional Sync", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "Conflict resolution algorithms, delta syncing, and timestamp ordering" },
        { name: "Data Transformation (ETL)", level: "Core Expert", years: "5+ Yrs", description: "JSON/XML serialization, schema mapping, and data normalizations" },
        { name: "Microservices Integration", level: "Production", years: "4+ Yrs", description: "Service mesh routing, async task handlers, and decoupled architectures" }
      ]
    },
    {
      id: "enterprise-erp",
      title: "Enterprise & ERP Systems",
      code: "MODULE // 02",
      iconName: "Database",
      skills: [
        { name: "Microsoft Dynamics 365 (D365)", level: "Core Expert", highlight: true, years: "3+ Yrs", description: "ERP core interfacing, entity mappings, business logic integration" },
        { name: "Power Automate", level: "Core Expert", highlight: true, years: "3+ Yrs", description: "Automated business workflows, triggers, and legacy bridging" },
        { name: "ERP OData & REST Web Services", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "High-performance OData querying, pagination, batching" },
        { name: "OAuth2 & JWT Auth Pipelines", level: "Core Expert", years: "4+ Yrs", description: "Token lifecycle management, RBAC, encrypted payloads" }
      ]
    },
    {
      id: "backend-api",
      title: "Backend & API Development",
      code: "MODULE // 03",
      iconName: "Code2",
      skills: [
        { name: "Node.js & Express.js", level: "Core Expert", highlight: true, years: "5+ Yrs", description: "High-throughput asynchronous servers, middleware pipelines" },
        { name: "Python (Django)", level: "Production", years: "3+ Yrs", description: "REST Framework, ORM models, secure user authentication" },
        { name: "Firebase Cloud Functions", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "Serverless event triggers, background batch processors" },
        { name: "WebSockets & Realtime", level: "Production", years: "4+ Yrs", description: "Full-duplex telemetry, status callbacks, live listeners" },
        { name: "Postman API Testing", level: "Core Expert", years: "5+ Yrs", description: "Automated test suites, CI contract testing, mock servers" }
      ]
    },
    {
      id: "databases-caching",
      title: "Databases & Caching",
      code: "MODULE // 04",
      iconName: "Cpu",
      skills: [
        { name: "ObjectBox NoSQL", level: "Core Expert", highlight: true, years: "3+ Yrs", description: "High-speed embedded database for local caching, instant search & offline sync" },
        { name: "Firebase (Cloud Firestore)", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "Realtime collections, security rules, distributed triggers" },
        { name: "SQL (PostgreSQL, MySQL)", level: "Core Expert", years: "5+ Yrs", description: "Relational schema design, indexes, transactions, migrations" },
        { name: "Redis", level: "Production", years: "3+ Yrs", description: "In-memory caching, rate-limiting counters, pub/sub queues" }
      ]
    },
    {
      id: "client-crossplatform",
      title: "Client & Cross-Platform",
      code: "MODULE // 05",
      iconName: "Smartphone",
      skills: [
        { name: "Flutter & Dart", level: "Core Expert", highlight: true, years: "4+ Yrs", description: "Clean Architecture, BLoC/Riverpod, Method Channels, Custom Painters" },
        { name: "Swift (iOS)", level: "Production", years: "3+ Yrs", description: "Native iOS integration, hardware channels, keychain storage" },
        { name: "React Native", level: "Production", years: "4+ Yrs", description: "Cross-platform mobile apps, native bridges, Reanimated" },
        { name: "JavaScript (ES6+) & Next.js", level: "Core Expert", years: "5+ Yrs", description: "Modern web applications, TypeScript, Tailwind CSS, HTML5/CSS3" }
      ]
    },
    {
      id: "devops-ai",
      title: "Architecture, DevOps & AI",
      code: "MODULE // 06",
      iconName: "Terminal",
      skills: [
        { name: "Git & Version Control", level: "Core Expert", years: "5+ Yrs", description: "Branching strategies, code reviews, semantic versioning" },
        { name: "CI/CD Pipelines", level: "Production", years: "3+ Yrs", description: "Automated builds, linting, test suites, deployment pipelines" },
        { name: "Docker Basics", level: "Production", years: "3+ Yrs", description: "Containerized development environments, compose configs" },
        { name: "Cursor & Microsoft Copilot", level: "Core Expert", highlight: true, years: "3+ Yrs", description: "AI-assisted architecture, refactoring, and code verification" },
        { name: "System Flow Architecture", level: "Core Expert", highlight: true, years: "5+ Yrs", description: "Enterprise integration architecture, message bus flow diagrams" }
      ]
    }
  ]
};
