import type { Metadata } from 'next'
import Image from 'next/image'
import InnerHero from '@/components/shared/InnerHero'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Innovanti Solutions — Harare, Zimbabwe.',
}

const contactItems = [
  { label: 'Visit', value: 'No. 42 Tigere Mansions,\nCorner 6th & Central Avenue,\nHarare, Zimbabwe' },
  { label: 'Call',  value: '0712 538 836' },
  { label: 'Email', value: 'innovantisolutions.co.zw' },
  { label: 'Hours', value: 'Monday – Friday · 08:00 – 17:00' },
]

export default function ContactPage() {
  return (
    <>
      <InnerHero
        tag="Contact"
        title="Let's start a conversation."
        subtitle="Share your requirement and we'll respond with a clear, considered proposal."
      />

      {/* Contact grid */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,7vw,88px) 32px clamp(56px,7vw,96px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(28px,5vw,56px)', alignItems: 'start' }}>
          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {contactItems.map(({ label, value }) => (
              <div key={label} style={{ padding: '24px 0', borderTop: '1px solid #e8ebf2' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#C8102E', marginBottom: 8 }}>{label}</div>
                <p style={{ fontSize: 16, color: '#2a3350', margin: 0, lineHeight: 1.5, whiteSpace: 'pre-line' as const }}>{value}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #e8ebf2' }} />
          </div>

          {/* Form column */}
          <div style={{ background: '#fff', border: '1px solid #e8ebf2', borderRadius: 12, padding: 'clamp(28px,3vw,40px)', boxShadow: '0 1px 2px rgba(17,24,46,0.04)' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Office image */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 32px clamp(56px,7vw,96px)' }}>
        <div style={{ position: 'relative', height: 320, borderRadius: 12, overflow: 'hidden', boxShadow: '0 24px 50px -28px rgba(14,24,48,0.4)' }}>
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=75" alt="Our office" fill style={{ objectFit: 'cover' }} sizes="100vw" />
          <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(14,24,48,0.55), rgba(14,24,48,0.15))' }} />
          <div style={{ position: 'absolute', left: 'clamp(20px,3vw,40px)', bottom: 'clamp(20px,3vw,40px)', background: '#fff', borderRadius: 10, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 18px 40px -18px rgba(14,24,48,0.4)' }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#C8102E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff', display: 'block' }} />
            </div>
            <div>
              <div className="font-display" style={{ fontWeight: 700, fontSize: 15, color: '#15213f' }}>Innovanti Solutions</div>
              <div style={{ fontSize: 13, color: '#7a8398' }}>Tigere Mansions, Harare</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
