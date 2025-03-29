import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["visa-check.local"],
  },
  /* config options here */
};

export default nextConfig;
