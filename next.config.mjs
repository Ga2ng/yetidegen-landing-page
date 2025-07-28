/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp', 'image/avif', 'image/gif'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
