import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skills.syvixor.com',
      },
      {
        protocol: 'https',
        hostname: 'simpleicons.org',
      },
    ],
  },
};

export default nextConfig;
