/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'compilation',
  images: { unoptimized: true },
  trailingSlash: true,
  
  // basePath: "/powergenx-next/",
  // assetPrefix: "/powergenx-next/",
}

module.exports = nextConfig