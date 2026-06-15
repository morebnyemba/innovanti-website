'use client'

import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed', right: 'clamp(16px,3vw,28px)', bottom: 'clamp(16px,3vw,28px)', zIndex: 60,
        width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)',
        background: '#15213f', color: '#fff', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 16px 32px -14px rgba(14,24,48,0.6)',
        opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity .3s ease, transform .3s ease, background .2s ease',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#C8102E' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#15213f' }}
    >
      <FiArrowUp size={20} />
    </button>
  )
}
