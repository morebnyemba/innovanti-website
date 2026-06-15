'use client'

import { useState, ReactNode } from 'react'

interface Props {
  baseStyle: React.CSSProperties
  hoverStyle: React.CSSProperties
  children: ReactNode
  /** Cursor-follow glow inside the card. On by default. */
  spotlight?: boolean
}

export default function HoverCard({ baseStyle, hoverStyle, children, spotlight = true }: Props) {
  const [hovered, setHovered] = useState(false)
  const [pos, setPos] = useState({ x: -300, y: -300 })

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={
        spotlight
          ? (e) => {
              const r = e.currentTarget.getBoundingClientRect()
              setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
            }
          : undefined
      }
      style={{ ...baseStyle, ...(hovered ? hoverStyle : {}), position: 'relative', overflow: 'hidden' }}
    >
      {spotlight && (
        <span
          aria-hidden
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            opacity: hovered ? 1 : 0, transition: 'opacity .3s ease',
            background: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, rgba(200,16,46,0.07), transparent 72%)`,
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}
