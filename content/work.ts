/**
 * REAL CLIENT WORK.
 *
 * Project names, descriptions, live URLs, and screenshots are real and verified
 * against the live sites. `testimonial` is intentionally absent on every entry:
 * a quote attributed to a real company must come from that company. Do not
 * write one.
 *
 * `duration` is optional and omitted where the real figure is unknown — the
 * card drops the field rather than showing an invented number.
 *
 * `meta.scope` reflects what Webber actually did for each client (confirmed by
 * the studio) — not all entries are the same scope. Public display of these
 * clients is confirmed too.
 *
 * Screenshots were captured at 1440x900 @2x and encoded to AVIF at 1600px wide.
 * To refresh one, recapture and re-encode at the same dimensions so the
 * declared width/height stay accurate.
 *
 * `blurb`, `meta`, and `image.alt` are translated per locale; `slug`, `title`,
 * `image.src`/dimensions, and `liveUrl` are facts and stay identical across
 * locales.
 */

import { routing, type Locale } from "@/i18n/routing"

export type Project = {
  slug: string
  title: string
  blurb: string
  meta: { scope: string; pages: string; duration?: string }
  liveUrl?: string
  inProgress?: boolean
  image: { src: string; alt: string; width: number; height: number }
  testimonial?: { quote: string; author: string; role: string }
}

type ProjectTranslation = {
  slug: string
  blurb: string
  meta: { scope: string; pages: string; duration?: string }
  alt: string
}

const facts = {
  "cgs-team": {
    title: "CGS-team",
    image: { src: "/work/cgs-team.avif", width: 1600, height: 1000 },
    liveUrl: "https://cgsteam.io/",
  },
  "hoverla-soft": {
    title: "Hoverla Soft",
    image: { src: "/work/hoverla-soft.avif", width: 1600, height: 1000 },
    liveUrl: "https://hoverlasoft.com/",
  },
  "mlynivska-chaika": {
    title: "Mlynivska Chaika",
    image: { src: "/work/mlynivska-chaika.avif", width: 1600, height: 1000 },
    liveUrl: "https://www.mlynivska-chaika.com.ua/",
  },
  "sage-by-saga-sif": {
    title: "SAGE by Saga Sif",
    image: { src: "/work/sage-by-saga-sif.avif", width: 1600, height: 1000 },
    liveUrl: "https://sagebysagasif.is/",
  },
  "bjorninn-innrettingar": {
    title: "Björninn Innréttingar",
    image: { src: "/work/bjorninn-innrettingar.avif", width: 1600, height: 1000 },
    liveUrl: "https://bjorninn-innrettingar.framer.website",
    inProgress: true,
  },
} as const

const translations: Record<Locale, ProjectTranslation[]> = {
  is: [
    {
      slug: "cgs-team",
      blurb:
        "Hugbúnaðarstofa sem staðsetur sig sem tæknilegan meðstofnanda. Síðan nær yfir breitt þjónustusvið — blockchain, farsíma, ský, gervigreind — í gegnum tilviksrannsóknir, störf og svæðisbundnar lendingarsíður án þess að tapa rauða þræðinum.",
      meta: { scope: "Vörumerki + Vefur", pages: "Margar síður" },
      alt: "Forsíða CGS-team: ljóst útlit með fyrirsögninni „Software solutions for startups and growing businesses“, við hlið myndskreytingar af tækjum og blockchain-táknum.",
    },
    {
      slug: "hoverla-soft",
      blurb:
        "Vöruþróunarfyrirtæki sem byggir markaðstilbúin vefforrit fyrir sprota og stórfyrirtæki í heilbrigðisþjónustu, lögfræði, flutningum og fjártækni. Uppbyggt til að sanna trúverðugleika hratt: teymið, vörurnar sem hafa verið afhentar, og leiðina inn.",
      meta: { scope: "Vörumerki + Vefur", pages: "Margar síður" },
      alt: "Forsíða Hoverla Soft: dökk forsíðumynd yfir formuðum svörtum vef, með fyrirsögninni „Your path to successful product renovation starts here“ í hvítu og límónugrænu.",
    },
    {
      slug: "mlynivska-chaika",
      blurb:
        "Fullbúið úkraínskt landbúnaðarfyrirtæki — ræktun, búfé, aldingarðar og kjötvinnsla á 3.500 hekturum, sem sér átta merktum smásöluverslunum fyrir vörum. Hefðbundinn iðnaður fær skýra, nútímalega ásýnd á úkraínsku.",
      meta: { scope: "Vörumerki + Vefur", pages: "Margar síður" },
      alt: "Forsíða Mlynivska Chaika: heilsíðuljósmynd af reyktu pylsum í reykhúsi á bak við úkraínsku fyrirsögnina „Натуральна продукція“ og gulbrúnan hnapp.",
    },
    {
      slug: "sage-by-saga-sif",
      blurb:
        "Íslensk fatahönnunarlína frá hönnuðinum Sögu Sif sem selur kjóla, prjónavörur og fylgihluti með sendingum um allan heim. Vefverslun byggð til að láta vöruljósmyndirnar og vörulínuna njóta sín, með lágmarks umgjörð í kring.",
      meta: { scope: "Vefur", pages: "Margar síður", duration: "2 vikur" },
      alt: "Forsíða SAGE by Saga Sif: fjórar ljósgrænar vörumyndir — flæðandi röndóttur kjóll, áferðarfallega taska, röndótt blússa og prjónaflétta í nærmynd — undir slagorðinu „Vönduð og tímalaus íslensk hönnun“.",
    },
    {
      slug: "bjorninn-innrettingar",
      blurb:
        "Innréttingastofa í Hafnarfirði sem býður hönnun innanhúss, arkitektúr, skipulag rýma og endurbætur. Í vinnslu á tímabundnu léni.",
      meta: { scope: "Vefur", pages: "Margar síður" },
      alt: "Forsíða Björninn Innréttingar: dökk, andrúmsloftsrík ljósmynd af stofu á bak við fyrirsögnina „Við hönnum falleg og hagnýt rými sem eru sniðin að þér og gera hversdaginn einfaldari“ og hnappinn „Bóka tíma“.",
    },
  ],
  en: [
    {
      slug: "cgs-team",
      blurb:
        "A custom software studio positioning itself as a technical co-founder. The site carries a broad service range — blockchain, mobile, cloud, AI — across case studies, careers, and regional landing pages without losing its through-line.",
      meta: { scope: "Brand + Web", pages: "Multi page" },
      alt: "The CGS-team home page: a light layout headlined “Software solutions for startups and growing businesses”, set beside an illustration of devices and blockchain motifs.",
    },
    {
      slug: "hoverla-soft",
      blurb:
        "A product development company building market-ready web applications for startups and enterprises across healthcare, legal, logistics, and fintech. Structured to prove credibility fast: the team, the products shipped, and the way in.",
      meta: { scope: "Brand + Web", pages: "Multi page" },
      alt: "The Hoverla Soft home page: a dark hero over sculptural black fabric, headlined “Your path to successful product renovation starts here” in white and lime.",
    },
    {
      slug: "mlynivska-chaika",
      blurb:
        "A full-cycle Ukrainian agribusiness — farming, livestock, orchards, and meat processing across 3,500 hectares, supplying eight branded retail stores. A traditional industry given a clear, modern presence in Ukrainian.",
      meta: { scope: "Brand + Web", pages: "Multi page" },
      alt: "The Mlynivska Chaika home page: a full-bleed photograph of cured sausage in a smokehouse behind the Ukrainian headline “Натуральна продукція” and an amber call to action.",
    },
    {
      slug: "sage-by-saga-sif",
      blurb:
        "An Icelandic fashion label from designer Saga Sif, selling dresses, knitwear, and accessories with worldwide shipping. A storefront built to let the product photography and the collection carry the page, with minimal chrome around it.",
      meta: { scope: "Web", pages: "Multi page", duration: "2 weeks" },
      alt: "The SAGE by Saga Sif home page: four pale-green product photographs — a flowing striped dress, a textured handbag, a striped blouse, and a crocheted knit detail — under the tagline “Vönduð og tímalaus íslensk hönnun” (quality, timeless Icelandic design).",
    },
    {
      slug: "bjorninn-innrettingar",
      blurb:
        "An interior design studio in Hafnarfjörður offering interior design, architecture, space planning, and renovation. In development on a temporary domain.",
      meta: { scope: "Web", pages: "Multi page" },
      alt: "The Björninn Innréttingar home page: a dark, moody living-room photograph behind the headline “We design beautiful, practical spaces tailored to you” and a “Book a time” call to action.",
    },
  ],
}

export function getProjects(locale: string): Project[] {
  const list = translations[locale as Locale] ?? translations[routing.defaultLocale]
  return list.map((t): Project => {
    const f = facts[t.slug as keyof typeof facts]
    return {
      slug: t.slug,
      title: f.title,
      blurb: t.blurb,
      meta: t.meta,
      liveUrl: f.liveUrl,
      inProgress: "inProgress" in f ? f.inProgress : undefined,
      image: { src: f.image.src, alt: t.alt, width: f.image.width, height: f.image.height },
    }
  })
}
