const nextConfig = {
    async headers() {
      return [
        {
          source: '/sounds/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };

  module.exports = nextConfig;
