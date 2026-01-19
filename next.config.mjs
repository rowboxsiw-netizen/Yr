
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure that external images (if any) are optimized
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.authorize.qzz.io',
      },
    ],
  },
};

export default nextConfig;
