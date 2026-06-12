'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy-dark text-white/70 text-xs py-0 hidden md:block">
        <div className="max-w-site mx-auto px-8" style={{ minHeight: 42, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', whiteSpace: 'nowrap' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8102E', display: 'block', flexShrink: 0 }} />
            <span style={{ color: '#cdd5e6', fontWeight: 600, letterSpacing: '0.02em' }}>Harare, Zimbabwe</span>
            <span style={{ color: '#46527a' }}>Multi-sector technology &amp; trade</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '7px 0', whiteSpace: 'nowrap' }}>
            <span style={{ color: '#aeb8d0' }}>0712 538 836</span>
            <span style={{ width: 1, height: 13, background: '#25304f', display: 'block' }} />
            <span style={{ color: '#aeb8d0' }}>innovantisolutions.co.zw</span>
            <span style={{ width: 1, height: 13, background: '#25304f', display: 'block' }} />
            <span style={{ color: '#aeb8d0' }}>Mon–Fri · 08:00–17:00</span>
          </div>
        </div>
      </div>

      {/* Main nav — white/light */}
      <nav style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'saturate(160%) blur(14px)', WebkitBackdropFilter: 'saturate(160%) blur(14px)', borderBottom: '1px solid #e9ebf2' }}>
        <div className="max-w-site mx-auto px-8" style={{ height: 78, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <Link href="/" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Image src="/innovanti-logo.png" alt="Innovanti Solutions" width={160} height={40} style={{ height: 40, width: 'auto', display: 'block' }} priority />
          </Link>

          {/* Pill nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 2, background: '#f4f5f9', border: '1px solid #eceef5', borderRadius: 999, padding: 5, position: 'relative' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14.5, fontWeight: 600, padding: '9px 20px', borderRadius: 999, textDecoration: 'none', display: 'block' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="pill"
                      style={{ position: 'absolute', inset: 0, background: '#15213f', borderRadius: 999 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1, color: isActive ? '#fff' : '#39456b' }}>
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex"
            style={{ alignItems: 'center', gap: 9, background: '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14, fontWeight: 600, padding: '12px 22px', borderRadius: 999, letterSpacing: '0.01em', whiteSpace: 'nowrap', textDecoration: 'none', transition: 'background .2s ease' }}
          >
            Request a proposal →
          </Link>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#15213f' }}>
            <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', height: 2, background: '#15213f', borderRadius: 2, width: mobileOpen ? '100%' : '100%' }} />
              <span style={{ display: 'block', height: 2, background: '#15213f', borderRadius: 2 }} />
              <span style={{ display: 'block', height: 2, background: '#15213f', borderRadius: 2, width: '70%' }} />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden', borderTop: '1px solid #e9ebf2' }}
            >
              <div style={{ padding: '12px 16px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                    style={{ padding: '10px 14px', borderRadius: 8, fontSize: 14, fontWeight: 600, color: pathname === link.href ? '#fff' : '#39456b', background: pathname === link.href ? '#15213f' : 'transparent', textDecoration: 'none', display: 'block' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  style={{ marginTop: 6, padding: '12px 14px', borderRadius: 8, fontSize: 14, fontWeight: 600, color: '#fff', background: '#C8102E', textDecoration: 'none', textAlign: 'center', display: 'block' }}
                >
                  Request a proposal →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
