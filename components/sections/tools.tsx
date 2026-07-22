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
  SiWebflow,
  SiNotion,
  SiGooglesearchconsole,
  SiSemrush,
  SiMixpanel,
  SiTypescript,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si"
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
} from "react-icons/tb"
import { getTranslations } from "next-intl/server"
import { Container } from "./container"
import { Marquee } from "@/components/motion/marquee"
import { cn } from "@/lib/utils"

const ICON_CLASS =
  "size-8 md:size-9 text-muted/55 transition-colors duration-300 group-hover:text-foreground"

type Tool = {
  name: string
  Icon?: IconType
  image?: string
  label?: string
  layout?: "stacked" | "inline"
}

const TOOLS: Tool[] = [
  { name: "Mailchimp", Icon: SiMailchimp, label: "Mailchimp", layout: "stacked" },
  {
    name: "Klaviyo",
    image: "/brand/logos/klaviyo.png",
    label: "Klaviyo",
    layout: "inline",
  },
  { name: "Meta Business Suite", Icon: SiMeta, label: "Meta", layout: "stacked" },
  { name: "Shopify", Icon: SiShopify, label: "Shopify", layout: "inline" },
  { name: "WordPress", Icon: SiWordpress, label: "WordPress", layout: "stacked" },
  { name: "Framer", Icon: SiFramer, label: "Framer", layout: "stacked" },
  { name: "Next.js", Icon: SiNextdotjs, label: "Next.js", layout: "stacked" },
  { name: "Vercel", Icon: SiVercel, label: "Vercel", layout: "stacked" },
  { name: "React", Icon: SiReact, label: "React", layout: "stacked" },
  {
    name: "Google Analytics",
    Icon: SiGoogleanalytics,
    label: "Google Analytics",
    layout: "stacked",
  },
  { name: "Google Ads", Icon: SiGoogleads, label: "Google Ads", layout: "stacked" },
  { name: "Figma", Icon: SiFigma, label: "Figma", layout: "stacked" },
  { name: "Webflow", Icon: SiWebflow, label: "Webflow", layout: "stacked" },
  {
    name: "Adobe Photoshop",
    Icon: TbBrandAdobePhotoshop,
    label: "Photoshop",
    layout: "stacked",
  },
  {
    name: "Adobe Illustrator",
    Icon: TbBrandAdobeIllustrator,
    label: "Illustrator",
    layout: "stacked",
  },
  {
    name: "Canva",
    image: "/brand/logos/canva.svg",
    label: "Canva",
    layout: "stacked",
  },
  { name: "Notion", Icon: SiNotion, label: "Notion", layout: "stacked" },
  {
    name: "Google Search Console",
    Icon: SiGooglesearchconsole,
    label: "Search Console",
    layout: "stacked",
  },
  { name: "Semrush", Icon: SiSemrush, label: "Semrush", layout: "stacked" },
  {
    name: "Ahrefs",
    image: "/brand/logos/ahrefs.svg",
    label: "Ahrefs",
    layout: "stacked",
  },
  { name: "Mixpanel", Icon: SiMixpanel, label: "Mixpanel", layout: "stacked" },
  { name: "TypeScript", Icon: SiTypescript, label: "TypeScript", layout: "stacked" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, label: "Tailwind CSS", layout: "stacked" },
]

function ToolMark({ tool }: { tool: Tool }) {
  if (tool.image) {
    // Raster/SVG marks stay black — hover is an opacity lift, not a hue change.
    return (
      // eslint-disable-next-line @next/next/no-img-element -- local brand marks include SVG
      <img
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
  return (
    <span
      className={cn(
        "group flex items-center",
        tool.layout === "stacked" ? "flex-col gap-1.5" : "gap-2.5"
      )}
    >
      <ToolMark tool={tool} />
      {tool.label ? (
        <span className="text-sm font-medium text-muted/55 transition-colors duration-300 group-hover:text-foreground">
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
