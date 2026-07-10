import path from 'path';
import { fileURLToPath } from 'url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
  // Webpack polling plays nicer with OneDrive on Windows than Turbopack file watching.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
      };
    }
    return config;
  },
  async rewrites() {
    return [
      { source: '/M@tthijs1997', destination: '/admin-login' },
    ];
  },
};

export default nextConfig;
