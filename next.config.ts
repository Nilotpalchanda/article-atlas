import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@vercel/speed-insights',
      'tailwindcss-animate',
    ],
  },
};

export default nextConfig;
