import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Если решите использовать изображения с внешних ссылок (например, с базы данных или CDN),
    // раскомментируйте и настройте remotePatterns:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
