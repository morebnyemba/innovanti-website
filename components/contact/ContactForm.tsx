'use client'

import { useState, FormEvent } from 'react'
import { FiSend, FiCheckCircle } from 'react-icons/fi'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <FiCheckCircle className="text-brand" size={48} />
        <h3 className="font-display text-2xl font-bold text-navy">Message received!</h3>
        <p className="text-navy/60 max-w-sm">
          Thank you for reaching out. Our team will respond within one business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-4 text-brand text-sm font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">Full name *</label>
          <input
            type="text"
            required
            placeholder="John Moyo"
            className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-navy placeholder-navy/35 text-sm transition-colors"
          />
        </div>
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">Email address *</label>
          <input
            type="email"
            required
            placeholder="john@company.co.zw"
            className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-navy placeholder-navy/35 text-sm transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">Company</label>
          <input
            type="text"
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-navy placeholder-navy/35 text-sm transition-colors"
          />
        </div>
        <div>
          <label className="block text-navy text-sm font-medium mb-1.5">Service of interest</label>
          <select className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-navy text-sm transition-colors">
            <option value="">Select a service</option>
            <option>IT Consulting</option>
            <option>Network Infrastructure</option>
            <option>Cybersecurity</option>
            <option>Strategic Sourcing</option>
            <option>Logistics & Trade</option>
            <option>Commodity Trading</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-navy text-sm font-medium mb-1.5">Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your project or requirement..."
          className="w-full px-4 py-3 rounded-xl border border-navy/15 bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand text-navy placeholder-navy/35 text-sm transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand/30"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <FiSend size={16} />
            Send message
          </>
        )}
      </button>
    </form>
  )
}
