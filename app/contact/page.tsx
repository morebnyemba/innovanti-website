import type { Metadata } from 'next'
import InnerHero from '@/components/shared/InnerHero'
import ContactForm from '@/components/contact/ContactForm'
import OfficeStatus from '@/components/contact/OfficeStatus'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Innovanti Solutions — Harare, Zimbabwe.',
}

const contactItems: { label: string; value: string; href?: string }[] = [
  { label: 'Visit', value: 'No. 42 Tigere Mansions,\nCorner 6th & Central Avenue,\nHarare, Zimbabwe' },
  { label: 'Call',  value: '+263 712 538 836', href: 'tel:+263712538836' },
  { label: 'Email', value: 'info@innovantisolutions.co.zw', href: 'mailto:info@innovantisolutions.co.zw' },
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
        <div className="grid-contact">
          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {contactItems.map(({ label, value, href }) => (
              <div key={label} style={{ padding: '24px 0', borderTop: '1px solid #e8ebf2' }}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#C8102E', marginBottom: 8 }}>{label}</div>
                {href ? (
                  <a href={href} className="contact-link" style={{ fontSize: 16, margin: 0, lineHeight: 1.5, display: 'inline-block' }}>{value}</a>
                ) : (
                  <p style={{ fontSize: 16, color: '#2a3350', margin: 0, lineHeight: 1.5, whiteSpace: 'pre-line' as const }}>{value}</p>
                )}
                {label === 'Hours' && <OfficeStatus />}
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

      {/* Office map */}
      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 32px clamp(56px,7vw,96px)' }}>
        <div style={{ position: 'relative', height: 'clamp(320px,42vw,440px)', borderRadius: 12, overflow: 'hidden', boxShadow: '0 24px 50px -28px rgba(14,24,48,0.4)', border: '1px solid #e8ebf2' }}>
          <iframe
            title="Innovanti Solutions office location"
            src="https://www.google.com/maps?q=Tigere%20Mansions%2C%20Central%20Avenue%2C%20Harare%2C%20Zimbabwe&z=15&output=embed"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div style={{ position: 'absolute', left: 'clamp(20px,3vw,40px)', bottom: 'clamp(20px,3vw,40px)', background: '#fff', borderRadius: 10, padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 18px 40px -18px rgba(14,24,48,0.4)', pointerEvents: 'none' }}>
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
