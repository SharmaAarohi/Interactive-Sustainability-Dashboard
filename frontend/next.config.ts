import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site export
  trailingSlash: true, // Ensures all paths end with a slash
  images: {
    unoptimized: true, // Disables the default Image Optimization API
  },
};

export default nextConfig;

