import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@multidash/ui"],
  async rewrites() {
    return {
      // Markdown version of each component page, e.g. /ui-elements/button.md
      beforeFiles: [{ source: "/ui-elements/:name.md", destination: "/md/ui-elements/:name.md" }],
    }
  },
}

export default nextConfig
