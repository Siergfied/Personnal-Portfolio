/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
};

module.exports = {
  images: {
    loader: "default",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
}
