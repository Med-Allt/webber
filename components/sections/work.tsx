import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/content/work"
import { projects } from "@/content/work"
import { Container } from "./container"
import { SectionLabel } from "./section-label"
import { ThemeScrollZone } from "@/components/motion/theme-scroll-zone"
import { StickyStack } from "@/components/motion/sticky-stack"

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 rounded-[28px] border border-white/10 bg-[#111110] p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-12">
      <div>
        <h3 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
          {project.title}
        </h3>

        <ul className="mt-4 flex flex-wrap items-center gap-3 text-xs tracking-[0.12em] text-ink-dark/40 uppercase">
          <li>{project.meta.scope}</li>
          <li aria-hidden="true">/</li>
          <li>{project.meta.pages}</li>
          {project.meta.duration && (
            <>
              <li aria-hidden="true">/</li>
              <li>{project.meta.duration}</li>
            </>
          )}
        </ul>

        <p className="mt-6 text-base leading-relaxed text-ink-dark/60">
          {project.blurb}
        </p>

        {project.testimonial && (
          <blockquote className="mt-8 border-t border-white/10 pt-6">
            <p className="text-lg leading-relaxed text-ink-dark/90">
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-ink-dark/40">
              <span className="text-ink-dark/70">
                {project.testimonial.author}
              </span>
              {" — "}
              {project.testimonial.role}
            </footer>
          </blockquote>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link mt-8 inline-flex items-center gap-2 text-sm text-ink-dark/70 transition-colors hover:text-accent"
          >
            Live link
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        )}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 768px) 46vw, 90vw"
          className="h-auto w-full"
        />
      </div>
    </article>
  )
}

export function Work() {
  return (
    <ThemeScrollZone id="work" className="rounded-t-[40px] py-[var(--spacing-section)]">
      <Container>
        <SectionLabel className="mb-12">latest work</SectionLabel>
        <StickyStack>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </StickyStack>
      </Container>
    </ThemeScrollZone>
  )
}
