import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/mockDesk",
  assetPrefix: "/mockDesk/",
  eslint: {
    ignoreDuringBuilds: true, // disables ESLint errors during build
  },
};

export default nextConfig;
