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
    id: "satyajit-mohapatra",
    name: "Satyajit Mohapatra",
    role: "CEO & Co-Founder",
    expertise: "Executive Strategy & Digital Transformation",
    portrait: "/images/team_satyajit_mohapatra.png",
    bio: "Satyajit drives Optivis' vision, strategic partnerships, and global growth. He works closely with enterprise leadership teams across industries to guide digital transformation strategies and high-impact technology investments.",
    experienceYears: 8,
    coreExpertise: [
      "Executive Strategy",
      "Digital Transformation",
      "Corporate Growth",
      "Client Relations",
    ],
    responsibilities: [
      "Steering Optivis long-term strategy and global vision",
      "Leading enterprise client partnerships and strategic alliances",
      "Ensuring alignment across executive delivery pods",
    ],
    skills: ["Strategic Leadership", "Enterprise Sales", "Digital Transformation", "Corporate Strategy"],
    currentProjects: [
      "Optivis Global Enterprise Expansion",
      "Tier-1 Digital Transformation Partnerships",
    ],
    personalQuote: "Sustainable growth starts with an unwavering commitment to engineering excellence and client trust.",
    socials: {
      linkedin: "https://www.linkedin.com/in/satyajit-mohapatra-48838a343/",
      github: "https://github.com/satyajitmohapatra",
      email: "mohapatrasatyjit2006@gmail.com",
    },
  },
  {
    id: "rudra-prasad-rout",
    name: "Rudra Prasad Rout",
    role: "CTO & Co-Founder",
    expertise: "Cloud Architecture & Enterprise Software Systems",
    portrait: "/images/team_rudra_prasad_rout.png",
    bio: "Rudra leads technology innovation and technical architecture at Optivis. He specializes in distributed systems, multi-region cloud infrastructure, enterprise security, and AI-driven platform integrations.",
    experienceYears: 8,
    coreExpertise: [
      "System Architecture",
      "Cloud Infrastructure",
      "Full-Stack Software Engineering",
      "AI & RAG Systems",
    ],
    responsibilities: [
      "Architecting high-scale enterprise platforms and microservices",
      "Directing core R&D, security frameworks, and engineering standards",
      "Scaling infrastructure to handle mission-critical workloads",
    ],
    skills: ["Next.js & React", "TypeScript & Node.js", "AWS & Cloud Infrastructure", "AI & RAG Systems", "System Design"],
    currentProjects: [
      "Optivis High-Throughput API Engine",
      "Enterprise Zero-Trust Infrastructure Shield",
    ],
    personalQuote: "Great software architecture is invisible—it performs flawlessly, scales effortlessly, and powers real-world progress.",
    socials: {
      linkedin: "https://www.linkedin.com/in/routrp07/",
      github: "https://github.com/rudraprasadrout",
      portfolio: "https://rprout07.netlify.app",
      email: "rudraprasadrout07@gmail.com",
    },
  },
  {
    id: "t-omkar",
    name: "T. Omkar",
    role: "COO & Co-Founder",
    expertise: "Operations & Enterprise Delivery Management",
    portrait: "/images/team_t_omkar.jpg",
    bio: "Omkar oversees daily operations, delivery pipelines, and client service management at Optivis. He ensures every engineering engagement is delivered on time, within budget, and to top enterprise quality standards.",
    experienceYears: 7,
    coreExpertise: [
      "Operational Excellence",
      "Agile Project Delivery",
      "Resource Management",
      "SLA Optimization",
    ],
    responsibilities: [
      "Managing cross-functional delivery pods and project timelines",
      "Streamlining internal operations and client SLAs",
      "Ensuring 100% project completion and quality compliance",
    ],
    skills: ["Agile/Scrum", "Operations Management", "SLA Tracking", "Resource Allocation", "Quality Assurance"],
    currentProjects: [
      "Optivis Delivery Operations Optimization",
      "Agile Pod Scaling Framework",
    ],
    personalQuote: "Operational rigor and seamless execution are what turn great strategy into tangible results.",
    socials: {
      linkedin: "https://www.linkedin.com/in/t-omkar-025383382/",
      email: "t.omkar@optivisconsultancyservices.tech",
    },
  },
  {
    id: "abhisekh-das",
    name: "Abhisekh Das",
    role: "Marketing Manager & Co-Founder",
    expertise: "Brand Strategy & Growth Marketing",
    portrait: "/images/team_abhisekh_das.png",
    bio: "Abhisekh leads marketing strategies, brand identity, and client acquisition at Optivis. He focuses on positioning Optivis as a trusted global consultancy for enterprise software and digital services.",
    experienceYears: 6,
    coreExpertise: [
      "Brand Strategy",
      "Growth Marketing",
      "B2B Client Acquisition",
      "Digital Campaigns",
    ],
    responsibilities: [
      "Designing and executing global B2B marketing campaigns",
      "Managing brand messaging and digital footprint across channels",
      "Driving lead generation and client engagement pipelines",
    ],
    skills: ["B2B Marketing", "Content Strategy", "Digital Growth", "SEO & Analytics", "Campaign Management"],
    currentProjects: [
      "Optivis Global Rebranding Campaign",
      "Enterprise Lead Acquisition Funnel",
    ],
    personalQuote: "Effective marketing communicates clear value, builds genuine connections, and establishes lasting trust.",
    socials: {
      linkedin: "https://www.linkedin.com/in/abhisekh-das-b98828305/",
      email: "abhisekhdas100@gmail.com",
    },
  },
  {
    id: "durga-prasad-dutta",
    name: "Durga Prasad Dutta",
    role: "Social Media Manager",
    expertise: "Social Media Strategy & Community Engagement",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Durga manages Optivis' social media presence, brand communications, and digital audience engagement. He creates compelling content that highlights Optivis' technological achievements and client success stories.",
    experienceYears: 5,
    coreExpertise: [
      "Social Media Management",
      "Content Creation",
      "Community Growth",
      "Brand Engagement",
    ],
    responsibilities: [
      "Curating and publishing high-impact content across LinkedIn, X, and YouTube",
      "Building and nurturing Optivis' professional online community",
      "Monitoring digital media performance and engagement analytics",
    ],
    skills: ["Social Media Strategy", "Content Creation", "Community Management", "Visual Media", "Brand Analytics"],
    currentProjects: [
      "Optivis Social Media Growth Campaign",
      "Tech Insights Spotlight Series",
    ],
    personalQuote: "Engaging stories and consistent brand presence build meaningful bridges with clients and tech communities.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "durga.dutta@optivisconsultancyservices.tech",
    },
  },
];
