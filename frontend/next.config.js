/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // add support for importing svg files as react components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
