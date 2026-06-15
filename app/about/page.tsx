import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InnerHero from '@/components/shared/InnerHero'
import HoverCard from '@/components/shared/HoverCard'
import PhotoTint from '@/components/shared/PhotoTint'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'A trusted partner across technology, sourcing and trade — Innovanti Solutions.',
}

const values = [
  { title: 'Innovation',      desc: 'We embrace creativity, technology and continuous improvement.' },
  { title: 'Integrity',       desc: 'We conduct business with transparency, honesty and ethics.' },
  { title: 'Excellence',      desc: 'We strive for superior quality and professionalism throughout.' },
  { title: 'Customer Focus',  desc: 'We place our clients at the centre of everything we do.' },
]

const cardBase = { background: '#fff', border: '1px solid #e8ebf2', borderRadius: 8, padding: '28px 26px', transition: 'transform .25s ease, box-shadow .25s ease' }
const cardHover = { transform: 'translateY(-4px)', boxShadow: '0 18px 38px -22px rgba(14,24,48,0.35)' }

const responsibilities = [
  'Promoting ethical business practices',
  'Supporting local economic development',
  'Encouraging environmental sustainability',
  'Investing in innovation and skills development',
  'Building long-term stakeholder relationships',
  'Supporting community development initiatives',
]

export default function AboutPage() {
  return (
    <>
      <InnerHero
        tag="About us"
        title="A trusted partner across technology, sourcing and trade."
        subtitle="Diversified expertise in technology, strategic sourcing and trade — built on integrity, professionalism and a commitment to delivery."
      />

      {/* Story */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,7vw,88px) 32px clamp(48px,6vw,80px)' }}>
        <div className="grid-2col">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: 18, color: '#2a3350', margin: 0, fontWeight: 500 }}>
              Innovanti Solutions is a dynamic, diversified enterprise specialising in IT solutions, hardware and software services, commodity brokerage, procurement and general business services.
            </p>
            <p style={{ fontSize: 16.5, color: '#515c72', margin: 0 }}>
              We are committed to delivering innovative, reliable and cost-effective solutions that enable businesses, institutions, governments and individuals to achieve operational excellence, sustainable growth and competitive advantage.
            </p>
            <p style={{ fontSize: 16.5, color: '#515c72', margin: 0 }}>
              With a strong focus on technology, strategic sourcing and commercial facilitation, we serve as a trusted partner across sectors — bridging the gap between suppliers, manufacturers, service providers and end-users through industry expertise, market intelligence and strategic partnerships.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', aspectRatio: '4 / 4.4', boxShadow: '0 30px 60px -28px rgba(14,24,48,0.4)' }}>
            <Image src="/about-team.jpg" alt="Team collaboration" width={640} height={704} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <PhotoTint />
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section style={{ position: 'relative', background: '#f7f8fb', borderTop: '1px solid #edeff5' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(21,33,63,0.05) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,7vw,96px) 32px' }}>
          <div style={{ maxWidth: 720, marginBottom: 44 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#C8102E', marginBottom: 16 }}>Mission &amp; Values</div>
            <p className="font-display" style={{ fontWeight: 600, fontSize: 'clamp(22px,2.6vw,32px)', lineHeight: 1.22, letterSpacing: '-0.015em', color: '#15213f', margin: 0 }}>
              To empower businesses and communities with innovative technology, strategic sourcing and quality products — creating sustainable value for clients, partners and stakeholders.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 16 }}>
            {values.map(({ title, desc }) => (
              <HoverCard key={title} baseStyle={cardBase} hoverStyle={cardHover}>
                <h4 className="font-display" style={{ fontWeight: 700, fontSize: 18, color: '#15213f', margin: '0 0 8px' }}>{title}</h4>
                <p style={{ fontSize: 14.5, color: '#5b6479', margin: 0 }}>{desc}</p>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility + Quality */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,7vw,96px) 32px' }}>
        <div className="grid-2col-even">
          <div>
            <h3 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(22px,2.4vw,28px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#11182e', margin: '0 0 20px' }}>
              Sustainability &amp; corporate responsibility
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13 }}>
              {responsibilities.map(r => (
                <li key={r} style={{ fontSize: 15.5, color: '#515c72', paddingLeft: 20, position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#C8102E', fontWeight: 700 }}>•</span>{r}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', padding: 'clamp(32px,4vw,48px)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 280 }}>
            <Image src="/about-quality.jpg" alt="Quality" fill style={{ objectFit: 'cover' }} sizes="50vw" />
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg, rgba(21,33,63,0.92), rgba(14,24,48,0.86))' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(20px,2.2vw,26px)', lineHeight: 1.14, letterSpacing: '-0.015em', margin: '0 0 14px' }}>Commitment to quality</h3>
              <p style={{ fontSize: 16, color: '#c9d2e4', margin: 0 }}>We are dedicated to delivering products and services that consistently exceed expectations — maintaining high standards of quality, compliance, operational efficiency and professional conduct.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f7f8fb' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,6vw,88px) 32px' }}>
          <div className="cta-row">
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#11182e', margin: 0, maxWidth: 560 }}>
              Work with a partner you can trust.
            </h2>
            <Link href="/contact" style={{ background: '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15.5, fontWeight: 600, padding: '16px 32px', borderRadius: 4, whiteSpace: 'nowrap' as const, textDecoration: 'none', display: 'inline-block' }}>
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
