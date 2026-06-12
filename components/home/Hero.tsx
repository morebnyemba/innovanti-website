'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const NODES = [
  { cx: 80,  cy: 90,  r: 5,   fill: '#7fa0e0', delay: 0 },
  { cx: 190, cy: 60,  r: 4,   fill: '#9fb6ea', delay: 1.1 },
  { cx: 430, cy: 80,  r: 5.5, fill: '#ff7f8d', delay: 2.2 },
  { cx: 470, cy: 220, r: 4,   fill: '#9fb6ea', delay: 3.0 },
  { cx: 420, cy: 400, r: 5,   fill: '#7fa0e0', delay: 3.8 },
  { cx: 250, cy: 450, r: 4.5, fill: '#ff7f8d', delay: 1.6 },
  { cx: 90,  cy: 380, r: 5,   fill: '#9fb6ea', delay: 2.7 },
  { cx: 50,  cy: 210, r: 4,   fill: '#7fa0e0', delay: 0.6 },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section ref={ref} style={{ position: 'relative', overflow: 'hidden', background: '#0a1324', color: '#fff', paddingTop: 120 }}>
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

      {/* Constellation SVG — right side, hidden on mobile */}
      <svg aria-hidden viewBox="0 0 520 480" width="520" height="480"
        className="hidden md:block"
        style={{ position: 'absolute', top: '50%', right: -30, transform: 'translateY(-50%)', maxWidth: '47%', opacity: 0.95, pointerEvents: 'none' }}
      >
        <g stroke="rgba(150,180,240,0.26)" strokeWidth="1.2">
          <line x1="260" y1="240" x2="80"  y2="90"  /><line x1="260" y1="240" x2="190" y2="60"  />
          <line x1="260" y1="240" x2="430" y2="80"  /><line x1="260" y1="240" x2="470" y2="220" />
          <line x1="260" y1="240" x2="420" y2="400" /><line x1="260" y1="240" x2="250" y2="450" />
          <line x1="260" y1="240" x2="90"  y2="380" /><line x1="260" y1="240" x2="50"  y2="210" />
          <line x1="80"  y1="90"  x2="190" y2="60"  /><line x1="430" y1="80"  x2="470" y2="220" />
          <line x1="420" y1="400" x2="250" y2="450" /><line x1="90"  y1="380" x2="50"  y2="210" />
        </g>
        <circle cx="260" cy="240" r="34" fill="none" stroke="rgba(200,16,46,0.4)" strokeWidth="1.4" />
        <circle cx="260" cy="240" r="56" fill="none" stroke="rgba(150,180,240,0.16)" strokeWidth="1" />
        {NODES.map((n, i) => (
          <motion.circle
            key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill}
            animate={{ opacity: [0.5, 1, 0.5], r: [n.r, n.r * 1.6, n.r] }}
            transition={{ duration: 3, repeat: Infinity, delay: n.delay, ease: 'easeInOut' }}
          />
        ))}
        <circle cx="260" cy="240" r="9" fill="#C8102E" />
      </svg>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,9vw,126px) 32px clamp(28px,3vw,40px)' }}>
        <div style={{ maxWidth: 690 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#ff7f8d', marginBottom: 26 }}>
            <span style={{ width: 26, height: 2, background: '#C8102E', display: 'block' }} />
            Harare, Zimbabwe · Multi-sector enterprise
          </div>

          <h1 className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(40px,5.6vw,74px)', lineHeight: 1.02, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 28px' }}>
            Innovating technology.<br />
            Connecting markets.<br />
            <span style={{ color: '#ff7f8d' }}>Delivering value.</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px,1.4vw,19px)', color: '#aeb8d0', maxWidth: 540, margin: '0 0 38px', lineHeight: 1.6 }}>
            Innovanti Solutions is a diversified partner in IT, cybersecurity, procurement and trade — helping businesses, institutions and governments operate with confidence and grow with purpose.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const }}>
            <Link href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15, fontWeight: 600, padding: '16px 30px', borderRadius: 4, textDecoration: 'none', transition: 'background .2s ease' }}
            >
              Request a proposal →
            </Link>
            <Link href="/services"
              style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.22)', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15, fontWeight: 600, padding: '16px 30px', borderRadius: 4, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Explore services
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{ marginTop: 'clamp(48px,6vw,82px)', paddingTop: 26, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' as const, justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#6b769a' }}>Trusted across</span>
          <div style={{ display: 'flex', gap: 'clamp(14px,2.4vw,30px)', flexWrap: 'wrap' as const, alignItems: 'center' }}>
            {['Government', 'Institutions', 'Enterprise', 'SMEs'].map((label, i) => (
              <span key={label} style={{ display: 'contents' }}>
                {i > 0 && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C8102E', display: 'block' }} />}
                <span className="font-display" style={{ fontWeight: 600, fontSize: 'clamp(15px,1.4vw,18px)', color: '#c9d2e4' }}>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
