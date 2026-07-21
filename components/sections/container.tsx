import { cn } from "@/lib/utils"

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-12", className)}>
      {children}
    </div>
  )
}
