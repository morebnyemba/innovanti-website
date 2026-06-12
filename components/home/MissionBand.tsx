export default function MissionBand() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0e1830', color: '#fff' }}>
      {/* Parallax earth image — CSS only for SSR safety */}
      <div aria-hidden style={{ position: 'absolute', left: 0, right: 0, top: '-22%', height: '144%', backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=75')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5 }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,24,48,0.82), rgba(14,24,48,0.9))', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,9vw,128px) 32px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }} className="mission-grid">
        <div className="font-display" style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#ff6b7a', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Our Mission
        </div>
        <p className="font-display" style={{ fontWeight: 600, fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.2, letterSpacing: '-0.015em', color: '#f3f5fa', margin: 0, maxWidth: 880 }}>
          To provide innovative technology, strategic sourcing, commodity brokerage and quality products that empower businesses and communities — creating{' '}
          <span style={{ color: '#ff7f8d' }}>sustainable value</span>{' '}
          for clients, partners and stakeholders.
        </p>
      </div>
    </section>
  )
}
