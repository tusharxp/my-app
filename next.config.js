/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.travelxp.com",
          },
        ],
        deviceSizes: [340, 640, 768, 1024, 1200, 1920],
        formats: ["image/avif", "image/webp"],
      },
}

module.exports = nextConfig
