export type TeamMember = {
  id: string;
  name: string;
  role: string;
  expertise: string; // One-liner for card
  portrait: string;
  bio: string;
  experienceYears: number;
  coreExpertise: string[];
  responsibilities: string[];
  skills: string[];
  currentProjects: string[];
  personalQuote: string;
  socials: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
    email?: string;
  };
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    role: "Founder & CEO",
    expertise: "Enterprise Software Architect",
    portrait: "/images/hero_executive_portrait.png",
    bio: "Rahul has over 12 years of experience architecting large-scale enterprise platforms and advising global C-suite executives on digital transformation strategies. Prior to founding Optivis, he led cloud engineering teams across London and India.",
    experienceYears: 12,
    coreExpertise: [
      "Enterprise Solution Architecture",
      "Cloud Modernization",
      "Strategic Technology Consulting",
      "Distributed Systems",
    ],
    responsibilities: [
      "Steering Optivis long-term technology vision & growth strategy",
      "Leading enterprise client strategy workshops & architectural reviews",
      "Fostering strategic partnerships with cloud & AI infrastructure leaders",
    ],
    skills: ["System Design", "AWS / Azure", "Microservices", "Executive Leadership", "DevOps Strategy"],
    currentProjects: [
      "G2C Multilingual Citizen Portal Transformation",
      "Tier-1 Financial Enterprise Cloud Migration",
    ],
    personalQuote: "Precision engineering and clear architectural vision turn complex operational challenges into competitive advantages.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      portfolio: "https://optivisconsultancyservices.tech",
      email: "rahul.sharma@optivisconsultancyservices.tech",
    },
  },
  {
    id: "ananya-roy",
    name: "Ananya Roy",
    role: "VP of Engineering",
    expertise: "Cloud Infrastructure & DevOps Lead",
    portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Ananya leads engineering operations at Optivis, specializing in high-throughput cloud infrastructure, Kubernetes orchestration, and zero-downtime deployment pipelines for enterprise clients.",
    experienceYears: 10,
    coreExpertise: [
      "Kubernetes & Container Orchestration",
      "Multi-Region Cloud Infrastructure",
      "CI/CD Pipeline Automation",
      "Site Reliability Engineering (SRE)",
    ],
    responsibilities: [
      "Overseeing core engineering delivery & architecture quality across all client pods",
      "Establishing security compliance & automated testing standards",
      "Scaling infrastructure performance to handle 1.2M+ API req/sec",
    ],
    skills: ["Kubernetes", "Docker", "Terraform", "Go", "Python", "Prometheus & Grafana"],
    currentProjects: [
      "Sub-10ms Multi-Region API Gateway Cluster",
      "Zero-Downtime Database Migration Pipeline",
    ],
    personalQuote: "Resilience is not an afterthought; it is built into every line of infrastructure code from day one.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ananya.roy@optivisconsultancyservices.tech",
    },
  },
  {
    id: "vikramaditya-patel",
    name: "Vikramaditya Patel",
    role: "Head of AI & Machine Learning",
    expertise: "LLMs & Neural Systems Architect",
    portrait: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio: "Vikramaditya holds a Master's in Artificial Intelligence and specializes in deploying fine-tuned LLMs, RAG pipelines, and automated intelligence agents for enterprise data workflows.",
    experienceYears: 8,
    coreExpertise: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Neural Network Fine-Tuning",
      "Enterprise AI Agent Frameworks",
    ],
    responsibilities: [
      "Designing domain-specific LLM & RAG architectures for corporate intelligence",
      "Ensuring AI safety, hallucination suppression, and enterprise data privacy",
      "Leading research and integration of Next-Gen AI frameworks like LangChain & PyTorch",
    ],
    skills: ["PyTorch", "TensorFlow", "LangChain", "Python", "Vector DBs (Milvus/Qdrant)", "OpenAI API"],
    currentProjects: [
      "Enterprise Data Knowledge Assistant for Legal & Compliance",
      "Automated Predictive Logistics Engine",
    ],
    personalQuote: "Artificial intelligence becomes truly transformative when it seamlessly integrates with human expertise to accelerate real-world workflows.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "vikramaditya.patel@optivisconsultancyservices.tech",
    },
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    role: "Lead Product Designer",
    expertise: "Enterprise UI/UX & Design Systems",
    portrait: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: "Priya shapes the visual identity and user experience for Optivis client products. She specializes in building modern design systems, glassmorphism UIs, and accessible multi-device web applications.",
    experienceYears: 7,
    coreExpertise: [
      "Enterprise Design Systems",
      "User Experience (UX) Architecture",
      "Figma Component Libraries",
      "WCAG 2.1 Accessibility Compliance",
    ],
    responsibilities: [
      "Leading UI/UX product design across client web & mobile applications",
      "Conducting user research, wireframing, and interactive prototyping",
      "Ensuring design system consistency and seamless developer handoff",
    ],
    skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Tailwind CSS", "Micro-Animations"],
    currentProjects: [
      "Optivis Next-Gen Glassmorphic Design Token Library",
      "Multilingual Citizen Portal Accessibility Overhaul",
    ],
    personalQuote: "Great enterprise design eliminates friction—it makes complex data feel effortless and empowering to use.",
    socials: {
      linkedin: "https://linkedin.com",
      portfolio: "https://optivisconsultancyservices.tech",
      email: "priya.nair@optivisconsultancyservices.tech",
    },
  },
  {
    id: "david-miller",
    name: "David Miller",
    role: "Senior Security Architect",
    expertise: "Zero-Trust Cyber Resilience Lead",
    portrait: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    bio: "David brings over 11 years of cybersecurity expertise in penetration testing, ISO 27001 compliance, zero-trust network architecture, and end-to-end cloud encryption.",
    experienceYears: 11,
    coreExpertise: [
      "Zero-Trust Architecture",
      "Penetration Testing & Auditing",
      "ISO 27001 & SOC 2 Compliance",
      "End-to-End Cryptography",
    ],
    responsibilities: [
      "Performing comprehensive security audits for client infrastructure",
      "Designing automated threat detection & vulnerability scanners",
      "Securing API gateways & enterprise identity management (IAM)",
    ],
    skills: ["Cyber Security", "Penetration Testing", "IAM", "Encryption (AES-256)", "Compliance Audit", "SIEM"],
    currentProjects: [
      "Bank-Grade Cryptographic Shield Implementation",
      "Enterprise Zero-Trust IAM Deployment",
    ],
    personalQuote: "Security is not a obstacle to speed; it is the foundation that enables enterprises to scale with complete confidence.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "david.miller@optivisconsultancyservices.tech",
    },
  },
  {
    id: "sneha-mohanty",
    name: "Sneha Mohanty",
    role: "Director of Client Success",
    expertise: "Digital Transformation Strategist",
    portrait: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    bio: "Sneha manages key client relationships and enterprise delivery pods at Optivis, ensuring digital transformation projects are executed on schedule, within scope, and aligned with client strategic KPIs.",
    experienceYears: 9,
    coreExpertise: [
      "Agile Project Management",
      "Enterprise Account Leadership",
      "Change Management",
      "Client ROI Optimization",
    ],
    responsibilities: [
      "Overseeing enterprise client engagements & delivery milestones",
      "Facilitating daily agile standups & sprint reviews",
      "Ensuring 100% client satisfaction and long-term technical alignment",
    ],
    skills: ["Agile/Scrum", "Enterprise Account Mgmt", "Jira & Confluence", "Strategic KPI Tracking"],
    currentProjects: [
      "UK & India Enterprise Delivery Pod Expansion",
      "Client SLA Optimization Program",
    ],
    personalQuote: "True digital transformation is measured by sustainable business outcomes and empowered engineering teams.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "sneha.mohanty@optivisconsultancyservices.tech",
    },
  },
];
