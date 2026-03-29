import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output for Docker / containerised deployments
  output: "standalone",

  // React 19 strict mode
  reactStrictMode: true,

  // Enable experimental features for Next.js 15 + React 19
  experimental: {
    // React compiler (opt-in, requires babel-plugin-react-compiler if enabled)
    // reactCompiler: true,
  },

  // Image optimization domains — extend as needed
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
