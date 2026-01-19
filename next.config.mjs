
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.authorize.qzz.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for Vercel's edge runtime where possible
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
