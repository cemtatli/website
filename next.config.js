const nextConfig = {
  env: {
    RAINDROP_API_KEY: process.env.RAINDROP_API_KEY,
    CV_LINK: process.env.CV_LINK
  },
  images: {
    domains: ["img.icons8.com", "upload.wikimedia.org"]
  },
  productionBrowserSourceMaps: true
};

module.exports = nextConfig;
