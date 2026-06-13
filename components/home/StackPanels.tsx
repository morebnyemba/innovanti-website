'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Theme = {
  bg: string
  text: string
  sub: string
  accent: string
  border: string
  surface: string
  surfaceBorder: string
}

const darkTheme = (bg: string): Theme => ({
  bg,
  text: '#ffffff',
  sub: '#aeb8d0',
  accent: '#ff7f8d',
  border: 'rgba(255,255,255,0.12)',
  surface: 'rgba(255,255,255,0.05)',
  surfaceBorder: 'rgba(255,255,255,0.12)',
})

const lightTheme: Theme = {
  bg: '#ffffff',
  text: '#11182e',
  sub: '#515c72',
  accent: '#C8102E',
  border: '#e8ebf2',
  surface: '#f7f8fb',
  surfaceBorder: '#e8ebf2',
}

type Panel = {
  n: string
  eyebrow: string
  title: string
  body: string
  theme: Theme
} & (
  | { variant: 'tags'; tags: string[] }
  | { variant: 'pillars'; pillars: { t: string; d: string }[] }
  | { variant: 'bullets'; bullets: string[] }
  | { variant: 'statement'; quote: string }
)

const panels: Panel[] = [
  {
    n: '01',
    eyebrow: 'Who we are',
    title: 'A diversified partner across technology and trade.',
    body: 'Innovanti Solutions is a dynamic, multi-sector enterprise specialising in IT solutions, hardware and software services, commodity brokerage, procurement and general trade — delivering innovative, reliable and cost-effective solutions for businesses, institutions, governments and individuals.',
    theme: darkTheme('linear-gradient(135deg, #0e1830 0%, #142544 100%)'),
    variant: 'tags',
    tags: ['IT Solutions', 'Hardware Supply & Support', 'Software Development', 'Commodity Brokerage', 'Procurement & Supply Chain', 'General Trading'],
  },
  {
    n: '02',
    eyebrow: 'Why choose Innovanti',
    title: 'Expertise, experience and market knowledge — combined.',
    body: 'We bring together technological expertise, commercial experience, procurement excellence and strategic market knowledge to deliver integrated solutions that drive measurable business success.',
    theme: lightTheme,
    variant: 'pillars',
    pillars: [
      { t: 'Technological expertise', d: 'Modern IT, security and infrastructure capability.' },
      { t: 'Commercial experience', d: 'Trading and brokerage across diverse markets.' },
      { t: 'Procurement excellence', d: 'Strategic sourcing at genuinely competitive value.' },
      { t: 'Strategic market knowledge', d: 'Intelligence that bridges suppliers and end-users.' },
    ],
  },
  {
    n: '03',
    eyebrow: 'Sustainability & responsibility',
    title: 'Business done responsibly, value shared widely.',
    body: 'We believe in conducting business responsibly — building long-term relationships and contributing to the communities and economy we operate within.',
    theme: darkTheme('linear-gradient(135deg, #0a1324 0%, #101d3a 100%)'),
    variant: 'bullets',
    bullets: [
      'Promoting ethical business practices',
      'Supporting local economic development',
      'Encouraging environmental sustainability',
      'Investing in innovation and skills development',
      'Building long-term stakeholder relationships',
      'Supporting community development initiatives',
    ],
  },
  {
    n: '04',
    eyebrow: 'Commitment to quality',
    title: 'Standards that consistently exceed expectations.',
    body: 'Innovanti Solutions is dedicated to delivering products and services that consistently exceed customer expectations — maintaining high standards of quality, compliance, operational efficiency and professional conduct across every operation.',
    theme: {
      bg: 'linear-gradient(120deg, #15213f 0%, #1f2c4a 52%, #7a1022 145%)',
      text: '#ffffff',
      sub: '#c9d2e4',
      accent: '#ff7f8d',
      border: 'rgba(255,255,255,0.14)',
      surface: 'rgba(255,255,255,0.06)',
      surfaceBorder: 'rgba(255,255,255,0.16)',
    },
    variant: 'statement',
    quote: 'Innovating Technology. Connecting Markets. Delivering Value.',
  },
]

function PanelBody({ panel }: { panel: Panel }) {
  const { theme } = panel

  if (panel.variant === 'tags') {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {panel.tags.map((tag) => (
          <span
            key={tag}
            style={{ fontSize: 14, fontWeight: 600, color: theme.sub, background: theme.surface, border: `1px solid ${theme.surfaceBorder}`, padding: '10px 16px', borderRadius: 999 }}
          >
            {tag}
          </span>
        ))}
      </div>
    )
  }

  if (panel.variant === 'pillars') {
    return (
      <div className="stack-pillars">
        {panel.pillars.map(({ t, d }, i) => (
          <div key={t} style={{ background: theme.surface, border: `1px solid ${theme.surfaceBorder}`, borderRadius: 10, padding: '20px 22px' }}>
            <div className="font-display" style={{ fontWeight: 800, fontSize: 13, color: theme.accent, marginBottom: 10 }}>{String(i + 1).padStart(2, '0')}</div>
            <h4 className="font-display" style={{ fontWeight: 700, fontSize: 16, color: theme.text, margin: '0 0 6px' }}>{t}</h4>
            <p style={{ fontSize: 14, color: theme.sub, margin: 0, lineHeight: 1.5 }}>{d}</p>
          </div>
        ))}
      </div>
    )
  }

  if (panel.variant === 'bullets') {
    return (
      <div className="stack-bullets">
        {panel.bullets.map((b) => (
          <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: theme.surface, border: `1px solid ${theme.surfaceBorder}`, borderRadius: 10, padding: '16px 18px' }}>
            <span style={{ flexShrink: 0, width: 7, height: 7, borderRadius: '50%', background: '#C8102E', marginTop: 7 }} />
            <span style={{ fontSize: 15, fontWeight: 500, color: theme.text, lineHeight: 1.45 }}>{b}</span>
          </div>
        ))}
      </div>
    )
  }

  // statement
  return (
    <div style={{ borderLeft: `3px solid ${theme.accent}`, paddingLeft: 22 }}>
      <p className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(20px,2.4vw,30px)', lineHeight: 1.18, letterSpacing: '-0.01em', color: theme.text, margin: 0 }}>
        “{panel.quote}”
      </p>
    </div>
  )
}

function StackCard({ panel, i, total }: { panel: Panel; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Earlier cards rest deeper in the pile (smaller); the top card never shrinks.
  const targetScale = 1 - (total - 1 - i) * 0.045
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const overlay = useTransform(scrollYProgress, [0, 1], [0, 0.4])

  const { theme } = panel

  return (
    <div ref={ref} style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        style={{
          scale,
          top: `calc(-6vh + ${i * 26}px)`,
          position: 'relative',
          width: '100%',
          maxWidth: 1100,
          minHeight: 'min(560px, 82vh)',
          borderRadius: 22,
          background: theme.bg,
          color: theme.text,
          border: `1px solid ${theme.border}`,
          boxShadow: '0 40px 80px -40px rgba(8,14,30,0.55)',
          overflow: 'hidden',
          transformOrigin: 'top center',
        }}
      >
        {/* dim overlay as the card gets covered */}
        <motion.div aria-hidden style={{ position: 'absolute', inset: 0, background: '#05080f', opacity: overlay, pointerEvents: 'none', zIndex: 3 }} />

        {/* subtle texture */}
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(127,144,180,0.12) 1px, transparent 0)', backgroundSize: '30px 30px', opacity: 0.5, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: 24, padding: 'clamp(28px,4.5vw,56px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: theme.accent }}>
              <span style={{ width: 26, height: 2, background: '#C8102E', display: 'block' }} />
              {panel.eyebrow}
            </div>
            <span className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(34px,5vw,64px)', lineHeight: 1, color: theme.accent, opacity: 0.25 }}>{panel.n}</span>
          </div>

          <div className="stack-card-grid">
            <div>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3.4vw,42px)', lineHeight: 1.07, letterSpacing: '-0.02em', color: theme.text, margin: '0 0 16px' }}>
                {panel.title}
              </h3>
              <p style={{ fontSize: 'clamp(15px,1.4vw,17px)', color: theme.sub, margin: 0, lineHeight: 1.6, maxWidth: 460 }}>
                {panel.body}
              </p>
            </div>
            <PanelBody panel={panel} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackPanels() {
  return (
    <section style={{ position: 'relative', background: '#f7f8fb' }}>
      {/* Intro */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,104px) 32px clamp(8px,2vw,20px)', textAlign: 'center' }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C8102E', marginBottom: 16 }}>The Innovanti story</div>
        <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: '#11182e', margin: '0 auto', maxWidth: 720 }}>
          What we stand for, layer by layer.
        </h2>
      </div>

      {/* Stacking cards */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 32px clamp(40px,6vw,80px)' }}>
        {panels.map((panel, i) => (
          <StackCard key={panel.n} panel={panel} i={i} total={panels.length} />
        ))}
      </div>
    </section>
  )
}
