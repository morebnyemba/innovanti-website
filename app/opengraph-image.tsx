import { ImageResponse } from 'next/og'

export const alt = 'Innovanti Solutions — IT, Cybersecurity, Procurement & Trade'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Pre-render the OG image at build time so it works with `output: export`.
export const dynamic = 'force-static'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'radial-gradient(900px 520px at 82% 0%, rgba(46,78,150,0.55), transparent 60%), radial-gradient(700px 500px at 0% 100%, rgba(200,16,46,0.28), transparent 62%), linear-gradient(180deg, #0b1426, #0a1324)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 30, height: 6, borderRadius: 3, background: '#C8102E' }} />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 6, color: '#cdd5e6' }}>
            INNOVANTI SOLUTIONS
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: '#fff' }}>
            Innovating technology.
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: '#fff' }}>
            Connecting markets.
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, color: '#ff8a97' }}>
            Delivering value.
          </div>
        </div>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 26, fontWeight: 600, color: '#9aa6c4' }}>
            IT · Cybersecurity · Procurement · Trade
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: '#ff8a97' }}>
            innovantisolutions.co.zw
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
