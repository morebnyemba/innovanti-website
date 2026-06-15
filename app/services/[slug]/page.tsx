import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiArrowLeft, FiArrowUpRight, FiCheck } from 'react-icons/fi'
import InnerHero from '@/components/shared/InnerHero'
import HoverCard from '@/components/shared/HoverCard'
import Faq from '@/components/shared/Faq'
import Grain from '@/components/shared/Grain'
import PhotoTint from '@/components/shared/PhotoTint'
import { departments, departmentSlugs, getDepartment } from '../departments'

const cardBase = { border: '1px solid #e8ebf2', borderRadius: 8, padding: '26px 24px', transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease', background: '#fff' }
const cardHover = { borderColor: '#c7cddc', transform: 'translateY(-4px)', boxShadow: '0 18px 38px -22px rgba(14,24,48,0.38)' }

export function generateStaticParams() {
  return departmentSlugs.map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const dept = getDepartment(slug)
  if (!dept) return { title: 'Services' }
  return {
    title: dept.title,
    description: dept.intro,
  }
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dept = getDepartment(slug)
  if (!dept) notFound()

  const others = departments.filter((d) => d.slug !== dept.slug)

  return (
    <>
      <InnerHero tag={dept.eyebrow} title={dept.heroTitle} subtitle={dept.intro} />

      {/* Overview + capabilities */}
      <section style={{ borderTop: '1px solid #edeff5' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,5vw,72px) 32px clamp(48px,6vw,80px)' }}>
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14, fontWeight: 600, color: '#5b6479', textDecoration: 'none', marginBottom: 36 }}>
            <FiArrowLeft size={15} /> All services
          </Link>

          <div className="grid-sidebar">
            <div className="sticky-col" style={{ position: 'sticky', top: 100 }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>{dept.index} / {dept.eyebrow.toUpperCase()}</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>{dept.title}</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: '0 0 14px' }}>{dept.intro}</p>
              <p style={{ fontSize: 14.5, color: '#6b7488', margin: '0 0 20px', lineHeight: 1.6 }}>{dept.overview}</p>
              {dept.image ? (
                <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3' }}>
                  <Image src={dept.image} alt={dept.name} width={640} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <PhotoTint />
                </div>
              ) : (
                <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '4/3', background: 'linear-gradient(135deg, #1f2c4a 0%, #15213f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)', backgroundSize: '22px 22px' }} />
                  <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 92, height: 92, borderRadius: 22, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff' }}>
                    <dept.Icon size={40} />
                  </span>
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 16 }}>
              {dept.capabilities.map((cap) => (
                <HoverCard key={cap.title} baseStyle={cardBase} hoverStyle={cardHover}>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 17, color: '#15213f', margin: cap.items ? '0 0 14px' : '0 0 8px' }}>{cap.title}</h3>
                  {cap.items ? (
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                      {cap.items.map((item) => (
                        <li key={item} style={{ fontSize: 14.5, color: '#5b6479', paddingLeft: 16, position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#C8102E' }}>•</span>{item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: 14, color: '#5b6479', margin: 0 }}>{cap.desc}</p>
                  )}
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div style={{ marginTop: 'clamp(40px,5vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 1, background: '#e8ebf2', border: '1px solid #e8ebf2', borderRadius: 12, overflow: 'hidden' }}>
            {dept.stats.map((stat) => (
              <div key={stat.label} style={{ background: '#fff', padding: '26px 24px' }}>
                <div className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(26px,3vw,32px)', letterSpacing: '-0.02em', color: '#15213f', marginBottom: 6 }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: '#5b6479', lineHeight: 1.45 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section style={{ borderTop: '1px solid #edeff5', background: '#0a1324', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', WebkitMaskImage: 'radial-gradient(circle at 80% 0%, #000, transparent 70%)', maskImage: 'radial-gradient(circle at 80% 0%, #000, transparent 70%)' }} />
        <Grain opacity={0.06} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 32px' }}>
          <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#ff7f8d', marginBottom: 14 }}>HOW WE WORK</div>
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,36px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 40px', maxWidth: 560 }}>A clear path from first conversation to delivery.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 18 }}>
            {dept.approach.map((step, i) => (
              <div key={step.title} style={{ position: 'relative', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12, padding: '24px 22px' }}>
                <div className="font-display" style={{ fontWeight: 800, fontSize: 14, color: '#C8102E', marginBottom: 14 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-display" style={{ fontWeight: 700, fontSize: 17, color: '#fff', margin: '0 0 8px' }}>{step.title}</h3>
                <p style={{ fontSize: 14.5, color: '#aeb8d0', margin: 0, lineHeight: 1.55 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ borderTop: '1px solid #edeff5', background: '#f7f8fb' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 32px' }}>
          <div className="grid-sidebar">
            <div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>OUTCOMES</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(24px,2.6vw,30px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#15213f', margin: 0 }}>What an engagement delivers</h2>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 14 }}>
              {dept.outcomes.map((outcome) => (
                <li key={outcome} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: '#fff', border: '1px solid #e8ebf2', borderRadius: 8, padding: '18px 20px' }}>
                  <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: '50%', background: 'rgba(200,16,46,0.08)', color: '#C8102E', marginTop: 1 }}>
                    <FiCheck size={15} />
                  </span>
                  <span style={{ fontSize: 15, color: '#3c465d', lineHeight: 1.5 }}>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ borderTop: '1px solid #edeff5' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,80px) 32px' }}>
          <div className="grid-sidebar">
            <div className="sticky-col" style={{ position: 'sticky', top: 100 }}>
              <div className="font-display" style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 14 }}>FAQ</div>
              <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(26px,3vw,34px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 14px' }}>{dept.name} questions, answered.</h2>
              <p style={{ fontSize: 15.5, color: '#5b6479', margin: '0 0 20px' }}>Can&apos;t find what you&apos;re looking for? We&apos;re happy to talk through your specific requirement.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14.5, fontWeight: 700, color: '#C8102E', textDecoration: 'none' }}>
                Ask a question <FiArrowUpRight size={16} />
              </Link>
            </div>
            <Faq items={dept.faqs} />
          </div>
        </div>
      </section>

      {/* Other divisions */}
      <section style={{ borderTop: '1px solid #edeff5', background: '#f7f8fb' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,72px) 32px' }}>
          <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(20px,2.2vw,26px)', letterSpacing: '-0.02em', color: '#15213f', margin: '0 0 26px' }}>Explore other divisions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 16 }}>
            {others.map((other) => (
              <HoverCard key={other.slug} baseStyle={{ ...cardBase, padding: 0, overflow: 'hidden' }} hoverStyle={cardHover}>
                <Link href={`/services/${other.slug}`} style={{ display: 'block', padding: '26px 24px', textDecoration: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 12, background: 'linear-gradient(135deg, #1f2c4a 0%, #15213f 100%)', color: '#fff' }}>
                      <other.Icon size={21} />
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '50%', color: '#C8102E' }}>
                      <FiArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="font-display" style={{ fontWeight: 800, fontSize: 12, letterSpacing: '0.1em', color: '#C8102E', marginBottom: 6 }}>{other.index} / {other.eyebrow.toUpperCase()}</div>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 18, color: '#15213f', margin: '0 0 8px' }}>{other.title}</h3>
                  <p style={{ fontSize: 14.5, color: '#5b6479', margin: 0, lineHeight: 1.5 }}>{other.summary}</p>
                </Link>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#15213f', color: '#fff' }}>
        <Grain opacity={0.07} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,6vw,88px) 32px' }}>
          <div className="cta-row">
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, maxWidth: 560 }}>
              Have a {dept.name.toLowerCase()} requirement? Let&apos;s scope it.
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
