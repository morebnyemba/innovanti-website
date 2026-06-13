'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import { FiCompass, FiShare2, FiActivity, FiShield, FiTruck, FiTrendingUp, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'

type Accent = 'navy' | 'red'

const services: { Icon: IconType; accent: Accent; title: string; desc: string }[] = [
  { Icon: FiCompass, accent: 'navy', title: 'IT Solutions & Consulting', desc: 'Strategy, infrastructure and digital transformation built around how you operate.' },
  { Icon: FiShare2, accent: 'navy', title: 'Network Solutions', desc: 'Design, deployment and management of secure, high-performance networks.' },
  { Icon: FiActivity, accent: 'navy', title: 'Managed IT Services', desc: 'Proactive support, monitoring and maintenance that keep systems running.' },
  { Icon: FiShield, accent: 'red', title: 'Cybersecurity', desc: 'Assessments, protection and training that safeguard your data and your people.' },
  { Icon: FiTruck, accent: 'navy', title: 'Procurement & Supply Chain', desc: 'Strategic sourcing that secures quality products at competitive prices.' },
  { Icon: FiTrendingUp, accent: 'red', title: 'Brokerage & Trading', desc: 'Commodity brokerage and general trade connecting markets end to end.' },
]

const tileBg: Record<Accent, string> = {
  navy: 'linear-gradient(135deg, #1f2c4a 0%, #15213f 100%)',
  red: 'linear-gradient(135deg, #e01435 0%, #C8102E 100%)',
}
const accentColor: Record<Accent, string> = { navy: '#15213f', red: '#C8102E' }
const accentGlow: Record<Accent, string> = {
  navy: '0 26px 50px -26px rgba(21,33,63,0.45)',
  red: '0 26px 50px -24px rgba(200,16,46,0.42)',
}

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const card = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function ServiceCard({ Icon, accent, title, desc }: typeof services[number]) {
  const [hover, setHover] = useState(false)
  return (
    <motion.div variants={card}>
      <Link
        href="/services"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ position: 'relative', display: 'block', background: '#fff', border: `1px solid ${hover ? '#c7cddc' : '#e8ebf2'}`, borderRadius: 14, padding: '30px 28px', textDecoration: 'none', overflow: 'hidden', transition: 'transform .28s ease, box-shadow .28s ease, border-color .28s ease', transform: hover ? 'translateY(-6px)' : 'none', boxShadow: hover ? accentGlow[accent] : '0 1px 2px rgba(14,24,48,0.03)' }}
      >
        {/* top accent line */}
        <span aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: tileBg[accent], opacity: hover ? 1 : 0, transition: 'opacity .28s ease' }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 22 }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 13, background: tileBg[accent], color: '#fff', boxShadow: hover ? accentGlow[accent] : 'none', transition: 'transform .28s ease, box-shadow .28s ease', transform: hover ? 'scale(1.06) rotate(-3deg)' : 'none' }}>
            <Icon size={24} />
          </span>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: '50%', color: accentColor[accent], background: hover ? 'rgba(200,16,46,0.08)' : 'transparent', transition: 'opacity .28s ease, transform .28s ease, background .28s ease', opacity: hover ? 1 : 0, transform: hover ? 'translate(0,0)' : 'translate(-4px,4px)' }}>
            <FiArrowUpRight size={19} />
          </span>
        </div>

        <h3 className="font-display" style={{ fontWeight: 700, fontSize: 19, color: '#15213f', margin: '0 0 10px' }}>{title}</h3>
        <p style={{ fontSize: 15, color: '#5b6479', margin: 0, lineHeight: 1.55 }}>{desc}</p>
      </Link>
    </motion.div>
  )
}

export default function WhatWeDo() {
  return (
    <section style={{ position: 'relative', background: '#f7f8fb' }}>
      {/* Dot pattern */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(21,33,63,0.05) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,108px) 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 28, marginBottom: 52, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8102E', marginBottom: 16 }}>
              <span style={{ width: 26, height: 2, background: '#C8102E', display: 'block' }} />
              What we do
            </div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: '#11182e', margin: '0 0 16px' }}>
              Integrated solutions across technology and trade.
            </h2>
            <p style={{ fontSize: 17, color: '#515c72', margin: 0 }}>
              From infrastructure and security to sourcing and brokerage — one partner bridging suppliers, manufacturers, service providers and end-users.
            </p>
          </div>
          <Link href="/services" className="hidden md:inline-flex"
            style={{ alignItems: 'center', gap: 9, fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14.5, fontWeight: 700, color: '#15213f', background: '#fff', border: '1px solid #e1e5ef', borderRadius: 999, padding: '12px 20px', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'border-color .2s ease, box-shadow .2s ease' }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#c7cddc'; el.style.boxShadow = '0 10px 24px -16px rgba(14,24,48,0.4)' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = '#e1e5ef'; el.style.boxShadow = 'none' }}
          >
            All services <FiArrowRight size={16} />
          </Link>
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px 0px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 18 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>

        <div style={{ marginTop: 40 }} className="md:hidden">
          <Link href="/services" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15, fontWeight: 700, color: '#C8102E', padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            View all services <FiArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}
