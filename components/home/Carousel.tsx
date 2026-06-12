'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    tag: 'IT Infrastructure',
    title: 'Built for reliability, designed for scale',
    body: 'Modern enterprises need resilient infrastructure. We design, deploy and manage networks that grow with you.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    tag: 'Cybersecurity',
    title: 'Protecting what matters most',
    body: 'Threats evolve daily. Our proactive security posture keeps your data, systems and reputation safe.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    tag: 'Procurement',
    title: 'The right technology, at the right price',
    body: 'Leverage our vendor relationships for competitive ICT hardware and software procurement.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80',
    tag: 'Logistics & Trade',
    title: 'Connecting Zimbabwe to global markets',
    body: 'End-to-end freight, customs and commodity trading across Africa and international corridors.',
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section
      className="relative bg-navy-dark overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[520px] md:h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-navy-dark/20" />
          </motion.div>
        </AnimatePresence>

        {/* Text */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-site mx-auto px-4 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block text-brand-light text-xs font-bold uppercase tracking-widest mb-4 bg-brand/15 border border-brand/30 px-3 py-1 rounded-full">
                  {slides[current].tag}
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  {slides[current].title}
                </h2>
                <p className="mt-4 text-white/65 text-lg max-w-lg">
                  {slides[current].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-6 h-2 bg-brand' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
