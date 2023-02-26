/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})



module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  productionBrowserSourceMaps: true,
  // publicRuntimeConfig: {},
  //serverRuntimeConfig: {},
  async headers() {
    return [
      {
        // Public assets
        source: "/(.*).(png|jpg|jpeg|gif|webp|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      {
        // Fonts
        source: "/(.*).(woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
      {
        // HTML pages
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/pages/api/:path*',
      },
    ]
  },
  webpack(config, { webpack }) {
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
    const isServer = typeof window === 'undefined'
    if (!isServer && process.env.ANALYZE === 'true') {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    config.performance = {
      hints: isServer ? false : 'warning',
      maxAssetSize: 300000, // 300 KB
      maxEntrypointSize: 300000, // 300 KB
      assetFilter: (assetFilename) => {
        return assetFilename.endsWith('.js') || assetFilename.endsWith('.css');
      }
    }
    return config
  }
})
