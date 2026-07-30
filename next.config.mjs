/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Include widths that match the 4-column machine cards. Without these,
    // high-DPI desktop browsers jump from 384px to 640px for a ~216px card.
    imageSizes: [32, 48, 64, 72, 96, 128, 192, 216, 256, 320, 384, 432, 512],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "slot-reset-guide-two.vercel.app",
          },
        ],
        destination: "https://wanchankun.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
