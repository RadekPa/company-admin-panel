const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental.serverActions removed — Server Actions are enabled by default in modern Next.js
};

module.exports = withNextIntl(nextConfig);
