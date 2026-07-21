import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Source files are already AVIF; keep AVIF as the only output format so
    // the optimizer never transcodes them to something larger.
    formats: ["image/avif"],
  },
}

export default nextConfig
