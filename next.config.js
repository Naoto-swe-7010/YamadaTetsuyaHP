/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig