'use client'

import Link from 'next/link'

export default function HomeCta() {
  return (
    <section style={{ background: '#f7f8fb' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(60px,7vw,96px) 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 36, flexWrap: 'wrap' as const }}>
        <div>
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#11182e', margin: '0 0 10px' }}>
            Let&apos;s build what&apos;s next, together.
          </h2>
          <p style={{ fontSize: 17, color: '#515c72', margin: 0 }}>
            Tell us what you need — we&apos;ll respond with a clear, considered proposal.
          </p>
        </div>
        <Link href="/contact"
          style={{ background: '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15.5, fontWeight: 600, padding: '16px 32px', borderRadius: 4, whiteSpace: 'nowrap' as const, textDecoration: 'none', display: 'inline-block', transition: 'background .2s ease' }}
          onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = '#a50d26'}
          onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = '#C8102E'}
        >
          Request a proposal
        </Link>
      </div>
    </section>
  )
}
