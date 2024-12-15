const hasProd = process.env.NODE_ENV === 'production' ? false : true;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: !hasProd ? { exclude: ['error'] } : false,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
