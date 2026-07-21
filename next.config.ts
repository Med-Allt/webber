import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const nextConfig: NextConfig = {
  images: {
    // Source files are already AVIF; keep AVIF as the only output format so
    // the optimizer never transcodes them to something larger.
    formats: ["image/avif"],
  },
}

export default withNextIntl(nextConfig)
