'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

export type FaqItem = { q: string; a: string }

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} style={{ border: `1px solid ${isOpen ? '#c7cddc' : '#e8ebf2'}`, borderRadius: 10, background: '#fff', overflow: 'hidden', transition: 'border-color .2s ease, box-shadow .2s ease', boxShadow: isOpen ? '0 14px 32px -24px rgba(14,24,48,0.4)' : 'none' }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '20px 22px', fontFamily: 'var(--font-hanken), sans-serif' }}
            >
              <span className="font-display" style={{ fontWeight: 700, fontSize: 16.5, color: '#15213f', lineHeight: 1.35 }}>{item.q}</span>
              <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, borderRadius: '50%', background: isOpen ? '#C8102E' : 'rgba(200,16,46,0.08)', color: isOpen ? '#fff' : '#C8102E', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .25s ease, background .25s ease, color .25s ease' }}>
                <FiPlus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ margin: 0, padding: '0 22px 22px', fontSize: 15, color: '#5b6479', lineHeight: 1.65, maxWidth: 760 }}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
