import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  images: isGitHubPages ? { unoptimized: true } : undefined,
  typescript: isGitHubPages ? { tsconfigPath: "tsconfig.pages.json" } : undefined,
};

export default nextConfig;
