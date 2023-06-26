const nextConfig = {
  env: {
    RAINDROP_API_KEY: process.env.RAINDROP_API_KEY
  },
  images: {
    domains: ["https://app.raindrop.io/"]
  }
};

module.exports = nextConfig;
