'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const DOTS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  cx: 8 + (i * 73) % 92,
  cy: 5 + (i * 57) % 90,
  r: 1.5 + (i % 3) * 0.8,
  delay: (i * 0.4) % 3,
}))

const LINES = [
  [0, 3], [3, 7], [7, 11], [11, 15], [15, 0],
  [1, 5], [5, 9], [9, 13], [2, 6], [6, 10],
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-navy-dark">
      {/* City skyline image with parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
          alt=""
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/40 to-navy-dark/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/70 via-transparent to-navy-dark/30 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 bg-dot-navy bg-dot-md opacity-40 pointer-events-none"
        style={{ backgroundSize: '62px 62px' }}
      />

      {/* Drifting glow */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Constellation SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" aria-hidden>
        {LINES.map(([a, b], i) => (
          <line
            key={i}
            x1={`${DOTS[a].cx}%`} y1={`${DOTS[a].cy}%`}
            x2={`${DOTS[b].cx}%`} y2={`${DOTS[b].cy}%`}
            stroke="rgba(200,16,46,0.4)" strokeWidth="0.5"
          />
        ))}
        {DOTS.map((d) => (
          <motion.circle
            key={d.id}
            cx={`${d.cx}%`} cy={`${d.cy}%`} r={d.r}
            fill="rgba(200,16,46,0.7)"
            animate={{ opacity: [0.4, 1, 0.4], r: [d.r, d.r * 1.6, d.r] }}
            transition={{ duration: 3 + d.delay, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative max-w-site mx-auto px-4 pt-28 pb-20 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 text-brand-light text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          Harare, Zimbabwe
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] max-w-4xl text-balance"
        >
          Technology that{' '}
          <span className="text-brand">drives</span>{' '}
          your business forward
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-white/65 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Innovanti Solutions delivers IT, cybersecurity, procurement and trade services
          to businesses, institutions and governments across Zimbabwe and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5"
          >
            Explore our services →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-wrap gap-8"
        >
          {[
            { value: '10+', label: 'Years experience' },
            { value: '200+', label: 'Clients served' },
            { value: '6', label: 'Service verticals' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-3xl font-extrabold text-white">{value}</div>
              <div className="text-white/50 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
