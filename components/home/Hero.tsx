'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiShield, FiServer, FiTruck, FiChevronDown } from 'react-icons/fi'
import Grain from '@/components/shared/Grain'
import TypedHeadline from '@/components/home/TypedHeadline'

const NODES = [
  { cx: 80, cy: 90, r: 5, fill: '#7fa0e0', delay: 0 },
  { cx: 190, cy: 60, r: 4, fill: '#9fb6ea', delay: 1.1 },
  { cx: 430, cy: 80, r: 5.5, fill: '#ff7f8d', delay: 2.2 },
  { cx: 470, cy: 220, r: 4, fill: '#9fb6ea', delay: 3.0 },
  { cx: 420, cy: 400, r: 5, fill: '#7fa0e0', delay: 3.8 },
  { cx: 250, cy: 450, r: 4.5, fill: '#ff7f8d', delay: 1.6 },
  { cx: 90, cy: 380, r: 5, fill: '#9fb6ea', delay: 2.7 },
  { cx: 50, cy: 210, r: 4, fill: '#7fa0e0', delay: 0.6 },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const floatCards = [
  { Icon: FiShield, title: 'Cybersecurity', meta: 'Assess · Protect · Train', top: 8, left: 96, accent: '#ff7f8d', delay: 0.5, dur: 6 },
  { Icon: FiServer, title: 'Infrastructure', meta: 'Networks & managed IT', top: 168, left: 188, accent: '#7fa0e0', delay: 0.7, dur: 7 },
  { Icon: FiTruck, title: 'Procurement', meta: 'Sourced & delivered', top: 320, left: 40, accent: '#9fb6ea', delay: 0.9, dur: 6.6 },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [ctaHover, setCtaHover] = useState(false)
  const reduce = useReducedMotion()

  // Scroll-linked parallax: the floating visual drifts as the hero scrolls past.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90])

  // Cursor-driven parallax: the constellation tilts and drifts toward the pointer.
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const spring = { stiffness: 90, damping: 18, mass: 0.6 }
  const rotateY = useSpring(useTransform(mvX, [-0.5, 0.5], [-11, 11]), spring)
  const rotateX = useSpring(useTransform(mvY, [-0.5, 0.5], [9, -9]), spring)
  const driftX = useSpring(useTransform(mvX, [-0.5, 0.5], [-18, 18]), spring)

  const handlePointer = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mvX.set((e.clientX - r.left) / r.width - 0.5)
    mvY.set((e.clientY - r.top) / r.height - 0.5)
  }
  const resetPointer = () => { mvX.set(0); mvY.set(0) }

  return (
    <section ref={ref} onMouseMove={handlePointer} onMouseLeave={resetPointer} style={{ position: 'relative', overflow: 'hidden', background: '#0a1324', color: '#fff', paddingTop: 120 }}>
      {/* Gradient overlay */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(900px 520px at 80% 6%, rgba(46,78,150,0.55), transparent 60%), radial-gradient(720px 520px at 4% 100%, rgba(200,16,46,0.20), transparent 62%), linear-gradient(180deg, #0b1426 0%, #0a1324 100%)', pointerEvents: 'none' }} />

      {/* CSS grid pattern */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '62px 62px', WebkitMaskImage: 'radial-gradient(circle at 74% 38%, #000 0%, transparent 76%)', maskImage: 'radial-gradient(circle at 74% 38%, #000 0%, transparent 76%)', pointerEvents: 'none' }} />

      {/* Drifting glow orb */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -140, right: '3%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(70,110,200,0.30), transparent 65%)', pointerEvents: 'none' }}
      />

      {/* Desktop floating visual — absolute, never affects mobile flow */}
      <motion.div aria-hidden className="hidden lg:block" style={{ position: 'absolute', top: '50%', right: 'max(3%, calc(50% - 560px + 12px))', width: 470, height: 470, marginTop: -216, zIndex: 1, y: reduce ? 0 : visualY, x: reduce ? 0 : driftX, rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformPerspective: 1200 }}>
        {/* central illumination */}
        <motion.div animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.08, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: 330, height: 330, marginTop: -165, marginLeft: -165, borderRadius: '50%', background: 'radial-gradient(circle, rgba(110,150,240,0.45), rgba(110,150,240,0.12) 45%, transparent 70%)', filter: 'blur(8px)' }} />
        <motion.div animate={{ opacity: [0.4, 0.75, 0.4] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: 160, height: 160, marginTop: -80, marginLeft: -80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,16,46,0.5), transparent 68%)', filter: 'blur(6px)' }} />

        {/* rotating rings */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: 380, height: 380, marginTop: -190, marginLeft: -190, borderRadius: '50%', border: '1px dashed rgba(150,180,240,0.30)', boxShadow: '0 0 30px rgba(120,150,230,0.18), inset 0 0 30px rgba(120,150,230,0.10)' }} />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: 250, height: 250, marginTop: -125, marginLeft: -125, borderRadius: '50%', border: '1px solid rgba(255,127,141,0.38)', boxShadow: '0 0 34px rgba(200,16,46,0.28), inset 0 0 24px rgba(200,16,46,0.12)' }} />

        {/* constellation accent — illuminated */}
        <svg viewBox="0 0 520 480" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <filter id="nodeGlow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="3.2" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <g stroke="rgba(150,180,240,0.30)" strokeWidth="1.1" filter="url(#nodeGlow)">
            {NODES.map((n, i) => (
              <line key={i} x1="260" y1="240" x2={n.cx} y2={n.cy} />
            ))}
          </g>
          {NODES.map((n, i) => (
            <motion.circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} filter="url(#nodeGlow)"
              animate={{ opacity: [0.55, 1, 0.55], r: [n.r, n.r * 1.7, n.r] }}
              transition={{ duration: 3, repeat: Infinity, delay: n.delay, ease: 'easeInOut' }} />
          ))}
          <motion.circle cx="260" cy="240" r="8" fill="#C8102E" filter="url(#nodeGlow)"
            animate={{ r: [7, 10, 7], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }} />
        </svg>

        {/* cards */}
        {floatCards.map(({ Icon, title, meta, top, left, accent, delay, dur }) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'absolute', top, left }}
          >
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }} style={{ position: 'relative' }}>
              {/* illumination halo behind the card */}
              <motion.span aria-hidden animate={{ opacity: [0.35, 0.7, 0.35] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
                style={{ position: 'absolute', inset: -22, borderRadius: 28, background: `radial-gradient(circle at 26% 40%, ${accent}66, transparent 70%)`, filter: 'blur(16px)', zIndex: 0 }} />
              {/* glass card */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 14, width: 244, padding: '15px 17px', borderRadius: 16, background: 'rgba(18,29,55,0.74)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', boxShadow: `0 24px 48px -24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.14), 0 0 0 1px ${accent}22` }}>
                <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 11, background: `radial-gradient(circle at 30% 25%, ${accent}40, rgba(255,255,255,0.05))`, border: `1px solid ${accent}55`, color: accent, boxShadow: `0 0 18px -2px ${accent}80` }}>
                  <Icon size={21} />
                </span>
                <div>
                  <div className="font-display" style={{ fontWeight: 700, fontSize: 15.5, color: '#fff', marginBottom: 3 }}>{title}</div>
                  <div style={{ fontSize: 12.5, color: '#9aa6c4' }}>{meta}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <Grain opacity={0.05} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(24px,3.5vw,48px) 32px clamp(28px,3vw,40px)' }}>
        <motion.div variants={container} initial="hidden" animate="show" style={{ maxWidth: 640 }}>
          <motion.h1 variants={item} className="font-display" aria-label="Innovating technology. Connecting markets. Delivering value." style={{ fontWeight: 800, fontSize: 'clamp(38px,5.6vw,74px)', lineHeight: 1.03, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 28px', minHeight: '2.15em' }}>
            <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
              Innovating technology. Connecting markets. Delivering value.
            </span>
            <TypedHeadline phrases={['Innovating Technology', 'Connecting Markets', 'Delivering Value']} />
          </motion.h1>

          <motion.p variants={item} style={{ fontSize: 'clamp(16px,1.4vw,19px)', color: '#aeb8d0', maxWidth: 540, margin: '0 0 38px', lineHeight: 1.6 }}>
            Innovanti Solutions is a diversified partner in IT, cybersecurity, procurement and trade — helping businesses, institutions and governments operate with confidence and grow with purpose.
          </motion.p>

          <motion.div variants={item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact"
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: ctaHover ? '#a50d26' : '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15, fontWeight: 600, padding: '16px 30px', borderRadius: 6, textDecoration: 'none', transition: 'background .2s ease, box-shadow .2s ease, transform .2s ease', transform: ctaHover ? 'translateY(-2px)' : 'none', boxShadow: ctaHover ? '0 18px 36px -16px rgba(200,16,46,0.7)' : '0 10px 28px -18px rgba(200,16,46,0.6)' }}
            >
              Request a proposal
              <FiArrowRight size={18} style={{ transition: 'transform .25s ease', transform: ctaHover ? 'translateX(4px)' : 'none' }} />
            </Link>
            <Link href="/services"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.22)', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15, fontWeight: 600, padding: '16px 30px', borderRadius: 6, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'background .2s ease, border-color .2s ease' }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'rgba(255,255,255,0.1)'; el.style.borderColor = 'rgba(255,255,255,0.4)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'rgba(255,255,255,0.05)'; el.style.borderColor = 'rgba(255,255,255,0.22)' }}
            >
              Explore services
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: 'clamp(48px,6vw,82px)', paddingTop: 26, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6b769a' }}>Trusted across</span>
          <div style={{ display: 'flex', gap: 'clamp(14px,2.4vw,30px)', flexWrap: 'wrap', alignItems: 'center' }}>
            {['Government', 'Institutions', 'Enterprise', 'SMEs'].map((label, i) => (
              <span key={label} style={{ display: 'contents' }}>
                {i > 0 && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C8102E', display: 'block' }} />}
                <span className="font-display" style={{ fontWeight: 600, fontSize: 'clamp(15px,1.4vw,18px)', color: '#c9d2e4' }}>{label}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <div className="hidden md:flex justify-center" style={{ marginTop: 'clamp(28px,3vw,38px)' }}>
          <motion.div
            animate={reduce ? {} : { y: [0, 7, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, color: '#6b769a' }}
          >
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
            <FiChevronDown size={18} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
