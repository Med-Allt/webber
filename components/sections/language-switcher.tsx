"use client"

import { useLocale } from "next-intl"
import { routing } from "@/i18n/routing"
import { usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

const LABELS: Record<string, string> = { is: "IS", en: "EN" }

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div
      className={cn("flex items-center gap-1 text-sm", className)}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
          <button
            type="button"
            aria-current={l === locale ? "true" : undefined}
            onClick={() => router.replace(pathname, { locale: l })}
            className={cn(
              "transition-opacity",
              l === locale ? "font-semibold" : "opacity-50 hover:opacity-100"
            )}
          >
            {LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  )
}
