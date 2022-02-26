/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "pl-PL", "uk-UA"],
    defaultLocale: "en-US",
  }
}

module.exports = nextConfig
