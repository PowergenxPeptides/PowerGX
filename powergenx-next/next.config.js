/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../compilation',

  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/powergenx-next/compilation",
  assetPrefix: "/powergenx-next/compilation",
}

module.exports = nextConfig