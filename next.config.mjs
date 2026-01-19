
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
  eslint: {
    // Disabling during build to ensure fast deployment, assuming local linting is handled
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Build should still fail on real type errors, but we exclude legacy files in tsconfig.json
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
