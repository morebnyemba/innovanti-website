import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import InnerHero from '@/components/shared/InnerHero'
import HoverCard from '@/components/shared/HoverCard'
import Faq from '@/components/shared/Faq'
import Grain from '@/components/shared/Grain'
import PhotoTint from '@/components/shared/PhotoTint'
import { getDepartment } from './departments'

export const metadata: Metadata = {
  title: 'Services',
  description: 'IT consulting, cybersecurity, procurement and trade services from Innovanti Solutions.',
}

const cardBase = { border: '1px solid #e8ebf2', borderRadius: 8, padding: '26px 24px', transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease', background: '#fff' }
const cardHover = { borderColor: '#c7cddc', transform: 'translateY(-4px)', boxShadow: '0 18px 38px -22px rgba(14,24,48,0.38)' }

const exploreLink = { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14.5, fontWeight: 700, color: '#C8102E', textDecoration: 'none', marginTop: 18 } as const

const tech = getDepartment('technology')!
const procurement = getDepartment('procurement')!
const trading = getDepartment('trading')!

const generalFaqs = [
  { q: 'Do you work across both technology and trade, or just one?', a: 'Both. Innovanti is a single, accountable partner spanning IT and cybersecurity, procurement and supply chain, and trading and brokerage — so related needs can be handled together.' },
  { q: 'Where are you based and who do you serve?', a: 'We are based in Harare, Zimbabwe, and work with organisations of all sizes across multiple sectors.' },
  { q: 'How do engagements usually start?', a: 'With a conversation. We scope your requirement, then propose an approach sized to your goals and budget — request a proposal to begin.' },
  { q: 'Can you combine services from different divisions?', a: 'Yes. Many clients combine, for example, IT projects with hardware supply and procurement under one coordinated engagement.' },
  { q: 'What are your operating hours?', a: 'Monday to Friday, 08:00–17:00. Managed-service clients also benefit from ongoing monitoring and defined response targets.' },
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
          <div className="grid-sidebar">
            <div className="sticky-col" style={{ position: 'sticky', top: 100 }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>{tech.index} / {tech.eyebrow.toUpperCase()}</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>{tech.title}</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: '0 0 20px' }}>Comprehensive IT services that help organisations leverage technology for efficiency, security and growth.</p>
              <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3' }}>
                <Image src={tech.image!} alt={tech.name} width={640} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <PhotoTint />
              </div>
              <Link href={`/services/${tech.slug}`} style={exploreLink}>Explore {tech.name} <FiArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {tech.capabilities.map(({ title, items }, i) => (
                <HoverCard key={title} baseStyle={{ ...cardBase, background: i === 3 ? '#fbfbfd' : '#fff' }} hoverStyle={cardHover}>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 17, color: '#15213f', margin: '0 0 14px' }}>{title}</h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {items!.map(item => (
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
          <div className="grid-sidebar">
            <div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>{procurement.index} / {procurement.eyebrow.toUpperCase()}</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>Procurement &amp; Supply Chain</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: 0 }}>Strategic procurement that helps organisations obtain quality products and services at competitive prices.</p>
              <Link href={`/services/${procurement.slug}`} style={exploreLink}>Explore {procurement.name} <FiArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 16 }}>
              {procurement.capabilities.map(({ title, desc }) => (
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
          <div className="grid-sidebar">
            <div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>{trading.index} / {trading.eyebrow.toUpperCase()}</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>Trading &amp; Commodity Brokerage</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: 0 }}>Bridging suppliers, manufacturers and end-users with market intelligence and trusted facilitation.</p>
              <Link href={`/services/${trading.slug}`} style={exploreLink}>Explore {trading.name} <FiArrowRight size={16} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 16 }}>
              {trading.capabilities.map(({ title, desc }) => (
                <HoverCard key={title} baseStyle={cardBase} hoverStyle={cardHover}>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 16, color: '#15213f', margin: '0 0 8px' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#5b6479', margin: 0 }}>{desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ borderTop: '1px solid #edeff5', background: '#f7f8fb' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 32px' }}>
          <div className="grid-sidebar">
            <div className="sticky-col" style={{ position: 'sticky', top: 100 }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>FAQ</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>Frequently asked questions</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: '0 0 20px' }}>A few common questions about working with us. For something specific to your sector, get in touch.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14.5, fontWeight: 700, color: '#C8102E', textDecoration: 'none' }}>
                Talk to us <FiArrowRight size={16} />
              </Link>
            </div>
            <Faq items={generalFaqs} />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#15213f', color: '#fff' }}>
        <Grain opacity={0.07} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,6vw,88px) 32px' }}>
          <div className="cta-row">
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, maxWidth: 560 }}>
              Have a requirement in mind? Let&apos;s scope it.
            </h2>
            <Link href="/contact" style={{ background: '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15.5, fontWeight: 600, padding: '16px 32px', borderRadius: 4, whiteSpace: 'nowrap' as const, textDecoration: 'none', display: 'inline-block' }}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
