import type { NextConfig } from "next";
import path from "node:path";

const projectRoot = path.resolve(".");
const isGithubPages = process.env.GITHUB_PAGES === "true";
// Match the repository name used by the GitHub Pages deployment.
const githubPagesBasePath = "/iconicpsolution";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export" as const,
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? githubPagesBasePath : "",
  },
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
