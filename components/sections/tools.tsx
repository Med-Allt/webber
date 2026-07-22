import Image from "next/image"
import type { IconType } from "react-icons"
import {
  SiMailchimp,
  SiMeta,
  SiShopify,
  SiFramer,
  SiNextdotjs,
  SiVercel,
  SiReact,
  SiGoogleanalytics,
  SiGoogleads,
  SiFigma,
} from "react-icons/si"
import { getTranslations } from "next-intl/server"
import { Container } from "./container"
import { Marquee } from "@/components/motion/marquee"
import { cn } from "@/lib/utils"

const ICON_CLASS =
  "size-8 md:size-9 text-muted/55 transition-colors duration-300 group-hover:text-(--tool-color)"

type Tool = {
  name: string
  color: string
  Icon?: IconType
  image?: string
  label?: string
  layout?: "stacked" | "inline"
}

const TOOLS: Tool[] = [
  { name: "Mailchimp", color: "#FFE01B", Icon: SiMailchimp, label: "Mailchimp", layout: "stacked" },
  {
    name: "Klaviyo",
    color: "#000000",
    image: "/brand/logos/klaviyo.png",
    label: "Klaviyo",
    layout: "inline",
  },
  { name: "Meta Business Suite", color: "#0467DF", Icon: SiMeta, label: "Meta", layout: "stacked" },
  { name: "Shopify", color: "#7AB55C", Icon: SiShopify, label: "Shopify", layout: "inline" },
  { name: "Framer", color: "#0055FF", Icon: SiFramer, label: "Framer", layout: "stacked" },
  { name: "Next.js", color: "#000000", Icon: SiNextdotjs, label: "Next.js", layout: "stacked" },
  { name: "Vercel", color: "#000000", Icon: SiVercel, label: "Vercel", layout: "stacked" },
  { name: "React", color: "#61DAFB", Icon: SiReact, label: "React", layout: "stacked" },
  {
    name: "Google Analytics",
    color: "#E37400",
    Icon: SiGoogleanalytics,
    label: "Google Analytics",
    layout: "stacked",
  },
  { name: "Google Ads", color: "#4285F4", Icon: SiGoogleads, label: "Google Ads", layout: "stacked" },
  { name: "Figma", color: "#F24E1E", Icon: SiFigma, label: "Figma", layout: "stacked" },
]

function ToolMark({ tool }: { tool: Tool }) {
  if (tool.image) {
    // Klaviyo's mark is solid black — no brand hue to swap on hover, so the
    // reveal is an opacity lift instead of a color change like the others.
    return (
      <Image
        src={tool.image}
        alt=""
        aria-hidden="true"
        width={64}
        height={64}
        className="size-8 object-contain opacity-55 transition-opacity duration-300 group-hover:opacity-100 md:size-9"
      />
    )
  }

  const Icon = tool.Icon!
  return <Icon aria-hidden="true" className={ICON_CLASS} />
}

function ToolItem({ tool }: { tool: Tool }) {
  const colorVar = { "--tool-color": tool.color } as React.CSSProperties

  return (
    <span
      className={cn(
        "group flex items-center",
        tool.layout === "stacked" ? "flex-col gap-1.5" : "gap-2.5"
      )}
      style={colorVar}
    >
      <ToolMark tool={tool} />
      {tool.label ? (
        <span className="text-sm font-medium text-muted/55 transition-colors duration-300 group-hover:text-(--tool-color)">
          {tool.label}
        </span>
      ) : (
        <span className="sr-only">{tool.name}</span>
      )}
    </span>
  )
}

export async function Tools() {
  const t = await getTranslations("tools")

  return (
    <section className="relative z-30 shrink-0 pt-2 pb-16 md:pt-4 md:pb-20">
      <Container>
        <p className="mb-10 text-center text-xs tracking-[0.14em] text-muted uppercase">
          {t("caption")}
        </p>
        <Marquee speed={70}>
          {TOOLS.map((tool) => (
            <ToolItem key={tool.name} tool={tool} />
          ))}
        </Marquee>
      </Container>
    </section>
  )
}
