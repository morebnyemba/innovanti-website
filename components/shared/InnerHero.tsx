import { ReactNode } from 'react'

interface Props {
  title: string
  subtitle?: string
  breadcrumb?: ReactNode
}

export default function InnerHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section className="relative bg-navy-dark overflow-hidden pt-40 pb-20">
      {/* Diagonal pattern overlay */}
      <div className="absolute inset-0 bg-diag-navy opacity-60 pointer-events-none" />

      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-brand-vivid to-transparent" />

      <div className="relative max-w-site mx-auto px-4">
        {breadcrumb && (
          <div className="mb-4 text-white/40 text-sm">{breadcrumb}</div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white/60 text-lg max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
