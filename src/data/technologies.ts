export type TechnologyItem = {
  id: string;
  name: string;
  category: string;
  svgIcon: string; // SVG path or raw SVG element
  brandColor?: string;
};

export const CLOUD_TECHNOLOGIES: TechnologyItem[] = [
  {
    id: "aws",
    name: "AWS",
    category: "Cloud Infrastructure",
    brandColor: "#FF9900",
    svgIcon: `<path fill="#FF9900" d="M15.4 12.8c-1.3.9-3.2 1.4-4.9 1.4-3.5 0-5.8-1.7-5.8-4.2 0-2.4 2.1-4.1 5.4-4.1 1.7 0 3.3.4 4.5 1.1l.8-2C14.1 4.2 12.1 3.7 10 3.7 4.9 3.7 1 6.8 1 10.6c0 3.9 4.1 6.5 9.4 6.5 2.1 0 4.3-.5 6-1.5l-1-2.8z"/><path fill="#FF9900" d="M16.9 16.5c-.3-.2-.4-.6-.2-.9.8-1.2 1.9-2.9 1.9-4.8 0-1.7-.8-3.1-1.7-4.1-.3-.3-.2-.8.1-1.1.3-.3.8-.2 1.1.1 1.1 1.3 2 3 2 5.1 0 2.3-1.3 4.3-2.3 5.7-.2.2-.6.3-.9.0z"/>`,
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "Enterprise Cloud",
    brandColor: "#0078D4",
    svgIcon: `<path fill="#0078D4" d="M3.4 17.6L10.3 3h4.6l-4 14.6H3.4zm7.9-6.3L15 3h5.6l-6.1 14.6h-4.3l1.1-3.7z"/>`,
  },
  {
    id: "gcp",
    name: "Google Cloud",
    category: "Cloud Platform",
    brandColor: "#4285F4",
    svgIcon: `<path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>`,
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "Edge & CDN",
    brandColor: "#F38020",
    svgIcon: `<path fill="#F38020" d="M16.5 15.5c.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3s-.6.1-.8.3c-.2.2-.3.5-.3.8 0 .3.1.6.3.8.2.2.5.3.8.3zm-9 0c.3 0 .6-.1.8-.3.2-.2.3-.5.3-.8 0-.3-.1-.6-.3-.8-.2-.2-.5-.3-.8-.3s-.6.1-.8.3c-.2.2-.3.5-.3.8 0 .3.1.6.3.8.2.2.5.3.8.3z"/>`,
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Serverless Deployment",
    brandColor: "#FFFFFF",
    svgIcon: `<path fill="currentColor" d="M12 1L24 22H0L12 1Z"/>`,
  },
  {
    id: "react",
    name: "React",
    category: "Frontend Framework",
    brandColor: "#61DAFB",
    svgIcon: `<circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></g>`,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-Stack Framework",
    brandColor: "#FFFFFF",
    svgIcon: `<path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.5 17.5l-5.6-7.8V17.5H9.5V6.5h1.7l5.3 7.5V6.5h1.5v11h-1.5z"/>`,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Typed JavaScript",
    brandColor: "#3178C6",
    svgIcon: `<rect width="22" height="22" x="1" y="1" fill="#3178C6" rx="4"/><path fill="#FFF" d="M13.7 17.5c.8.5 1.8.8 2.8.8 1.4 0 2.2-.6 2.2-1.6 0-1-.7-1.4-2.3-2-1.9-.7-3.1-1.6-3.1-3.4 0-1.9 1.5-3.3 4.1-3.3 1.2 0 2.2.3 2.9.7l-.7 1.8c-.6-.4-1.4-.7-2.3-.7-1.3 0-1.9.5-1.9 1.3 0 .8.6 1.2 2.2 1.8 2.1.8 3.2 1.7 3.2 3.6 0 2.1-1.6 3.5-4.4 3.5-1.3 0-2.6-.3-3.4-.8l.7-1.7zM7.2 10.3H4.7v7.9H2.4v-7.9H0V8.5h7.2v1.8z"/>`,
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "JS Runtime",
    brandColor: "#339933",
    svgIcon: `<path fill="#339933" d="M12 2L2 7.8v9.4l10 5.8 10-5.8V7.8L12 2zm-1 15.3l-5-2.9V9.6l5 2.9v4.8zm2-6.7l-5-2.9 5-2.9 5 2.9-5 2.9zm5 3.8l-5 2.9V12.4l5-2.9v4.8z"/>`,
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend API Framework",
    brandColor: "#FFFFFF",
    svgIcon: `<path fill="currentColor" d="M24 18h-4.7l-3-4.2-3 4.2H8.6l5.2-7.2-4.9-6.8h4.7l2.8 3.9 2.8-3.9H24l-5 6.8 5 7.2zM4.5 18H0V6h4.5v12z"/>`,
  },
  {
    id: "nestjs",
    name: "NestJS",
    category: "Enterprise Server",
    brandColor: "#E0234E",
    svgIcon: `<path fill="#E0234E" d="M19.8 4.2c-1.8-1.5-4.2-2.2-6.8-2.2-5.5 0-9.8 3.6-9.8 8.8 0 4.2 3.1 7.2 7.2 7.8 1 .2 2.1.2 3.1 0 3.5-.6 6.3-3.2 6.8-6.7h-3.4c-.4 1.7-1.8 3-3.6 3-2.1 0-3.8-1.6-3.8-3.8 0-2.2 1.7-3.8 3.8-3.8 1.4 0 2.6.7 3.3 1.8h3.6c-.7-2-2.4-3.6-4.6-4.3 1.6-.2 3.2.2 4.4 1.2 1.2 1 1.9 2.5 1.9 4.1v5.5l-2.1-1.2.2-2.2z"/>`,
  },
];

export const AI_INFRA_DATABASE_TECHNOLOGIES: TechnologyItem[] = [
  {
    id: "openai",
    name: "OpenAI",
    category: "Artificial Intelligence",
    brandColor: "#10A37F",
    svgIcon: `<path fill="#10A37F" d="M22.27 9.4c-.5-1.5-1.5-2.7-2.9-3.4-1.3-.7-2.8-.8-4.2-.4C14.3 4.2 13 3.3 11.5 3c-1.5-.3-3.1-.1-4.4.6C5.8 4.3 4.9 5.5 4.5 7c-.4 1.5-.2 3.1.5 4.4-.8 1.3-1.1 2.8-.8 4.3.3 1.5 1.2 2.8 2.5 3.6 1.3.8 2.8 1 4.3.7.8 1.3 2.1 2.2 3.6 2.5 1.5.3 3.1 0 4.4-.7 1.3-.7 2.2-1.9 2.6-3.4.4-1.5.2-3.1-.5-4.4.8-1.3 1.1-2.8.8-4.3-.2-1.4-1.1-2.7-2.4-3.5zm-8.8 10.9c-.8.5-1.8.6-2.7.3-.9-.3-1.6-.9-2-1.7l3.8-2.2v4.4c.3 0 .6-.3.9-.8zm-6.2-3.6c-.3-.8-.3-1.8 0-2.7.3-.9.9-1.6 1.7-2l3.8 2.2-3.8 2.2c-.6.3-1.2.4-1.7.3z"/>`,
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "AI Agent Framework",
    brandColor: "#00A67E",
    svgIcon: `<path fill="#00A67E" d="M12 2L2 7l10 5 10-5-10-5zm0 9L4 7.2V13l8 4 8-4V7.2L12 11zm0 7l-8-4v3.8l8 4.2 8-4.2V14l-8 4z"/>`,
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "ML & Neural Networks",
    brandColor: "#FF6F00",
    svgIcon: `<path fill="#FF6F00" d="M1.6 4.6l9.2-5.3v10.6L1.6 4.6zm19.2 0l-9.2-5.3v10.6l9.2-5.3zM10.8 11.2l9.2 5.3-9.2 5.3v-10.6zm-1.6 0v10.6L0 16.5l9.2-5.3z"/>`,
  },
  {
    id: "python",
    name: "Python",
    category: "Data Science & AI",
    brandColor: "#3776AB",
    svgIcon: `<path fill="#3776AB" d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3l.1 2.4h4.9v.7H5.2S2 7.1 2 12.3c0 5.2 2.8 5 2.8 5h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7 0 2.7-2.6V4.6S17.1 2 11.9 2zm-2.7 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"/><path fill="#FFD43B" d="M12.1 22c5.2 0 4.9-2.3 4.9-2.3l-.1-2.4h-4.9v-.7h6.8s3.2.3 3.2-4.9c0-5.2-2.8-5-2.8-5h-1.7v2.4s.1 2.8-2.8 2.8h-4.8s-2.7 0-2.7 2.6v4.7s-.3 2.6 4.9 2.6zm2.7-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/>`,
  },
  {
    id: "docker",
    name: "Docker",
    category: "Container Platform",
    brandColor: "#2496ED",
    svgIcon: `<path fill="#2496ED" d="M13.9 11.4h2.2v-2h-2.2v2zm-2.8 0h2.2v-2h-2.2v2zm-2.8 0h2.2v-2H8.3v2zm-2.8 0h2.2v-2H5.5v2zm8.4-2.6h2.2V6.8h-2.2v2zm-2.8 0h2.2V6.8h-2.2v2zm-2.8 0h2.2V6.8H8.3v2zm8.4-2.6h2.2V4.2h-2.2v2zm-16.7 8c-.6 3.7 2.2 7.6 7.4 7.6 6.3 0 10.9-4.1 11.7-8.9h-1.5c-.7 0-1.4-.4-1.7-1-.5.7-1.4 1.1-2.3 1.1H.1z"/>`,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "Container Orchestration",
    brandColor: "#326CE5",
    svgIcon: `<path fill="#326CE5" d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm0 2.3l7.5 4.3v8.7L12 21.7 4.5 17.3V8.6L12 4.3zm0 4.2c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3z"/>`,
  },
  {
    id: "github",
    name: "GitHub Actions",
    category: "DevOps & CI/CD",
    brandColor: "#FFFFFF",
    svgIcon: `<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>`,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Relational Database",
    brandColor: "#4169E1",
    svgIcon: `<path fill="#4169E1" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5h-2v-4h2v4zm0-6h-2V8.5h2V10.5z"/>`,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Database",
    brandColor: "#47A248",
    svgIcon: `<path fill="#47A248" d="M12 2s-6 6.3-6 11.2c0 3.8 2.7 6.8 6 6.8s6-3 6-6.8C18 8.3 12 2 12 2zm0 15.5c-2 0-3.5-1.8-3.5-4 0-2.4 3.5-6.5 3.5-6.5s3.5 4.1 3.5 6.5c0 2.2-1.5 4-3.5 4z"/>`,
  },
  {
    id: "redis",
    name: "Redis",
    category: "In-Memory Data Store",
    brandColor: "#DC382D",
    svgIcon: `<path fill="#DC382D" d="M2 7.5L12 2l10 5.5v9L12 22 2 16.5v-9zm10 2.2l-6-3.3 6-3.3 6 3.3-6 3.3zm-6 2.5l6 3.3 6-3.3v-2l-6 3.3-6-3.3v2z"/>`,
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Open-Source Backend",
    brandColor: "#3ECF8E",
    svgIcon: `<path fill="#3ECF8E" d="M13.35 22.38c-.37.49-1.12.24-1.12-.37v-7.64H3.86c-.57 0-.89-.66-.52-1.1L10.65 1.62c.37-.49 1.12-.24 1.12.37v7.64h8.37c.57 0 .89.66.52 1.1l-7.31 11.65z"/>`,
  },
];
