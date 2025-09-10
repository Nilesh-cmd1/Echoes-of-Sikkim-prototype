/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Echoes-of-Sikkim-prototype' : '',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
