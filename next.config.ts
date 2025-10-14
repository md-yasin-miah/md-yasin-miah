import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skills.syvixor.com',
      },
    ],
  },
};

export default nextConfig;
