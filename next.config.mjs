/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg', 'raw.githubusercontent.com'],
    unoptimized: true, // This will disable image optimization which can help with certain image issues
  },
  experimental: {
    turbotrace: {
      logLevel: 'error'
    }
  }
}

export default nextConfig
