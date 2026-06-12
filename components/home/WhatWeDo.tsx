'use client'

import Link from 'next/link'

const services = [
  { color: '#15213f', title: 'IT Solutions & Consulting',    desc: 'Strategy, infrastructure and digital transformation built around how you operate.' },
  { color: '#15213f', title: 'Network Solutions',            desc: 'Design, deployment and management of secure, high-performance networks.' },
  { color: '#15213f', title: 'Managed IT Services',          desc: 'Proactive support, monitoring and maintenance that keep systems running.' },
  { color: '#C8102E', title: 'Cybersecurity',                desc: 'Assessments, protection and training that safeguard your data and your people.' },
  { color: '#15213f', title: 'Procurement & Supply Chain',   desc: 'Strategic sourcing that secures quality products at competitive prices.' },
  { color: '#C8102E', title: 'Brokerage & Trading',          desc: 'Commodity brokerage and general trade connecting markets end to end.' },
]

export default function WhatWeDo() {
  return (
    <section style={{ position: 'relative', background: '#f7f8fb' }}>
      {/* Dot pattern */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(21,33,63,0.05) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,108px) 32px' }}>
        <div style={{ maxWidth: 640, marginBottom: 52 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#C8102E', marginBottom: 16 }}>What we do</div>
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: '#11182e', margin: '0 0 16px' }}>
            Integrated solutions across technology and trade.
          </h2>
          <p style={{ fontSize: 17, color: '#515c72', margin: 0 }}>
            From infrastructure and security to sourcing and brokerage — one partner bridging suppliers, manufacturers, service providers and end-users.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 18 }}>
          {services.map(({ color, title, desc }) => (
            <div key={title} style={{ background: '#fff', border: '1px solid #e8ebf2', borderRadius: 8, padding: '30px 28px', transition: 'transform .28s ease, box-shadow .28s ease, border-color .28s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 22px 44px -24px rgba(14,24,48,0.4)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#c7cddc' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; (e.currentTarget as HTMLDivElement).style.borderColor = '#e8ebf2' }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 7, background: color, marginBottom: 22 }} />
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: 19, color: '#15213f', margin: '0 0 10px' }}>{title}</h3>
              <p style={{ fontSize: 15, color: '#5b6479', margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link href="/services" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15, fontWeight: 700, color: '#C8102E', padding: 0, display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', transition: 'gap .2s ease' }}>
            View all services <span style={{ fontSize: 18 }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
