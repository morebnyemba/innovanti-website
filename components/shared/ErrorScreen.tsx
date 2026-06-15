import type { CSSProperties, ReactNode } from 'react'
import Grain from './Grain'

interface Props {
  code: string
  tag: string
  title: string
  message: string
  actions: ReactNode
}

export const errorPrimaryBtn: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 10, background: '#C8102E', color: '#fff',
  border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15,
  fontWeight: 600, padding: '16px 30px', borderRadius: 6, textDecoration: 'none',
}

export const errorSecondaryBtn: CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', color: '#fff',
  border: '1px solid rgba(255,255,255,0.22)', cursor: 'pointer', fontFamily: 'var(--font-hanken), sans-serif',
  fontSize: 15, fontWeight: 600, padding: '16px 30px', borderRadius: 6, textDecoration: 'none',
}

export default function ErrorScreen({ code, tag, title, message, actions }: Props) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0a1324', color: '#fff', minHeight: '78vh', display: 'flex', alignItems: 'center' }}>
      {/* Gradient */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(820px 460px at 84% 0%, rgba(46,78,150,0.5), transparent 62%), radial-gradient(620px 440px at 0% 100%, rgba(200,16,46,0.18), transparent 62%), linear-gradient(180deg, #0b1426, #0a1324)', pointerEvents: 'none' }} />
      {/* Grid pattern */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', WebkitMaskImage: 'radial-gradient(circle at 70% 30%, #000, transparent 72%)', maskImage: 'radial-gradient(circle at 70% 30%, #000, transparent 72%)', pointerEvents: 'none' }} />
      <Grain />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(96px,12vw,160px) 32px clamp(72px,9vw,120px)', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#ff7f8d', marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: '#C8102E', display: 'block' }} />
          {tag}
        </div>
        <div className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(72px,16vw,180px)', lineHeight: 0.9, letterSpacing: '-0.04em', margin: '0 0 8px', background: 'linear-gradient(100deg, #ff7f8d 0%, #C8102E 60%, #ff9aa6 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#ff7f8d' }}>
          {code}
        </div>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(28px,4vw,46px)', lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff', margin: '0 0 18px', maxWidth: 640 }}>
          {title}
        </h1>
        <p style={{ fontSize: 'clamp(16px,1.3vw,18px)', color: '#aeb8d0', margin: '0 0 36px', maxWidth: 540, lineHeight: 1.6 }}>
          {message}
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {actions}
        </div>
      </div>
    </section>
  )
}
