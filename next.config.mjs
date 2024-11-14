/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV === "production");
const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio-v2.0" : "",
  assetPrefix: "/portfolio-v2.0",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
