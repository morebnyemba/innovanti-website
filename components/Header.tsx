'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMapPin, FiPhone, FiClock, FiX, FiMenu } from 'react-icons/fi'

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Utility bar */}
      <div className="bg-navy text-white/70 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-site mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <FiMapPin className="text-brand-light" size={12} />
            No. 42 Tigere Mansions, Corner 6th &amp; Central Avenue, Harare
          </span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <FiPhone className="text-brand-light" size={12} />
              0712 538 836
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock className="text-brand-light" size={12} />
              Mon–Fri 08:00–17:00
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-navy-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-site mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/innovanti-logo.png"
              alt="Innovanti Solutions"
              width={160}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop pill nav */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full px-2 py-1.5 gap-1 relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 z-10"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-brand rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'text-white/70 hover:text-brand-light'}`}>
                    {link.label}
                  </span>
                </Link>
              )
            })}
          </div>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand/30"
          >
            Request a proposal →
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'bg-brand text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
                >
                  Request a proposal →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
