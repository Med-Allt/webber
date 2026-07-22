import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { hasLocale } from "next-intl"
import { routing } from "@/i18n/routing"
import { siteUrl } from "@/content/site"
import { generalSans } from "../fonts"
import "../globals.css"

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

/** Path a locale is served at — the default locale has no prefix ("as-needed"). */
function localePath(locale: string) {
  return locale === routing.defaultLocale ? "/" : `/${locale}`
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })
  const title = t("title")
  const description = t("description")

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: localePath(locale),
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, localePath(l)]),
      ),
    },
    openGraph: {
      type: "website",
      siteName: "Með Allt",
      locale,
      url: localePath(locale),
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={generalSans.variable}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
