import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // SEO optimization for static export
  // Note: headers, redirects, and rewrites require a server
  // For static export, these features must be configured at the hosting level
  /* config options here */
};

export default nextConfig;


