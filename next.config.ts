import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Use remotePatterns (modern, recommended) instead of deprecated 'domains'
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      // Add Unsplash if you use it
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactStrictMode: true, // from .js file, good to keep
  // Enable server actions if needed later
  // experimental: { serverActions: true },
};

export default nextConfig;