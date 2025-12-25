/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'market-resized.envatousercontent.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;