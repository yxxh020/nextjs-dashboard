/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: true, //available by default in next14
    // ppr: 'incremental', // next 15 incremental: adopt ppr for specific routes
    ppr: true,
  },
};

module.exports = nextConfig;
