import type { NextConfig } from "next";

console.log('DEBUG MODE')
const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
