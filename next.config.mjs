/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Rewrite so that /M@tthijs1997 (admin login) is served by admin-login page without changing URL
  async rewrites() {
    return [
      { source: '/M@tthijs1997', destination: '/admin-login' },
    ];
  },
};

export default nextConfig;
