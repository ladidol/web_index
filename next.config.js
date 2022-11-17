/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // TODO Chinese impl.
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
