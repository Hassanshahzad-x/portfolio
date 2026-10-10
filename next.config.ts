import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route is static, so Netlify serves plain files from out/ with no Next.js runtime.
  output: "export",
  // Emit work/<slug>/index.html so static hosts resolve /work/<slug> without guessing.
  trailingSlash: true,
  // The default image optimizer needs a server; screenshots are already sized.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
