/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: []
  }
};

module.exports = nextConfig;