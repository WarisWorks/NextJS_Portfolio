/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  assetPrefix: '/nextjs_portfolio',
};

module.exports = nextConfig


const withFonts = require('next-fonts');

module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
     return config;
   }
});

module.exports = {
  i18n: {
    locales: ['ug', 'en'],
    defaultLocale: 'ug',
  },
}
