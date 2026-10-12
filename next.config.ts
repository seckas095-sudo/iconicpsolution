import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(".");
const isGithubPages = process.env.GITHUB_PAGES === "true";
const customDomainFile = path.join(projectRoot, "CNAME");
const hasCustomDomain =
  fs.existsSync(customDomainFile) &&
  fs.readFileSync(customDomainFile, "utf8").trim().length > 0;
// Custom domains serve the site at the root; repository previews use a subpath.
const githubPagesBasePath = hasCustomDomain ? "" : "/iconicpsolution";

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
