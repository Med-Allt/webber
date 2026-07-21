import type { Metadata } from "next"
import { generalSans } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Webber — Branding, Web Design & Development",
  description:
    "Webber is a design and development studio building brands and websites that earn attention and convert it.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
