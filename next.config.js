/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add your CDN/CMS domains here when ready
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Enable strict mode for cleaner future migrations
  reactStrictMode: true,
};

module.exports = nextConfig;
