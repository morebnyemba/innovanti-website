'use client'

import Link from 'next/link'
import { FiMapPin, FiPhone, FiGlobe, FiClock, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { label: 'Technology & Cybersecurity', href: '/services/technology' },
  { label: 'Procurement & Supply Chain', href: '/services/procurement' },
  { label: 'Trading & Brokerage', href: '/services/trading' },
  { label: 'All Services', href: '/services' },
]

// Thin white light beams that race horizontally across the footer
const raceLines = [
  { top: '13%', width: '24%', height: 1, duration: 5.5, delay: 0 },
  { top: '29%', width: '16%', height: 1, duration: 4.2, delay: 1.4 },
  { top: '46%', width: '32%', height: 2, duration: 6.8, delay: 0.6 },
  { top: '62%', width: '18%', height: 1, duration: 4.8, delay: 2.3 },
  { top: '77%', width: '26%', height: 1, duration: 6.0, delay: 1.0 },
  { top: '90%', width: '14%', height: 2, duration: 3.9, delay: 2.9 },
]

const contactItems = [
  { Icon: FiMapPin, text: 'No. 42 Tigere Mansions, Cnr 6th & Central Ave, Harare', href: undefined },
  { Icon: FiPhone, text: '0712 538 836', href: 'tel:+263712538836' },
  { Icon: FiGlobe, text: 'innovantisolutions.co.zw', href: 'https://innovantisolutions.co.zw' },
  { Icon: FiClock, text: 'Mon–Fri · 08:00–17:00', href: undefined },
]

const socials = [
  { Icon: FiLinkedin, label: 'LinkedIn', href: '#' },
  { Icon: FiTwitter, label: 'X', href: '#' },
  { Icon: FiFacebook, label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #0e1830 0%, #0a1324 100%)', color: '#c2cbde' }}>
      {/* top accent line */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #C8102E 35%, #ff7f8d 50%, #C8102E 65%, transparent)' }} />
      {/* subtle glow */}
      <div aria-hidden style={{ position: 'absolute', top: -120, right: '6%', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(70,110,200,0.14), transparent 65%)', pointerEvents: 'none' }} />
      {/* racing white light lines */}
      <div aria-hidden className="footer-races">
        {raceLines.map((line, i) => (
          <span key={i} className="footer-race-line" style={{ top: line.top, width: line.width, height: line.height, animationDuration: `${line.duration}s`, animationDelay: `${line.delay}s` }} />
        ))}
      </div>

      {/* Main */}
      <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,72px) 32px 36px' }}>
        <div className="grid-footer">
          {/* Brand */}
          <div>
            <div className="font-display" style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', color: '#fff', marginBottom: 14 }}>
              Innovanti<span style={{ color: '#ff6b7a' }}> Solutions</span>
            </div>
            <p style={{ fontSize: 14.5, color: '#8b97b3', margin: '0 0 20px', maxWidth: 280, lineHeight: 1.6 }}>
              Innovating technology. Connecting markets. Delivering value.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(({ Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, color: '#aeb8d0', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', transition: 'color .2s ease, background .2s ease, border-color .2s ease, transform .2s ease' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = '#fff'; el.style.background = '#C8102E'; el.style.borderColor = '#C8102E'; el.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = '#aeb8d0'; el.style.background = 'rgba(255,255,255,0.04)'; el.style.borderColor = 'rgba(255,255,255,0.10)'; el.style.transform = 'none' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6f7c9c', marginBottom: 18 }}>Explore</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              {exploreLinks.map(link => (
                <Link key={link.href} href={link.href} style={{ fontSize: 14.5, color: '#c2cbde', textDecoration: 'none', transition: 'color .2s ease, padding-left .2s ease', display: 'inline-flex', alignItems: 'center', gap: 7 }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = '#fff'; el.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = '#c2cbde'; el.style.paddingLeft = '0' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6f7c9c', marginBottom: 18 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              {serviceLinks.map(s => (
                <Link key={s.href} href={s.href} style={{ fontSize: 14.5, color: '#c2cbde', textDecoration: 'none', transition: 'color .2s ease, padding-left .2s ease' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = '#fff'; el.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = '#c2cbde'; el.style.paddingLeft = '0' }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6f7c9c', marginBottom: 18 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {contactItems.map(({ Icon, text, href }) => {
                const inner = (
                  <>
                    <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: 8, color: '#ff7f8d', background: 'rgba(255,127,141,0.08)', border: '1px solid rgba(255,127,141,0.16)', marginTop: 1 }}>
                      <Icon size={14} />
                    </span>
                    <span style={{ fontSize: 14, color: '#aeb8d0', lineHeight: 1.5 }}>{text}</span>
                  </>
                )
                return href ? (
                  <a key={text} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 11, textDecoration: 'none', transition: 'opacity .2s ease' }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.78'}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                  >{inner}</a>
                ) : (
                  <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>{inner}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 13, color: '#5b6a89', margin: 0 }}>
            © {new Date().getFullYear()} Innovanti Solutions. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: '#5b6a89', margin: 0 }}>
            Website by{' '}
            <a href="https://slykertech.net" target="_blank" rel="noopener noreferrer"
              style={{ color: '#aeb8d0', fontWeight: 600, textDecoration: 'none', transition: 'color .2s ease' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#ff7f8d'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#aeb8d0'}
            >
              Slyker Tech Web Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
