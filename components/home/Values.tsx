'use client'

const values = [
  { n: '01', title: 'Innovation',      desc: 'Creativity, technology and continuous improvement in every solution.' },
  { n: '02', title: 'Integrity',       desc: 'Transparency, honesty and ethical responsibility in how we work.' },
  { n: '03', title: 'Excellence',      desc: 'Superior quality and professionalism across every engagement.' },
  { n: '04', title: 'Customer Focus',  desc: 'Clients at the centre of everything we plan and deliver.' },
]

export default function Values() {
  return (
    <section style={{ position: 'relative', background: '#fff' }}>
      {/* Diagonal pattern */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(135deg, rgba(21,33,63,0.025) 0 1px, transparent 1px 16px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,108px) 32px' }}>
        <div className="grid-values">
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#C8102E', marginBottom: 16 }}>Why Innovanti</div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(28px,3.6vw,42px)', lineHeight: 1.07, letterSpacing: '-0.02em', color: '#11182e', margin: '0 0 18px' }}>
              Expertise that earns trust, delivery that creates value.
            </h2>
            <p style={{ fontSize: 17, color: '#515c72', margin: 0 }}>
              We combine technical depth, commercial experience and strategic market knowledge — held to a single standard of professionalism, reliability and value creation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#e8ebf2', border: '1px solid #e8ebf2', borderRadius: 10, overflow: 'hidden' }}>
            {values.map(({ n, title, desc }) => (
              <div key={n}
                style={{ background: '#fff', padding: '32px 28px', transition: 'background .25s ease' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#f7f8fb'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = '#fff'}
              >
                <div className="font-display" style={{ fontWeight: 800, fontSize: 15, color: '#C8102E', marginBottom: 14 }}>{n}</div>
                <h4 className="font-display" style={{ fontWeight: 700, fontSize: 18, color: '#15213f', margin: '0 0 8px' }}>{title}</h4>
                <p style={{ fontSize: 14.5, color: '#5b6479', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
