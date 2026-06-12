import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InnerHero from '@/components/shared/InnerHero'
import HoverCard from '@/components/shared/HoverCard'

export const metadata: Metadata = {
  title: 'Services',
  description: 'IT consulting, cybersecurity, procurement and trade services from Innovanti Solutions.',
}

const cardBase = { border: '1px solid #e8ebf2', borderRadius: 8, padding: '26px 24px', transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease', background: '#fff' }
const cardHover = { borderColor: '#c7cddc', transform: 'translateY(-4px)', boxShadow: '0 18px 38px -22px rgba(14,24,48,0.38)' }

const techCards = [
  { title: 'IT Consulting',       items: ['IT strategy development', 'Digital transformation planning', 'Technology assessments', 'IT infrastructure design'] },
  { title: 'Network Solutions',   items: ['Network design & deployment', 'LAN / WAN implementation', 'Wireless & structured cabling', 'Monitoring & management'] },
  { title: 'Managed IT Services', items: ['Support & maintenance', 'Helpdesk & remote monitoring', 'Infrastructure & sys admin', 'Preventive maintenance'] },
  { title: 'Cybersecurity',       items: ['Security & vulnerability testing', 'Firewall & endpoint protection', 'Security awareness training', 'Data protection solutions'], alt: true },
]

const procurementCards = [
  { title: 'Strategic Sourcing', desc: 'Identifying and securing the right suppliers for quality and price.' },
  { title: 'Vendor Management',  desc: 'Competitive tendering, evaluation and supplier relationships.' },
  { title: 'Logistics & Delivery', desc: 'Coordinated supply, delivery and fulfilment to your site.' },
  { title: 'Quality Assurance',  desc: 'Compliance and standards upheld across every order.' },
]

const tradingCards = [
  { title: 'Commodity Brokerage',    desc: 'Connecting buyers and sellers across markets with integrity.' },
  { title: 'General Trading',        desc: 'Sourcing and supplying goods across diverse categories.' },
  { title: 'Hardware Supply',        desc: 'Procurement and support for IT and business hardware.' },
  { title: 'Software Implementation', desc: 'Development and deployment aligned to your workflows.' },
]

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        tag="Services"
        title="Capabilities that span technology and trade."
        subtitle="A single, accountable partner across IT, security, procurement and commercial facilitation — tailored to the realities of your sector."
      />

      {/* Technology */}
      <section style={{ borderTop: '1px solid #edeff5' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>01 / TECHNOLOGY</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>Information Technology Solutions</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: '0 0 20px' }}>Comprehensive IT services that help organisations leverage technology for efficiency, security and growth.</p>
              <div style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=75" alt="Technology" width={640} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {techCards.map(({ title, items, alt }) => (
                <HoverCard key={title} baseStyle={{ ...cardBase, background: alt ? '#fbfbfd' : '#fff' }} hoverStyle={cardHover}>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 17, color: '#15213f', margin: '0 0 14px' }}>{title}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {items.map(item => (
                      <li key={item} style={{ fontSize: 14.5, color: '#5b6479', paddingLeft: 16, position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#C8102E' }}>•</span>{item}
                      </li>
                    ))}
                  </ul>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section style={{ borderTop: '1px solid #edeff5', background: '#f7f8fb' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'start' }}>
            <div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>02 / SOURCING</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>Procurement &amp; Supply Chain</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: 0 }}>Strategic procurement that helps organisations obtain quality products and services at competitive prices.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 16 }}>
              {procurementCards.map(({ title, desc }) => (
                <HoverCard key={title} baseStyle={cardBase} hoverStyle={cardHover}>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 16, color: '#15213f', margin: '0 0 8px' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#5b6479', margin: 0 }}>{desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trading */}
      <section style={{ borderTop: '1px solid #edeff5' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'start' }}>
            <div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>03 / TRADE</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>Trading &amp; Commodity Brokerage</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: 0 }}>Bridging suppliers, manufacturers and end-users with market intelligence and trusted facilitation.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 16 }}>
              {tradingCards.map(({ title, desc }) => (
                <HoverCard key={title} baseStyle={cardBase} hoverStyle={cardHover}>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 16, color: '#15213f', margin: '0 0 8px' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#5b6479', margin: 0 }}>{desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: '#15213f', color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,6vw,88px) 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' as const }}>
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, maxWidth: 560 }}>
            Have a requirement in mind? Let&apos;s scope it.
          </h2>
          <Link href="/contact" style={{ background: '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15.5, fontWeight: 600, padding: '16px 32px', borderRadius: 4, whiteSpace: 'nowrap' as const, textDecoration: 'none', display: 'inline-block' }}>
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
