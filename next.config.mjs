const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // TypeScript and ESLint run as explicit CI steps before this static build.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  basePath: isProd ? "/titan-build-construction" : "",
  assetPrefix: isProd ? "/titan-build-construction/" : "",
};

export default nextConfig;
