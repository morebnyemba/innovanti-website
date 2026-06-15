'use client'

import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const HREF =
  'https://wa.me/263712538836?text=' +
  encodeURIComponent("Hi Innovanti Solutions, I'd like to enquire about your services.")

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false)

  // Defer mount so it animates in after first paint.
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setReady(true), 400)
    return () => clearTimeout(id)
  }, [])

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed', left: 'clamp(16px,3vw,28px)', bottom: 'clamp(16px,3vw,28px)', zIndex: 60,
        display: 'flex', alignItems: 'center', gap: 10,
        height: 52, padding: hover ? '0 20px 0 15px' : 0, width: hover ? 'auto' : 52,
        borderRadius: 999, background: '#25D366', color: '#fff', textDecoration: 'none',
        boxShadow: '0 16px 34px -12px rgba(37,211,102,0.6)', overflow: 'hidden',
        justifyContent: hover ? 'flex-start' : 'center',
        opacity: ready ? 1 : 0, transform: ready ? 'translateY(0)' : 'translateY(14px)',
        transition: 'opacity .4s ease, transform .4s ease, width .25s ease, padding .25s ease',
      }}
    >
      <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52 }}>
        <FaWhatsapp size={26} />
      </span>
      <span style={{ whiteSpace: 'nowrap', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 14.5, fontWeight: 600, opacity: hover ? 1 : 0, transition: 'opacity .2s ease', maxWidth: hover ? 200 : 0 }}>
        Chat with us
      </span>
    </a>
  )
}
