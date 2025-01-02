import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['uat-bullmoon.web.app'], // เพิ่มโฮสต์ที่นี่
  },
};

export default nextConfig;
