import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const repositoryBasePath = "/microcl-lab";

export default function nextConfig(phase: string): NextConfig {
  const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
  const basePath = isDevelopment ? "" : repositoryBasePath;

  return {
    output: "export",
    basePath,
    assetPrefix: basePath || undefined,
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
  };
}
