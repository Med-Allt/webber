import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-xs lowercase tracking-[0.14em] text-accent", className)}>
      {"< "}
      {children}
      {" >"}
    </p>
  )
}
