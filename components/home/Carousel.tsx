'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const slides = [
  { image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=75', tag: 'IT & Infrastructure',         title: 'Resilient infrastructure, engineered to perform.', body: 'Networks, servers and managed services built for uptime and security.' },
  { image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=75', tag: 'Cybersecurity',                 title: 'Security that protects data and people.',         body: 'Assessments, endpoint protection and awareness training, end to end.' },
  { image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=75', tag: 'Procurement & Supply Chain', title: 'Strategic sourcing, delivered to your door.',     body: 'Quality products at competitive prices, with logistics handled.' },
  { image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=75', tag: 'Trading & Brokerage',        title: 'Connecting markets with confidence.',             body: 'Commodity brokerage and general trade across the value chain.' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * 100}%)`
    }
  }, [current])

  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(64px,8vw,108px) 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 36, flexWrap: 'wrap' as const }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#C8102E', marginBottom: 16 }}>Where we deliver</div>
            <h2 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: '#11182e', margin: 0 }}>Capability in the field.</h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={prev} aria-label="Previous"
              style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #d8dce7', background: '#fff', color: '#15213f', cursor: 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s ease, color .2s ease, border-color .2s ease' }}
              onMouseEnter={e => { const b = e.currentTarget; b.style.background = '#15213f'; b.style.color = '#fff'; b.style.borderColor = '#15213f' }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background = '#fff'; b.style.color = '#15213f'; b.style.borderColor = '#d8dce7' }}
            >←</button>
            <button onClick={next} aria-label="Next"
              style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid #d8dce7', background: '#fff', color: '#15213f', cursor: 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s ease, color .2s ease, border-color .2s ease' }}
              onMouseEnter={e => { const b = e.currentTarget; b.style.background = '#15213f'; b.style.color = '#fff'; b.style.borderColor = '#15213f' }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background = '#fff'; b.style.color = '#15213f'; b.style.borderColor = '#d8dce7' }}
            >→</button>
          </div>
        </div>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', background: '#0e1830' }}>
          <div ref={trackRef} style={{ display: 'flex', transition: 'transform .7s cubic-bezier(.45,0,.15,1)', willChange: 'transform' }}>
            {slides.map((slide, i) => (
              <div key={i} style={{ flex: '0 0 100%', position: 'relative', aspectRatio: '16 / 7', overflow: 'hidden' }}>
                <Image src={slide.image} alt={slide.title} fill style={{ objectFit: 'cover' }} sizes="100vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(14,24,48,0.85) 0%, rgba(14,24,48,0.4) 55%, rgba(14,24,48,0.1) 100%)' }} />
                <div style={{ position: 'absolute', left: 'clamp(24px,4vw,56px)', bottom: 'clamp(24px,4vw,52px)', right: 24, maxWidth: 520 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: '#ff7f8d', marginBottom: 12 }}>{slide.tag}</div>
                  <h3 className="font-display" style={{ fontWeight: 700, fontSize: 'clamp(22px,2.8vw,34px)', lineHeight: 1.1, color: '#fff', margin: '0 0 10px' }}>{slide.title}</h3>
                  <p style={{ fontSize: 15.5, color: '#c9d2e4', margin: 0 }}>{slide.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 10, marginTop: 24, alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
              style={{ height: 8, border: 'none', padding: 0, cursor: 'pointer', background: 'none', display: 'flex', alignItems: 'center' }}>
              <span style={{ display: 'block', height: 8, width: i === current ? 28 : 8, borderRadius: 4, background: i === current ? '#C8102E' : '#cdd3e0', transition: 'width .3s ease, background .3s ease' }} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
