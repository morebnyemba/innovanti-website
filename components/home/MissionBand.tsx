'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function MissionBand() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative overflow-hidden py-28">
      {/* Parallax image */}
      <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
          alt=""
          fill
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-dark/85 pointer-events-none" />
      <div className="absolute inset-0 bg-diag-navy pointer-events-none" />

      {/* Red top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

      <div className="relative max-w-site mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-brand text-xs font-bold uppercase tracking-widest">Our Mission</span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
            Empowering growth through technology
          </h2>
          <p className="text-white/60 mt-5 text-lg leading-relaxed">
            We exist to bridge the technology gap for African businesses — delivering enterprise-grade
            solutions that were once only accessible to the largest organisations.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 bg-brand hover:bg-brand-hover text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand/30"
          >
            Our story →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'IT Solutions', value: 'Enterprise grade' },
            { label: 'Security', value: '24/7 monitoring' },
            { label: 'Procurement', value: 'Global supply chain' },
            { label: 'Presence', value: 'Pan-Africa reach' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="text-brand-light text-xs font-semibold uppercase tracking-wider mb-1">{label}</div>
              <div className="text-white font-display font-bold text-lg">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
