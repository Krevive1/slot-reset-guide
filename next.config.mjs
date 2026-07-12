/** @type {import('next').NextConfig} */
const nextConfig = {
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
