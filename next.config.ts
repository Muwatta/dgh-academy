import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Future: enable when connecting to Sanity CMS
  // experimental: { serverActions: true },
};

export default nextConfig;
