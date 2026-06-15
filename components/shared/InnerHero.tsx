import Grain from './Grain'

interface Props {
  tag: string
  title: string
  subtitle: string
}

export default function InnerHero({ tag, title, subtitle }: Props) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: '#0a1324', color: '#fff', paddingTop: 120 }}>
      {/* Gradient */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(820px 460px at 84% 0%, rgba(46,78,150,0.5), transparent 62%), radial-gradient(620px 440px at 0% 100%, rgba(200,16,46,0.18), transparent 62%), linear-gradient(180deg, #0b1426, #0a1324)', pointerEvents: 'none' }} />
      {/* Grid pattern */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px', WebkitMaskImage: 'radial-gradient(circle at 86% 22%, #000, transparent 72%)', maskImage: 'radial-gradient(circle at 86% 22%, #000, transparent 72%)', pointerEvents: 'none' }} />
      <Grain opacity={0.05} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1180, margin: '0 auto', padding: 'clamp(60px,8vw,104px) 32px clamp(48px,6vw,76px)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#ff7f8d', marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: '#C8102E', display: 'block' }} />
          {tag}
        </div>
        <h1 className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(36px,5vw,60px)', lineHeight: 1.03, letterSpacing: '-0.028em', color: '#fff', margin: '0 0 20px', maxWidth: 800 }}>
          {title}
        </h1>
        <p style={{ fontSize: 'clamp(16px,1.3vw,18.5px)', color: '#aeb8d0', margin: 0, maxWidth: 620, lineHeight: 1.6 }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}
