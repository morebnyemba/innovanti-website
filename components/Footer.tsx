'use client'

import Link from 'next/link'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = ['IT & Cybersecurity', 'Network Solutions', 'Procurement', 'Trading & Brokerage']

export default function Footer() {
  return (
    <footer style={{ background: '#0e1830', color: '#c2cbde' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(56px,6vw,80px) 32px 32px' }}>
        <div className="grid-footer">
          {/* Brand */}
          <div>
            <div className="font-display" style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: '#fff', marginBottom: 14 }}>
              Innovanti<span style={{ color: '#ff6b7a' }}> Solutions</span>
            </div>
            <p style={{ fontSize: 14.5, color: '#8b97b3', margin: '0 0 18px', maxWidth: 280 }}>
              Innovating technology. Connecting markets. Delivering value.
            </p>
            <div style={{ fontSize: 13, color: '#6f7c9c' }}>Harare, Zimbabwe</div>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#6f7c9c', marginBottom: 16 }}>Explore</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, alignItems: 'flex-start' }}>
              {exploreLinks.map(link => (
                <Link key={link.href} href={link.href} style={{ fontSize: 14.5, color: '#c2cbde', textDecoration: 'none', transition: 'color .2s ease' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#c2cbde'}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#6f7c9c', marginBottom: 16 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14.5, color: '#c2cbde' }}>
              {serviceLinks.map(s => <span key={s}>{s}</span>)}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#6f7c9c', marginBottom: 16 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14.5, color: '#c2cbde' }}>
              <span>No. 42 Tigere Mansions, Harare</span>
              <span>0712 538 836</span>
              <span>innovantisolutions.co.zw</span>
              <span>Mon–Fri · 08:00–17:00</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 8 }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <p style={{ fontSize: 13, color: '#4f5e7a', margin: 0 }}>
            © {new Date().getFullYear()} Innovanti Solutions. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: '#4f5e7a', margin: 0 }}>Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  )
}
