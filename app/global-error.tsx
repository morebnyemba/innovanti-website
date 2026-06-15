'use client'

// Catches errors thrown in the root layout itself. It replaces the whole
// document, so it cannot rely on fonts/globals and must render its own <html>.
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', background: '#0a1324', color: '#fff' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff7f8d', marginBottom: 18 }}>
            Critical error
          </div>
          <div style={{ fontWeight: 800, fontSize: 'clamp(64px,14vw,140px)', lineHeight: 0.9, letterSpacing: '-0.04em', color: '#C8102E', margin: '0 0 12px' }}>
            500
          </div>
          <h1 style={{ fontWeight: 800, fontSize: 'clamp(24px,4vw,38px)', letterSpacing: '-0.02em', margin: '0 0 14px' }}>
            Something went seriously wrong.
          </h1>
          <p style={{ fontSize: 16, color: '#aeb8d0', margin: '0 0 32px', maxWidth: 460, lineHeight: 1.6 }}>
            The application hit an unexpected error. Please try reloading the page.
          </p>
          <button
            onClick={() => reset()}
            style={{ background: '#C8102E', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600, padding: '15px 30px', borderRadius: 6 }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  )
}
