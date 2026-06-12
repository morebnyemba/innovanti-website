'use client'

import { useState, FormEvent } from 'react'

const inputStyle = { width: '100%', boxSizing: 'border-box' as const, border: '1px solid #d8dce7', borderRadius: 6, padding: '12px 14px', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15, color: '#11182e', outline: 'none', transition: 'border-color .2s ease, box-shadow .2s ease' }
const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#2a3350', marginBottom: 7 }

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 12px' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#15213f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 20px' }}>✓</div>
        <h3 className="font-display" style={{ fontWeight: 700, fontSize: 24, color: '#15213f', margin: '0 0 10px' }}>Thank you.</h3>
        <p style={{ fontSize: 16, color: '#5b6479', margin: 0 }}>Your enquiry has been received. Our team will be in touch shortly.</p>
        <button onClick={() => setSent(false)} style={{ marginTop: 20, background: 'none', border: 'none', cursor: 'pointer', color: '#C8102E', fontSize: 14, fontWeight: 600 }}>Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid-2col-even" style={{ marginBottom: 16 }}>
        <div>
          <label style={labelStyle}>Full name</label>
          <input required placeholder="Jane Moyo" style={inputStyle}
            onFocus={e => { e.target.style.borderColor = '#15213f'; e.target.style.boxShadow = '0 0 0 3px rgba(21,33,63,0.12)' }}
            onBlur={e => { e.target.style.borderColor = '#d8dce7'; e.target.style.boxShadow = 'none' }}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input required type="email" placeholder="jane@company.co.zw" style={inputStyle}
            onFocus={e => { e.target.style.borderColor = '#15213f'; e.target.style.boxShadow = '0 0 0 3px rgba(21,33,63,0.12)' }}
            onBlur={e => { e.target.style.borderColor = '#d8dce7'; e.target.style.boxShadow = 'none' }}
          />
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>Organisation</label>
        <input placeholder="Company or institution" style={inputStyle}
          onFocus={e => { e.target.style.borderColor = '#15213f'; e.target.style.boxShadow = '0 0 0 3px rgba(21,33,63,0.12)' }}
          onBlur={e => { e.target.style.borderColor = '#d8dce7'; e.target.style.boxShadow = 'none' }}
        />
      </div>
      <div style={{ marginBottom: 22 }}>
        <label style={labelStyle}>How can we help?</label>
        <textarea required rows={4} placeholder="Tell us about your requirement…"
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={e => { e.target.style.borderColor = '#15213f'; e.target.style.boxShadow = '0 0 0 3px rgba(21,33,63,0.12)' }}
          onBlur={e => { e.target.style.borderColor = '#d8dce7'; e.target.style.boxShadow = 'none' }}
        />
      </div>
      <button type="submit" disabled={loading}
        style={{ width: '100%', background: '#C8102E', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-hanken), sans-serif', fontSize: 15.5, fontWeight: 600, padding: 15, borderRadius: 6, transition: 'background .2s ease', opacity: loading ? 0.7 : 1 }}
        onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.background = '#a50d26' }}
        onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = '#C8102E'}
      >
        {loading ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}
