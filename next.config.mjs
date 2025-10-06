/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async rewrites() {
    return [
      {
        source: '/pay/:path*',
        destination: 'https://izjygtsdza.us-east-1.awsapprunner.com/pay/:path*',
      },
      {
        source: '/payment_webhook/:path*',
        destination: 'https://ubv1.decoda.ai/payment_webhook/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pornpen.ai',
      },
      {
        protocol: 'https',
        hostname: 'api.porngen.art',
      },
      {
        protocol: 'https',
        hostname: 'porngen-art.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'd2pa5pbpozeh1f.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'ifantasy.s3.amazonaws.com',
      },
    ],
  },
  trailingSlash: true,
};

// export default nextConfig;

export default nextConfig;

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
