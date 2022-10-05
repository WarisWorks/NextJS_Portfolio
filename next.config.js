/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader:  "akamai",
    path: "",
  }
}


module.exports = {
  assetPrefix: '/nextjs_portfolio',
};

module.exports = nextConfig




